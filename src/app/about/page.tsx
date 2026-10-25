import {
  ButtonLink,
  ContactCta,
  PageHero,
  ServiceCards,
  WorkPhoto,
} from "@/components/site/sections";
import { BreadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { images, site } from "@/lib/site";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import "../inner-pages.css";
export const metadata = pageMetadata(
  "รู้จักช่างตู่ ทีมติดตั้งผ้าใบกันสาดและหลังคา",
  "รู้จักการทำงานของช่างตู่ ตั้งแต่พูดคุยความต้องการ เลือกรูปแบบให้เหมาะกับหน้างาน ไปจนถึงติดตั้งผ้าใบกันสาดและหลังคา พร้อมชมผลงานจริง",
  "/about",
  images.installation,
);
export default function AboutPage() {
  const values = [
    [
      "คุยรายละเอียดให้ชัดเจน",
      "เริ่มจากความต้องการใช้งาน รูปพื้นที่ และขนาดโดยประมาณ เพื่อให้เข้าใจงานตรงกัน",
    ],
    [
      "เลือกแบบให้เหมาะกับหน้างาน",
      "พิจารณาตัวอาคาร สภาพพื้นที่ และตำแหน่งติดตั้งก่อนสรุปรูปแบบ",
    ],
    [
      "ตรวจงานก่อนส่งมอบ",
      "ตรวจรายละเอียดการติดตั้งร่วมกัน พร้อมพูดคุยเรื่องการใช้งานและการดูแล",
    ],
  ];
  const steps = [
    ["พูดคุยความต้องการ", "เล่าการใช้งานและส่งภาพพื้นที่"],
    ["ตรวจสอบพื้นที่", "ดูขนาด จุดยึด และโครงสร้างเดิม"],
    ["สรุปแบบและวัสดุ", "ตกลงรายละเอียดและค่าใช้จ่ายก่อนเริ่มงาน"],
    ["ติดตั้งและตรวจงาน", "ตรวจรายละเอียดพร้อมแนะนำการดูแล"],
  ];
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "หน้าแรก", href: "/" },
          { label: "เกี่ยวกับเรา", href: "/about" },
        ]}
      />
      <PageHero
        title="ช่างตู่ ทีมงานติดตั้งผ้าใบกันสาดและหลังคา"
        description="พูดคุยความต้องการ เลือกรูปแบบให้เหมาะกับพื้นที่ และดูแลงานติดตั้ง ตั้งแต่ภาพหน้างานแรกจนถึงรายละเอียดก่อนส่งมอบ"
        image={images.installation}
        alt="ทีมช่างตู่กำลังติดตั้งกันสาดผ้าใบลายทางที่บ้านพักอาศัย"
        breadcrumbs={[{ label: "หน้าแรก", href: "/" }, { label: "เกี่ยวกับเรา" }]}
      />
      <section className="section">
        <div className="container">
          <div className="inner-about-intro">
            <h2 className="section-heading">งานที่เริ่มจากการเข้าใจพื้นที่</h2>
            <p className="section-lead">
              บ้านและร้านค้าแต่ละแห่งมีรายละเอียดต่างกัน เราจึงเริ่มจากการพูดคุยเรื่องการใช้งาน
              ก่อนเลือกกันสาดและหลังคาที่เหมาะกับหน้างานของคุณ
            </p>
          </div>
          <div className="grid-three">
            {values.map(([title, text], index) => (
              <article className="inner-feature" key={title}>
                <span className="inner-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="inner-photo-banner">
        <WorkPhoto
          src={images.awning}
          alt="ผลงานกันสาดผ้าใบลายเหลืองครีมของช่างตู่ เหนือทางเข้าบ้านผนังหิน"
        />
        <div className="container inner-banner-copy">
          <span className="eyebrow">ดูรายละเอียดจากงานจริง</span>
          <h2>
            ผลงานที่ดูได้
            <br />
            รายละเอียดที่คุยกันได้
          </h2>
          <p>ดูรูปแบบกันสาดและภาพขณะติดตั้ง เพื่อประกอบการเลือกงานที่เหมาะกับบ้านของคุณ</p>
          <ButtonLink href="/projects" variant="primary">
            ดูผลงานติดตั้ง <ArrowRight size={18} aria-hidden="true" />
          </ButtonLink>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-heading">บริการที่ช่างตู่ดูแล</h2>
          <p className="section-lead">
            ผ้าใบกันสาด ผ้าใบรางสไลด์ และงานโครงเหล็กหลังคา เลือกตามลักษณะการใช้งาน
          </p>
          <ServiceCards />
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <h2 className="section-heading">ขั้นตอนการทำงาน</h2>
          <ol className="inner-four-grid inner-process-grid">
            {steps.map(([title, text], index) => (
              <li key={title}>
                <span className="inner-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="inner-copy">
            <span className="eyebrow">ภาพและคลิปจากหน้างาน</span>
            <h2 className="section-heading">ดูการทำงานเพิ่มเติมบน Facebook</h2>
            <p>
              ติดตามภาพผลงานและคลิปการทำงานของช่างตู่
              หรือส่งข้อความเพื่อพูดคุยรายละเอียดพื้นที่ของคุณ
            </p>
            <ButtonLink href={site.facebook} external variant="outline">
              ดูเพจช่างตู่ <ArrowUpRight size={18} aria-hidden="true" />
            </ButtonLink>
          </div>
          <WorkPhoto
            src={images.installation}
            alt="ภาพทีมช่างระหว่างทำงานติดตั้งผ้าใบกันสาด"
          />
        </div>
      </section>
      <ContactCta />
    </>
  );
}
