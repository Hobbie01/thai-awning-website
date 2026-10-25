import ProjectGallery from "@/components/project-gallery";
import ProjectCover from "@/components/project-cover";
import {
  Breadcrumbs,
  ButtonLink,
  ContactCta,
} from "@/components/site/sections";
import { getProject, getProjectCover, projects } from "@/lib/projects";
import { BreadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import "../../inner-pages.css";

const categoryLabels = {
  awning: "ผ้าใบกันสาด",
  roof: "โครงเหล็กและหลังคา",
  sliding: "ผ้าใบรางสไลด์",
};
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
async function resolveProject(params: Promise<{ slug: string }>) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return project;
}
export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }) {
  const project = await resolveProject(params);
  return pageMetadata(
    project.title,
    project.description,
    `/projects/${project.slug}`,
    getProjectCover(project).src,
  );
}
export default async function ProjectPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const project = await resolveProject(params);
  const category = categoryLabels[project.category];
  const related = projects
    .filter(
      (item) =>
        item.slug !== project.slug && item.category === project.category,
    )
    .slice(0, 3);
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "หน้าแรก", href: "/" },
          { label: "ผลงาน", href: "/projects" },
          { label: project.title, href: `/projects/${project.slug}` },
        ]}
      />
      <article>
        <header className="container inner-case-header">
          <Breadcrumbs
            items={[
              { label: "หน้าแรก", href: "/" },
              { label: "ผลงาน", href: "/projects" },
              { label: project.title },
            ]}
          />
          <h1>{project.title}</h1>
          <div className="inner-tag-row">
            <span className="inner-tag">{category}</span>
            {project.location ? (
              <span className="portfolio-location">
                <MapPin size={16} aria-hidden="true" /> {project.location}
              </span>
            ) : null}
          </div>
          <ProjectCover project={project} priority />
        </header>
        <div className="container">
          <dl className="inner-facts portfolio-facts">
            <div>
              <dt>ประเภทงาน</dt>
              <dd>{category}</dd>
            </div>
            <div>
              <dt>ภาพหน้างาน</dt>
              <dd>{project.images.length} ภาพ</dd>
            </div>
            {project.location ? (
              <div>
                <dt>สถานที่ติดตั้ง</dt>
                <dd>{project.location}</dd>
              </div>
            ) : null}
          </dl>
        </div>
        <section className="section">
          <div className="container inner-case-split">
            <div className="prose">
              <h2 className="section-heading">รายละเอียดผลงาน</h2>
              <p>{project.description}</p>
              {project.sourceUrl ? (
                <a
                  className="text-link"
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ดูภาพต้นฉบับบน Facebook{" "}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              ) : null}
              <div className="button-row">
                <Link
                  className="text-link"
                  href={`/services/${project.serviceSlug}`}
                >
                  ดูบริการ{category} <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
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
        <section id="original-photos" className="section section-soft">
          <div className="container">
            <h2 className="section-heading">ภาพต้นฉบับจากหน้างาน</h2>
            <p className="section-lead portfolio-intro">
              กดที่ภาพเพื่อดูขนาดเต็ม ใช้ปุ่มลูกศรเพื่อดูภาพถัดไป และกด Esc เพื่อปิด
            </p>
            <ProjectGallery images={project.images} title={project.title} />
          </div>
        </section>
        {related.length ? (
          <section className="section">
            <div className="container">
              <h2 className="section-heading">ผลงานประเภทเดียวกัน</h2>
              <div className="portfolio-related-grid">
                {related.map((item) => (
                  <article key={item.slug}>
                    <ProjectCover
                      project={item}
                      href={`/projects/${item.slug}`}
                    />
                    <h3>
                      <Link href={`/projects/${item.slug}`}>{item.title}</Link>
                    </h3>
                    {item.location ? (
                      <p className="portfolio-location">
                        <MapPin size={16} aria-hidden="true" /> {item.location}
                      </p>
                    ) : null}
                  </article>
                ))}
              </div>
              <div className="button-row">
                <Link className="text-link" href="/projects">
                  กลับไปดูผลงานทั้งหมด <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
        ) : null}
      </article>
      <ContactCta />
    </>
  );
}
