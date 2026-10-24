"use client";
import { WorkPhoto } from "@/components/site/sections";
import { images } from "@/lib/site";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { id: "all", label: "ทั้งหมด" },
  { id: "awning", label: "ผ้าใบกันสาด" },
  { id: "sliding", label: "ผ้าใบรางสไลด์" },
  { id: "roof", label: "โครงหลังคา" },
];
const works = [
  {
    category: "awning",
    title: "กันสาดผ้าใบลายทาง บ้านพักอาศัย สวนผึ้ง",
    description:
      "กันสาดลายเหลือง–ครีม บริเวณทางเข้าบ้านผนังหิน ดูรายละเอียดงานและภาพขณะติดตั้ง",
    image: images.awning,
    alt: "กันสาดผ้าใบลายทางที่บ้านพักอาศัย สวนผึ้ง",
    href: "/projects/striped-awning-suan-phueng",
    link: "ดูรายละเอียดผลงาน",
  },
  {
    category: "roof",
    title: "งานโครงเหล็ก",
    description: "ภาพงานโครงเหล็กจากหน้างานจริงของช่างตู่",
    image: images.steel,
    alt: "โครงเหล็กจากงานจริงของช่างตู่",
    href: "/services/steel-roof",
    link: "ดูบริการโครงเหล็กและหลังคา",
  },
  {
    category: "roof",
    title: "งานหลังคาเมทัลชีท",
    description: "ภาพหลังคาเมทัลชีทจากผลงานจริง ดูแนวทางเลือกวัสดุและเตรียมพื้นที่ก่อนติดตั้ง",
    image: images.roof,
    alt: "หลังคาเมทัลชีทจากงานติดตั้งจริง",
    href: "/services/steel-roof",
    link: "ดูบริการหลังคา",
  },
];
export default function ProjectFilter() {
  const [active, setActive] = useState("all");
  const visible = works.filter(
    (work) => active === "all" || work.category === active,
  );
  return (
    <div>
      <fieldset className="inner-filter">
        <legend className="sr-only">กรองประเภทผลงาน</legend>
        {categories.map((category) => (
          <button
            type="button"
            key={category.id}
            aria-pressed={active === category.id}
            onClick={() => setActive(category.id)}
          >
            {category.label}
          </button>
        ))}
      </fieldset>
      <output className="inner-filter-status" aria-live="polite">
        {visible.length
          ? `แสดงภาพผลงาน ${visible.length} รายการ`
          : "ยังไม่มีภาพผลงานในหมวดนี้"}
      </output>
      {visible.length ? (
        <div className="inner-project-grid">
          {visible.map((work, index) => (
            <article
              className={`card inner-project-card ${index === 0 && active !== "roof" ? "inner-project-featured" : ""}`}
              key={work.title}
            >
              <WorkPhoto src={work.image} alt={work.alt} />
              <div className="card-body">
                <span className="inner-tag">
                  {work.category === "awning"
                    ? "ผ้าใบกันสาด"
                    : "โครงเหล็กและหลังคา"}
                </span>
                <h2>{work.title}</h2>
                <p>{work.description}</p>
                <Link className="text-link" href={work.href}>
                  {work.link} <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="inner-empty">
          <span className="eyebrow">ผ้าใบรางสไลด์</span>
          <h2>ดูแนวทางเลือกผ้าใบรางสไลด์</h2>
          <p>
            กำลังรวบรวมภาพผลงานหมวดนี้
            คุณสามารถอ่านรายละเอียดระบบรางและส่งรูปพื้นที่ให้ช่างช่วยแนะนำรูปแบบที่เหมาะสมได้
          </p>
          <Link className="text-link" href="/services/slide-awning">
            ดูบริการผ้าใบรางสไลด์ <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link className="text-link" href="/contact">
            ปรึกษาพื้นที่ติดตั้ง <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      )}
    </div>
  );
}
