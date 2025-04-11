import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ผ้าใบกันสาดช่างตู่ - จำหน่ายและติดตั้งผ้าใบกันสาด โครงเต็นท์ โครงหลังคาผ้าใบ",
  description: "บริการติดตั้งผ้าใบกันสาด ผ้าใบรางสไลด์ โครงเต็นท์ โครงเหล็กหลังคาผ้าใบ ให้คำปรึกษาประเมินหน้างานฟรี",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <SiteHeader />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'