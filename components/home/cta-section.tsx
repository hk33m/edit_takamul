import Link from "next/link"
import { Phone, Mail, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/modern-feed-factory-industrial.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-primary/90" />

      <div className="container relative mx-auto px-4 text-center lg:px-8">
        <h2 className="mb-4 text-3xl font-bold text-takarr lg:text-4xl text-balance">
          هل أنت مستعد للارتقاء بإنتاجك؟
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90 leading-relaxed">
          تواصل معنا اليوم واكتشف كيف يمكن لحلولنا الغذائية المتكاملة أن تحقق لك ميزة تنافسية حقيقية وتعزز من كفاءة
          مشروعك.
        </p>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" variant="secondary" className="group bg-takarr">
            <Link href="/contact">
              طلب عرض سعر
              <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
          >
            <a href="tel:+966535521385">
              <Phone className="ml-2 h-5 w-5" />
              اتصل بنا الآن
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/80">
          <a
            href="tel:+966535521385"
            className="flex items-center gap-2 transition-colors hover:text-primary-foreground"
          >
            <Phone className="h-5 w-5" />
            <span dir="ltr">+966 53 552 1385</span>
          </a>
          <a
            href="mailto:fahd90352@gmail.com"
            className="flex items-center gap-2 transition-colors hover:text-primary-foreground"
          >
            <Mail className="h-5 w-5" />
            <span>fahd90352@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  )
}
