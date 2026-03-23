/**
 * Forside – SYNCRONET ApS
 * athletos.app – Sportsperformance platform
 */
import type { Route } from "./+types/index";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { useEffect, useRef, type ReactNode } from "react";

export function meta(): ReturnType<Route.MetaFunction> {
  return [
    { title: "SYNCRONET ApS – Sportsperformance platform til atleter" },
    {
      name: "description",
      content:
        "SYNCRONET ApS leverer athletos.app – en komplet digital platform til sportsperformance, træningsstyring og atletanalyse. Synkronisér data, træning og resultater i ét system.",
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
          <PlatformSection />
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1D4ED8] mb-6">
                SYNCRONET ApS · athletos.app
              </p>
            </FadeUp>
            <FadeUp delay={80}>
              <h1
                className="font-semibold text-[#111111] mb-7 leading-[1.05] tracking-[-0.02em]"
                style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
              >
                Sæt din præstation<br />i system.
              </h1>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="text-[#444444] text-lg leading-[1.7] mb-10 max-w-[480px]">
                athletos.app er den komplette platform til sportsperformance. Synkronisér træningsdata, analyser resultater og nå nye mål – som atlet, klub eller forbund.
              </p>
            </FadeUp>
            <FadeUp delay={240}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#platform"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1D4ED8] text-white text-sm font-medium hover:bg-[#1e40af] transition-colors rounded-sm"
                >
                  Se platformen
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
                <a
                  href="#kontakt"
                  className="inline-flex items-center px-7 py-3.5 border border-[#e5e5e5] text-[#111111] text-sm font-medium hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-colors"
                >
                  Kontakt os
                </a>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={200}>
            <div className="border border-[#e5e5e5] rounded-lg p-10 bg-[#f5f5f5]">
              <div className="space-y-8">
                <StatBlock value="500+" label="Aktive atleter på platformen" color="#1D4ED8" />
                <div className="h-px bg-[#e5e5e5]" />
                <StatBlock value="40+" label="Tilsluttede sportsklubber" color="#1D4ED8" />
                <div className="h-px bg-[#e5e5e5]" />
                <StatBlock value="98%" label="Brugertilfredshed" color="#1D4ED8" />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function StatBlock({ value, label, color = "#111111" }: { value: string; label: string; color?: string }) {
  return (
    <div>
      <p
        className="font-semibold leading-none tracking-[-0.02em] mb-1"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color }}
      >
        {value}
      </p>
      <p className="text-sm text-[#444444]">{label}</p>
    </div>
  );
}

// ── Platform ──────────────────────────────────────────────────────────────────

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Præstationsanalyse",
    desc: "Dybdegående data om hastighed, styrke, udholdenhed og teknisk niveau. Se præcis, hvor atleten er stærk – og hvor der er plads til vækst.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Træningsplanlægning",
    desc: "Opbyg og tildel individuelle og holdbaserede træningsprogrammer. Coaches kan justere planer i realtid baseret på atletens aktuelle form.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "Synkronisering på tværs",
    desc: "athletos.app synkroniserer automatisk med wearables, GPS-enheder og eksisterende sportsplatforme. Alt data ét sted – ingen dobbeltregistrering.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Coach–atlet kommunikation",
    desc: "Integreret beskedplatform, kommentarer på træningspas og videoanalyse. Sæt retning og giv feedback direkte i atletens app.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Skadesforebyggelse",
    desc: "Machine learning-modeller identificerer risikofaktorer for skade baseret på belastning, søvn og restitution. Behold dine atleter på banen.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3.75h3m-3 3.75h3" />
      </svg>
    ),
    title: "Rapportering & KPI",
    desc: "Automatiserede rapporter til klubledelse og forbund. Dokumentér fremgang, justér mål og præsentér resultater med professionelle dashboards.",
  },
];

