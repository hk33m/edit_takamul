import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { LogOut } from "lucide-react";

export default function Navbar({ title, color, path }) {

  function logout() {
    if (!confirm("هل أنت متأكد من تسجيل الخروج؟"))  return;
    localStorage.removeItem("loggedIn");
    window.location.href = "/login";
  }
  return (
    <header className={`sticky p-4 shadow-lg text-xl ${color} text-white top-0 z-50 w-full border-b border-border/40 flex justify-between items-center`}>
      <h1>{title}</h1>

      {title !== "لوحة التحكم" && (
        <Link href={path} className="p-2 rounded-full bg-white text-black hover:bg-gray-200 transition">
          <ArrowLeft />
        </Link>
      )}
      {title === "لوحة التحكم" && <div className="flex items-center gap-2" onClick={logout}><LogOut />تسجيل خروج</div>}
    </header>
  );
}
