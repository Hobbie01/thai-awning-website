import ProjectFilter from "@/components/project-filter";
import {
  ButtonLink,
  ContactCta,
  PageHero,
  WorkPhoto,
} from "@/components/site/sections";
import { projects } from "@/lib/projects";
import { BreadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { images, site } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";
import "../inner-pages.css";
export const metadata = pageMetadata(
  "ผลงานติดตั้งผ้าใบกันสาดและหลังคา",
  "รวมภาพผลงานจริงของช่างตู่ ทั้งผ้าใบกันสาด โครงเหล็ก และหลังคา เลือกดูตามประเภทงาน พร้อมภาพหลายมุม รายละเอียดแต่ละหน้างาน และผลงานเพิ่มเติมบน Facebook",
  "/projects",
  images.awning,
);
export default function ProjectsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "หน้าแรก", href: "/" },
          { label: "ผลงาน", href: "/projects" },
        ]}
      />
      <PageHero
        title="ผลงานติดตั้ง ผ้าใบกันสาดและหลังคา"
        description="ดูรูปแบบและรายละเอียดจากงานจริง เพื่อประกอบการเลือกกันสาดและหลังคาให้เหมาะกับพื้นที่ของคุณ"
        image={images.awning}
        alt="ผลงานกันสาดผ้าใบลายเหลืองครีมเหนือประตูบ้าน"
        breadcrumbs={[{ label: "หน้าแรก", href: "/" }, { label: "ผลงาน" }]}
      />
      <section className="section">
        <div className="container">
          <h2 className="section-heading">เลือกดูผลงานจากหน้างานจริง</h2>
          <p className="section-lead portfolio-intro">
            รวม {projects.length} งาน ·{" "}
            {projects.reduce(
              (count, project) => count + project.images.length,
              0,
            )}{" "}
            ภาพ เลือกประเภทงาน แล้วเปิดดูภาพและรายละเอียดของแต่ละหน้างานได้
          </p>
          <ProjectFilter
            projects={[...projects.slice(-4), ...projects.slice(0, -4)]}
          />
        </div>
      </section>
      <section className="section section-soft">
        <div className="container split">
          <WorkPhoto
            src={images.installation}
            alt="ทีมช่างกำลังติดตั้งกันสาดผ้าใบลายทาง"
          />
          <div className="inner-copy">
            <span className="eyebrow">จากหน้างาน สู่พื้นที่พร้อมใช้งาน</span>
            <h2 className="section-heading">เห็นทั้งผลงาน และขั้นตอนการทำงาน</h2>
            <p>
              ภาพขณะติดตั้งช่วยให้เห็นรายละเอียดของหน้างาน จุดยึด และรูปแบบกันสาด
              สามารถดูภาพและคลิปเพิ่มเติมจาก Facebook ของช่างตู่ได้
            </p>
            <ButtonLink href={site.facebook} external variant="outline">
              ดูผลงานบน Facebook <ArrowUpRight size={18} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
