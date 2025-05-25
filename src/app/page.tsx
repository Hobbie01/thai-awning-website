"use client"

import Image from "next/image"
import Link from "next/link"
import { PhoneCall, Facebook, ChevronRight, Play, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 py-16 md:py-24 scroll-mt-16"
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900">ผ้าใบกันสาดช่างตู่</h1>
              <p className="text-xl text-blue-900">จำหน่ายและติดตั้งผ้าใบกันสาด โครงเต็นท์ โครงหลังคาผ้าใบ</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-900 hover:bg-blue-800"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  ติดต่อเรา
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-900 text-blue-900 hover:bg-blue-900/10"
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                >
                  ดูผลงาน
                </Button>
              </div>
            </div>
            <div className="relative h-80 md:h-[500px] lg:h-[600px] w-full">
              <Image src="/images/hero-awning.png" alt="ผ้าใบกันสาด" fill className="object-contain scale-110" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-t-3xl"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white scroll-mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">บริการของเรา</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative mb-4 rounded-lg overflow-hidden">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={`/services/${service.slug}`}>
                  <Button variant="link" className="text-yellow-500 p-0 h-auto font-medium">
                    รายละเอียดเพิ่มเติม <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-blue-50 scroll-mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">ผลงานของเรา</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-64 relative">
                  {item.type === "video" ? (
                    <div className="w-full h-full relative">
                      <video src={item.media} className="w-full h-full object-cover" poster={item.poster} controls />
                      {!item.showControls && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white/30 hover:text-white"
                            onClick={(e) => {
                              const video = e.currentTarget.closest(".relative")?.querySelector("video")
                              if (video) {
                                video.play()
                                e.currentTarget.style.display = "none"
                              }
                            }}
                          >
                            <Play className="h-6 w-6 fill-white" />
                          </Button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Image src={item.media || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
              <Image src="/images/about-image.jpg" alt="เกี่ยวกับเรา" fill className="object-cover" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-blue-900">เกี่ยวกับเรา</h2>
              <p className="text-gray-600">
                ผ้าใบกันสาดช่างตู่ ให้บริการจำหน่ายและติดตั้งผ้าใบกันสาด โครงเต็นท์ โครงหลังคาผ้าใบ ด้วยประสบการณ์มากกว่า 10 ปี
                เรามุ่งมั่นที่จะให้บริการที่มีคุณภาพและตรงตามความต้องการของลูกค้า
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-yellow-400 p-1 rounded-full mr-2">✓</span>
                  <span>บริการติดตั้งผ้าใบกันสาด</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-yellow-400 p-1 rounded-full mr-2">✓</span>
                  <span>ผ้าใบรางสไลด์</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-yellow-400 p-1 rounded-full mr-2">✓</span>
                  <span>โครงเต็นท์</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-yellow-400 p-1 rounded-full mr-2">✓</span>
                  <span>โครงเหล็กหลังคาผ้าใบ</span>
                </li>
              </ul>
              <Button className="bg-blue-900 hover:bg-blue-800 mt-4">ให้คำปรึกษาประเมินหน้างานฟรี</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-900 text-white scroll-mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ติดต่อเรา</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-blue-800 p-6 rounded-xl flex flex-col items-center text-center">
              <div className="bg-yellow-400 p-4 rounded-full mb-4">
                <PhoneCall className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">โทรศัพท์</h3>
              <p className="text-lg">092-412-7392</p>
              <p className="text-yellow-400">(ช่างตู่)</p>
            </div>
            <div className="bg-blue-800 p-6 rounded-xl flex flex-col items-center text-center">
              <div className="bg-yellow-400 p-4 rounded-full mb-4">
                <Facebook className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Facebook</h3>
              <p>ผ้าใบกันสาดช่างตู่</p>
              <a
                href="https://www.facebook.com/profile.php?id=100086327531403"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block bg-white text-blue-900 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                ไปที่เพจ Facebook
              </a>
            </div>
            <div className="bg-blue-800 p-6 rounded-xl flex flex-col items-center text-center">
              <div className="bg-yellow-400 p-4 rounded-full mb-4">
                <MessageCircle className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">LINE</h3>
              <p>ติดต่อเราทาง LINE</p>
              <a
                href="https://line.me/ti/p/4S-iTBNXxF"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block bg-[#06C755] text-white px-4 py-2 rounded-md font-medium hover:bg-[#05B54A] transition-colors"
              >
                เพิ่มเพื่อนใน LINE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">ติดตามเราได้ที่</h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=100086327531403"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <div className="bg-blue-600 text-white p-4 rounded-full mb-2 hover:bg-blue-700 transition-colors">
                <Facebook className="h-8 w-8" />
              </div>
              <span className="text-blue-900">Facebook</span>
            </a>
            <a
              href="https://line.me/ti/p/4S-iTBNXxF"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <div className="bg-[#06C755] text-white p-4 rounded-full mb-2 hover:bg-[#05B54A] transition-colors">
                <MessageCircle className="h-8 w-8" />
              </div>
              <span className="text-blue-900">LINE</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-bold mb-4">ผ้าใบกันสาดช่างตู่</h3>
              <p className="text-gray-300">จำหน่ายและติดตั้งผ้าใบกันสาด โครงเต็นท์ โครงหลังคาผ้าใบ ให้คำปรึกษาประเมินหน้างานฟรี</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">บริการของเรา</h3>
              <ul className="space-y-2">
                <li>บริการติดตั้งผ้าใบกันสาด</li>
                <li>ผ้าใบรางสไลด์</li>
                <li>โครงเต็นท์</li>
                <li>โครงเหล็กหลังคาผ้าใบ</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">ติดต่อเรา</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <PhoneCall className="h-4 w-4 mr-2" /> 092-412-7392
                </p>
                <a
                  href="https://www.facebook.com/profile.php?id=100086327531403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-yellow-400 transition-colors"
                >
                  <Facebook className="h-4 w-4 mr-2" /> ผ้าใบกันสาดช่างตู่
                </a>
                <a
                  href="https://line.me/ti/p/4S-iTBNXxF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-yellow-400 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 mr-2" /> LINE: ช่างตู่
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} ผ้าใบกันสาดช่างตู่. สงวนลิขสิทธิ์.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const services = [
  {
    title: "ผ้าใบกันสาด",
    description: "บริการติดตั้งผ้าใบกันสาดคุณภาพสูง ทนทานต่อแดดและฝน ดีไซน์สวยงาม",
    image: "/images/service-1.png",
    slug: "awning",
  },
  {
    title: "ผ้าใบรางสไลด์",
    description: "ติดตั้งผ้าใบรางสไลด์ที่สามารถเลื่อนเปิด-ปิดได้ตามต้องการ สะดวกในการใช้งาน",
    image: "/images/service-2.jpg",
    slug: "slide-awning",
  },
  {
    title: "โครงเต็นท์และหลังคาผ้าใบ",
    description: "ออกแบบและติดตั้งโครงเต็นท์และโครงเหล็กหลังคาผ้าใบที่แข็งแรงทนทาน",
    image: "/images/service-3.jpg",
    slug: "tent-and-awning-roof",
  },
]

const portfolioItems = [
  {
    title: "ติดตั้งผ้าใบกันสาดร้านอาหาร",
    description: "ติดตั้งผ้าใบกันสาดสำหรับร้านอาหารในจังหวัดเชียงใหม่",
    type: "image",
    media: "/images/restaurant.jpg",
  },
  {
    title: "โครงเต็นท์งานอีเวนท์",
    description: "ติดตั้งโครงเต็นท์สำหรับงานอีเวนท์กลางแจ้ง",
    type: "video",
    media: "/videos/tent-installation.mp4",
    poster: "/images/service-3.jpg",
    showControls: true,
  },
  {
    title: "ผ้าใบรางสไลด์บ้านพักอาศัย",
    description: "ติดตั้งผ้าใบรางสไลด์สำหรับบ้านพักอาศัยในกรุงเทพฯ",
    type: "image",
    media: "/images/home.jpg",
  },
  {
    title: "การติดตั้งผ้าใบกันสาด",
    description: "วิดีโอแสดงขั้นตอนการติดตั้งผ้าใบกันสาด",
    type: "video",
    media: "/videos/awning-installation.mp4",
    poster: "/images/service-3.jpg",
    showControls: true,
  },
  {
    title: "โครงหลังคาผ้าใบร้านค้า",
    description: "ติดตั้งโครงหลังคาผ้าใบสำหรับร้านค้าในตลาด",
    type: "image",
    media: "/images/store.jpg",
  },
  {
    title: "การทำงานของผ้าใบรางสไลด์",
    description: "วิดีโอแสดงการทำงานของผ้าใบรางสไลด์",
    type: "video",
    media: "/videos/slide-awning-demo.mp4",
    poster: "/images/service-3.jpg",
    showControls: true,
  },
]
