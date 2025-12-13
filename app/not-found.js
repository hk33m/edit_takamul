import Link from "next/link"
import  Navbar  from "@/components/home/navbar"
import  Footer  from "@/components/home/footer"
import { Button } from "@/components/ui/button"
import { Home, ArrowRight, Phone, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center">
        <div className="container mx-auto px-4 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* Animated 404 */}
            <div className="relative mb-8">
              <div className="text-[12rem] font-black leading-none text-primary/10 lg:text-[16rem]">404</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-2xl bg-primary/10 p-6 backdrop-blur-sm">
                  <Search className="h-16 w-16 text-primary lg:h-20 lg:w-20" />
                </div>
              </div>
            </div>

            {/* Content */}
            <h1 className="mb-4 text-3xl font-bold lg:text-4xl">الصفحة غير موجودة</h1>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى عنوان آخر.
              <br />
              يمكنك العودة للصفحة الرئيسية أو التواصل معنا للمساعدة.
            </p>

            {/* Actions */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="min-w-[180px] bg-takar">
                <Link href="/">
                  <Home className="ml-2 h-5 w-5" />
                  الصفحة الرئيسية
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[180px] bg-transparent">
                <Link href="/contact">
                  <Phone className="ml-2 h-5 w-5" />
                  تواصل معنا
                </Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="mt-12 rounded-2xl bg-muted/50 p-6">
              <h2 className="mb-4 font-semibold">روابط قد تساعدك</h2>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {[
                  { name: "منتجاتنا", href: "/products" },
                  { name: "من نحن", href: "/about" },
                  { name: "الجودة", href: "/quality" },
                  { name: "الأخبار", href: "/news" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-1 rounded-lg bg-background px-4 py-2 text-sm font-medium shadow-sm transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    {link.name}
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
