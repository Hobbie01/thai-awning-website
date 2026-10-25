import { WorkPhoto } from "@/components/site/sections";
import { type Project, getProjectCover } from "@/lib/projects";
import Link from "next/link";

export default function ProjectCover({
  project,
  href,
  priority = false,
  eager = false,
  position,
}: {
  project: Project;
  href?: string;
  priority?: boolean;
  eager?: boolean;
  position?: string;
}) {
  const cover = getProjectCover(project);
  const photo = (
    <WorkPhoto
      src={cover.src}
      alt={cover.alt}
      priority={priority}
      loading={eager ? "eager" : undefined}
      position={position ?? cover.position ?? "center"}
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
          <span>ภาพปรับแต่ง</span>
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
