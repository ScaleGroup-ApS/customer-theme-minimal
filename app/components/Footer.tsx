const year = new Date().getFullYear();

interface FooterProps {
  siteName?: string;
  siteDescription?: string;
}

export function Footer({ siteName = "SYNCRONET ApS", siteDescription }: FooterProps) {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-[1100px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <p className="text-base font-bold tracking-tight mb-4">{siteName}</p>
            <p className="text-sm text-white/60 leading-relaxed">
              {siteDescription ?? "Din digitale platform til atletpræstation og sportsperformance. Vi synkroniserer data, træning og resultater i ét samlet system."}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Navigation</p>
            <ul className="space-y-3">
              <li><a href="#platform" className="text-sm text-white/60 hover:text-white transition-colors">Platform</a></li>
              <li><a href="#om-os" className="text-sm text-white/60 hover:text-white transition-colors">Om os</a></li>
              <li><a href="#kontakt" className="text-sm text-white/60 hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div id="kontakt">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Kontakt</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-white/40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:jonas.kerwin.hansen@gmail.com" className="text-sm text-white/60 hover:text-white transition-colors">jonas.kerwin.hansen@gmail.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-white/40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-sm text-white/60">Paduavej 5, 2300 København S</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1100px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {year} {siteName}. Alle rettigheder forbeholdes.
          </p>
          <p className="text-xs text-white/20">athletos.app</p>
        </div>
      </div>
    </footer>
  );
}
