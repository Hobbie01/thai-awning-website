"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Check, PhoneCall, MessageCircle, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

// ข้อมูลบริการแบบละเอียด
const servicesData = [
  {
    slug: "awning",
    title: "ผ้าใบกันสาด",
    description: "บริการติดตั้งผ้าใบกันสาดคุณภาพสูง ทนทานต่อแดดและฝน ดีไซน์สวยงาม",
    fullDescription:
      "ผ้าใบกันสาดเป็นอุปกรณ์ที่ช่วยป้องกันแสงแดดและฝนได้อย่างมีประสิทธิภาพ เหมาะสำหรับติดตั้งหน้าบ้าน ร้านค้า หรืออาคารต่างๆ ช่วยลดความร้อนที่เข้าสู่ตัวอาคาร ประหยัดพลังงาน และยังช่วยเพิ่มความสวยงามให้กับอาคารอีกด้วย",
    image: "/images/service-1.png",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: [
      "ผลิตจากวัสดุคุณภาพสูง ทนต่อแสงแดดและฝน",
      "มีให้เลือกหลากหลายสีและลวดลาย",
      "ติดตั้งง่าย แข็งแรง ทนทาน",
      "ดีไซน์สวยงาม เข้ากับอาคารทุกรูปแบบ",
      "ช่วยลดความร้อนและประหยัดพลังงาน",
      "รับประกันคุณภาพ",
    ],
    process: [
      "ปรึกษาและประเมินพื้นที่ฟรี",
      "เลือกรูปแบบ สี และวัสดุที่ต้องการ",
      "ออกแบบและเสนอราคา",
      "ผลิตตามความต้องการของลูกค้า",
      "ติดตั้งโดยทีมงานมืออาชีพ",
      "ตรวจสอบคุณภาพหลังการติดตั้ง",
    ],
    faq: [
      {
        question: "ผ้าใบกันสาดมีอายุการใช้งานนานแค่ไหน?",
        answer: "ผ้าใบกันสาดของเรามีอายุการใช้งานประมาณ 5-7 ปี ขึ้นอยู่กับสภาพแวดล้อมและการดูแลรักษา",
      },
      {
        question: "มีบริการซ่อมแซมหรือเปลี่ยนผ้าใบหรือไม่?",
        answer: "เรามีบริการซ่อมแซมและเปลี่ยนผ้าใบสำหรับลูกค้าที่ต้องการปรับปรุงหรือซ่อมแซมผ้าใบกันสาดเดิม",
      },
      {
        question: "ใช้เวลาในการติดตั้งนานแค่ไหน?",
        answer: "ใช้เวลาในการติดตั้งประมาณ 1-2 วัน ขึ้นอยู่กับขนาดและความซับซ้อนของงาน",
      },
    ],
  },
  {
    slug: "slide-awning",
    title: "ผ้าใบรางสไลด์",
    description: "ติดตั้งผ้าใบรางสไลด์ที่สามารถเลื่อนเปิด-ปิดได้ตามต้องการ สะดวกในการใช้งาน",
    fullDescription:
      "ผ้าใบรางสไลด์เป็นนวัตกรรมที่ช่วยให้คุณสามารถควบคุมแสงแดดและฝนได้ตามต้องการ ด้วยระบบรางที่ช่วยให้สามารถเลื่อนเปิด-ปิดได้อย่างสะดวก เหมาะสำหรับพื้นที่ที่ต้องการความยืดหยุ่นในการใช้งาน เช่น ระเบียง สวน หรือพื้นที่พักผ่อนกลางแจ้ง",
    image: "/images/service-2.jpg",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: [
      "สามารถเลื่อนเปิด-ปิดได้ตามต้องการ",
      "ควบคุมแสงแดดและฝนได้อย่างมีประสิทธิภาพ",
      "ติดตั้งง่าย ใช้งานสะดวก",
      "มีให้เลือกหลากหลายสีและลวดลาย",
      "วัสดุคุณภาพสูง ทนทานต่อสภาพอากาศ",
      "ดีไซน์ทันสมัย สวยงาม",
    ],
    process: [
      "ปรึกษาและประเมินพื้นที่ฟรี",
      "เลือกรูปแบบ สี และวัสดุที่ต้องการ",
      "ออกแบบและเสนอราคา",
      "ผลิตตามความต้องการของลูกค้า",
      "ติดตั้งโดยทีมงานมืออาชีพ",
      "สาธิตวิธีการใช้งานและการดูแลรักษา",
    ],
    faq: [
      {
        question: "ระบบรางสไลด์ใช้งานยากหรือไม่?",
        answer: "ระบบรางสไลด์ของเราออกแบบมาให้ใช้งานง่าย สามารถเลื่อนเปิด-ปิดได้อย่างสะดวกด้วยมือหรือรีโมทคอนโทรล (ขึ้นอยู่กับรุ่นที่เลือก)",
      },
      {
        question: "ผ้าใบรางสไลด์ทนต่อลมแรงได้หรือไม่?",
        answer:
          "ผ้าใบรางสไลด์ของเราออกแบบมาให้ทนต่อสภาพอากาศต่างๆ รวมถึงลมแรงในระดับหนึ่ง อย่างไรก็ตาม เราแนะนำให้เลื่อนปิดเมื่อมีลมแรงมากเพื่อยืดอายุการใช้งาน",
      },
      {
        question: "มีระบบอัตโนมัติหรือไม่?",
        answer: "เรามีทั้งระบบธรรมดาที่ใช้มือเลื่อนและระบบอัตโนมัติที่ควบคุมด้วยรีโมทคอนโทรล ลูกค้าสามารถเลือกได้ตามความต้องการ",
      },
    ],
  },
  {
    slug: "tent-and-awning-roof",
    title: "โครงเต็นท์และหลังคาผ้าใบ",
    description: "ออกแบบและติดตั้งโครงเต็นท์และโครงเหล็กหลังคาผ้าใบที่แข็งแรงทนทาน",
    fullDescription:
      "โครงเต็นท์และหลังคาผ้าใบเป็นทางเลือกที่ดีสำหรับพื้นที่กลางแจ้งที่ต้องการร่มเงาและป้องกันฝน เหมาะสำหรับงานอีเวนท์ ตลาด ร้านค้า หรือพื้นที่พักผ่อนกลางแจ้ง โครงสร้างออกแบบให้แข็งแรง ทนทาน รองรับการใช้งานในระยะยาว",
    image: "/images/service-3.jpg",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: [
      "โครงสร้างแข็งแรง ทนทาน",
      "ออกแบบตามความต้องการของลูกค้า",
      "รองรับพื้นที่ขนาดใหญ่",
      "ติดตั้งและรื้อถอนสะดวก (สำหรับโครงเต็นท์)",
      "ป้องกันแสงแดดและฝนได้อย่างมีประสิทธิภาพ",
      "เหมาะสำหรับงานอีเวนท์และการใช้งานถาวร",
    ],
    process: [
      "ปรึกษาและประเมินพื้นที่ฟรี",
      "ออกแบบโครงสร้างตามความต้องการ",
      "เสนอแบบและราคา",
      "ผลิตโครงสร้างและผ้าใบ",
      "ติดตั้งโดยทีมงานมืออาชีพ",
      "ตรวจสอบความแข็งแรงและความปลอดภัย",
    ],
    faq: [
      {
        question: "โครงเต็นท์สามารถรื้อถอนและติดตั้งใหม่ได้หรือไม่?",
        answer: "ได้ โครงเต็นท์ของเราออกแบบมาให้สามารถรื้อถอนและติดตั้งใหม่ได้ เหมาะสำหรับงานอีเวนท์หรือการใช้งานชั่วคราว",
      },
      {
        question: "โครงสร้างสามารถรองรับน้ำหนักหิมะหรือฝนตกหนักได้หรือไม่?",
        answer:
          "โครงสร้างของเราออกแบบมาให้รองรับสภาพอากาศต่างๆ รวมถึงฝนตกหนัก อย่างไรก็ตาม ในกรณีที่มีหิมะหรือฝนตกหนักมาก อาจต้องมีการดูแลเพิ่มเติมเพื่อป้องกันการสะสมของน้ำหนัก",
      },
      {
        question: "มีขนาดมาตรฐานหรือสามารถสั่งทำตามขนาดที่ต้องการได้?",
        answer: "เรามีทั้งขนาดมาตรฐานและบริการออกแบบตามขนาดที่ลูกค้าต้องการ เพื่อให้เหมาะกับพื้นที่และการใช้งานของแต่ละราย",
      },
    ],
  },
]

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 space-y-4">
              <Link
                href="/"
                className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors mb-4"
              >
                <ChevronLeft className="h-4 w-4 mr-1" /> กลับไปหน้าหลัก
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
              <p className="text-lg text-gray-200">{service.fullDescription}</p>
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-medium"
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                ติดต่อสอบถามเพิ่มเติม
              </Button>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-96 w-full rounded-xl overflow-hidden">
              <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">คุณสมบัติเด่น</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="bg-yellow-400 p-2 rounded-full text-blue-900">
                  <Check className="h-5 w-5" />
                </div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">ผลงานของเรา</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.gallery.map((image, index) => (
              <div key={index} className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${service.title} - ภาพที่ ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">ขั้นตอนการทำงาน</h2>
          <div className="max-w-3xl mx-auto">
            <ol className="relative border-l border-blue-200">
              {service.process.map((step, index) => (
                <li key={index} className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-900 rounded-full -left-4 ring-4 ring-white text-white">
                    {index + 1}
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-blue-900">{step}</h3>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">คำถามที่พบบ่อย</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {service.faq.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">สนใจบริการของเรา?</h2>
          <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
            หากคุณสนใจบริการ {service.title} หรือต้องการข้อมูลเพิ่มเติม สามารถติดต่อเราได้ตามช่องทางด้านล่าง
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-3xl mx-auto">
            <a
              href="tel:0924127392"
              className="bg-white text-blue-900 px-6 py-4 rounded-xl text-center hover:bg-gray-100 transition-colors flex-1"
            >
              <PhoneCall className="h-6 w-6 mx-auto mb-2" />
              <p className="font-semibold">โทรหาเราเลย</p>
              <p>092-412-7392</p>
            </a>
            <a
              href="https://line.me/ti/p/4S-iTBNXxF"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#06C755] text-white px-6 py-4 rounded-xl text-center hover:bg-[#05B54A] transition-colors flex-1"
            >
              <MessageCircle className="h-6 w-6 mx-auto mb-2" />
              <p className="font-semibold">แชทผ่าน LINE</p>
              <p>เพิ่มเพื่อนใน LINE</p>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100086327531403"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1877F2] text-white px-6 py-4 rounded-xl text-center hover:bg-[#166FE5] transition-colors flex-1"
            >
              <Facebook className="h-6 w-6 mx-auto mb-2" />
              <p className="font-semibold">ติดต่อผ่าน Facebook</p>
              <p>ผ้าใบกันสาดช่างตู่</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

