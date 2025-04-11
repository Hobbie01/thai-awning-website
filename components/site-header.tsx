"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, PhoneCall, Facebook, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2" onClick={() => scrollToSection("home")}>
          <div className="relative h-10 w-10">
            <Image src="/images/logo.png" alt="ผ้าใบกันสาดช่างตู่" fill className="object-contain" />
          </div>
          <span className="text-xl font-bold text-blue-900">ผ้าใบกันสาดช่างตู่</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("home")}
            className="text-blue-900 font-medium hover:text-yellow-500 transition-colors"
          >
            หน้าหลัก
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-blue-900 font-medium hover:text-yellow-500 transition-colors"
          >
            สินค้าและบริการ
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-blue-900 font-medium hover:text-yellow-500 transition-colors"
          >
            ผลงาน
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-blue-900 font-medium hover:text-yellow-500 transition-colors"
          >
            ติดต่อ
          </button>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100086327531403"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://line.me/ti/p/4S-iTBNXxF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#06C755] hover:text-[#05B54A] transition-colors"
              aria-label="LINE"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <Button className="bg-blue-900 hover:bg-blue-800 ml-2">
              <PhoneCall className="h-4 w-4 mr-2" /> 092-412-7392
            </Button>
          </div>
        </nav>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6 text-blue-900" /> : <Menu className="h-6 w-6 text-blue-900" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              className="text-blue-900 font-medium hover:text-yellow-500 transition-colors py-2 text-left"
              onClick={() => scrollToSection("home")}
            >
              หน้าหลัก
            </button>
            <button
              className="text-blue-900 font-medium hover:text-yellow-500 transition-colors py-2 text-left"
              onClick={() => scrollToSection("services")}
            >
              สินค้าและบริการ
            </button>
            <button
              className="text-blue-900 font-medium hover:text-yellow-500 transition-colors py-2 text-left"
              onClick={() => scrollToSection("portfolio")}
            >
              ผลงาน
            </button>
            <button
              className="text-blue-900 font-medium hover:text-yellow-500 transition-colors py-2 text-left"
              onClick={() => scrollToSection("contact")}
            >
              ติดต่อ
            </button>
            <div className="flex items-center gap-4 py-2">
              <a
                href="https://www.facebook.com/profile.php?id=100086327531403"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600"
              >
                <Facebook className="h-5 w-5" /> Facebook
              </a>
              <a
                href="https://line.me/ti/p/4S-iTBNXxF"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#06C755]"
              >
                <MessageCircle className="h-5 w-5" /> LINE
              </a>
            </div>
            <Button className="bg-blue-900 hover:bg-blue-800 w-full">
              <PhoneCall className="h-4 w-4 mr-2" /> 092-412-7392
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

