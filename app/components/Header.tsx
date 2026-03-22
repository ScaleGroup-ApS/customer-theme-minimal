import { Link } from "react-router";
import { useState } from "react";

interface HeaderProps {
  siteName?: string;
}

export function Header({ siteName = "Demo Virksomhed A/S" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-base font-semibold text-[#111111] tracking-tight hover:opacity-70 transition-opacity"
        >
          {siteName}
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <NavLink href="#ydelser" label="Ydelser" />
          <NavLink href="#om-os" label="Om os" />
          <NavLink href="#kontakt" label="Kontakt" />
        </nav>

        <div className="hidden md:block">
          <a
            href="#kontakt"
            className="inline-flex items-center px-5 py-2.5 bg-[#111111] text-white text-sm font-medium hover:opacity-85 transition-opacity"
          >
            Kontakt os
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 hover:opacity-70 transition-opacity"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#e5e5e5]">
          <nav className="max-w-[1100px] mx-auto px-6 py-4 flex flex-col gap-1">
            <MobileLink href="#ydelser" label="Ydelser" onClick={() => setMobileOpen(false)} />
            <MobileLink href="#om-os" label="Om os" onClick={() => setMobileOpen(false)} />
            <MobileLink href="#kontakt" label="Kontakt" onClick={() => setMobileOpen(false)} />
            <div className="pt-3">
              <a
                href="#kontakt"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-5 py-3 bg-[#111111] text-white text-sm font-medium"
              >
                Kontakt os
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-[#444444] hover:text-[#111111] transition-colors"
    >
      {label}
    </a>
  );
}

function MobileLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-3 py-2.5 text-sm font-medium text-[#111111] hover:bg-[#f5f5f5] transition-colors"
    >
      {label}
    </a>
  );
}
