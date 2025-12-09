export type NewsArticle = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string;
  featured: boolean;
};

export type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: "seminar" | "workshop" | "kompetisi" | "gathering" | "lainnya";
  image: string;
  capacity: number;
  registered: number;
  url: string;
};

export const LATEST_NEWS: NewsArticle[] = [
  {
    id: 1,
    title: "FIK UNDHI Raih Peringkat Tertinggi dalam Akreditasi BAN-PT 2024",
    excerpt:
      "Fakultas Ilmu Komputer berhasil meraih akreditasi A dalam evaluasi program studi tahun 2024, membuktikan komitmen kami terhadap kualitas pendidikan.",
    date: "2024-12-05",
    author: "Admin",
    category: "Prestasi",
    image: "/assets/news/akreditasi.jpg",
    featured: true,
    content:
      "Dengan bangga kami umumkan bahwa Fakultas Ilmu Komputer Universitas Dharma Indonesia telah meraih akreditasi A dari BAN-PT dalam evaluasi terbaru tahun 2024. Pencapaian ini mencerminkan dedikasi seluruh civitas akademika dalam menjaga standar kualitas pendidikan...",
  },
  {
    id: 2,
    title: "Workshop Cloud Computing dengan AWS dan Google Cloud",
    excerpt:
      "Mahasiswa FIK mengikuti workshop eksklusif bersama praktisi senior dari AWS dan Google Cloud untuk memperdalam pemahaman cloud technologies.",
    date: "2024-11-28",
    author: "Humas",
    category: "Workshop",
    image: "/assets/news/cloud-workshop.jpg",
    featured: true,
    content:
      "Workshop intensif 2 hari menampilkan best practices dalam cloud computing, containerization, dan deployment strategies modern...",
  },
  {
    id: 3,
    title: "Mahasiswa FIK Juara Hackathon Nasional 2024",
    excerpt:
      "Tim mahasiswa kami memenangkan hackathon nasional dengan menghadirkan solusi AI untuk deteksi penyakit berbasis computer vision.",
    date: "2024-11-15",
    author: "Admin",
    category: "Prestasi",
    image: "/assets/news/hackathon.jpg",
    featured: false,
    content:
      "Dalam kompetisi hackathon yang diikuti 100+ tim dari seluruh Indonesia, tim kami berhasil meraih juara utama dengan proyek...",
  },
  {
    id: 4,
    title: "Career Fair 2024: Bertemu 40+ Perusahaan IT Terkemuka",
    excerpt:
      "Fakultas mengadakan career fair terbesar dengan kehadiran perusahaan multinasional dan startup unicorn untuk program recruitment dan magang.",
    date: "2024-10-20",
    author: "Karir",
    category: "Career",
    image: "/assets/news/career-fair.jpg",
    featured: false,
    content: "Event tahunan ini menjadi kesempatan emas bagi mahasiswa untuk networking dengan profesional industri...",
  },
];

export const UPCOMING_EVENTS: Event[] = [
  {
    id: 1,
    title: "Seminar Artificial Intelligence: Trends dan Aplikasi 2025",
    description:
      "Seminar dari pembicara internasional tentang tren terbaru AI dan implementasinya di berbagai industri. Gratis untuk semua mahasiswa.",
    date: "2024-12-15",
    time: "09:00 - 12:00",
    location: "Aula Utama FIK UNDHI",
    category: "seminar",
    image: "/assets/events/ai-seminar.jpg",
    capacity: 500,
    registered: 342,
    url: "https://example.com/ai-seminar",
  },
  {
    id: 2,
    title: "Workshop: Build Full-Stack Web App with Next.js",
    description:
      "Workshop hands-on untuk membuat aplikasi web modern menggunakan Next.js, TypeScript, dan Tailwind CSS. Peserta akan membuat project nyata.",
    date: "2024-12-18",
    time: "13:00 - 17:00",
    location: "Lab Komputer B, FIK UNDHI",
    category: "workshop",
    image: "/assets/events/nextjs-workshop.jpg",
    capacity: 40,
    registered: 38,
    url: "https://example.com/nextjs-workshop",
  },
  {
    id: 3,
    title: "Kompetisi Coding: UNDHI Code Challenge 2024",
    description:
      "Kompetisi programming tingkat universitas dengan hadiah jutaan rupiah. Terbuka untuk mahasiswa S1 dan D3 semua program studi.",
    date: "2024-12-22",
    time: "08:00 - 14:00",
    location: "Online & Offline (Lab)",
    category: "kompetisi",
    image: "/assets/events/code-challenge.jpg",
    capacity: 200,
    registered: 156,
    url: "https://example.com/code-challenge",
  },
  {
    id: 4,
    title: "Campus Gathering: Alumni & Student Networking",
    description:
      "Acara berkumpul alumni sukses dengan mahasiswa untuk berbagi pengalaman, tips karir, dan peluang kerja di industri IT.",
    date: "2025-01-10",
    time: "15:00 - 18:00",
    location: "Student Center UNDHI",
    category: "gathering",
    image: "/assets/events/alumni-gathering.jpg",
    capacity: 300,
    registered: 127,
    url: "https://example.com/alumni-gathering",
  },
];

export const FACULTY_HIGHLIGHTS = [
  {
    name: "Dr. Budi Santoso, S.Kom, M.T.",
    position: "Dekan Fakultas Ilmu Komputer",
    expertise: "Software Architecture & Cloud Computing",
    image: "/assets/faculty/dekan.jpg",
    bio: "Memiliki pengalaman 20+ tahun di industri IT dan telah mempublikasikan 50+ paper internasional.",
  },
  {
    name: "Prof. Dr. Siti Nurhaliza, M.Sc.",
    position: "Ketua Program Studi Informatika",
    expertise: "Artificial Intelligence & Machine Learning",
    image: "/assets/faculty/ketua-informatika.jpg",
    bio: "Peneliti aktif di bidang AI dengan kolaborasi bersama universitas top dunia.",
  },
  {
    name: "Dr. Ahmad Wijaya, S.T., M.Eng.",
    position: "Koordinator Kerjasama Industri",
    expertise: "Cybersecurity & Network Systems",
    image: "/assets/faculty/koordinator-industri.jpg",
    bio: "Penghubung antara akademis dan industri dengan jaringan 50+ perusahaan partner.",
  },
];
