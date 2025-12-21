"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useAuthProtection() {
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) {
      router.push("/login");
    }
  }, [router]);
}
