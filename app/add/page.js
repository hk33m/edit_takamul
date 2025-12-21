"use client"

import { useState } from "react"
import axios from "axios"
import { Upload, X, ImagePlus, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/home/navbar"

// ======= Toast محلي بسيط =======
function Toast({ message, type, onClose }) {
  const colors = {
    success: "bg-green-500",
    error: "bg-red-500",
  }
  return (
    <div className={`fixed top-4 right-4 p-4 rounded shadow-lg text-white ${colors[type]}`}>
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 font-bold">X</button>
      </div>
    </div>
  )
}

export default function AddProductPage() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)

  // اختيار الصور
  const handleImages = (files) => {
    const selected = Array.from(files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }))
    setImages((prev) => [...prev, ...selected])
  }

  // حذف صورة
  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index))
  }

  // إرسال البيانات
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)
    images.forEach((img) => formData.append("images[]", img.file))

    try {
      await axios.post(
        "https://cornflowerblue-albatross-308247.hostingersite.com/api/add_product.php",
        formData
      )

      setToast({ message: "تم رفع المنتج والصور بنجاح ✅", type: "success" })
      e.target.reset()
      setImages([])
    } catch (error) {
      console.error(error)
      setToast({ message: "فشل رفع المنتج ❌", type: "error" })
    } finally {
      setLoading(false)
      setTimeout(() => setToast(null), 3000)
    }
  }

  return (
    <div>
     <Navbar title={"إضافة منتج "} color={"bg-blue-900"} path={"/"}  />
    <div className="max-w-6xl mx-auto p-6">
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">إضافة منتج جديد</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* بيانات المنتج */}
            <div className="space-y-4">
              <div>
                <Label>العنوان</Label>
                <Input className="h-12" name="title" required />
              </div>
              <div>
                <Label>العنوان بالإنجليزية</Label>
                <Input className="h-12" name="titleEn" required />
              </div>
              <div>
                <Label>الوصف القصير</Label>
                <Textarea name="description" rows={2} />
              </div>
              <div>
                <Label>الوصف الكامل</Label>
                <Textarea name="fullDescription" rows={4} />
              </div>
              <div>
                <Label>الشارة</Label>
                <Input className="h-12" name="badge" />
              </div>
              <div>
                <Label>الاستخدام</Label>
                <Input className="h-12" name="usage" />
              </div>
              <div>
                <Label>الفوائد (كل فائدة في سطر)</Label>
                <Textarea name="benefits" rows={3} />
              </div>
            </div>

            {/* رفع الصور */}
            <div>
              <Label className="mb-2 block">صور المنتج</Label>
              <div
                className="border-2 border-dashed rounded-xl p-6 text-center cursor-pointer hover:border-primary transition"
                onClick={() => document.getElementById("images").click()}
              >
                <ImagePlus className="mx-auto mb-2 h-10 w-10 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  اضغط لاختيار الصور أو اسحبها هنا
                </p>
                <input
                  id="images"
                  type="file"
                  multiple
                  accept="image/*"
                  hidden
                  onChange={(e) => handleImages(e.target.files)}
                />
              </div>

              {/* معاينة الصور */}
              {images.length > 0 && (
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="relative group rounded-lg overflow-hidden border"
                    >
                      <img
                        src={img.preview}
                        alt=""
                        className="h-28 w-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* زر الإرسال */}
            <div className="md:col-span-2 flex justify-end">
              <Button disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                <Upload className="mr-2 h-4 w-4" />
                رفع المنتج
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
    </div>
  )
}
