import { 
  people01, 
  people02, 
  people03, 
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


// 🔹 NAV LINKS
export const navLinks = [
  { id: "home", title: "Home" },
  
  {
    id: "features",
    title: "Careers",
    link: "https://forms.gle/vbWq1vgvvVi5JJMr5", // ✅ Google Form
  },

  {
    id: "product",
    title: "About",
  },

  {
    id: "clients",
    title: "Contact",
    link: "https://wa.me/917820986647?text=Hi%20I%20am%20interested%20in%20ShreeTech%20Labs%20internship", // ✅ WhatsApp
  },
];


// 🔹 FEATURES (UNCHANGED)
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
      "Get verified certificates and build a portfolio that boosts your career.",
  },
];


// 🔹 FEEDBACK
export const feedback = [
  {
    id: "feedback-1",
    content:
      "ShreeTech Labs was created to help students move beyond theory and gain real-world experience through practical learning and live projects.",
    name: "Shirish Kanoje",
    title: "Founder & Developer",
    img: people01,
  },
];


// 🔹 STATS
export const stats = [
  { id: "stats-1", title: "Students Learning", value: "100+" },
  { id: "stats-2", title: "Projects Built", value: "10+" },
  { id: "stats-3", title: "Technologies", value: "5+" },
];


// 🔹 FOOTER LINKS
export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", link: "#product" }, // scroll
      { name: "Careers", link: "https://forms.gle/vbWq1vgvvVi5JJMr5" },
      { name: "Contact", link: "https://wa.me/917820986647" },
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
      { name: "Certificate Verification", link: "/verify" }, // ✅ your page
      {
        name: "Help",
        link: "mailto:shirishkanoje9@gmail.com", // ✅ email
      },
      { name: "Terms & Conditions", link: "/terms" },
    ],
  },
];


// 🔹 SOCIAL MEDIA
export const socialMedia = [
  { id: "social-media-1", icon: instagram, link: "#" },
  { id: "social-media-2", icon: facebook, link: "#" },
  { id: "social-media-3", icon: twitter, link: "#" },
  { id: "social-media-4", icon: linkedin, link: "#" },
];


// 🔹 CLIENTS (UNCHANGED)
export const clients = [
  { id: "client-1", logo: airbnb },
  { id: "client-2", logo: binance },
  { id: "client-3", logo: coinbase },
  { id: "client-4", logo: dropbox },
];