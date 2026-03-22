/**
 * Forside – Demo Virksomhed A/S
 * Minimalist Modern design
 */
import type { Route } from "./+types/index";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { useEffect, useRef, type ReactNode } from "react";

export function meta(): ReturnType<Route.MetaFunction> {
  return [
    { title: "Demo Virksomhed A/S – Professionelle løsninger" },
    {
      name: "description",
      content:
        "Demo Virksomhed A/S leverer professionelle løsninger til danske virksomheder. Rådgivning, implementering og support.",
    },
  ];
}

// ── Fade-up on scroll ─────────────────────────────────────────────────────────

function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`fade-up ${className}`}
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: "opacity 0.65s ease, transform 0.65s ease",
      }}
    >
      {children}
    </div>
  );
}

// Inject the .is-visible class logic via a global style once
const fadeStyle = `
  .fade-up.is-visible { opacity: 1 !important; transform: translateY(0) !important; }
`;

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Index() {
  return (
    <>
      <style>{fadeStyle}</style>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <TestimonialsSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="bg-white py-[120px]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <FadeUp>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#444444] mb-6">
                Demo Virksomhed A/S
              </p>
            </FadeUp>
            <FadeUp delay={80}>
              <h1
                className="font-semibold text-[#111111] mb-7 leading-[1.05] tracking-[-0.02em]"
                style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
              >
                Vi skaber resultater<br />der holder.
              </h1>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="text-[#444444] text-lg leading-[1.7] mb-10 max-w-[480px]">
                Professionelle løsninger til danske virksomheder. Fra rådgivning til implementering leverer vi kvalitet i hvert skridt.
              </p>
            </FadeUp>
            <FadeUp delay={240}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#ydelser"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#111111] text-white text-sm font-medium hover:opacity-85 transition-opacity"
                >
                  Se vores ydelser
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
                <a
                  href="#kontakt"
                  className="inline-flex items-center px-7 py-3.5 border border-[#e5e5e5] text-[#111111] text-sm font-medium hover:border-[#111111] transition-colors"
                >
                  Kontakt os
                </a>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={200}>
            <div className="border border-[#e5e5e5] rounded-lg p-10 bg-[#f5f5f5]">
              <div className="space-y-8">
                <StatBlock value="200+" label="Tilfredse kunder" />
                <div className="h-px bg-[#e5e5e5]" />
                <StatBlock value="15+" label="Års erfaring" />
                <div className="h-px bg-[#e5e5e5]" />
                <StatBlock value="98%" label="Kundetilfredshed" />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p
        className="font-semibold text-[#111111] leading-none tracking-[-0.02em] mb-1"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        {value}
      </p>
      <p className="text-sm text-[#444444]">{label}</p>
    </div>
  );
}

// ── Services ──────────────────────────────────────────────────────────────────

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Strategisk rådgivning",
    desc: "Vi hjælper din virksomhed med at identificere muligheder og udfordringer og udvikle klare strategier, der skaber målbar vækst.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17L4.655 7.445A2.652 2.652 0 014.5 6.75c0-.69.272-1.316.72-1.782L7.44 2.75a2.625 2.625 0 013.706 0l.707.707" />
      </svg>
    ),
    title: "Implementering",
    desc: "Fra plan til virkelighed. Vi varetager den komplette implementering med strukturerede processer og løbende kommunikation.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Support & drift",
    desc: "Vores dedikerede supportteam er tilgængeligt hverdage og sikrer, at dine systemer og processer fungerer optimalt hele tiden.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Analyse & indsigt",
    desc: "Datadrevne beslutninger er fundamentet for succes. Vi leverer dybdegående analyser, der giver dig det fulde overblik.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Partnerskab",
    desc: "Vi arbejder som en forlænget arm af jeres organisation og bringer specialistkompetencer ind præcis, når I har brug for dem.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
    title: "Skræddersyede løsninger",
    desc: "Ingen virksomheder er ens. Vi designer løsninger, der passer præcist til jeres behov, branche og ambitioner.",
  },
];