function PlatformSection() {
  return (
    <section id="platform" className="bg-[#f5f5f5] py-[120px]">
      <div className="max-w-[1100px] mx-auto px-6">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1D4ED8] mb-4">Hvad vi tilbyder</p>
          <h2 className="text-[#111111] font-semibold tracking-[-0.02em] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Alt hvad din sport<br />kræver – samlet ét sted
          </h2>
          <p className="text-[#444444] text-lg leading-[1.7] max-w-[520px] mb-16">
            athletos.app er bygget af sportsfolk til sportsfolk. Platformen håndterer alt fra daglig træningsregistrering til sæsonanalyse på forbundsniveau.
          </p>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e5e5]">
          {features.map((f, i) => (
            <FadeUp key={f.title} delay={i * 60}>
              <div className="bg-white p-8 h-full">
                <div className="text-[#1D4ED8] mb-5">{f.icon}</div>
                <h3 className="text-base font-semibold text-[#111111] mb-3 tracking-[-0.01em]">{f.title}</h3>
                <p className="text-sm text-[#444444] leading-[1.7]">{f.desc}</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1D4ED8] mb-4">Om SYNCRONET ApS</p>
            <h2 className="text-[#111111] font-semibold tracking-[-0.02em] mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Skabt af atleter<br />til atleter
            </h2>
            <p className="text-[#444444] leading-[1.7] mb-5">
              SYNCRONET ApS er en dansk sportstech-virksomhed med base i Hobro. Vi grundlagde athletos.app med én mission: at give atleter og coaches et professionelt digitalt værktøj, der er intuitivt, hurtigt og datadrevet.
            </p>
            <p className="text-[#444444] leading-[1.7] mb-8">
              Vi tror på, at præstation skabes igennem indsigt. Vores platform samler al relevant data og gør den handlingsbar – uanset om du er eliteatlet, motionist eller forbundstræner.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1D4ED8] border-b border-[#1D4ED8] pb-0.5 hover:opacity-70 transition-opacity"
            >
              Skriv til os
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </FadeUp>

          <div className="space-y-px border border-[#e5e5e5] rounded-lg overflow-hidden">
            {[
              { value: "Hobro", label: "Virksomhedens hjemsted" },
              { value: "500+", label: "Aktive brugere" },
              { value: "40+", label: "Tilknyttede klubber" },
              { value: "3", label: "Sportsgrene understøttet" },
            ].map((item, i) => (
              <FadeUp key={item.label} delay={i * 80}>
                <div className="flex items-center justify-between px-8 py-6 bg-white hover:bg-[#f5f5f5] transition-colors">
                  <span className="text-sm text-[#444444]">{item.label}</span>
                  <span className="text-2xl font-semibold text-[#1D4ED8] tracking-[-0.02em]">{item.value}</span>
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
    quote: "athletos.app har forandret måden, vi arbejder med vores atleter på. Vi har nu et klart overblik over belastning og fremgang, og vi forebygger skader meget bedre end før.",
    name: "Thomas Møller",
    role: "Cheftræner, Hobro Atletik",
  },
  {
    quote: "Som atlet sætter jeg stor pris på, at alt mit træningsdata er samlet ét sted. Synkroniseringen med mit ur fungerer fejlfrit, og kommunikationen med min coach er blevet langt nemmere.",
    name: "Amalie Krog",
    role: "Eliteatlet, 400m hæk",
  },
  {
    quote: "SYNCRONET leverede en løsning, der virkede fra dag ét. Onboarding var gnidningsfri, og supportteamet er altid klar til at hjælpe. Vi kan varmt anbefale dem.",
    name: "Lars Damgaard",
    role: "Sportsdirektør, DHF Region Nord",
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-[#f5f5f5] py-[120px]">
      <div className="max-w-[1100px] mx-auto px-6">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1D4ED8] mb-4">Udtalelser</p>
          <h2 className="text-[#111111] font-semibold tracking-[-0.02em] mb-16" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Hvad brugerne siger
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 80}>
              <div className="bg-white border border-[#e5e5e5] rounded-lg p-8 flex flex-col h-full">
                <svg className="w-6 h-6 text-[#1D4ED8]/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
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
    <section className="bg-[#1D4ED8] py-[120px]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <h2
              className="text-white font-semibold tracking-[-0.02em] leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Klar til at tage din sport til næste niveau?
            </h2>
          </FadeUp>
          <FadeUp delay={120}>
            <p className="text-white/70 leading-[1.7] mb-8">
              Kontakt os i dag og hør, hvordan athletos.app kan hjælpe dig, din klub eller dit forbund. Vi svarer inden for én hverdag.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:sasin91@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#1D4ED8] text-sm font-medium hover:opacity-90 transition-opacity rounded-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                sasin91@gmail.com
              </a>
              <a
                href="tel:+4512345678"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white text-sm font-medium hover:border-white/70 transition-colors rounded-sm"
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
