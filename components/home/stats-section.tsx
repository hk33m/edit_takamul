"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 120, suffix: "+", label: "طن في الساعة", description: "طاقة إنتاجية" },
  { value: 2022, suffix: "", label: "سنة التأسيس", description: "خبرة متراكمة" },
  { value: 100, suffix: "+", label: "عميل", description: "شركاء نجاح" },
  { value: 4, suffix: "", label: "منتجات رئيسية", description: "حلول متكاملة" },
]

function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [end, duration, start])

  return count
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const counts = stats.map((stat) => useCountUp(stat.value, 2000, isVisible))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-taka py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            return (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary-foreground lg:text-5xl">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <div className="text-lg font-semibold text-primary-foreground/90">{stat.label}</div>
                <div className="text-sm text-primary-foreground/70">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
