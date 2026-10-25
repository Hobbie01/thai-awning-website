import { WorkPhoto } from "@/components/site/sections";
import { type Project, getProjectCover } from "@/lib/projects";
import Link from "next/link";

export default function ProjectCover({
  project,
  href,
  priority = false,
  position = "center",
}: { project: Project; href?: string; priority?: boolean; position?: string }) {
  const cover = getProjectCover(project);
  const photo = (
    <WorkPhoto
      src={cover.src}
      alt={cover.alt}
      priority={priority}
      position={position}
      sizes={priority ? "(max-width: 1200px) 100vw, 1200px" : undefined}
    />
  );
  return (
    <figure className="project-cover">
      {href ? (
        <Link href={href} aria-label={`ดูผลงาน ${project.title}`}>
          {photo}
        </Link>
      ) : (
        photo
      )}
      {project.coverImage ? (
        <figcaption className="project-cover-note">
          <span>ภาพปรับด้วย AI</span>
          <Link
            href={`/projects/${project.slug}#original-photos`}
            aria-label={`ดูภาพต้นฉบับ ${project.title}`}
          >
            ดูภาพต้นฉบับ
          </Link>
        </figcaption>
      ) : null}
    </figure>
  );
}
