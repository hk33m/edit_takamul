import Link from "next/link"
import { ArrowLeft, Factory, Award, Users, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Factory,
    title: "طاقة إنتاجية ضخمة",
    description: "120 طن في الساعة بأحدث خطوط الإنتاج",
  },
  {
    icon: Award,
    title: "معايير عالمية",
    description: "التزام راسخ بأعلى مواصفات الجودة الدولية",
  },
  {
    icon: Users,
    title: "شراكات موثوقة",
    description: "علاقات استراتيجية مع كبرى المزارع والمشاريع",
  },
  {
    icon: Leaf,
    title: "استدامة بيئية",
    description: "حلول صديقة للبيئة تراعي المسؤولية المجتمعية",
  },
]

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <span className="mb-4 inline-block text-sm font-semibold text-takar">نبذة عن المصنع</span>
            <h2 className="mb-6 text-3xl font-bold leading-tight lg:text-4xl text-balance text-taka">
              أحد أعمدة صناعة الأعلاف في المملكة العربية السعودية
            </h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              منذ انطلاقتنا في 15 يوليو 2022، وضعنا في مصنع التكامل للأعلاف بصمتنا كأحد الأعمدة الرئيسية في صناعة أعلاف
              الدواجن والماشية داخل المملكة العربية السعودية وخارجها.
            </p>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              نؤمن أن الأعلاف ليست مجرد منتج، بل هي أساس نجاح قطاع الثروة الحيوانية، لذلك صممنا حلولاً غذائية متكاملة
              ترتقي بمستوى الإنتاج وتمنح المربين والمزارع الكبرى ميزة تنافسية حقيقية.
            </p>
            <Button asChild className="group bg-takar">
              <Link href="/about">
                اقرأ المزيد
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-xl border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-taka">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
