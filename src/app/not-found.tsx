import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container prose">
        <p className="eyebrow">404</p>
        <h1>ไม่พบหน้าที่ต้องการ</h1>
        <p>
          หน้านี้อาจถูกย้ายหรือไม่มีอยู่ คุณสามารถเลือกดูบริการและผลงานจากหน้าแรก
          หรือติดต่อช่างตู่เพื่อปรึกษางานติดตั้ง
        </p>
        <div className="button-row">
          <Link href="/">กลับหน้าแรก</Link>
          <Link href="/contact">ติดต่อช่างตู่</Link>
        </div>
      </div>
    </section>
  );
}
