import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SEA_CONFIG, isExternalHttpUrl } from '../config';
import { NAV_LINKS } from '../data/seaContent';

interface HeaderProps {
  onOpenAppModal: (contextLabel?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const hasAppUrl = isExternalHttpUrl(SEA_CONFIG.appUrl);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#0B0D10]/92 backdrop-blur-md border-b border-white/[0.08]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 relative flex items-center justify-end lg:justify-between gap-8">
        {/* Zone 1: Brand logo */}
        <a
          href="#top"
          className="max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2 inline-flex items-center text-slate-100 hover:text-white transition-opacity opacity-95 hover:opacity-100 whitespace-nowrap shrink-0"
          aria-label={`${SEA_CONFIG.name} — ${SEA_CONFIG.fullName}`}
        >
          <img
            src="./assets/aistudio/logoSEA_b18497ac.svg"
            alt={`${SEA_CONFIG.name} — ${SEA_CONFIG.fullName}`}
            className="h-9 w-9 object-contain invert brightness-95 shrink-0"
          />
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Основная навигация"
          className="hidden lg:flex items-center gap-5 xl:gap-6 text-[13px] font-medium text-white"
        >
          {NAV_LINKS.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="py-1 text-white hover:text-teal-300 border-b border-transparent hover:border-teal-400/70 transition-colors whitespace-nowrap shrink-0"
            >
              {index === 0 ? 'SEA' : item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action + mobile toggle */}
        <div className="flex items-center gap-3 shrink-0">
          {hasAppUrl ? (
            <a
              href={SEA_CONFIG.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0B0D10] bg-slate-100 hover:bg-teal-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <span>Открыть SEA</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <button
              type="button"
              onClick={() => onOpenAppModal('Открыть приложение SEA')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0B0D10] bg-slate-100 hover:bg-teal-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <span>Открыть SEA</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            className="lg:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-lg border border-white/10 text-slate-200 hover:bg-white/[0.06] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Compact mobile navigation drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-t border-white/[0.08] bg-[#0B0D10]/98 backdrop-blur-md px-4 py-5"
        >
          <p className="text-xs font-mono text-slate-400 mb-3">
            {SEA_CONFIG.name} · {SEA_CONFIG.fullName}
          </p>
          <nav aria-label="Мобильная навигация" className="flex flex-col space-y-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] px-3 flex items-center text-sm font-medium text-slate-200 hover:text-teal-300 hover:bg-white/[0.04] rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-white/[0.08]">
            {hasAppUrl ? (
              <a
                href={SEA_CONFIG.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#0B0D10] bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors"
              >
                <span>Открыть SEA</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppModal('Открыть приложение SEA');
                }}
                className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#0B0D10] bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors"
              >
                <span>Открыть SEA</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
