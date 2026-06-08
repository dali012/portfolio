import { DATA } from "@/data/resume";
import {
  BriefcaseBusiness,
  Mail,
  MapPin,
  Printer,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV",
  description: `One-page CV for ${DATA.name}`,
};

const accent = "text-[#c71f0a]";
const accentBorder = "border-[#c71f0a]";

function TimelineEntry({
  date,
  title,
  subtitle,
  children,
}: {
  date: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[5.25rem_1.25rem_minmax(0,1fr)] gap-4">
      <div
        className={`pt-1 font-mono text-[10px] uppercase leading-tight tracking-wider ${accent}`}
      >
        {date}
      </div>
      <div className="relative flex justify-center">
        <span className={`mt-1 size-4 rounded-full border-[3px] bg-[#f8f2e9] ${accentBorder}`} />
        <span className={`absolute top-6 h-[calc(100%-1.5rem)] w-0.75 bg-[#c71f0a]`} />
      </div>
      <div className="pb-9">
        <h2 className={`font-mono text-xl font-semibold uppercase leading-none tracking-wider ${accent}`}>
          {title}
        </h2>
        <h3 className={`mt-3 font-mono text-base font-medium uppercase leading-none tracking-wider ${accent}`}>
          {subtitle}
        </h3>
        <div className="mt-4 text-[13px] leading-snug text-black">{children}</div>
      </div>
    </div>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function CvPage() {
  const primaryWork = DATA.work.slice(0, 3);
  const skillNames = DATA.skills.map((skill) => skill.name);

  return (
    <main className="relative left-1/2 w-[min(100vw-1.5rem,56rem)] -translate-x-1/2 print:left-0 print:w-full print:translate-x-0">
      <div className="mb-4 flex justify-end print:hidden">
        <Link
          href={DATA.cvUrl}
          className="inline-flex h-9 items-center gap-2 rounded-md border bg-background px-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
        >
          <Printer className="size-4" aria-hidden />
          Printable CV
        </Link>
      </div>

      <article className={`mx-auto min-h-272 rounded-[1.35rem] border-[3px] ${accentBorder} bg-[#f8f2e9] px-9 py-10 text-black shadow-sm print:min-h-252 print:w-[7.7in] print:rounded-[0.22in] print:px-[0.34in] print:py-[0.34in] print:shadow-none`}>
        <header className="grid grid-cols-[8.5rem_minmax(0,1fr)] gap-8">
          <div className={`relative size-28 overflow-hidden rounded-full border-2 ${accentBorder}`}>
            <Image
              src={DATA.avatarUrl}
              alt={DATA.name}
              fill
              priority
              className="object-cover"
              sizes="112px"
            />
          </div>
          <div>
            <h1 className={`font-mono text-[3.25rem] font-semibold uppercase leading-none tracking-[0.08em] ${accent}`}>
              {DATA.name}
            </h1>
            <div className={`mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm ${accent}`}>
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3.5" aria-hidden />
                {DATA.location}
              </span>
              <span>|</span>
              <a className="inline-flex items-center gap-1" href={`mailto:${DATA.contact.email}`}>
                <Mail className="size-3.5" aria-hidden />
                {DATA.contact.email}
              </a>
              <span>|</span>
              <a
                href={DATA.contact.social.GitHub.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <span>|</span>
              <a
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <p className="mt-3 max-w-136 text-[15px] leading-snug">
              {DATA.description}
            </p>
          </div>
        </header>

        <section className="mt-12">
          <TimelineEntry
            date={`${primaryWork[0].start} - ${primaryWork[0].end}`}
            title={`Experience - ${primaryWork[0].company}`}
            subtitle={primaryWork[0].title}
          >
            <p className={`mb-3 text-[12px] ${accent}`}>{primaryWork[0].location}</p>
            <BulletList
              items={[
                "Builds custom Odoo SH modules for pricing, discount rules, inventory by product attributes, and warehouse/location logic.",
                "Designs ERP workflows that connect business requirements, database models, application logic, and deployment needs.",
                "Architects an AI agent integrated with Odoo to automate operations and decision-making workflows.",
              ]}
            />
          </TimelineEntry>

          <TimelineEntry
            date={`${primaryWork[1].start} - ${primaryWork[1].end}`}
            title={`Experience - ${primaryWork[1].company}`}
            subtitle={primaryWork[1].title}
          >
            <p className={`mb-3 text-[12px] ${accent}`}>{primaryWork[1].location}</p>
            <BulletList
              items={[
                "Developed a modern web application for a carpentry company with dynamic project portfolio management.",
                "Delivered multilingual French and English pages, client-company communication workflows, and SEO-ready responsive interfaces.",
              ]}
            />
          </TimelineEntry>

          <TimelineEntry
            date={`${primaryWork[2].start} - ${primaryWork[2].end}`}
            title={`Experience - ${primaryWork[2].company}`}
            subtitle={primaryWork[2].title}
          >
            <p className={`mb-3 text-[12px] ${accent}`}>{primaryWork[2].location}</p>
            <BulletList
              items={[
                "Built a full-stack ecommerce platform with secure payments, inventory management, and an admin dashboard.",
                "Developed an internal quality monitoring application with real-time analytics.",
                "Maintained Linux servers, backups, monitoring, deployment operations, and production support.",
              ]}
            />
          </TimelineEntry>

          <TimelineEntry
            date={`${DATA.education[0].start} - ${DATA.education[0].end}`}
            title={`Education - ${DATA.education[0].school}`}
            subtitle={DATA.education[0].degree}
          >
            <BulletList
              items={[
                `${DATA.education[1].degree}, ${DATA.education[1].school}`,
                "Academic focus across data science, software engineering, databases, and machine learning.",
              ]}
            />
          </TimelineEntry>
        </section>

        <footer className="grid grid-cols-2 gap-9 pt-1">
          <section>
            <h2 className={`inline-flex items-baseline gap-1 text-xl font-medium ${accent}`}>
              <BriefcaseBusiness className="size-4" aria-hidden />
              Skills
              <span className="text-black">-</span>
            </h2>
            <p className="mt-1 text-[13px] leading-snug">
              {skillNames.slice(0, 15).join(", ")}
            </p>
          </section>
          <section>
            <h2 className={`inline-flex items-baseline gap-1 text-xl font-medium ${accent}`}>
              <Sparkles className="size-4" aria-hidden />
              Projects
              <span className="text-black">-</span>
            </h2>
            <p className="mt-1 text-[13px] leading-snug">
              Dimensione Immagine, Profanity API, Bios AI, CasedUp, Carpentry Company Web App, Global Print Ecommerce Platform
            </p>
          </section>
        </footer>
      </article>
    </main>
  );
}
