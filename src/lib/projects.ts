export type Project = {
  slug: string;
  title: string;
  category: "awning" | "roof" | "sliding";
  description: string;
  location?: string;
  serviceSlug: "awning" | "slide-awning" | "steel-roof";
  coverImage?: { src: string; alt: string };
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
      },
      {
        "src": "/images/work/striped-awning-entrance.webp",
        "alt": "กันสาดผ้าใบลายเหลืองครีมสองจุดบนบ้านผนังหิน สวนผึ้ง",
        "caption": "ภาพรวมกันสาดสองจุดบริเวณประตูทางเข้าบ้าน"
      }
    ],
    "sourceUrl": "https://web.facebook.com/photo.php?fbid=2634738073568083",
    "coverImage": {
      "src": "/images/enhanced/striped-awning-suan-phueng.webp",
      "alt": "ภาพปรับด้วย AI ของกันสาดผ้าใบลายเหลืองครีมบนบ้านผนังหิน"
    }
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
    ],
    "coverImage": {
      "src": "/images/enhanced/restaurant-front-awning.webp",
      "alt": "ภาพปรับด้วย AI ของผ้าใบกันสาดสีอ่อนหน้าร้านอาหาร"
    }
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
  },
  {
    "slug": "shop-steel-roof-ban-pong",
    "title": "โครงหลังคาหน้าอาคารร้านค้า บ้านโป่ง",
    "category": "roof",
    "description": "หลังคาเมทัลชีทพร้อมโครงเหล็กสีเข้มบริเวณหน้าอาคารร้านค้า เห็นแนวเสารับหลังคาและโครงสร้างด้านใต้หลังคาตลอดแนวหน้าร้าน",
    "location": "บ้านโป่ง ราชบุรี",
    "serviceSlug": "steel-roof",
    "images": [
      {
        "src": "/images/work/shop-steel-roof-ban-pong.webp",
        "alt": "หลังคาเมทัลชีทและโครงเหล็กสีเข้มหน้าอาคารร้านค้า บ้านโป่ง",
        "caption": "มุมมองโครงเหล็ก เสารับ และด้านใต้หลังคาหน้าร้าน"
      }
    ],
    "sourceUrl": "https://web.facebook.com/photo.php?fbid=2623644334677457",
    "coverImage": {
      "src": "/images/enhanced/shop-steel-roof-ban-pong.webp",
      "alt": "ภาพปรับด้วย AI ของโครงหลังคาสีเข้มหน้าอาคารร้านค้า บ้านโป่ง"
    }
  },
  {
    "slug": "navy-striped-awning-suan-phueng",
    "title": "กันสาดผ้าใบลายทางสีน้ำเงิน สวนผึ้ง",
    "category": "awning",
    "description": "ผ้าใบสีน้ำเงินเข้มลายเส้นสีอ่อนทรงโค้ง ติดตั้งเหนือช่องเปิดบนผนังไม้สีขาว พร้อมชายผ้าโค้งที่เก็บขอบด้วยสีอ่อน",
    "location": "สวนผึ้ง ราชบุรี",
    "serviceSlug": "awning",
    "images": [
      {
        "src": "/images/work/navy-striped-awning-suan-phueng.webp",
        "alt": "กันสาดผ้าใบสีน้ำเงินลายเส้นสีอ่อนติดผนังไม้สีขาว สวนผึ้ง",
        "caption": "กันสาดทรงโค้งและชายผ้าบริเวณช่องเปิดของอาคาร"
      }
    ],
    "sourceUrl": "https://web.facebook.com/photo/?fbid=2634737616901462",
    "coverImage": {
      "src": "/images/enhanced/navy-striped-awning-suan-phueng.webp",
      "alt": "ภาพปรับด้วย AI ของกันสาดผ้าใบสีน้ำเงินบนผนังไม้สีขาว สวนผึ้ง"
    }
  },
  {
    "slug": "brown-metal-sheet-roof",
    "title": "หลังคาเมทัลชีทสีน้ำตาล",
    "category": "roof",
    "description": "งานหลังคาเมทัลชีทสีน้ำตาลยื่นจากตัวอาคาร แสดงพื้นผิวแผ่นหลังคาและแนวรอยต่อกับผนังจากสองมุมมองระหว่างดำเนินงาน",
    "serviceSlug": "steel-roof",
    "images": [
      {
        "src": "/images/work/brown-metal-roof-wide.webp",
        "alt": "ภาพมุมกว้างด้านบนหลังคาเมทัลชีทสีน้ำตาลยื่นออกจากอาคาร",
        "caption": "มุมกว้างเห็นแนวแผ่นหลังคาบริเวณด้านหน้าอาคาร"
      },
      {
        "src": "/images/work/brown-metal-roof-detail.webp",
        "alt": "รายละเอียดแผ่นหลังคาเมทัลชีทสีน้ำตาลและแนวรอยต่อกับผนัง",
        "caption": "อีกมุมของหลังคางานเดียวกันระหว่างดำเนินงาน"
      }
    ],
    "sourceUrl": "https://web.facebook.com/photo.php?fbid=870835135804063"
  },
  {
    "slug": "white-frame-translucent-canopy",
    "title": "หลังคาโปร่งแสงโครงสีขาวข้างอาคาร",
    "category": "roof",
    "description": "หลังคาโปร่งแสงยึดกับตัวอาคารด้วยโครงสีขาวเหนือทางเดินด้านข้าง มีภาพทั้งด้านบนและด้านใต้ให้เห็นแนวโครงสร้างและแสงที่ผ่านลงมายังพื้นที่ใช้งาน",
    "serviceSlug": "steel-roof",
    "images": [
      {
        "src": "/images/work/white-translucent-canopy-frame.webp",
        "alt": "ด้านใต้หลังคาโปร่งแสงโครงสีขาวบริเวณทางเดินข้างอาคาร",
        "caption": "มุมด้านใต้เห็นแนวโครงสีขาวและพื้นที่ข้างอาคาร"
      },
      {
        "src": "/images/work/white-translucent-canopy-top.webp",
        "alt": "มุมด้านบนหลังคาโปร่งแสงแสดงแนวแผ่นหลังคาติดกับผนังอาคาร",
        "caption": "ภาพด้านบนของหลังคางานเดียวกัน"
      }
    ],
    "sourceUrl": "https://web.facebook.com/photo.php?fbid=870830539137856"
  },
  {
    "slug": "blue-gable-metal-roof",
    "title": "หลังคาเมทัลชีทจั่วสีน้ำเงิน",
    "category": "roof",
    "description": "งานหลังคาทรงจั่วมุงแผ่นเมทัลชีทสีน้ำเงินบริเวณหน้าอาคาร มีภาพด้านหน้า มุมเฉียง และภาพทีมช่างระหว่างติดตั้งให้เห็นรูปทรงและรายละเอียดของหน้างานเดียวกัน",
    "serviceSlug": "steel-roof",
    "images": [
      {
        "src": "/images/work/blue-gable-metal-roof-front.webp",
        "alt": "ภาพด้านหน้าหลังคาทรงจั่วเมทัลชีทสีน้ำเงินบริเวณหน้าอาคาร",
        "caption": "ภาพต้นฉบับด้านหน้าเห็นรูปทรงจั่วและแนวหลังคา"
      },
      {
        "src": "/images/work/blue-gable-metal-roof-angle.webp",
        "alt": "ภาพมุมเฉียงของหลังคาเมทัลชีทจั่วสีน้ำเงินงานเดียวกัน",
        "caption": "มุมเฉียงแสดงแนวหลังคาและความสัมพันธ์กับตัวอาคาร"
      },
      {
        "src": "/images/work/blue-gable-metal-roof-installation.webp",
        "alt": "ช่างกำลังทำงานบนหลังคาเมทัลชีทสีน้ำเงินระหว่างติดตั้ง",
        "caption": "ภาพระหว่างดำเนินงานบนหลังคา"
      }
    ],
    "sourceUrl": "https://web.facebook.com/photo.php?fbid=953667394187503",
    "coverImage": {
      "src": "/images/enhanced/blue-gable-metal-roof.webp",
      "alt": "ภาพปรับด้วย AI ของหลังคาเมทัลชีทจั่วสีน้ำเงินบริเวณหน้าอาคาร"
    }
  },
  {
    "slug": "white-steel-porch-roof",
    "title": "หลังคาระเบียงโครงเหล็กสีขาว",
    "category": "roof",
    "description": "หลังคาระเบียงข้างบ้านโทนสีส้มรองรับด้วยเสาและโครงเหล็กสีขาว มีภาพสองทิศทางของหน้างานเดียวกันให้เห็นแนวหลังคาตลอดพื้นที่ระเบียง",
    "serviceSlug": "steel-roof",
    "images": [
      {
        "src": "/images/work/white-porch-roof.webp",
        "alt": "แนวหลังคาระเบียงโครงเหล็กสีขาวข้างบ้านผนังสีส้ม",
        "caption": "ภาพต้นฉบับมองตามแนวโครงหลังคาและระเบียง"
      },
      {
        "src": "/images/work/white-porch-roof-reverse.webp",
        "alt": "มุมย้อนกลับของระเบียงบ้านสีส้มที่มีหลังคาและเสาสีขาว",
        "caption": "อีกทิศทางของหลังคาระเบียงงานเดียวกัน"
      }
    ],
    "sourceUrl": "https://web.facebook.com/photo.php?fbid=1081602391394002",
    "coverImage": {
      "src": "/images/enhanced/white-steel-porch-roof.webp",
      "alt": "ภาพปรับด้วย AI ของหลังคาระเบียงโครงเหล็กสีขาวข้างบ้านสีส้ม"
    }
  },
  {
    "slug": "green-house-front-canopy",
    "title": "โครงหลังคาสีเข้มหน้าบ้านโทนเขียว",
    "category": "roof",
    "description": "งานโครงหลังคาสีเข้มบริเวณหน้าบ้านโทนเขียวที่มีประตูสีขาวทรงโค้ง มีภาพทีมช่างขณะติดตั้งโครงและภาพหลังติดตั้งช่วงกลางคืนของหน้างานเดียวกัน",
    "serviceSlug": "steel-roof",
    "images": [
      {
        "src": "/images/work/green-house-front-canopy.webp",
        "alt": "ภาพกลางคืนของหลังคาโครงสีเข้มหน้าบ้านโทนเขียวพร้อมประตูโค้งสีขาว",
        "caption": "ภาพต้นฉบับหลังติดตั้งถ่ายในช่วงกลางคืน"
      },
      {
        "src": "/images/work/green-house-front-canopy-installation.webp",
        "alt": "ช่างสองคนกำลังติดตั้งโครงหลังคาบริเวณหน้าบ้านโทนเขียว",
        "caption": "ภาพระหว่างติดตั้งโครงของหน้างานเดียวกัน"
      }
    ],
    "sourceUrl": "https://web.facebook.com/photo.php?fbid=870835092470734",
    "coverImage": {
      "src": "/images/enhanced/green-house-front-canopy.webp",
      "alt": "ภาพปรับด้วย AI ของโครงหลังคาสีเข้มหน้าบ้านโทนเขียวในช่วงกลางคืน"
    }
  },
  {
    "slug": "steel-frame-in-progress",
    "title": "งานขึ้นโครงเหล็กก่อนมุงหลังคา",
    "category": "roof",
    "description": "ภาพระหว่างขึ้นโครงเหล็กสีเข้มก่อนมุงหลังคา เห็นแนวคานและโครงด้านบน รวมถึงภาพทีมช่างกับบันไดขณะทำงาน งานในภาพยังอยู่ระหว่างดำเนินการ",
    "serviceSlug": "steel-roof",
    "images": [
      {
        "src": "/images/work/steel-frame-in-progress-workers.webp",
        "alt": "ทีมช่างและบันไดระหว่างขึ้นโครงเหล็กก่อนมุงหลังคา",
        "caption": "ภาพต้นฉบับทีมช่างระหว่างดำเนินงาน"
      },
      {
        "src": "/images/work/steel-frame-in-progress-upper.webp",
        "alt": "แนวโครงเหล็กด้านบนเหนือผนังสีขาวที่ยังไม่ได้มุงหลังคา",
        "caption": "รายละเอียดโครงด้านบนก่อนมุงหลังคา"
      }
    ],
    "sourceUrl": "https://web.facebook.com/photo.php?fbid=1111075798446661",
    "coverImage": {
      "src": "/images/enhanced/steel-frame-in-progress.webp",
      "alt": "ภาพปรับด้วย AI ของโครงเหล็กที่ยังอยู่ระหว่างติดตั้งก่อนมุงหลังคา"
    }
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectCover(project: Project): { src: string; alt: string } {
  return project.coverImage ?? project.images[0];
}
