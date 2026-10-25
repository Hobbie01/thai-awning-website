export type Project = {
  slug: string;
  title: string;
  category: "awning" | "roof" | "sliding";
  description: string;
  location?: string;
  serviceSlug: "awning" | "slide-awning" | "steel-roof";
  images: { src: string; alt: string; caption: string }[];
  sourceUrl?: string;
};

export const projects: Project[] = [
  {
    "slug": "striped-awning-suan-phueng",
    "title": "กันสาดผ้าใบลายทาง บ้านพักอาศัย สวนผึ้ง",
    "category": "awning",
    "description": "กันสาดลายเหลือง–ครีมทรงโค้งเหนือประตูบ้านผนังหิน พร้อมภาพระหว่างติดตั้งและรายละเอียดชายผ้าใบ",
    "location": "สวนผึ้ง ราชบุรี",
    "serviceSlug": "awning",
    "images": [
      {
        "src": "/images/work/striped-awning.webp",
        "alt": "กันสาดผ้าใบลายเหลืองครีมเหนือประตูบ้านผนังหิน สวนผึ้ง",
        "caption": "รายละเอียดรูปทรงและชายผ้าใบ"
      },
      {
        "src": "/images/work/striped-awning-wide.webp",
        "alt": "ภาพมุมกว้างกันสาดผ้าใบที่บ้านพักอาศัยสวนผึ้ง",
        "caption": "มุมกว้างของพื้นที่ติดตั้ง"
      },
      {
        "src": "/images/work/installation.webp",
        "alt": "ทีมช่างกำลังติดตั้งผ้าใบกันสาดลายทาง",
        "caption": "ระหว่างการติดตั้งโดยทีมช่าง"
      }
    ],
    "sourceUrl": "https://web.facebook.com/photo.php?fbid=2634738073568083"
  },
  {
    "slug": "steel-roof-ban-pong",
    "title": "โครงเหล็กและหลังคาเมทัลชีทระเบียงบ้าน",
    "category": "roof",
    "description": "งานโครงเหล็กรองรับหลังคาบริเวณระเบียงชั้นบน เห็นทั้งโครงสร้างก่อนมุงและพื้นผิวหลังคาหลังติดตั้ง",
    "location": "บ้านโป่ง ราชบุรี",
    "serviceSlug": "steel-roof",
    "images": [
      {
        "src": "/images/work/metal-roof.webp",
        "alt": "หลังคาเมทัลชีทบริเวณระเบียงบ้าน บ้านโป่ง",
        "caption": "มุมมองด้านบนของหลังคา"
      },
      {
        "src": "/images/work/steel-frame.webp",
        "alt": "โครงเหล็กรองรับหลังคาบริเวณระเบียงบ้าน",
        "caption": "โครงสร้างระหว่างดำเนินงาน"
      }
    ],
    "sourceUrl": "https://web.facebook.com/photo.php?fbid=2613078579067366"
  },
  {
    "slug": "residential-steel-canopy",
    "title": "โครงหลังคาหน้าบ้านพักอาศัย",
    "category": "roof",
    "description": "โครงเหล็กสีเข้มรองรับหลังคาบริเวณประตูทางเข้าบ้าน เลือกรูปทรงเพิงให้สัมพันธ์กับตัวอาคาร",
    "serviceSlug": "steel-roof",
    "images": [
      {
        "src": "/images/work/roof-home.webp",
        "alt": "โครงหลังคาสีเข้มบริเวณประตูหน้าบ้าน",
        "caption": "ภาพงานหลังคาหน้าบ้านจากแฟ้มผลงานช่างตู่"
      }
    ]
  },
  {
    "slug": "restaurant-front-awning",
    "title": "ผ้าใบกันสาดหน้าร้านอาหาร",
    "category": "awning",
    "description": "ผ้าใบกันสาดสีอ่อนบริเวณด้านหน้าร้านอาหาร ช่วยเพิ่มร่มเงาเหนือทางเดินและพื้นที่ใช้งานหน้าร้าน",
    "serviceSlug": "awning",
    "images": [
      {
        "src": "/images/work/restaurant-awning.webp",
        "alt": "กันสาดผ้าใบสีอ่อนด้านหน้าร้านอาหาร",
        "caption": "แนวกันสาดด้านหน้าร้านอาหาร"
      }
    ]
  },
  {
    "slug": "yellow-shop-roof",
    "title": "โครงหลังคาหน้าร้านโทนเหลือง",
    "category": "roof",
    "description": "หลังคาโครงเหล็กบริเวณหน้าร้าน พร้อมงานปิดขอบสีเหลืองที่เข้ากับโทนสีของอาคาร",
    "serviceSlug": "steel-roof",
    "images": [
      {
        "src": "/images/work/yellow-shop-roof.webp",
        "alt": "งานโครงหลังคาหน้าร้านพร้อมปิดขอบสีเหลือง",
        "caption": "รายละเอียดแนวหลังคาและขอบด้านหน้า"
      }
    ]
  },
  {
    "slug": "cream-retractable-awning",
    "title": "กันสาดผ้าใบแขนพับสีครีม",
    "category": "awning",
    "description": "ผ้าใบสีครีมพร้อมแขนพับยึดกับตัวบ้าน แสดงรายละเอียดผ้าใบ แขนพับ และพื้นที่ใต้กันสาด",
    "serviceSlug": "awning",
    "images": [
      {
        "src": "/images/work/cream-retractable.webp",
        "alt": "กันสาดผ้าใบสีครีมพร้อมแขนพับบริเวณข้างบ้าน",
        "caption": "ผ้าใบและชุดแขนพับจากงานติดตั้งจริง"
      }
    ]
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

