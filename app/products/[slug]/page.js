"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImagePlus } from "lucide-react";
import { toast } from "sonner"
import  Navbar  from "@/components/home/navbar";
import  Footer  from "@/components/home/footer";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import {useAuthProtection} from "@/lib/auth";

export default function EditProduct() {
  useAuthProtection();
  const router = useRouter();
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    title: "",
    titleEn: "",
    description: "",
    fullDescription: "",
    badge: "",
    usage: "",
    benefits: "",
    images: [],       // صور موجودة في السيرفر
    newImages: []     // صور جديدة يتم رفعها
  });

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://cornflowerblue-albatross-308247.hostingersite.com/api/get_products.php?id=${slug}`);
        const data = await res.json();
        if (data) {
          setForm(prev => ({
            ...prev,
            title: data.title,
            titleEn: data.titleEn,
            description: data.description,
            fullDescription: data.fullDescription,
            badge: data.badge,
            usage: data.usage,
            benefits: data.benefits.join("\n"),
            images: data.images
          }));
        } else {
          alert("المنتج غير موجود");
        }
      } catch (err) {
        console.error(err);
        alert("حدث خطأ أثناء جلب المنتج");
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [slug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // حذف صورة موجودة
  const handleRemoveImage = (img) => {
    setForm(prev => ({
      ...prev,
      images: prev.images.filter(i => i !== img)
    }));
  };

  // إضافة صور جديدة
  const handleNewImages = (e) => {
    const files = Array.from(e.target.files);
    setForm(prev => ({
      ...prev,
      newImages: prev.newImages.concat(files)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", slug);
    formData.append("title", form.title);
    formData.append("titleEn", form.titleEn);
    formData.append("description", form.description);
    formData.append("fullDescription", form.fullDescription);
    formData.append("badge", form.badge);
    formData.append("usage", form.usage);
    formData.append("benefits", form.benefits);

    // صور موجودة بعد الحذف
    form.images.forEach(img => formData.append("existingImages[]", img));

    // صور جديدة
    form.newImages.forEach(file => formData.append("newImages[]", file));

    try {
      const res = await fetch(`https://cornflowerblue-albatross-308247.hostingersite.com/api/update_product.php`, {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      if (data.status === "success") {
        toast.success("  تم تعديل المنتج بنجاح");
        router.push("/products");
      } else {
        toast.error("  فشل تعديل المنتج  ");
      }
    } catch (err) {
      console.error(err);
      toast.error("  حدث خطأ أثناء تعديل المنتج ");
    }
  };

   if (loading) {
    return <div className="dark:bg-[#64312C]">
      <Navbar title={"المنتجات"} color={"bg-green-900"} path={"/products"}  />
        <div className="flex flex-col space-y-3 p-4">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
     <Footer />
      </div>
  }

  return (
    <div>
      <Navbar title={"المنتجات"} color={"bg-green-900"} path={"/products"}  />
    <Card className="max-w-3xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>تعديل المنتج</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="title" value={form.title} onChange={handleChange} placeholder="العنوان" required />
          <Input name="titleEn" value={form.titleEn} onChange={handleChange} placeholder="العنوان بالإنجليزية" required />
          <Textarea name="description" value={form.description} onChange={handleChange} placeholder="الوصف" />
          <Textarea name="fullDescription" value={form.fullDescription} onChange={handleChange} placeholder="الوصف الكامل" />
          <Input name="badge" value={form.badge} onChange={handleChange} placeholder="شارة المنتج" />
          <Input name="usage" value={form.usage} onChange={handleChange} placeholder="طريقة الاستخدام" />
          <Textarea name="benefits" value={form.benefits} onChange={handleChange} placeholder="الفوائد، كل سطر منفصل" />

          {/* الصور الحالية مع زر الحذف */}
          {/* عرض الصور الحالية + الصور الجديدة */}
<div className="flex gap-4 flex-wrap">
  {/* الصور القديمة */}
  {form.images.map((img, index) => (
    <div key={`old-${index}`} className="relative">
      <img
        src={`https://cornflowerblue-albatross-308247.hostingersite.com/${img}`}
        alt="product"
        className="w-24 h-24 object-cover rounded-md"
      />
      <button
        type="button"
        onClick={() => handleRemoveImage(img)}
        className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
      >
        ×
      </button>
    </div>
  ))}

  {/* الصور الجديدة */}
  {form.newImages.map((file, index) => (
    <div key={`new-${index}`} className="relative">
      <img
        src={URL.createObjectURL(file)}
        alt="new"
        className="w-24 h-24 object-cover rounded-md"
      />
      <button
        type="button"
        onClick={() =>
          setForm(prev => ({
            ...prev,
            newImages: prev.newImages.filter((_, i) => i !== index)
          }))
        }
        className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
      >
        ×
      </button>
    </div>
  ))}
</div>


          {/* رفع صور جديدة */}
          <div
                          className="border-2 border-dashed rounded-xl p-6 text-center cursor-pointer hover:border-primary transition"
                          onClick={() => document.getElementById("images").click()}
                        >
                          <ImagePlus className="mx-auto mb-2 h-10 w-10 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">
                            اضغط لاختيار الصور أو اسحبها هنا
                          </p>
          <Input id="images" hidden type="file" multiple onChange={handleNewImages} />
                         
                        </div>

          <Button type="submit" className="mt-4">حفظ التعديلات</Button>
        </form>
      </CardContent>
    </Card>
    <Footer/>
   </div>
  );
}
