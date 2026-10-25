import { ArrowUpRight, MapPin, Navigation, Phone } from "lucide-react";
import { LocalBusinessJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { ButtonLink } from "./sections";
import "./location.css";

export function BusinessLocation() {
  const { location } = site;
  const embedUrl = `https://maps.google.com/maps?q=${location.latitude},${location.longitude}&z=16&output=embed`;
  return (
    <section className="section business-location" id="location" aria-labelledby="location-heading">
      <LocalBusinessJsonLd />
      <div className="container location-grid">
        <div className="location-copy">
          <p className="eyebrow"><MapPin size={17} aria-hidden="true" /> บ้านโป่ง · ราชบุรี</p>
          <h2 className="section-heading" id="location-heading">ที่ตั้งผ้าใบกันสาดช่างตู่</h2>
          <address>{location.streetAddress}<br />{location.district} {location.province} {location.postalCode}</address>
          <p className="location-note">นัดหมายกับช่างก่อนเดินทาง เพื่อประสานวันเวลาเข้าพบ หรือส่งตำแหน่งหน้างานทาง LINE เพื่อสอบถามการเข้าดูพื้นที่ติดตั้ง</p>
          <div className="button-row">
            <ButtonLink href={location.directionsUrl} external><Navigation size={18} aria-hidden="true" /> นำทางมาหาช่างตู่</ButtonLink>
            <ButtonLink href={location.mapUrl} external variant="outline">เปิด Google Maps <ArrowUpRight size={18} aria-hidden="true" /></ButtonLink>
          </div>
          <a className="location-phone" href={site.phoneHref}><Phone size={18} aria-hidden="true" /> โทรนัดหมาย {site.phone}</a>
        </div>
        <div className="location-map">
          <iframe src={embedUrl} title="แผนที่ผ้าใบกันสาดช่างตู่ ตำบลดอนกระเบื้อง อำเภอบ้านโป่ง ราชบุรี" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          <p>แผนที่ Google Maps · หากแผนที่ไม่แสดง <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">กดเปิดแผนที่</a></p>
        </div>
      </div>
    </section>
  );
}
