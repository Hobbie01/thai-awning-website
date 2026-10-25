import {
  ButtonLink,
  Faq,
  PageHero,
  WorkPhoto,
} from "@/components/site/sections";
import { BreadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { images, site } from "@/lib/site";
import {
  ArrowUpRight,
  Camera,
  ClipboardList,
  Facebook,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
} from "lucide-react";
import "../inner-pages.css";
import { BusinessLocation } from "@/components/site/location";
export const metadata = pageMetadata(
  "ติดต่อช่างตู่ ผ้าใบกันสาด บ้านโป่ง ราชบุรี พร้อมแผนที่",
  "ที่ตั้งผ้าใบกันสาดช่างตู่ 63 หมู่ 2 ตำบลดอนกระเบื้อง อำเภอบ้านโป่ง ราชบุรี 70110 ดูแผนที่และเส้นทาง Google Maps โทร 092-412-7392 หรือติดต่อทาง LINE เพื่อปรึกษางานติดตั้ง",
  "/contact",
  images.awning,
);
export default function ContactPage() {
  const preparation = [
    {
      icon: Camera,
      title: "รูปบริเวณที่ต้องการติดตั้ง",
      text: "ถ่ายภาพมุมกว้างให้เห็นตัวบ้านและพื้นที่โดยรอบ พร้อมภาพใกล้ของจุดที่ต้องการติดตั้ง",
    },
    {
      icon: Ruler,
      title: "ขนาดกว้างและระยะยื่นคร่าว ๆ",
      text: "แจ้งขนาดโดยประมาณ เช่น ความกว้างประตูหรือพื้นที่ที่ต้องการบังแดด เพื่อเริ่มพูดคุยรูปแบบ",
    },
    {
      icon: MapPin,
      title: "จังหวัดและอำเภอของหน้างาน",
      text: "แจ้งพื้นที่เพื่อสอบถามการให้บริการ และประสานเรื่องการเข้าดูหน้างานกับช่าง",
    },
    {
      icon: ClipboardList,
      title: "รูปแบบที่สนใจและช่วงเวลาที่สะดวก",
      text: "ส่งภาพตัวอย่างที่ชอบ บอกลักษณะการใช้งาน และช่วงเวลาที่สะดวกให้ติดต่อกลับ",
    },
  ];
  const faq = [
    {
      question: "ต้องส่งรูปหน้างานแบบไหนบ้าง?",
      answer:
        "ควรมีภาพมุมกว้างให้เห็นบริเวณที่จะติดตั้งและพื้นที่รอบข้าง พร้อมภาพใกล้ของผนังหรือจุดยึด ระบุตำแหน่งที่ต้องการทำกันสาดและขนาดคร่าว ๆ หากมี",
    },
    {
      question: "การประเมินรูปแบบและค่าใช้จ่ายขึ้นอยู่กับอะไร?",
      answer:
        "ขึ้นอยู่กับขนาดพื้นที่ วัสดุ รูปทรง จุดยึด โครงสร้างรองรับ และความสะดวกในการเข้าถึงหน้างาน ช่างอาจต้องขอข้อมูลเพิ่มเติมหรือตรวจหน้างานก่อนสรุปแบบและราคา",
    },
    {
      question: "สามารถนัดให้ช่างดูหน้างานได้ไหม?",
      answer:
        "ติดต่อทางโทรศัพท์ LINE หรือ Facebook พร้อมแจ้งจังหวัดและอำเภอ เพื่อสอบถามพื้นที่ให้บริการและตกลงวันเวลาที่สะดวกกับช่างโดยตรง",
    },
  ];
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "หน้าแรก", href: "/" },
          { label: "ติดต่อเรา", href: "/contact" },
        ]}
      />
      <PageHero
        primaryHref="#channels"
        title="ปรึกษางานติดตั้ง ผ้าใบกันสาดและหลังคา"
        description="ส่งรูปพื้นที่และเล่าการใช้งานที่ต้องการ เพื่อพูดคุยรูปแบบงานกับช่างตู่ เลือกช่องทางที่สะดวก แล้วเริ่มจากรายละเอียดพื้นที่ของคุณ"
        image={images.awning}
        alt="ผลงานกันสาดผ้าใบลายเหลืองครีมบริเวณหน้าประตูบ้าน"
        breadcrumbs={[{ label: "หน้าแรก", href: "/" }, { label: "ติดต่อเรา" }]}
      />
      <section className="section" id="channels">
        <div className="container">
          <h2 className="section-heading">ช่องทางติดต่อ ช่างตู่ ผ้าใบกันสาด</h2>
          <p className="section-lead">
            สอบถามรายละเอียด ส่งรูปหน้างาน และประสานการนัดหมายกับทีมช่างได้โดยตรง
          </p>
          <div className="grid-three inner-contact-cards">
            <article className="inner-contact-card inner-contact-phone">
              <Phone aria-hidden="true" />
              <h3>โทรคุยกับช่างตู่</h3>
              <p>พูดคุยรูปแบบงานและสอบถามรายละเอียดหน้างาน</p>
              <ButtonLink href={site.phoneHref}>{site.phone}</ButtonLink>
            </article>
            <article className="inner-contact-card inner-contact-line">
              <MessageCircle aria-hidden="true" />
              <h3>ส่งรูปพื้นที่ทาง LINE</h3>
              <p>ส่งภาพและขนาดโดยประมาณ เพื่อเริ่มคุยงานได้สะดวก</p>
              <ButtonLink href={site.line} external>
                ทัก LINE <ArrowUpRight size={18} aria-hidden="true" />
              </ButtonLink>
            </article>
            <article className="inner-contact-card inner-contact-facebook">
              <Facebook aria-hidden="true" />
              <h3>ติดตามผลงานบน Facebook</h3>
              <p>ดูภาพงานจริงเพิ่มเติมและส่งข้อความหาช่างตู่</p>
              <ButtonLink href={site.facebook} external variant="outline">
                ช่างตู่ ผ้าใบ <ArrowUpRight size={18} aria-hidden="true" />
              </ButtonLink>
            </article>
          </div>
        </div>
      </section>
      <BusinessLocation />
      <section className="section section-soft">
        <div className="container inner-contact-prep">
          <div>
            <h2 className="section-heading">เตรียมอะไรบ้างก่อนปรึกษางาน</h2>
            <p className="section-lead">
              ข้อมูลเบื้องต้นช่วยให้เข้าใจหน้างานและความต้องการของคุณได้ชัดเจนขึ้น
            </p>
            <ol className="inner-preparation">
              {preparation.map(({ icon: Icon, title, text }, i) => (
                <li key={title}>
                  <span className="inner-number">0{i + 1}</span>
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <aside className="inner-contact-aside">
            <div>
              <h2>คุยรายละเอียดกับทีมช่าง</h2>
              <p>เลือกรูปแบบและวัสดุให้สัมพันธ์กับพื้นที่จริง ก่อนสรุปรายละเอียดการติดตั้ง</p>
            </div>
            <WorkPhoto
              src={images.installation}
              alt="ทีมช่างขณะติดตั้งผ้าใบกันสาดบริเวณทางเข้าบ้าน"
            />
            <p className="inner-aside-note">
              สอบถามพื้นที่ให้บริการและนัดหมายก่อนเข้าพบ
              เพื่อประสานวันเวลาและการเดินทางกับทีมช่าง
            </p>
          </aside>
        </div>
      </section>
      <Faq title="คำถามก่อนติดต่อ" items={faq} />
    </>
  );
}
