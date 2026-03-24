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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:+4550106917" className="text-sm text-white/60 hover:text-white transition-colors">+45 50 10 69 17</a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-white/40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-sm text-white/60">Blåkildevej 15, 9500 Hobro</span>
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
