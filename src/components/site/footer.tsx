import Link from "next/link";
import { Facebook, MapPin, MessageCircle, Phone } from "lucide-react";
import { site, services } from "@/lib/site";
import { Brand } from "./brand";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand />
          <p>
            ผ้าใบกันสาด โครงเหล็ก และหลังคา
            <br />
            สำหรับบ้าน ร้านค้า และพื้นที่ใช้งานภายนอก
          </p>
          <address style={{ fontStyle: "normal", fontSize: 14, marginTop: 16 }}>
            {site.location.address}
          </address>
          <a href={site.location.mapUrl} target="_blank" rel="noopener noreferrer">
            <MapPin size={17} aria-hidden="true" />
            ดูที่ตั้งบน Google Maps
          </a>
        </div>
        <div>
          <h2>บริการของเรา</h2>
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              {service.title}
            </Link>
          ))}
        </div>
        <div>
          <h2>รู้จักช่างตู่</h2>
          <Link href="/projects">ผลงานติดตั้ง</Link>
          <Link href="/about">เกี่ยวกับเรา</Link>
          <Link href="/contact">ติดต่อเรา</Link>
        </div>
        <div>
          <h2>คุยเรื่องงานติดตั้ง</h2>
          <a href={site.phoneHref}>
            <Phone size={17} aria-hidden="true" />
            {site.phone}
          </a>
          <a href={site.line} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={17} aria-hidden="true" />
            ทัก LINE ช่างตู่
          </a>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer">
            <Facebook size={17} aria-hidden="true" />
            ดูผลงานทาง Facebook
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} ผ้าใบกันสาดช่างตู่
      </div>
      <a
        className="floating-line"
        href={site.line}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ปรึกษางานติดตั้งผ่าน LINE"
      >
        <MessageCircle aria-hidden="true" />
        <span>LINE</span>
      </a>
    </footer>
  );
}
