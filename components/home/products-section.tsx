import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: "breeder",
    title: "أعلاف الأمهات",
    titleEn: "Breeder Feed",
    description: "مصممة لدعم الخصوبة وتحسين صحة القطيع، بما يضمن إنتاج كتاكيت قوية وعالية الجودة.",
    image: "/breeder-chicken-feed-pellets.jpg",
    badge: "عالي الجودة",
  },
  {
    id: "layer",
    title: "أعلاف البياض",
    titleEn: "Layer Feed",
    description: "تدعم زيادة إنتاج البيض وتحافظ على جودته وقيمته الغذائية العالية.",
    image: "/layer-chicken-feed-with-eggs.jpg",
    badge: "الأكثر مبيعاً",
  },
  {
    id: "broiler",
    title: "أعلاف اللاحم",
    titleEn: "Broiler Feed",
    description: "تركيبات غنية ومتوازنة تساهم في تحقيق نمو سريع ووزن مثالي خلال فترة التسمين.",
    image: "/broiler-chicken-feed-grains.jpg",
    badge: "نمو سريع",
  },
  {
    id: "cattle",
    title: "أعلاف الماشية",
    titleEn: "Cattle Feed",
    description: "توفر تغذية متوازنة تضمن صحة أفضل وإنتاجية مستدامة في اللحوم أو الألبان.",
    image: "/cattle-livestock-feed-pellets.jpg",
    badge: "تغذية متكاملة",
  },
]

export function ProductsSection() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-sm font-semibold text-takar">منتجاتنا</span>
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-taka">حلول غذائية متخصصة</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            نقدم منتجات متنوعة ومتخصصة تلبي مختلف احتياجات المربين والمزارع، مصنوعة وفق أحدث التقنيات وأعلى المعايير
            العالمية.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden transition-all hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">{product.badge}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-taka">{product.title}</CardTitle>
                <CardDescription className="text-xs text-takar">{product.titleEn}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                <Link
                  href={`/products?tab=${product.id}`}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  المزيد من التفاصيل
                  <ArrowLeft className="mr-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-takar">
            <Link href="/products">
              عرض جميع المنتجات
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
