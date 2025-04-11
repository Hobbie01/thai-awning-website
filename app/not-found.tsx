import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">ไม่พบหน้าที่คุณกำลังค้นหา</h2>
        <p className="text-gray-600 mb-8">หน้าที่คุณกำลังค้นหาอาจถูกลบ เปลี่ยนชื่อ หรือไม่มีอยู่ในระบบ</p>
        <Link href="/">
          <Button className="bg-blue-900 hover:bg-blue-800">
            <Home className="h-4 w-4 mr-2" /> กลับไปหน้าหลัก
          </Button>
        </Link>
      </div>
    </div>
  )
}

