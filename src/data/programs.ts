export type Program = {
  id: number;
  name: string;
  code: string;
  level: "D3" | "S1" | "S2";
  description: string;
  duration: string;
  seats: number;
  accreditation: string;
  specializations: string[];
  careerPath: string[];
};

export const PROGRAMS: Program[] = [
  {
    id: 1,
    name: "Sarjana Informatika",
    code: "S381",
    level: "S1",
    description:
      "Program Sarjana 4 tahun dengan kurikulum komprehensif mencakup teori dan praktik ilmu komputer, algoritma, database, dan software engineering. Fokus pada pengembangan software dan teknologi terkini.",
    duration: "4 Tahun",
    seats: 120,
    accreditation: "A - Terakreditasi BAN-PT & ABET",
    specializations: [
      "Software Engineering",
      "Data Science & Analytics",
      "Artificial Intelligence & Machine Learning",
      "Cloud Computing & DevOps",
      "Cybersecurity",
      "Mobile Application Development",
    ],
    careerPath: [
      "Software Developer",
      "Software Engineer",
      "Data Scientist",
      "AI/ML Engineer",
      "Cloud Architect",
      "Security Engineer",
      "Technical Lead",
      "CTO",
      "Entrepreneur/Startup Founder",
    ],
  },
  {
    id: 2,
    name: "Sarjana Sistem Informasi",
    code: "S382",
    level: "S1",
    description:
      "Program Sarjana 4 tahun yang menggabungkan ilmu komputer dengan bisnis dan manajemen. Fokus pada penerapan teknologi informasi dalam konteks bisnis dan solusi enterprise systems.",
    duration: "4 Tahun",
    seats: 100,
    accreditation: "A - Terakreditasi BAN-PT",
    specializations: [
      "Business Information Systems",
      "Enterprise Resource Planning (ERP)",
      "Business Intelligence & Analytics",
      "IT Project Management",
      "Information Security Management",
      "Digital Transformation",
    ],
    careerPath: [
      "Business Analyst",
      "System Analyst",
      "ERP Consultant",
      "IT Manager",
      "Business Process Analyst",
      "Solutions Architect",
      "IT Director",
      "CIO",
      "Management Consultant",
    ],
  },
  {
    id: 3,
    name: "Sarjana Desain Komunikasi Visual",
    code: "S383",
    level: "S1",
    description:
      "Program Sarjana 4 tahun yang menggabungkan seni desain dengan teknologi digital. Fokus pada pengembangan kreativitas visual, branding, multimedia, dan user experience design untuk era digital.",
    duration: "4 Tahun",
    seats: 80,
    accreditation: "B - Terakreditasi BAN-PT",
    specializations: [
      "Graphic Design & Branding",
      "UI/UX Design",
      "Web & Digital Design",
      "Multimedia Production",
      "Motion Graphics & Animation",
      "Photography & Videography",
      "Interactive Media",
    ],
    careerPath: [
      "Graphic Designer",
      "UI/UX Designer",
      "Web Designer",
      "Motion Graphics Designer",
      "Multimedia Designer",
      "Creative Director",
      "Brand Identity Specialist",
      "Digital Content Creator",
      "Design Entrepreneur",
      "Creative Agency Owner",
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Akreditasi Internasional",
    description: "Program S1 terakreditasi oleh ABET dan AUN-QA",
    icon: "🏆",
  },
  {
    title: "Kerjasama Industri",
    description: "Lebih dari 50 perusahaan IT multinasional bermitra dengan kami",
    icon: "🤝",
  },
  {
    title: "Fasilitas Modern",
    description: "Lab komputer, server room, dan studio produksi berkelas dunia",
    icon: "🖥️",
  },
  {
    title: "Dosen Berpengalaman",
    description: "100+ dosen dengan sertifikasi internasional dan pengalaman industri",
    icon: "👨‍🏫",
  },
  {
    title: "Penghargaan Mahasiswa",
    description:
      "Pemenang kompetisi nasional dan internasional di bidang IT dan inovasi",
    icon: "🥇",
  },
  {
    title: "Alumni Sukses",
    description: "Ribuan alumni bekerja di perusahaan Fortune 500 dan startup unicorn",
    icon: "⭐",
  },
];
