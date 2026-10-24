"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { site, services } from "@/lib/site";
import { Brand } from "./brand";
const links = [
  { href: "/", label: "หน้าแรก" },
  { href: "/#services", label: "บริการ" },
  { href: "/projects", label: "ผลงาน" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/contact", label: "ติดต่อเรา" },
];
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  function active(href: string) {
    if (href === "/") return pathname === "/";
    if (href === "/#services") return pathname.startsWith("/services/");
    return pathname.startsWith(href);
  }
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="เมนูหลัก">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={active(link.href) ? "active" : undefined}
              aria-current={active(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a className="header-phone" href={site.phoneHref}>
          <Phone size={19} aria-hidden="true" />
          <span>{site.phone}</span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="เมนูมือถือ"
        hidden={!open}
      >
        {links.map((link) => (
          <Link
            onClick={() => setOpen(false)}
            key={link.href}
            href={link.href}
            aria-current={active(link.href) ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
        <div className="mobile-services">
          <span>เลือกบริการ</span>
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              onClick={() => setOpen(false)}
            >
              {service.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
