import Image from "next/image";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col dark:bg-[#64312C]">
      <Navbar title={"لوحة التحكم"} color={"bg-taka"}  />
      <main className="p-8 flex  gap-4  flex-col items-center justify-center">
        <Link href={"/add"}>
        <div className="flex items-center justify-between gap-4 bg-gradient-to-bl from-blue-500 via-blue-50 to-white px-8 rounded-xl py-2">
        <div className="bg-blue-900  text-white rounded-full p-2 "><CirclePlus className="h-4  w-4" /></div>
        <h1 className="text-xl">إضافة منتج</h1>
        </div>
        </Link>
        <Link href={"/products"}>
         <div className="flex items-center gap-4 bg-gradient-to-bl from-green-500 via-green-50 to-white px-8 rounded-xl py-2">
        <div className="bg-green-900  text-white rounded-full p-2 "><CirclePlus className="h-4  w-4" /></div>
        <h1 className="text-xl">عرض المنتجات </h1>
        </div>
        </Link>
      </main>
 
    </div>
  );
}
