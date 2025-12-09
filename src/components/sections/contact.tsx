"use client";
import React from "react";
import ContactForm from "../ContactForm";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen max-w-7xl mx-auto ">
      <Link href={"#contact"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          GET IN TOUCH <br />
          WITH US
        </h2>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999] gap-8">
        {/* Contact Form Card */}
        <div className="backdrop-blur-md border border-white/10 dark:border-white/5 bg-white/5 dark:bg-white/[0.02] rounded-2xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300">
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Get In Touch
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Have a project or question? We&apos;d love to hear from you. Drop us a message below.
            </p>
          </div>
          <ContactForm />
        </div>

        {/* Contact Info Card */}
        <div className="flex flex-col justify-start space-y-6 mt-0 md:mt-0">
          {/* Email Card */}
          <div className="backdrop-blur-md border border-white/10 dark:border-white/5 bg-white/5 dark:bg-white/[0.02] rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Email</h4>
                <a
                  href={`mailto:${config.email}`}
                  className="text-neutral-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {config.email}
                </a>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="backdrop-blur-md border border-white/10 dark:border-white/5 bg-white/5 dark:bg-white/[0.02] rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 group-hover:from-purple-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.355.666.58 1.395.58 2.172 0 .777-.225 1.506-.58 2.172l1.548.773a1 1 0 01.54 1.06l-.74 4.435a1 1 0 01-.986.836H3a1 1 0 01-1-1V3z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Phone</h4>
                <p className="text-neutral-400">Coming soon</p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="backdrop-blur-md border border-white/10 dark:border-white/5 bg-white/5 dark:bg-white/[0.02] rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/20 group-hover:from-pink-500/30 group-hover:to-pink-600/30 transition-all duration-300">
                <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Location</h4>
                <p className="text-neutral-400">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
