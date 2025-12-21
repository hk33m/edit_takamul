import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Navbar({ title, color, path }) {
  return (
    <header className={`sticky p-4 shadow-lg text-xl ${color} text-white top-0 z-50 w-full border-b border-border/40 flex justify-between items-center`}>
      <h1>{title}</h1>

      {title !== "لوحة التحكم" && (
        <Link href={path} className="p-2 rounded-full bg-white text-black hover:bg-gray-200 transition">
          <ArrowLeft />
        </Link>
      )}
    </header>
  );
}
