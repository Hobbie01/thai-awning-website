export const site = {
  name: "ผ้าใบกันสาดช่างตู่",
  phone: "092-412-7392",
  phoneHref: "tel:+66924127392",
  line: "https://line.me/ti/p/4S-iTBNXxF",
  facebook: "https://www.facebook.com/changtuphab",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://thai-awning-website.vercel.app",
};
export const images = {
  awning: "/images/work/striped-awning.webp",
  installation: "/images/work/installation.webp",
  steel: "/images/work/steel-frame.webp",
  roof: "/images/work/metal-roof.webp",
  roofHome: "/images/work/roof-home.webp",
  sliding: "/images/work/installation.webp",
};
export const services = [
  { slug: "awning", title: "ผ้าใบกันสาด", description: "กันแดด กันฝน เพิ่มพื้นที่ใช้งาน สำหรับบ้านพักอาศัยและร้านค้า", image: images.awning, alt: "กันสาดผ้าใบลายเหลืองครีมเหนือประตูบ้านผนังหิน" },
  { slug: "slide-awning", title: "ผ้าใบรางสไลด์", description: "เลือกเปิดรับแสงหรือปิดบังแดด ให้เหมาะกับพื้นที่และการใช้งาน", image: images.sliding, alt: "ทีมช่างขณะติดตั้งผ้าใบกันสาด" },
  { slug: "steel-roof", title: "โครงเหล็กและหลังคา", description: "โครงเต็นท์ หลังคาผ้าใบ และเมทัลชีท เลือกรูปแบบให้เหมาะกับหน้างาน", image: images.roofHome, alt: "งานโครงเหล็กรองรับหลังคาบริเวณหน้าบ้าน" },
] as const;

