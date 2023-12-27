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
    title: "Training and Placement Co-ordinator",
    location: "Anand,Gujarat",
    description:"Mapped out training plans and schedules, designed and developed training programs",
    icon: React.createElement(FaReact),
    date: "June 2019 - Dec 2019",
  },
  {
    title: "Software Developer Intern",
    location: "Ahemdabad,Gujarat",
    description:"Produced comprehensive functional and technical documentation for all applications, showcasing problem solving and debugging skills throughout the development lifecycle",
    icon: React.createElement(FaReact),
    date: "Dec 2019 - May 2020",
  },
  {
    title: "Frontend Web Developer ",
    location: "Surat,Gujarat",
    description:"Innovated optimized landing pages in HTML and CSS, ensuring seamless integration and cross-browser compatibility",
    icon: React.createElement(FaReact),
    date: "May 2020 - May 2021",
  },
  {
    title: "Frontend Web Developer Intern",
    location: "Toronto,Ontario",
    description:"Designed User Interface &amp; User Experience for marketing websites, resulting in 26% increase in website traffic",
    icon: React.createElement(FaReact),
    date: "Aug 2022 - Oct 2022",
  },
  {
    title: "Freelancer",
    location: "Toronto,Ontario",
    description:"Developed 2 portfolio website, developed and debugged an exisiting client website",
    icon: React.createElement(FaReact),
    date: "Oct 2022 - present",
  },
] as const;

export const projectsData = [
  {
    title:"Interactive Map",
    description:
      "An interactive magzine designed in Adobe Indesign showing population of provinces of Canada when hovered",
    tags: ["Adobe Indesign"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Business Magzine",
    description:
      "An interactive magzine designed with side menu bar and scrolling text",
      tags: ["Adobe Indesign"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Magazine with pop-out video",
    description:
      "An interactive magazine designed with pop out video and audio",
      tags: ["Adobe Indesign"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Eagle Eye Drone Based Thermal Testing Kit",
    description:
      "Created a drone based thermal testing kit",
      tags: ["Ardino"],
    imageUrl: thermal,
  },
  {
    title: "Smart Steering Wheel",
    description:
      "A steering wheel made to verify details of registered driver before engine is started",
      tags: ["RFID"],
    imageUrl: steeringwheel,
  },
  {
    title: "Crowd Detection using drone",
    description:
      "A software developed to predict sudden change in crowd to avoid conflict",
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
