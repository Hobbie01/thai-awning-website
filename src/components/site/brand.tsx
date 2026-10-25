import Link from "next/link";
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="ช่างตู่ ผ้าใบกันสาด หน้าแรก">
      <svg viewBox="0 0 80 52" width="72" height="48" aria-hidden="true">
        <path d="M15 4h50l13 27H2Z" fill="#f7c64a" />
        <path
          d="M15 4h12L18 31H2ZM39 4h10l5 27H34ZM61 4h4l13 27H68Z"
          fill="#132d46"
        />
        <path
          d="M2 31h16v8a8 8 0 0 1-16 0ZM34 31h20v8a10 10 0 0 1-20 0ZM68 31h10v8a5 5 0 0 1-10 0Z"
          fill="#132d46"
        />
        <path
          d="M18 31h16v8a8 8 0 0 1-16 0ZM54 31h14v8a7 7 0 0 1-14 0Z"
          fill="#f7c64a"
        />
      </svg>
      <span>
        <strong>ช่างตู่</strong>
        <small>ผ้าใบ · กันสาด</small>
      </span>
    </Link>
  );
}
