export const dynamic = "force-dynamic"

import { Suspense } from "react"


export default function RootLayout({ children }) {
  return (
    <>
    <Suspense fallback={null}>
        {children}
    </Suspense>
    </>
  );
}