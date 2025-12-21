/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  output: "export", // <-- هذا يفعّل تصدير الملفات كـ static
};

export default nextConfig;
