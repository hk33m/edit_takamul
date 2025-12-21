"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const users = [
  { username: "altakamul", password: "1234" },
  { username: "user", password: "abcd" },
];

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      localStorage.setItem("loggedIn", "true");
      router.push("/");
    } else {
      setError("اسم المستخدم أو كلمة المرور غير صحيحة");
      setPassword("");  
      setUsername("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="اسم المستخدم"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2"
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          تسجيل الدخول
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
