"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button
        asChild
        size="lg"
        className="h-14 w-14 rounded-full bg-green-600 p-0 shadow-lg hover:bg-green-700"
      >
        <a
          href="https://wa.me/966556815070"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل عبر واتساب"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
}
