import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const footerLinks = {
  company: [
    { name: "من نحن", href: "/about" },
    { name: "رؤيتنا", href: "/about#vision" },
    { name: "رسالتنا", href: "/about#mission" },
    { name: "الاستدامة", href: "/sustainability" },
  ],
  products: [
    { name: "أعلاف الأمهات", href: "/products?tab=breeder" },
    { name: "أعلاف البياض", href: "/products?tab=layer" },
    { name: "أعلاف اللاحم", href: "/products?tab=broiler" },
    { name: "أعلاف الماشية", href: "/products?tab=cattle" },
  ],
  support: [
    { name: "تواصل معنا", href: "/contact" },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border">
                <span className="text-lg font-bold "><img src="/512-01.png"></img></span>
              </div>
              <div>
                <p className="font-bold text-taka">مصنع التكامل للأعلاف</p>
                <p className="text-xs text-muted-foreground">Al-Takamol Factory</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              شريكك الموثوق في صناعة أعلاف الدواجن والماشية بأعلى معايير الجودة العالمية.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>خميس مشيط - صمخ - طريق بيشة</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span dir="ltr">+966 53 552 1385</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>fahd90352@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 font-semibold text-taka">الشركة</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="mb-4 font-semibold text-taka">منتجاتنا</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="mb-4 font-semibold text-taka">الدعم</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} مصنع التكامل للأعلاف. جميع الحقوق محفوظة.
          </p>
          <p className="text-sm text-muted-foreground">الرمز البريدي: 62678 - ص.ب: 7651</p>
        </div>
      </div>
    </footer>
  )
}
