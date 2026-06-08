import { Icons } from "@/components/icons";
import { Docker } from "@/components/ui/svgs/docker";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Python } from "@/components/ui/svgs/python";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { FileTextIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Med Ali Jerbi",
  initials: "MAJ",
  url: "https://dali012.me",
  location: "Italy",
  locationLink: "https://www.google.com/maps/place/Italy",
  description:
    "Fullstack Developer, Odoo and ERP specialist, and AI enthusiast building production-grade web applications, ecommerce platforms, and internal business systems.",
  summary:
    "I am a Fullstack Developer with 3+ years of experience across web applications, ecommerce, internal ERP systems, and DevOps. I am currently building custom Odoo SH v19 modules for a retail clothing company while pursuing an MSc in Data Science. My work spans requirements analysis, database design, application development, deployment, Linux operations, and AI-assisted business workflows.",
  avatarUrl: "/avatar.webp",
  cvUrl: "/Med-Ali-Jerbi-CV.pdf",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Odoo Framework", imageIcon: "/odoo.webp" },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "REST APIs", imageIcon: "/rest.png" },
    { name: "GraphQL", imageIcon: "/graphql.png" },
    { name: "Docker", icon: Docker },
    { name: "Linux", imageIcon: "/linux.jpg" },
    { name: "AWS EC2", imageIcon: "/aws-e2.png" },
    { name: "AWS S3", imageIcon: "/aws-s3.png" },
    { name: "Nginx", imageIcon: "/nginx.png" },
    { name: "Machine Learning" },
    { name: "AI Agents" },
    { name: "Pandas" },
    { name: "scikit-learn" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/cv", icon: FileTextIcon, label: "CV" },
  ],
  contact: {
    email: "contact@dali012.me",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dali012",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/med-ali-jerbi-a433aa198/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:contact@dali012.me",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Dimensione Immagine",
      href: "https://www.dimensioneimmagineabbigliamento.it/",
      badges: [],
      location: "Italy, Remote",
      title: "Fullstack Developer",
      logoUrl: "/dimensione-immagine.png",
      start: "2025",
      end: "Present",
      description:
        "Building custom Odoo SH v19 modules for pricing, discount rules, inventory by product attributes and categories, and warehouse/location logic. Architecting an AI agent integrated with Odoo to automate business operations and decision-making workflows.",
    },
    {
      company: "Freelance",
      href: "https://github.com/dali012",
      badges: [],
      location: "Remote, client in Nice, France",
      title: "Freelance Web Application Developer",
      logoUrl: "/freelance.webp",
      start: "Jan 2024",
      end: "Present",
      description:
        "Developed a modern web application for a carpentry company with dynamic project portfolio management, multilingual French and English support, client-company communication workflows, and SEO-ready responsive pages.",
    },
    {
      company: "Global Print",
      href: "https://github.com/dali012",
      badges: [],
      location: "Tunisia, On-site",
      title: "Software Engineer",
      logoUrl: "/global-print.jpg",
      start: "Sep 2022",
      end: "Jan 2024",
      description:
        "Built a full-stack ecommerce platform with secure payment processing, inventory management, and an admin dashboard. Developed an internal quality monitoring application with real-time analytics and maintained Linux servers, backups, monitoring, and deployment operations.",
    },
    {
      company: "Natilait",
      href: "https://github.com/dali012",
      badges: [],
      location: "Tunisia, On-site",
      title: "Web Developer Intern",
      logoUrl: "/natilait.jpg",
      start: "Mar 2022",
      end: "Jun 2022",
      description:
        "Developed an internal real-time dashboard to monitor milk production levels, replacing manual tracking processes. Designed the database schema, completed end-to-end testing, and delivered technical documentation for production team onboarding.",
    },
  ],
  education: [
    {
      school: "Universita degli Studi di Messina",
      href: "https://www.unime.it/",
      degree: "MSc in Data Science",
      logoUrl: "/messina-university.jpg",
      start: "Sep 2024",
      end: "Jul 2027",
    },
    {
      school: "ESPIMA Business School",
      href: "https://ebs.tn/en/",
      degree: "BSc in Computer Science",
      logoUrl: "/espima-business-school.jpg",
      start: "Sep 2019",
      end: "Jun 2022",
    },
  ],
  projects: [
    {
      title: "Dimensione Immagine",
      href: "https://github.com/dali012/dimensione-immagine",
      dates: "2025 - Present",
      active: true,
      description:
        "Retail platform and Odoo SH customization work for pricing, discount rules, attribute-based inventory, warehouse logic, and AI-assisted business operations.",
      technologies: ["Odoo", "Python", "OWL", "XML", "PostgreSQL", "Docker"],
      links: [
        {
          type: "Source",
          href: "https://github.com/dali012/dimensione-immagine",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dimensione-immagine-website.webp",
      video: "",
    },
    {
      title: "Profanity API",
      href: "https://github.com/dali012/profanity-api",
      dates: "2025",
      active: true,
      description:
        "A TypeScript API for detecting and filtering profanity in text, designed as a clean backend service with straightforward integration points.",
      technologies: [
        "TypeScript",
        "API Design",
        "Backend",
        "Content Moderation",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/dali012/profanity-api",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/profanity-api.webp",
      video: "",
    },
    {
      title: "Bios AI",
      href: "https://github.com/dali012/bios-ai",
      dates: "2026",
      active: true,
      description:
        "AI-focused TypeScript project exploring practical assistant workflows and modern web delivery with a clean hosted interface.",
      technologies: ["TypeScript", "AI", "React", "Next.js"],
      links: [
        {
          type: "Source",
          href: "https://github.com/dali012/bios-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bios-ai.webp",
      video: "",
    },
    {
      title: "CasedUp",
      href: "https://github.com/dali012/casedup",
      dates: "2025",
      active: true,
      description:
        "Ecommerce storefront work focused on responsive shopping flows, product presentation, and a polished TypeScript implementation.",
      technologies: ["TypeScript", "Ecommerce", "Responsive Design", "SEO"],
      links: [
        {
          type: "Source",
          href: "https://github.com/dali012/casedup",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/casedup.webp",
      video: "",
    },
    {
      title: "Carpentry Company Web App",
      href: "",
      dates: "2024 - Present",
      active: true,
      description:
        "Freelance web application for a carpentry company in Nice, France, with portfolio management, French/English localization, client communication workflows, and SEO-ready pages.",
      technologies: ["Fullstack", "i18n", "SEO", "Agile"],
      links: [],
      image: "/carpentry-company-web-app.webp",
      video: "",
    },
    {
      title: "Global Print Ecommerce Platform",
      href: "",
      dates: "2022 - 2024",
      active: true,
      description:
        "Production ecommerce platform with secure payments, inventory management, an admin dashboard, real-time quality analytics, and Linux-backed deployment operations.",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Linux"],
      links: [],
      image: "/global-print-platform.webp",
      video: "",
    },
  ],
} as const;
