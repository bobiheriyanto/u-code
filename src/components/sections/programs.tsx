"use client";

import React, { useState } from "react";
import { PROGRAMS } from "@/data/programs";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ChevronDown, GraduationCap, Briefcase } from "lucide-react";

const ProgramsSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="programs" className="relative w-full py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            Program Studi
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Tiga program studi unggulan yang dirancang untuk mempersiapkan Anda menjadi profesional 
            siap industri di bidang teknologi dan desain.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PROGRAMS.map((program) => (
            <Card 
              key={program.id}
              className="hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => setExpandedId(expandedId === program.id ? null : program.id)}
            >
              <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl">{program.name}</CardTitle>
                    <CardDescription className="text-blue-100">{program.code}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-white text-blue-600 ml-2">
                    {program.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">
                  {program.description}
                </p>

                {/* Quick Info */}
                <div className="space-y-3 mb-4 text-sm">
                  <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                    <span>Durasi:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{program.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                    <span>Kapasitas:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{program.seats} Mahasiswa</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                    <span>Akreditasi:</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">{program.accreditation}</span>
                  </div>
                </div>

                {/* Expand Button */}
                <Button 
                  variant="outline" 
                  className="w-full justify-between"
                >
                  Detail Lengkap
                  <ChevronDown 
                    size={18}
                    className={`transition-transform ${expandedId === program.id ? "rotate-180" : ""}`}
                  />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expanded Details */}
        {expandedId && (
          <Card className="bg-slate-50 dark:bg-slate-900 border-2 border-blue-500">
            <CardContent className="pt-8">
              {PROGRAMS.map((program) => {
                if (program.id !== expandedId) return null;

                return (
                  <div key={program.id} className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 dark:text-white">{program.name}</h3>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    {/* Specializations */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 dark:text-white">
                        <span className="text-2xl">🎯</span> Keahlian & Spesialisasi
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {program.specializations.map((spec, idx) => (
                          <div 
                            key={idx}
                            className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700"
                          >
                            <p className="text-slate-800 dark:text-slate-200 font-medium">{spec}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Career Paths */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 dark:text-white">
                        <Briefcase size={20} /> Prospek Karir
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {program.careerPath.map((path, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
                          >
                            <span className="text-blue-500">✓</span>
                            <p className="text-slate-800 dark:text-slate-200">{path}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <GraduationCap className="mr-2" size={18} />
                        Info Penerimaan
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Hubungi Kami
                      </Button>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        )}

        {/* Why Choose Us */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-8 text-center dark:text-white">
            Mengapa Memilih Fakultas Ilmu Komputer UNDHI?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Kurikulum Modern", desc: "Dirancang sesuai kebutuhan industri 4.0 dan perkembangan teknologi terkini" },
              { title: "Dosen Berpengalaman", desc: "Instruktur bersertifikat internasional dengan pengalaman industri proven" },
              { title: "Fasilitas Lengkap", desc: "Lab komputer modern, server room, dan studio produksi berkelas internasional" },
              { title: "Kerjasama Industri", desc: "Partnership dengan 50+ perusahaan multinasional untuk magang dan recruitment" },
              { title: "Akreditasi Internasional", desc: "Program S1 terakreditasi ABET dan AUN-QA untuk standar global" },
              { title: "Alumni Sukses", desc: "Ribuan alumni bekerja di Fortune 500 companies dan startup unicorn" },
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">{item.title}</h4>
                <p className="text-slate-700 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
