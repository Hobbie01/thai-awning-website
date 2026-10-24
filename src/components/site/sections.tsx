import { services, site } from "@/lib/site";
import { ArrowRight, ChevronDown, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
type Crumb = { label: string; href?: string };
export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "navy";
  external?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`button button-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}
export function WorkPhoto({
  src,
  alt,
  className = "",
  priority = false,
  position = "center",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  position?: string;
}) {
  return (
    <div className={`photo-frame ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 640px"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumbs" aria-label="เส้นทางหน้าเว็บ">
      <ol>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
export function PageHero({
  title,
  description,
  image,
  alt,
  breadcrumbs,
  eyebrow,
  imagePosition = "center",
  primaryHref = "/contact",
}: {
  title: ReactNode;
  description: string;
  image: string;
  alt: string;
  breadcrumbs?: Crumb[];
  eyebrow?: string;
  imagePosition?: string;
  primaryHref?: string;
}) {
  return (
    <section className="page-hero">
      <div className="container split">
        <div className="page-hero-copy">
          {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          <p className="section-lead">{description}</p>
          <div className="button-row">
            <ButtonLink href={primaryHref}>
              ปรึกษางานติดตั้ง <ArrowRight size={19} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={site.line} variant="outline" external>
              <MessageCircle size={19} aria-hidden="true" />
              ทัก LINE
            </ButtonLink>
          </div>
        </div>
        <WorkPhoto src={image} alt={alt} priority position={imagePosition} />
      </div>
    </section>
  );
}
export function ServiceCards({ exclude }: { exclude?: string }) {
  return (
    <div className="grid-three service-cards">
      {services
        .filter((service) => service.slug !== exclude)
        .map((service) => (
          <article key={service.slug} className="card">
            <Link
              href={`/services/${service.slug}`}
              tabIndex={-1}
              aria-hidden="true"
            >
              <WorkPhoto
                src={service.image}
                alt={service.alt}
                position={service.slug === "awning" ? "center 42%" : "center"}
              />
            </Link>
            <div className="card-body">
              {service.slug === "slide-awning" ? (
                <p className="service-photo-note">ภาพการทำงานของทีมช่าง</p>
              ) : null}
              <h3>
                <Link href={`/services/${service.slug}`}>{service.title}</Link>
              </h3>
              <p>{service.description}</p>
              <Link href={`/services/${service.slug}`} className="text-link">
                ดูรายละเอียด<span className="sr-only"> {service.title}</span>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
    </div>
  );
}
export function Faq({
  items,
  title = "คำถามที่พบบ่อย",
}: { items: { question: string; answer: string }[]; title?: string }) {
  return (
    <section className="section faq-section">
      <div className="container">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-heading">{title}</h2>
        <div className="faq-list">
          {items.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>
                <span className="number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.question}</span>
                <ChevronDown size={19} aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
export function ContactCta() {
  return (
    <section className="contact-cta section-navy">
      <div className="container">
        <div>
          <h2>
            พื้นที่ของคุณ
            <br />
            ให้ช่างตู่ช่วยดูแล
          </h2>
          <p>ปรึกษางานติดตั้งผ้าใบกันสาด และโครงหลังคา</p>
        </div>
        <div className="button-row">
          <ButtonLink href={site.phoneHref}>
            <Phone size={21} aria-hidden="true" />
            {site.phone}
          </ButtonLink>
          <ButtonLink href={site.line} variant="outline" external>
            <MessageCircle size={21} aria-hidden="true" />
            ทัก LINE
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
