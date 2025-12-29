"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import { FloatingContact } from "@/components/floating-contact";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "sonner";
import { useAuthProtection } from "@/lib/auth";

export default function ProductsPage() {
  useAuthProtection();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://lime-quail-363527.hostingersite.com/api/get_products.php"
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

  async function deleteProduct(productId) {
    if (!confirm("هل أنت متأكد من حذف هذا المنتج؟")) return;

    try {
      const response = await fetch(
        "https://lime-quail-363527.hostingersite.com/api/delete_product.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ product_id: productId }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.status === "success") {
        toast.success("  تم حذف المنتج بنجاح");
        setProducts((prev) => prev.filter((p) => p.id !== productId));
      } else {
        toast.error("   فشل حذف المنتج  ");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("  حدث خطأ أثناء حذف المنتج ");
    }
  }

  if (loading) {
    return (
      <div className="dark:bg-[#64312C]">
        <Navbar title={"المنتجات"} color={"bg-green-900"} path={"/"} />
        <div className="flex flex-col space-y-3 p-4">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!products || products == null || products.length === 0) {
    return (
      <div className="dark:bg-[#64312C]">
        <Navbar title={"المنتجات"} color={"bg-green-900"} path={"/"} />
        <div className="flex flex-col items-center justify-center py-40  p-4 text-center ">
          <h1 className="text-5xl font-extrabold text-taka mb-4">
            {" "}
            حصل خطأ في تحميل المنتجات
          </h1>
          <p className="text-lg text-primary mb-6">
            عذرًا، لم نتمكن من العثور على المنتجات ربما حدث خطاء في الاتصال
            بالانترنت أو في جلب البيانات.
          </p>
          <Link href="/">
            <Button className="bg-takar hover:bg-blue-700  px-6 py-3">
              العودة للرئيسية
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
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
                <Card
                  key={product.id}
                  className="group h-full cursor-pointer overflow-hidden transition-all hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={
                        `https://lime-quail-363527.hostingersite.com/${product.images[0]}` ||
                        "/placeholder.svg"
                      }
                      alt={product.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                      {product.badge}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <CardDescription className="text-xs">
                      {product.titleEn}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </CardContent>
                  <CardFooter className={"space-x-4"}>
                    <Link key={product.id} href={`/products/${product.id}`}>
                      <Button className={"bg-green-900 text-white "}>
                        تعديل
                      </Button>
                    </Link>
                    <Button
                      onClick={() => deleteProduct(product.id)}
                      className={"bg-red-900 text-white"}
                    >
                      حذف
                    </Button>
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
              فريقنا المتخصص جاهز لمساعدتك في اختيار المنتج الأنسب لاحتياجاتك
              وتقديم الدعم الفني اللازم
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
