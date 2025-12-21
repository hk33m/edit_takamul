"use client";

import { useEffect, useState } from "react";
import  Navbar  from "@/components/home/navbar";
import  Footer  from "@/components/home/footer";
import { FloatingContact } from "@/components/floating-contact"
import { Card, CardContent, CardDescription, CardHeader, CardTitle ,CardFooter} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';



export default function ProductsPage() {

   const [products, setProducts] = useState([])
   const[loading,setLoading]=useState(true);

 useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://cornflowerblue-albatross-308247.hostingersite.com/api/get_products.php"
        );
        if (!res.ok) throw new Error("فشل تحميل البيانات"); // تحقق من حالة HTTP
        const data = await res.json();
        if (data) setProducts(data);
      } catch (err) {
        console.error("حدث خطأ أثناء جلب المنتجات:", err);
        setError(true); // يمكن استخدامه لإظهار رسالة خطأ
      } finally {
        setLoading(false); // سيغلق الـloading مهما حصل
      }
    };

    fetchProducts();
  }, []);

   if (loading) {
  return <div className="dark:bg-[#64312C]">
    <Navbar title={"المنتجات"} color={"bg-green-900"} path={"/"}  />
    <div className=" py-20 p-4  w-full animate-pulse bg-white shadow-sm">
      {/* صورة المنتج */}
      <div className="bg-gray-300 h-48 w-full rounded-md mb-4"></div>

      {/* اسم المنتج */}
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>

      {/* وصف مختصر */}
      <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>

      {/* السعر */}
      <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>

      {/* زر الإضافة للسلة */}
      <div className="h-10 bg-gray-300 rounded w-full"></div>
    </div>
   <Footer />
    </div>
}

if(!products || products == null || products.length===0){
  return <div className="dark:bg-[#64312C]">
        <Navbar title={"المنتجات"} color={"bg-green-900"} path={"/"} />
       <div className="flex flex-col items-center justify-center py-40  p-4 text-center ">
      <h1 className="text-5xl font-extrabold text-taka mb-4"> حصل خطأ في تحميل المنتجات</h1>
      <p className="text-lg text-primary mb-6">
        عذرًا، لم نتمكن من العثور على المنتجات  ربما حدث خطاء في الاتصال بالانترنت أو في جلب البيانات.  
      </p>
      <Link href="/">
        <Button className="bg-takar hover:bg-blue-700  px-6 py-3">
          العودة للرئيسية
        </Button>
      </Link>
     
    </div>
       <Footer />
      </div>
}

  return (
    <div className="flex min-h-screen flex-col dark:bg-[#64312C]">
      <Navbar title={"المنتجات"} color={"bg-green-900"} path={"/"} />
      <main className="flex-1">
        {/* Hero Section */}
        
        {/* Products Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                
                  <Card key={product.id} className="group h-full cursor-pointer overflow-hidden transition-all hover:shadow-xl">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={`https://cornflowerblue-albatross-308247.hostingersite.com/${product.images[0]}` || "/placeholder.svg"}
                        alt={product.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                        {product.badge}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{product.title}</CardTitle>
                      <CardDescription className="text-xs">{product.titleEn}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                    </CardContent>
                    <CardFooter className={"space-x-4"}>
                    <Link key={product.id} href={`/products/${product.id}`}>
                   <Button className={"bg-red-900 text-white "}>تعديل</Button>
                   </Link>
                   <Button className={"bg-green-900 text-white"}>حذف</Button>
                    </CardFooter>


                  </Card>
             
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center lg:px-8">
            <h2 className="mb-4 text-3xl font-bold">هل تحتاج إلى استشارة؟</h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              فريقنا المتخصص جاهز لمساعدتك في اختيار المنتج الأنسب لاحتياجاتك وتقديم الدعم الفني اللازم
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                تواصل مع فريق المبيعات
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
