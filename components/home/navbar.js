"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Moon, Sun, Phone } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "الرئيسية", href: "/" },
  { name: "من نحن", href: "/about" },
  { name: "منتجاتنا", href: "/products" },
  { name: "الإنتاج والتقنية", href: "/production" },
  { name: "الجودة", href: "/quality" },
  { name: "عملاؤنا", href: "/clients" },
  { name: "الاستدامة", href: "/sustainability" },
  { name: "الوظائف", href: "/careers" },
  { name: "الأخبار", href: "/news" },
  { name: "تواصل معنا", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo - Right side for RTL */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">ت</span>
          </div>
          <div className=" sm:block">
            <p className="text-sm font-bold text-foreground">مصنع التكامل للأعلاف</p>
            <p className="text-xs text-muted-foreground">Al-Takamol Factory</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.slice(0, 7).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                pathname === item.href ? "bg-muted text-foreground" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                المزيد
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {navigation.slice(7).map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Actions - Left side for RTL */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hidden sm:flex"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">تبديل المظهر</span>
          </Button>

          <Button asChild className="hidden sm:flex">
            <Link href="/contact">
              <Phone className="ml-2 h-4 w-4" />
              تواصل معنا
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">فتح القائمة</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-4 pt-8">
              <SheetHeader>
  <SheetTitle className="sr-only">Menu</SheetTitle>
</SheetHeader>

                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-md px-4 py-3 text-base font-medium transition-colors hover:bg-muted",
                      pathname === item.href ? "bg-muted text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 flex items-center gap-2 border-t pt-4">
                  <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  </Button>
                  <Button asChild className="flex-1">
                    <Link href="/contact">تواصل معنا</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
