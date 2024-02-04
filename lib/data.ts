import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import thermal from "@/public/thermal.png";
import drone from "@/public/drone.png";
import steeringwheel from "@/public/steeringwheel.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer Intern",
    description: "Company: Magneto IT Solutions<br>Built APIs, applied JavaScript, used SQL, managed e-commerce
                  inventory, and developed email functionality during an internship.",
    location: "Ahmedabad, Gujarat",
    icon: React.createElement(FaReact),
    date: "Dec 2019 - May 2020",
  },
  {
    title: "Frontend Web Developer ",
    description: "Company: Canara Bank<br>Followed SDLC, developed APIs, ensured compatibility, participated in Agile, translated
                  designs into code, optimized performance, and utilized CI/CD pipelines.",
    location: "Ahmedabad, Gujarat",
    icon: React.createElement(FaReact),
    date: "May 2020 - May 2021",
  },
  {
    title: "Frontend Web Developer",
    description: "Company: InsyghtAi<br>Developed and maintained web applications using modern technologies, improved 
                  code quality, and collaborated with teams for usability and integration.",
    location: "Toronto, Ontario",
    icon: React.createElement(FaReact),
    date: "Aug 2021 - Present",
  },
  ] as const;

export const projectsData = [
  {
    title:"Interactive Map",
    description:
      "An interactive magazine designed in Adobe Indesign showing the population of provinces of Canada when hovered",
    tags: ["Adobe Indesign"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Business Magzine",
    description:
      "An interactive magazine designed with side menu bar and scrolling text",
      tags: ["Adobe Indesign"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Magazine with pop-out video",
    description:
      "An interactive magazine designed with pop-out video and audio",
      tags: ["Adobe Indesign"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Eagle Eye Drone-Based Thermal Testing Kit",
    description:
      "Created a drone-based thermal testing kit",
      tags: ["Arduino"],
    imageUrl: thermal,
  },
  {
    title: "Smart Steering Wheel",
    description:
      "A steering wheel made to verify details of the registered driver before the engine is started",
      tags: ["RFID"],
    imageUrl: steeringwheel,
  },
  {
    title: "Crowd Detection using Drone",
    description:
      "A software developed to predict sudden change in the crowd to avoid conflict",
      tags: ["K-mean"],
    imageUrl: drone,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Django",
  "Framer Motion",
  "jQuery",
  "Magento",
  "Adobe InDesign",
  "Adobe Photoshop",
  "Adobe Illustrator",
] as const;
