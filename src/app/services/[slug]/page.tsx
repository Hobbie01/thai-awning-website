import {
  ContactCta,
  Faq,
  PageHero,
  ServiceCards,
  WorkPhoto,
} from "@/components/site/sections";
import { BreadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { images, services } from "@/lib/site";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import "../../inner-pages.css";

const content = {
  awning: {
    heading: "ติดตั้งผ้าใบกันสาด สำหรับบ้านและร้านค้า",
    intro:
      "เพิ่มร่มเงาบริเวณประตู หน้าต่าง และหน้าร้าน เลือกรูปทรง สีผ้าใบ และระยะยื่นให้เข้ากับตัวอาคารและการใช้งานของคุณ",
    section: "เลือกกันสาดให้เหมาะกับพื้นที่",
    cards: [
      [
        "กันสาดหน้าประตู",
        "ช่วยบังแดดและลดฝนสาดบริเวณทางเข้า โดยพิจารณาทิศทางแดด ระยะเปิดประตู และความสูงติดตั้ง",
      ],
      [
        "กันสาดหน้าต่าง",
        "เพิ่มร่มเงาบริเวณช่องเปิด เลือกระยะยื่นให้เหมาะกับหน้าต่างและสัดส่วนของตัวบ้าน",
      ],
      [
        "กันสาดหน้าร้าน",
        "เพิ่มพื้นที่ร่มด้านหน้าร้าน พร้อมเลือกลายและสีให้สอดคล้องกับหน้าร้านและพื้นที่ทางเดิน",
      ],
    ],
    considerations: [
      ["ทิศทางแดด", "ดูช่วงเวลาที่แสงแดดเข้าถึงพื้นที่ เพื่อเลือกรูปทรงและระยะยื่น"],
      ["พื้นผิวและจุดยึด", "ตรวจสอบผนังและโครงสร้างเดิมก่อนกำหนดวิธีติดตั้ง"],
      ["สีและลวดลาย", "เลือกให้เข้ากับบ้าน พร้อมพิจารณาการดูแลผ้าใบ"],
      ["การระบายน้ำ", "วางแนวลาดเอียงและทางน้ำให้เหมาะกับพื้นที่รอบบ้าน"],
    ],
    faq: [
      {
        question: "ควรเลือกผ้าใบกันสาดแบบไหน?",
        answer:
          "เริ่มจากบริเวณที่จะติดตั้ง ทิศทางแดด และรูปแบบบ้าน แล้วพูดคุยเรื่องสีผ้าใบ รูปทรง และระยะยื่นกับช่าง เพื่อเลือกให้เหมาะกับพื้นที่จริง",
      },
      {
        question: "ต้องวัดขนาดพื้นที่อย่างไร?",
        answer:
          "แจ้งความกว้างของช่องเปิดและระยะยื่นที่ต้องการโดยประมาณ พร้อมส่งภาพมุมกว้างและภาพจุดติดตั้งให้ช่าง ขนาดและจุดยึดต้องตรวจสอบอีกครั้งก่อนติดตั้ง",
      },
      {
        question: "ดูแลผ้าใบกันสาดอย่างไร?",
        answer:
          "เก็บใบไม้และสิ่งสกปรกที่สะสม ทำความสะอาดตามคำแนะนำของวัสดุ และตรวจดูรอยฉีกหรือจุดยึด หากพบความผิดปกติควรให้ช่างตรวจสอบ",
      },
    ],
  },
  "slide-awning": {
    heading: "ผ้าใบรางสไลด์ เปิดรับแสง ปิดบังแดด",
    intro:
      "ปรับพื้นที่กลางแจ้งให้ใช้งานได้ตามจังหวะของวัน ด้วยระบบผ้าใบเลื่อนเปิด–ปิด พิจารณาทั้งโครงรองรับ แนวราง และทางระบายน้ำให้เหมาะกับหน้างาน",
    section: "ออกแบบระบบให้เหมาะกับพื้นที่",
    cards: [
      ["พื้นที่พักผ่อน", "พิจารณาบริเวณนั่งเล่นและทิศทางแดด เพื่อกำหนดพื้นที่ที่ต้องการร่มเงา"],
      [
        "ลานอเนกประสงค์",
        "วางแนวรางให้สัมพันธ์กับพื้นที่ใช้งาน และเผื่อพื้นที่สำหรับผ้าใบเมื่อเลื่อนเก็บ",
      ],
      [
        "ร้านค้าและร้านอาหาร",
        "คำนึงถึงทางเดิน ตำแหน่งเสา และการใช้งานพื้นที่ใต้หลังคาในแต่ละช่วงเวลา",
      ],
    ],
    considerations: [
      ["ขนาดและโครงรองรับ", "สำรวจช่วงเสาและโครงสร้างเดิมก่อนกำหนดระบบ"],
      ["ความลาดเอียง", "พิจารณาทิศทางน้ำและจุดระบาย ไม่ให้น้ำขังบนผ้าใบ"],
      ["ทิศทางเปิด–ปิด", "เผื่อพื้นที่เก็บผ้าใบและตำแหน่งใช้งานที่เข้าถึงสะดวก"],
      ["การดูแลราง", "วางระบบให้เข้าถึงรางและผ้าใบเพื่อทำความสะอาดได้"],
    ],
    faq: [
      {
        question: "ต้องมีโครงเหล็กรองรับหรือไม่?",
        answer:
          "ต้องตรวจสอบโครงสร้างที่รองรับระบบรางก่อน โครงเดิมอาจต้องปรับปรุงหรือทำใหม่ตามขนาดพื้นที่และลักษณะการติดตั้ง ช่างจะประเมินจากหน้างาน",
      },
      {
        question: "ผ้าใบรางสไลด์ต่างจากกันสาดแบบติดตายอย่างไร?",
        answer:
          "ระบบรางสไลด์เลื่อนผ้าใบเพื่อเปิดรับแสงหรือบังแดดได้ ส่วนกันสาดแบบติดตายให้ร่มเงาในตำแหน่งเดิมตลอด เหมาะกับพื้นที่และลักษณะการใช้งานต่างกัน",
      },
      {
        question: "ควรดูแลระบบรางอย่างไร?",
        answer:
          "เก็บเศษใบไม้และสิ่งที่ขวางราง ตรวจดูผ้าใบและชิ้นส่วนเคลื่อนที่ และใช้ระบบตามคำแนะนำหลังติดตั้ง หากฝืดหรือติดขัดควรหยุดใช้งานและติดต่อช่าง",
      },
    ],
  },
  "steel-roof": {
    heading: "งานโครงเหล็กและหลังคา เพิ่มพื้นที่ใช้งานให้บ้าน",
    intro:
      "โครงเต็นท์ หลังคาผ้าใบ และหลังคาเมทัลชีท เลือกวัสดุและรูปแบบตามพื้นที่ใช้งาน พร้อมพิจารณาจุดยึด ระดับความสูง และการระบายน้ำก่อนเริ่มงาน",
    section: "รูปแบบงานโครงเหล็กและหลังคา",
    cards: [
      [
        "โครงเหล็กรองรับหลังคา",
        "กำหนดตำแหน่งเสาและโครงให้เหมาะกับการใช้งาน รวมถึงตรวจสอบพื้นที่สำหรับยึดโครงสร้าง",
      ],
      [
        "หลังคาเมทัลชีท",
        "พิจารณารูปแบบแผ่นหลังคา แนวลาดเอียง และทางน้ำ รวมถึงการใช้งานพื้นที่ใต้หลังคา",
      ],
      [
        "โครงเต็นท์และหลังคาผ้าใบ",
        "เลือกทรงโครงและผ้าใบให้สัมพันธ์กับพื้นที่ ความสูง และลักษณะการใช้งาน",
      ],
    ],
    considerations: [
      ["จุดยึดและฐานรองรับ", "ตรวจสอบโครงสร้างเดิมและตำแหน่งตั้งเสาที่เหมาะสม"],
      ["การระบายน้ำ", "กำหนดแนวลาดเอียงและทางน้ำโดยคำนึงถึงพื้นที่ข้างเคียง"],
      ["พื้นที่ใช้งาน", "ดูระยะเดิน ทางเปิดประตู และความสูงที่ต้องการใต้หลังคา"],
      ["สภาพแวดล้อม", "พิจารณาลม แดด และสิ่งปลูกสร้างรอบหน้างาน"],
    ],
    faq: [
      {
        question: "เลือกหลังคาผ้าใบหรือเมทัลชีทดี?",
        answer:
          "ขึ้นอยู่กับการใช้งาน รูปทรงที่ต้องการ โครงสร้างรองรับ และการดูแลรักษา ควรแจ้งรูปพื้นที่และความต้องการให้ช่างช่วยเปรียบเทียบวัสดุก่อนตัดสินใจ",
      },
      {
        question: "ต้องสำรวจหน้างานก่อนติดตั้งหรือไม่?",
        answer:
          "จำเป็นต้องตรวจสอบขนาด จุดยึด โครงสร้างเดิม และแนวระบายน้ำให้ชัดเจนก่อนกำหนดแบบติดตั้ง โดยเริ่มพูดคุยจากรูปถ่ายและขนาดโดยประมาณได้",
      },
      {
        question: "ปัจจัยใดมีผลต่อราคา?",
        answer:
          "ขนาดพื้นที่ รูปทรง วัสดุ โครงสร้างรองรับ และความยากในการเข้าถึงหน้างานมีผลต่อค่าใช้จ่าย ควรให้ช่างตรวจสอบรายละเอียดก่อนสรุปแบบและราคา",
      },
    ],
  },
} as const;

async function resolve(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service || !(slug in content)) notFound();
  return { service, details: content[slug as keyof typeof content] };
}
export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { service, details } = await resolve(params);
  return pageMetadata(
    `${service.title} รับติดตั้งโดยช่างตู่`,
    details.intro,
    `/services/${service.slug}`,
    service.image,
  );
}
export default async function ServicePage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { service, details } = await resolve(params);
  const steps = [
    ["พูดคุยความต้องการ", "ส่งรูปพื้นที่ ขนาดโดยประมาณ และลักษณะการใช้งาน"],
    ["ตรวจสอบหน้างาน", "ดูจุดยึด โครงสร้าง และขนาดพื้นที่ที่ต้องติดตั้ง"],
    ["สรุปแบบและวัสดุ", "พูดคุยรายละเอียดวัสดุ รูปแบบ และค่าใช้จ่ายก่อนเริ่มงาน"],
    ["ติดตั้งและตรวจงาน", "ตรวจรายละเอียดหน้างานและแนะนำการดูแลหลังติดตั้ง"],
  ];
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "หน้าแรก", href: "/" },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
      />
      <PageHero
        title={details.heading}
        description={details.intro}
        image={service.image}
        alt={service.alt}
        breadcrumbs={[
          { label: "หน้าแรก", href: "/" },
          { label: "บริการ", href: "/#services" },
          { label: service.title },
        ]}
      />
      {service.slug === "slide-awning" && (
        <div className="container">
          <p className="inner-filter-status">
            ภาพด้านบน: ทีมช่างขณะติดตั้งกันสาดผ้าใบแบบติดตาย แสดงการทำงานของทีมช่าง
          </p>
        </div>
      )}
      <section className="section">
        <div className="container">
          <h2 className="section-heading">{details.section}</h2>
          <p className="section-lead">
            เริ่มจากความต้องการใช้งาน แล้วเลือกรูปแบบให้เข้ากับพื้นที่ของคุณ
          </p>
          <div className="grid-three">
            {details.cards.map(([title, text], i) => (
              <article className="card inner-feature" key={title}>
                <span className="inner-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {service.slug === "steel-roof" && (
        <section className="section inner-gallery-section">
          <div className="container inner-photo-pair">
            <figure>
              <WorkPhoto
                src={images.steel}
                alt="โครงเหล็กจากงานติดตั้งจริงของช่างตู่"
              />
              <figcaption>งานโครงเหล็ก</figcaption>
            </figure>
            <figure>
              <WorkPhoto src={images.roof} alt="หลังคาเมทัลชีทจากงานจริงของช่างตู่" />
              <figcaption>งานหลังคาเมทัลชีท</figcaption>
            </figure>
          </div>
        </section>
      )}
      <section className="section section-soft">
        <div className="container">
          <h2 className="section-heading">สิ่งที่ควรพิจารณาก่อนติดตั้ง</h2>
          <div className="inner-four-grid">
            {details.considerations.map(([title, text], i) => (
              <article className="inner-consideration" key={title}>
                <span className="inner-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {service.slug === "slide-awning" && (
        <section className="section">
          <div className="container">
            <h2 className="section-heading">เปรียบเทียบก่อนเลือกกันสาด</h2>
            <div className="inner-comparison">
              <article>
                <h3>ผ้าใบกันสาดแบบติดตาย</h3>
                <p>
                  ให้ร่มเงาบริเวณเดิม เหมาะกับช่องเปิด หน้าประตู และหน้าต่าง
                  ควรพิจารณารูปทรงและระยะยื่นให้เหมาะกับอาคาร
                </p>
                <Link href="/services/awning" className="text-link">
                  ดูบริการผ้าใบกันสาด <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </article>
              <article>
                <h3>ผ้าใบรางสไลด์</h3>
                <p>
                  เลื่อนเปิด–ปิดผ้าใบได้ เหมาะกับพื้นที่ที่ต้องการปรับแสง ต้องเผื่อพื้นที่เก็บผ้าใบ
                  พร้อมตรวจสอบโครงรองรับและแนวราง
                </p>
                <Link href="/contact" className="text-link">
                  ปรึกษารูปแบบที่เหมาะกับพื้นที่{" "}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </article>
            </div>
          </div>
        </section>
      )}
      <section className="section">
        <div className="container">
          <h2 className="section-heading">จากการพูดคุย สู่การติดตั้ง</h2>
          <p className="section-lead">
            วางรายละเอียดร่วมกันก่อนเริ่มงาน ให้รูปแบบตอบโจทย์พื้นที่จริง
          </p>
          <div className="split inner-process">
            <WorkPhoto
              src={images.installation}
              alt="ช่างกำลังติดตั้งผ้าใบกันสาดลายทางที่บ้านพักอาศัย"
            />
            <ol className="inner-steps">
              {steps.map(([title, text], i) => (
                <li key={title}>
                  <span className="inner-number">0{i + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <div className="inner-related-case">
            <span className="eyebrow">ผลงานจริง</span>
            <h2 className="section-heading">กันสาดผ้าใบลายทาง บ้านพักอาศัย สวนผึ้ง</h2>
            <p>
              ดูรูปหน้างานจริงและรายละเอียดบริเวณทางเข้าบ้าน เพื่อประกอบการเลือกกันสาดของคุณ
            </p>
            <Link
              className="text-link"
              href="/projects/striped-awning-suan-phueng"
            >
              ดูรายละเอียดผลงาน <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <Faq items={[...details.faq]} />
      <section className="section">
        <div className="container">
          <h2 className="section-heading">บริการที่เกี่ยวข้อง</h2>
          <ServiceCards exclude={service.slug} />
        </div>
      </section>
      <ContactCta />
    </>
  );
}
