import {
  people01,
  people02,
  people03,
  people04,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star
} from "../assets";


import project1 from "../assets/project/project1.png";
import project2 from "../assets/project/project2.png";


// 🔹 NAV LINKS
export const navLinks = [
  { id: "home", title: "Home", link: "/" },

  {
    id: "career",
    title: "Careers",
    link: "https://forms.gle/vbWq1vgvvVi5JJMr5",
  },

  { id: "about", title: "About", link: "#about" },

  {
    id: "contact",
    title: "Contact",
    link: "https://wa.me/917820986647?text=Hi%20I%20am%20interested%20in%20ShreeTech%20Labs",
  },

  { id: "team", title: "Team", link: "/team" },
  { id: "projects", title: "Projects", link: "/projects" },
];


// 🔹 TEAM DATA
export const teamMembers = [
  {
    id: "team-1",
    name: "Shirish Kanoje",
    role: "Founder & Java Full Stack Developer",
    img: people01,
  },
  {
    id: "team-2",
    name: "Sunny Bhujbal",
    role: "Backend Developer",
    img: people03,
  },
  {
    id: "team-3",
    name: "Rohan Gore",
    role: "Frontend Developer",
    img: people04,
  },
  {
    id: "team-4",
    name: "Laxman Ghodke",
    role: "Frontend Engineer",
    img: people02,
  },
];


// 🔹 PROJECTS DATA (UPDATED WITH IMAGE)
export const projectsData = [
    {
    id: "project-1",
    company: "ABC Pvt Ltd",
    project: "Restaurant Menu Website",
    description:
      "A restaurant website that displays a complete digital menu along with past menu history. Users can explore dishes, categories, and previous menu versions without ordering functionality.",
    tech: "Html, Css, Js, Spring Boot, MySQL",
    link: "https://resoto-5itc.vercel.app/",
    image: project1,
  },
    {
    id: "project-2",
    company: "ShreeJay Tech Labs",
    project: "SyncBeat",
    description:
      "Real-time music synchronization and collaborative whiteboard platform with room-based watch parties, YouTube integration, shared notes, and mobile support.",
    tech: "React, Firebase, YouTube API, Firestore, Realtime Database",
    link: "https://syncbeat-music.vercel.app/",
    image: project2,
  },
];


// 🔹 FEATURES
export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Internship Programs",
    content:
      "Work on real-world projects and gain practical experience guided by mentors.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Career Growth",
    content:
      "Build strong technical skills and prepare yourself for real industry opportunities.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Certification",
    content:
      "Get verified certificates and build a strong portfolio.",
  },
];


// 🔹 FOUNDER
export const founder = [
  {
    id: "founder",
    content:
      "ShreeTech Labs bridges the gap between real-world skills and industry needs by connecting talent with companies through practical solutions and live projects.",
    name: "Shirish Kanoje",
    title: "Founder & Developer",
    img: people01,
  },
];


// 🔹 STATS
export const stats = [
  { id: "stats-1", title: "People Connected", value: "100+" },
  { id: "stats-2", title: "Projects Delivered", value: "10+" },
  { id: "stats-3", title: "Technologies Used", value: "5+" },
];


// 🔹 FOOTER LINKS
export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", link: "#about" },
      { name: "Careers", link: "https://forms.gle/vbWq1vgvvVi5JJMr5" },
      { name: "Team", link: "/team" },
      { name: "Projects", link: "/projects" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Internships", link: "https://forms.gle/vbWq1vgvvVi5JJMr5" },
      { name: "Web Development", link: "#" },
      { name: "Training", link: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Certificate Verification", link: "/verify" },
      { name: "Help", link: "mailto:shirishkanoje9@gmail.com" },
      { name: "Terms & Conditions", link: "/terms" },
    ],
  },
];


// 🔹 SOCIAL MEDIA
export const socialMedia = [
  // { id: "social-media-1", icon: instagram, link: "#" },
  // { id: "social-media-2", icon: facebook, link: "#" },
  // { id: "social-media-3", icon: twitter, link: "#" },
  { id: "social-media-4", icon: linkedin, link: "https://www.linkedin.com/company/shreejaytechlabs" },
];


// 🔹 CLIENTS
export const clients = [
  { id: "client-1", logo: airbnb },
  { id: "client-2", logo: binance },
  { id: "client-3", logo: coinbase },
  { id: "client-4", logo: dropbox },
];
