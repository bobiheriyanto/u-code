"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import LoadingAnimation from "../loading-animation";

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto">
      <Link href={"#projects"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-6",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-4"
          )}
        >
          PROJECTS
        </h2>
      </Link>
      <LoadingAnimation />
    </section>
  );
};

export default ProjectsSection;
