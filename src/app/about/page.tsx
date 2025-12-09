"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FACULTY_HIGHLIGHTS, ACHIEVEMENTS } from "@/data/news-events";
import { Users, Award, Building2, BookOpen, Globe, Zap } from "lucide-react";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiKubuntu,
  SiPm2,
  SiPrettier,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { MdContentCopy } from "react-icons/md";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";

const AboutPage = () => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 dark:text-white">
            Tentang FIK UNDHI
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Fakultas Ilmu Komputer Universitas Dharma Indonesia adalah pusat keunggulan pendidikan 
            teknologi informasi yang berkomitmen untuk menghasilkan lulusan berkualitas, inovatif, 
            dan siap menghadapi tantangan industri digital.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="border-l-4 border-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white">
                <Globe size={24} className="text-blue-500" />
                Visi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Menjadi fakultas ilmu komputer terdepan di Indonesia yang menghasilkan lulusan 
                berkompetensi tinggi, inovatif, dan bermartabat dalam mengembangkan teknologi 
                informasi untuk kemajuan bangsa.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white">
                <Zap size={24} className="text-purple-500" />
                Misi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Menyelenggarakan pendidikan berkualitas tinggi, melakukan penelitian dan pengembangan 
                teknologi, serta memberikan kontribusi nyata kepada masyarakat melalui inovasi 
                teknologi informasi.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white">
                <Award size={24} className="text-red-500" />
                Nilai Inti
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li>✓ Integritas & Profesionalisme</li>
                <li>✓ Inovasi & Kreativitas</li>
                <li>✓ Kolaborasi & Kerjasama</li>
                <li>✓ Keunggulan & Komitmen</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* History & Achievement */}
        <div className="bg-white dark:bg-slate-900 rounded-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Sejarah & Pencapaian</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white flex items-center gap-2">
                <Building2 className="text-blue-600" /> Sejarah
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                Fakultas Ilmu Komputer didirikan pada tahun 2005 sebagai bagian dari Universitas 
                Dharma Indonesia. Sejak awal, kami berkomitmen untuk memberikan pendidikan teknologi 
                terbaik dengan kurikulum yang disesuaikan dengan kebutuhan industri.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Kini, dengan lebih dari 3.000 mahasiswa aktif dan ribuan alumni sukses, FIK UNDHI 
                terus berkembang menjadi salah satu pusat pendidikan informatika terkemuka di Indonesia.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white flex items-center gap-2">
                <Award className="text-yellow-600" /> Pencapaian Utama
              </h3>
              <ul className="space-y-3">
                {ACHIEVEMENTS.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <span className="text-2xl flex-shrink-0">{achievement.icon}</span>
                    <div>
                      <p className="font-semibold">{achievement.title}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{achievement.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 dark:text-white text-center">Pimpinan Fakultas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FACULTY_HIGHLIGHTS.map((faculty, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Users size={64} className="mx-auto mb-2 opacity-50" />
                    <p className="font-semibold">{faculty.name}</p>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold dark:text-white mb-2">{faculty.name}</h3>
                  <Badge className="mb-3">{faculty.position}</Badge>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 font-semibold">
                    {faculty.expertise}
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {faculty.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-8 md:p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-8">Hubungi Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Email",
                value: "info@fik-undhi.ac.id",
                icon: "📧",
              },
              {
                label: "Telepon",
                value: "+62 (274) 514544",
                icon: "📞",
              },
              {
                label: "Alamat",
                value: "Jl. Kusumanegara No. 191, Yogyakarta",
                icon: "📍",
              },
              {
                label: "Website",
                value: "www.fik-undhi.ac.id",
                icon: "🌐",
              },
            ].map((contact, idx) => (
              <div key={idx} className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl mb-2">{contact.icon}</div>
                <p className="text-sm opacity-90 mb-1">{contact.label}</p>
                <p className="font-semibold">{contact.value}</p>
                <Button
                  size="sm"
                  variant="ghost"
                  className="mt-2 text-white hover:bg-white/30 w-full justify-start"
                  onClick={() => copyToClipboard(contact.value, idx)}
                >
                  {copiedIndex === idx ? "✓ Copied" : "Copy"}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white dark:bg-slate-900 rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 dark:text-white text-center">Statistik & Data</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Mahasiswa Aktif", value: "3,200+", icon: "👥" },
              { label: "Alumni Tersebar", value: "8,500+", icon: "🎓" },
              { label: "Dosen Tetap", value: "120+", icon: "👨‍🏫" },
              { label: "Industri Partner", value: "50+", icon: "🤝" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</p>
                <p className="text-slate-600 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
