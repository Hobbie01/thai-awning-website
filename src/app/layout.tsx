import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { OrganizationJsonLd, pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "ผ้าใบกันสาด โครงเหล็กและหลังคา โดยช่างตู่",
  "ติดตั้งผ้าใบกันสาด ผ้าใบรางสไลด์ โครงเหล็กและหลังคา ดูผลงานจริงและปรึกษางานกับช่างตู่",
  "/",
);
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <body>
        <a className="skip-link" href="#main-content">
          ข้ามไปยังเนื้อหา
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
