import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Home, ArrowRight, Phone, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col dark:bg-[#64312C]">
   
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
                  لوحة التحكم 
                </Link>
              </Button>
             
            </div>

          
          </div>
        </div>
      </main>
    
    </div>
  )
}
