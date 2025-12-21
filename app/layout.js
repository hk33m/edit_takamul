import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner"
export const metadata = {
  title: "لوحة تحكم مصنع التكامل للأعلاف",
  description:
    "لوحة تحكم ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body dir="rtl">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
           <Toaster position="top-center" richColors />
         
        </ThemeProvider>
      </body>
    </html>
  );
}
