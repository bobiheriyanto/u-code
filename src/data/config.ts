const config = {
  title: "Fakultas Ilmu Komputer - Universitas Dharma Indonesia",
  description: {
    long: "Selamat datang di Fakultas Ilmu Komputer Universitas Dharma Indonesia. Kami menyediakan pendidikan berkualitas tinggi dalam ilmu komputer, informatika, dan teknologi informasi dengan kurikulum modern, dosen berpengalaman, dan fasilitas state-of-the-art.",
    short:
      "Fakultas Ilmu Komputer Universitas Dharma Indonesia - Pendidikan Teknologi Informasi Berkualitas dengan Fokus Inovasi dan Praktik Industri.",
  },
  keywords: [
    "Fakultas Ilmu Komputer",
    "Universitas Dharma Indonesia",
    "UNDHI",
    "Informatika",
    "Teknologi Informasi",
    "Pendidikan IT",
    "Program Studi",
    "Computer Science",
    "Web Development",
    "Software Engineering",
    "Data Science",
    "Artificial Intelligence",
    "Cybersecurity",
    "Cloud Computing",
    "Machine Learning",
    "Mobile Development",
    "Database",
    "Networking",
  ],
  author: "Fakultas Ilmu Komputer UNDHI",
  email: "info@fik-undhi.ac.id",
  site: "https://fik-undhi.ac.id",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/school/universitas-dharma-indonesia/",
    twitter: "https://twitter.com/undhi_official/",
    github: "https://github.com/fik-undhi/",
  },
};
export { config };
