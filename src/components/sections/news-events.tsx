"use client";

import React, { useState } from "react";
import { LATEST_NEWS, UPCOMING_EVENTS } from "@/data/news-events";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const NewsEventsSection = () => {
  const [activeTab, setActiveTab] = useState<"news" | "events">("news");

  return (
    <section id="news-events" className="relative w-full py-20 px-4 md:px-8 lg:px-16 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            Berita & Event
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Ikuti perkembangan terbaru dan jadilah bagian dari kegiatan Fakultas Ilmu Komputer UNDHI
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 justify-center mb-12">
          <Button
            variant={activeTab === "news" ? "default" : "outline"}
            onClick={() => setActiveTab("news")}
            className="px-8"
          >
            📰 Berita Terbaru
          </Button>
          <Button
            variant={activeTab === "events" ? "default" : "outline"}
            onClick={() => setActiveTab("events")}
            className="px-8"
          >
            🎯 Upcoming Events
          </Button>
        </div>

        {/* News Tab */}
        {activeTab === "news" && (
          <div className="space-y-6">
            {LATEST_NEWS.map((article) => (
              <Card 
                key={article.id} 
                className={`overflow-hidden hover:shadow-lg transition-all ${article.featured ? "border-2 border-blue-500" : ""}`}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-blue-400 to-cyan-400 relative">
                    {article.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-red-500 text-white">Featured</Badge>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary">{article.category}</Badge>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {new Date(article.date).toLocaleDateString("id-ID")}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 dark:text-white hover:text-blue-600 transition cursor-pointer">
                      {article.title}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500 dark:text-slate-400">by {article.author}</span>
                      <Button variant="ghost" className="text-blue-600 dark:text-blue-400">
                        Baca Selengkapnya <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Events Tab */}
        {activeTab === "events" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {UPCOMING_EVENTS.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="h-40 bg-gradient-to-br from-purple-400 to-pink-400 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl">
                      {event.category === "seminar" && "🎤"}
                      {event.category === "workshop" && "🛠️"}
                      {event.category === "kompetisi" && "🏆"}
                      {event.category === "gathering" && "🤝"}
                      {event.category === "lainnya" && "📌"}
                    </span>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <Badge className="mb-3 bg-purple-500">{event.category}</Badge>
                  <h3 className="text-xl font-bold mb-2 dark:text-white line-clamp-2">{event.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <Calendar size={16} className="text-blue-600" />
                      <span>{new Date(event.date).toLocaleDateString("id-ID")} • {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <MapPin size={16} className="text-red-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <Users size={16} className="text-green-600" />
                      <span>{event.registered}/{event.capacity} Peserta Terdaftar</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      />
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Daftar Sekarang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Lihat Semua {activeTab === "news" ? "Berita" : "Event"}
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
