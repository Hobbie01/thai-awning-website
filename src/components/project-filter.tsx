"use client";

import ProjectCover from "@/components/project-cover";
import type { Project } from "@/lib/projects";
import { ArrowRight, Images, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { id: "all", label: "ทั้งหมด" },
  { id: "awning", label: "ผ้าใบกันสาด" },
  { id: "sliding", label: "ผ้าใบรางสไลด์" },
  { id: "roof", label: "โครงหลังคา" },
];

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("all");
  const visible = projects.filter(
    (project) => active === "all" || project.category === active,
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
          ? `แสดงผลงาน ${visible.length} งาน · ${visible.reduce((count, project) => count + project.images.length, 0)} ภาพ`
          : "ยังไม่มีภาพผลงานในหมวดนี้"}
      </output>
      {visible.length ? (
        <div className="inner-project-grid portfolio-grid">
          {visible.map((project) => (
            <article
              className="card inner-project-card portfolio-card"
              key={project.slug}
            >
              <ProjectCover
                project={project}
                href={`/projects/${project.slug}`}
                eager
              />
              <div className="card-body">
                <div className="portfolio-card-meta">
                  <span className="inner-tag">
                    {
                      categories.find(
                        (category) => category.id === project.category,
                      )?.label
                    }
                  </span>
                  <span>
                    <Images size={15} aria-hidden="true" />{" "}
                    {project.images.length} ภาพ
                  </span>
                </div>
                <h2>
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </h2>
                {project.location ? (
                  <p className="portfolio-location">
                    <MapPin size={16} aria-hidden="true" /> {project.location}
                  </p>
                ) : null}
                <p>{project.description}</p>
                <Link className="text-link" href={`/projects/${project.slug}`}>
                  ดูรายละเอียดและภาพทั้งหมด{" "}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="inner-empty">
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
