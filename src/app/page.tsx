import Link from "next/link";
import { ArrowRight, Images, MessageSquare, Ruler, Wrench } from "lucide-react";
import {
  ButtonLink,
  ContactCta,
  Faq,
  ServiceCards,
  WorkPhoto,
} from "@/components/site/sections";
import { images } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { getProjectCover, projects } from "@/lib/projects";
import ProjectCover from "@/components/project-cover";
import CustomerReviews from "@/components/site/reviews";

const moreProjects = [
  "navy-striped-awning-suan-phueng",
  "shop-steel-roof-ban-pong",
  "cream-retractable-awning",
].flatMap((slug) => projects.filter((project) => project.slug === slug));
const featuredProject =
  projects.find((project) => project.slug === "striped-awning-suan-phueng") ??
  projects[0];
export const metadata = pageMetadata(
  "ติดตั้งผ้าใบกันสาดและโครงหลังคา โดยช่างตู่",
  "บริการติดตั้งผ้าใบกันสาด ผ้าใบรางสไลด์ โครงเหล็กและหลังคา ดูภาพผลงานจริงและปรึกษารูปแบบที่เหมาะกับพื้นที่กับช่างตู่",
  "/",
  getProjectCover(featuredProject).src,
);
const faqs = [
  {
    question: "เลือกกันสาดแบบไหนดี?",
    answer:
      "เริ่มจากพื้นที่และลักษณะการใช้งาน ผ้าใบกันสาดเหมาะกับประตู หน้าต่าง หรือหน้าร้าน ส่วนผ้าใบรางสไลด์เหมาะกับพื้นที่ที่ต้องการเลื่อนเปิด–ปิด สามารถส่งรูปให้ช่างตู่ช่วยแนะนำรูปแบบได้",
  },
  {
    question: "ราคาติดตั้งขึ้นอยู่กับอะไร?",
    answer:
      "ขึ้นอยู่กับขนาดพื้นที่ วัสดุ รูปแบบโครงสร้าง และรายละเอียดหน้างาน ส่งรูปพร้อมขนาดคร่าว ๆ เพื่อคุยรายละเอียดและประเมินงานก่อนตัดสินใจ",
  },
  {
    question: "ต้องเตรียมข้อมูลอะไรเพื่อปรึกษางาน?",
    answer:
      "เตรียมรูปจุดที่ต้องการติดตั้ง ขนาดกว้างและระยะยื่นโดยประมาณ จังหวัดและอำเภอของหน้างาน รวมถึงตัวอย่างรูปแบบที่สนใจ",
  },
];
const steps = [
  {
    icon: MessageSquare,
    title: "พูดคุยความต้องการ",
    text: "ส่งรูปพื้นที่และรูปแบบที่สนใจ เพื่อคุยการใช้งานกับช่างโดยตรง",
  },
  {
    icon: Ruler,
    title: "สำรวจและประเมินหน้างาน",
    text: "ตรวจสอบขนาด จุดยึด และเลือกวัสดุให้เหมาะกับพื้นที่จริง",
  },
  {
    icon: Wrench,
    title: "ติดตั้งและตรวจความเรียบร้อย",
    text: "ดำเนินงานตามรูปแบบที่ตกลง พร้อมตรวจรายละเอียดหลังติดตั้ง",
  },
];
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-image">
          <ProjectCover
            project={featuredProject}
            priority
            position="center 38%"
          />
        </div>
        <div className="container">
          <div className="hero-copy">
            <p className="hero-label">ผ้าใบกันสาดช่างตู่</p>
            <h1>
              ติดตั้งผ้าใบกันสาด
              <br />
              และโครงหลังคา
              <br />
              โดยช่างตู่
            </h1>
            <p className="section-lead">
              งานกันสาดสำหรับบ้าน ร้านค้า และพื้นที่ใช้งานภายนอก
              เลือกแบบให้เหมาะกับพื้นที่และการใช้งาน
            </p>
            <div className="button-row">
              <ButtonLink href="/contact">
                ปรึกษางานติดตั้ง
                <ArrowRight size={19} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/projects" variant="outline">
                ดูผลงานติดตั้ง
                <ArrowRight size={19} aria-hidden="true" />
              </ButtonLink>
            </div>
            <p className="hero-categories">
              บ้านพักอาศัย <span>•</span> ร้านค้า <span>•</span> พื้นที่ใช้งานภายนอก
            </p>
          </div>
        </div>
      </section>
      <section
        className="proof-strip section-navy"
        aria-label="เลือกงานที่เหมาะกับคุณ"
      >
        <div className="container">
          {[
            {
              icon: Ruler,
              title: "เลือกแบบให้เหมาะกับบ้าน",
              text: "แนะนำรูปแบบตามพื้นที่และการใช้งาน",
            },
            {
              icon: MessageSquare,
              title: "คุยงานกับทีมช่าง",
              text: "สอบถามรายละเอียดได้โดยตรง",
            },
            {
              icon: Images,
              title: "ดูตัวอย่างงานติดตั้ง",
              text: "ภาพผลงานจริงประกอบการตัดสินใจ",
            },
          ].map((item) => (
            <div key={item.title}>
              <item.icon size={38} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="services" className="section home-services">
        <div className="container">
          <p className="eyebrow">OUR SERVICES</p>
          <h2 className="section-heading">
            บริการติดตั้งผ้าใบกันสาด
            <br className="mobile-break" /> ครบทุกความต้องการ
          </h2>
          <p className="section-lead">
            ผ้าใบกันสาด โครงหลังคา และงานผ้าใบสำหรับพื้นที่ใช้งานภายนอก
            <br className="desktop-break" />{" "}
            พร้อมให้คำแนะนำในการเลือกแบบที่เหมาะกับพื้นที่ของคุณ
          </p>
          <ServiceCards />
        </div>
      </section>
      <section className="section featured-section">
        <div className="container">
          <div className="section-title-row">
            <h2 className="section-heading">ผลงานติดตั้งจริง</h2>
            <Link className="text-link" href="/projects">
              ดูผลงานทั้งหมด
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <article className="featured-project">
            <ProjectCover project={featuredProject} position="center 42%" />
            <div>
              <p className="eyebrow">งานผ้าใบกันสาด · สวนผึ้ง</p>
              <h3>
                กันสาดผ้าใบลายทาง
                <br />
                บ้านพักอาศัย สวนผึ้ง
              </h3>
              <p>
                งานติดตั้งกันสาดผ้าใบเหนือประตูทางเข้า
                เลือกลายเหลืองครีมให้เข้ากับผนังหินและรายละเอียดของบ้าน
              </p>
              <ButtonLink href="/projects/striped-awning-suan-phueng">
                ดูรายละเอียดผลงาน
                <ArrowRight size={19} aria-hidden="true" />
              </ButtonLink>
            </div>
          </article>
          <div className="grid-three home-project-grid">
            {moreProjects.map((project) => (
              <article className="card" key={project.slug}>
                <ProjectCover
                  project={project}
                  href={`/projects/${project.slug}`}
                  position={
                    project.slug === "navy-striped-awning-suan-phueng"
                      ? "center 25%"
                      : "center"
                  }
                />
                <div className="card-body">
                  <h3>
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p>{project.description}</p>
                  <Link
                    className="text-link"
                    href={`/projects/${project.slug}`}
                  >
                    ดูภาพและรายละเอียด <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="button-row home-project-more">
            <ButtonLink href="/projects" variant="outline">
              ดูผลงานทั้งหมด {projects.length} งาน{" "}
              <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="section process-section">
        <div className="container split">
          <WorkPhoto
            src={images.installation}
            alt="ทีมช่างกำลังติดตั้งผ้าใบกันสาดลายทางที่หน้างานจริง"
            position="center 44%"
          />
          <div>
            <h2 className="section-heading">
              ใส่ใจตั้งแต่คุยงาน
              <br />
              จนถึงติดตั้ง
            </h2>
            <p className="section-lead">
              พูดคุยรายละเอียดของพื้นที่ เพื่อให้ได้งานกันสาดที่เหมาะกับการใช้งานของคุณ
            </p>
            <ol className="process-list">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span className="number">0{index + 1}</span>
                  <step.icon size={34} strokeWidth={1.6} aria-hidden="true" />
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link href="/about" className="text-link">
              รู้จักช่างตู่
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <CustomerReviews />
      <Faq items={faqs} />
      <ContactCta />
    </>
  );
}
