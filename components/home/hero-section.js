"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroSlides = [
  {
    title: "الريادة في صناعة الأعلاف",
    subtitle: "شريكك الموثوق للنجاح",
    description: "طاقة إنتاجية تصل إلى 120 طن في الساعة بأحدث التقنيات العالمية",
    image: "/industrial-feed-manufacturing-factory-aerial-view.jpg",
  },
  {
    title: "جودة عالمية المعايير",
    subtitle: "التزام راسخ بالتميز",
    description: "منتجات مصممة وفق أعلى المواصفات الدولية لتحقيق أفضل النتائج",
    image: "/modern-feed-production-line-machinery.jpg",
  },
  {
    title: "حلول غذائية متكاملة",
    subtitle: "للدواجن والماشية",
    description: "تركيبات علمية متوازنة تدعم النمو وترفع الإنتاجية",
    image: "/poultry-farm-with-healthy-chickens.jpg",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-foreground">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="container relative mx-auto flex min-h-[90vh] items-center px-4 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-2 text-sm text-primary-foreground backdrop-blur-sm">
            منذ 2022 - خميس مشيط، المملكة العربية السعودية
          </div>

          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none absolute translate-y-8 opacity-0"
              }`}
            >
              <p className="mb-2 text-lg font-medium text-secondary">{slide.subtitle}</p>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl text-balance">
                {slide.title}
              </h1>
              <p className="mb-8 max-w-xl text-lg text-gray-300 leading-relaxed">{slide.description}</p>
            </div>
          ))}

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="group bg-takar">
              <Link href="/products">
                استكشف منتجاتنا
                <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              <Link href="/about">
                <Play className="ml-2 h-5 w-5" />
                تعرف علينا
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/50"
            }`}
            aria-label={`الانتقال للشريحة ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