function ServicesSection() {
  return (
    <section id="ydelser" className="bg-[#f5f5f5] py-[120px]">
      <div className="max-w-[1100px] mx-auto px-6">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#444444] mb-4">Hvad vi tilbyder</p>
          <h2 className="text-[#111111] font-semibold tracking-[-0.02em] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Ydelser der gør<br />en forskel
          </h2>
          <p className="text-[#444444] text-lg leading-[1.7] max-w-[520px] mb-16">
            Vi kombinerer faglig dybde med praktisk erfaring og leverer løsninger, der skaber reel værdi for jeres forretning.
          </p>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e5e5]">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 60}>
              <div className="bg-white p-8 h-full">
                <div className="text-[#111111] mb-5">{s.icon}</div>
                <h3 className="text-base font-semibold text-[#111111] mb-3 tracking-[-0.01em]">{s.title}</h3>
                <p className="text-sm text-[#444444] leading-[1.7]">{s.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────

function AboutSection() {
  return (
    <section id="om-os" className="bg-white py-[120px]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#444444] mb-4">Om os</p>
            <h2 className="text-[#111111] font-semibold tracking-[-0.02em] mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              15 år med fokus på det der virker
            </h2>
            <p className="text-[#444444] leading-[1.7] mb-5">
              Demo Virksomhed A/S blev grundlagt i 2009 med et enkelt mål: at levere professionelle løsninger, der skaber reel og målbar forskel for vores kunder.
            </p>
            <p className="text-[#444444] leading-[1.7] mb-8">
              I dag er vi et stærkt team af specialister med erfaring på tværs af brancher. Vi tror på enkle, veldefinerede processer og åben kommunikation i alle led.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#111111] border-b border-[#111111] pb-0.5 hover:opacity-70 transition-opacity"
            >
              Lær os at kende
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </FadeUp>

          <div className="space-y-px border border-[#e5e5e5] rounded-lg overflow-hidden">
            {[
              { value: "2009", label: "Stiftet" },
              { value: "40+", label: "Medarbejdere" },
              { value: "200+", label: "Kunder betjent" },
              { value: "12", label: "Brancher vi opererer i" },
            ].map((item, i) => (
              <FadeUp key={item.label} delay={i * 80}>
                <div className="flex items-center justify-between px-8 py-6 bg-white hover:bg-[#f5f5f5] transition-colors">
                  <span className="text-sm text-[#444444]">{item.label}</span>
                  <span className="text-2xl font-semibold text-[#111111] tracking-[-0.02em]">{item.value}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ──────────────────────────────────────────────────────────────

const testimonials = [
  {
    quote: "Demo Virksomhed A/S transformerede vores interne processer på rekordtid. Resultatet taler for sig selv – vi sparer 30% tid på administrative opgaver.",
    name: "Mette Andersen",
    role: "CEO, NordTech ApS",
  },
  {
    quote: "Professionelt, struktureret og altid tilgængeligt. Vi har arbejdet med dem i tre år og kan kun anbefale samarbejdet til andre.",
    name: "Kasper Sørensen",
    role: "Direktør, BuildGroup A/S",
  },
  {
    quote: "Det bedste ved Demo Virksomhed er, at de forstår vores forretning. De kommer ikke med generiske løsninger, men tænker med os.",
    name: "Rikke Lund",
    role: "COO, FinPartner Holding",
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-[#f5f5f5] py-[120px]">
      <div className="max-w-[1100px] mx-auto px-6">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#444444] mb-4">Udtalelser</p>
          <h2 className="text-[#111111] font-semibold tracking-[-0.02em] mb-16" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Hvad kunderne siger
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 80}>
              <div className="bg-white border border-[#e5e5e5] rounded-lg p-8 flex flex-col h-full">
                <svg className="w-6 h-6 text-[#e5e5e5] mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-[#444444] leading-[1.7] text-sm flex-1 mb-8">{t.quote}</p>
                <div>
                  <p className="text-sm font-semibold text-[#111111]">{t.name}</p>
                  <p className="text-xs text-[#444444] mt-0.5">{t.role}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section className="bg-[#111111] py-[120px]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <h2
              className="text-white font-semibold tracking-[-0.02em] leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Klar til at tage det næste skridt?
            </h2>
          </FadeUp>
          <FadeUp delay={120}>
            <p className="text-white/60 leading-[1.7] mb-8">
              Tag kontakt til os i dag og lad os finde ud af, hvordan vi bedst kan hjælpe din virksomhed. Vi svarer inden for én hverdag.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:kontakt@demo.dk"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#111111] text-sm font-medium hover:opacity-85 transition-opacity"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                kontakt@demo.dk
              </a>
              <a
                href="tel:+4512345678"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-sm font-medium hover:border-white/50 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +45 12 34 56 78
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
