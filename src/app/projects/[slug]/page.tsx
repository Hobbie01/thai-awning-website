import {
  Breadcrumbs,
  ButtonLink,
  ContactCta,
  WorkPhoto,
} from "@/components/site/sections";
import { BreadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { images, site } from "@/lib/site";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import "../../inner-pages.css";
const slug = "striped-awning-suan-phueng";
const title = "ติดตั้งกันสาดผ้าใบลายทาง บ้านพักอาศัย สวนผึ้ง ราชบุรี";
async function validate(params: Promise<{ slug: string }>) {
  if ((await params).slug !== slug) notFound();
}
export function generateStaticParams() {
  return [{ slug }];
}
export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }) {
  await validate(params);
  return pageMetadata(
    title,
    "ดูภาพกันสาดผ้าใบลายเหลือง–ครีมบริเวณทางเข้าบ้านพักอาศัย สวนผึ้ง ราชบุรี พร้อมภาพขณะติดตั้งโดยช่างตู่",
    `/projects/${slug}`,
    images.awning,
  );
}
export default async function ProjectPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  await validate(params);
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "หน้าแรก", href: "/" },
          { label: "ผลงาน", href: "/projects" },
          { label: "กันสาดผ้าใบลายทาง สวนผึ้ง", href: `/projects/${slug}` },
        ]}
      />
      <article>
        <header className="container inner-case-header">
          <Breadcrumbs
            items={[
              { label: "หน้าแรก", href: "/" },
              { label: "ผลงาน", href: "/projects" },
              { label: "กันสาดผ้าใบลายทาง" },
            ]}
          />
          <span className="eyebrow">ผลงานติดตั้งจริง</span>
          <h1>{title}</h1>
          <div className="inner-tag-row">
            <span className="inner-tag">ผ้าใบกันสาด</span>
            <span className="inner-tag">บ้านพักอาศัย</span>
          </div>
          <WorkPhoto
            src={images.awning}
            alt="กันสาดผ้าใบลายเหลืองครีมรูปทรงโค้ง เหนือประตูบ้านผนังหิน สวนผึ้ง"
            priority
            position="center 42%"
          />
        </header>
        <div className="container">
          <dl className="inner-facts">
            <div>
              <dt>ประเภทงาน</dt>
              <dd>กันสาดผ้าใบ</dd>
            </div>
            <div>
              <dt>ลักษณะพื้นที่</dt>
              <dd>ทางเข้าบ้าน</dd>
            </div>
            <div>
              <dt>สถานที่</dt>
              <dd>สวนผึ้ง ราชบุรี</dd>
            </div>
          </dl>
        </div>
        <section className="section">
          <div className="container inner-case-split">
            <div className="prose">
              <h2 className="section-heading">กันสาดที่เข้ากับหน้าบ้าน</h2>
              <p>
                งานติดตั้งกันสาดผ้าใบลายทางสีเหลือง–ครีมบริเวณประตูทางเข้าบ้านพักอาศัย
                ผ้าใบรูปทรงโค้งและชายผ้าโค้งช่วยเติมรายละเอียดให้กับบ้านผนังหิน
                พร้อมเพิ่มร่มเงาบริเวณช่องเปิด
              </p>
              <p>
                การเลือกกันสาดสำหรับพื้นที่ลักษณะนี้ ควรพิจารณาสัดส่วนของประตู ระยะยื่น
                ตำแหน่งโคมไฟ และจุดยึดร่วมกัน เพื่อให้รูปแบบเข้ากับตัวบ้านและใช้งานได้เหมาะสม
              </p>
            </div>
            <aside className="inner-consult">
              <h2>สนใจงานลักษณะนี้?</h2>
              <p>ส่งรูปพื้นที่และขนาดโดยประมาณ เพื่อพูดคุยเรื่องรูปทรงและวัสดุกับช่างตู่</p>
              <ButtonLink href={site.phoneHref}>โทร {site.phone}</ButtonLink>
              <ButtonLink href={site.line} external variant="outline">
                ทัก LINE <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
            </aside>
          </div>
        </section>
        <section className="section section-soft">
          <div className="container">
            <h2 className="section-heading">ระหว่างการติดตั้ง</h2>
            <p className="section-lead">
              ภาพขณะทำงานจากสถานที่เดียวกัน แสดงบริเวณติดตั้งและรายละเอียดใต้กันสาด
            </p>
            <div className="inner-case-gallery">
              <figure>
                <WorkPhoto
                  src={images.installation}
                  alt="ช่างสองคนกำลังติดตั้งผ้าใบกันสาดที่บ้านพักอาศัย สวนผึ้ง"
                />
                <figcaption>ทีมช่างขณะติดตั้งกันสาด</figcaption>
              </figure>
              <figure>
                <WorkPhoto
                  src={images.awning}
                  alt="รายละเอียดลายผ้าใบและรูปทรงกันสาดบริเวณทางเข้าบ้าน"
                  position="center 30%"
                />
                <figcaption>รูปทรงและลวดลายผ้าใบของงานเดียวกัน</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h2 className="section-heading">ก่อนติดตั้งที่บ้านคุณ</h2>
            <div className="grid-three">
              <article className="inner-feature">
                <h3>ตรวจพื้นที่ทางเข้า</h3>
                <p>ดูระยะเปิดประตู ความสูง และพื้นที่ทางเดินใต้กันสาด</p>
              </article>
              <article className="inner-feature">
                <h3>ตรวจพื้นผิวติดตั้ง</h3>
                <p>ตรวจสอบผนังและโครงสร้างบริเวณจุดยึดก่อนเลือกแบบ</p>
              </article>
              <article className="inner-feature">
                <h3>พิจารณาทิศทางแดดและฝน</h3>
                <p>เลือกตำแหน่งและระยะยื่นให้สัมพันธ์กับทิศทางแดดและแนวน้ำ</p>
              </article>
            </div>
            <div className="button-row">
              <Link className="text-link" href="/services/awning">
                ดูบริการติดตั้งผ้าใบกันสาด <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="text-link" href="/projects">
                กลับไปดูผลงานทั้งหมด <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </article>
      <ContactCta />
    </>
  );
}
