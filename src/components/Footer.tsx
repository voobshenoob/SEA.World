import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight, Mail } from 'lucide-react';
import { SEA_CONFIG, isConfiguredValue, isExternalHttpUrl } from '../config';
import { NAV_LINKS, SOCIAL_PLATFORMS } from '../data/seaContent';
import { SocialPlatformIcon } from './icons/SeaIcons';
import { copyToClipboard } from '../utils/clipboard';

export const Footer: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<'domain' | 'contract' | null>(null);

  const hasDomain = isConfiguredValue(SEA_CONFIG.web3Domain);
  const hasContract =
    SEA_CONFIG.showContractAddress && isConfiguredValue(SEA_CONFIG.contractAddress);

  const handleCopy = async (value: string, key: 'domain' | 'contract') => {
    const ok = await copyToClipboard(value);
    if (ok) {
      setCopiedKey(key);
      window.setTimeout(() => {
        setCopiedKey((prev) => (prev === key ? null : prev));
      }, 2400);
    }
  };

  const activeSocials = SOCIAL_PLATFORMS.filter((platform) =>
    isExternalHttpUrl(SEA_CONFIG.socialLinks[platform.key])
  );

  return (
    <footer className="bg-[#080A0D] text-slate-300 py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand & Slogan */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#top" className="inline-flex items-center gap-2.5 text-slate-100">
              <img
                src="./assets/aistudio/logoSEA_b18497ac.svg"
                alt={SEA_CONFIG.name}
                className="w-7 h-7 object-contain invert brightness-95 shrink-0"
              />
              <span className="font-display text-base font-semibold tracking-tight">
                {SEA_CONFIG.name} — {SEA_CONFIG.fullName}
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {SEA_CONFIG.name} — {SEA_CONFIG.slogan}.
            </p>
            <p className="text-xs text-slate-500">
              Статический Web3-портал · Подготовлено для IPFS и Unstoppable Domains
            </p>
          </div>

          {/* Navigation Mirror */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-mono text-slate-500 mb-4">Навигация</h3>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-slate-100 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Web3 / IPFS & Domain Info */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <h3 className="text-xs font-mono text-slate-500 mb-3">
                Web3-домен и инфраструктура
              </h3>
              <div className="rounded-xl border border-white/[0.08] bg-[#0E1218] p-4">
                <div className="flex items-center justify-between gap-3 mb-2 text-xs">
                  <span className="text-slate-400">Unstoppable Domains / IPFS</span>
                  <span className={hasDomain ? 'text-teal-300 font-mono' : 'text-slate-500 font-mono'}>
                    {hasDomain ? 'Домен задан в конфигурации' : 'Домен не подключён'}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <code className="font-mono text-xs sm:text-sm text-slate-200 truncate">
                    {SEA_CONFIG.web3Domain}
                  </code>
                  <button
                    type="button"
                    onClick={() => handleCopy(SEA_CONFIG.web3Domain, 'domain')}
                    className="min-h-[36px] inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white border border-white/15 hover:border-teal-400/60 rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    {copiedKey === 'domain' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-teal-400" />
                        <span className="text-teal-300">Скопировано</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Копировать</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {hasContract && (
              <div>
                <h3 className="text-xs font-mono text-slate-500 mb-2">Адрес смарт-контракта</h3>
                <div className="rounded-xl border border-white/[0.08] bg-[#0E1218] p-4 flex items-center justify-between gap-3">
                  <code className="font-mono text-xs text-slate-200 truncate">
                    {SEA_CONFIG.contractAddress}
                  </code>
                  <button
                    type="button"
                    onClick={() => handleCopy(SEA_CONFIG.contractAddress, 'contract')}
                    className="min-h-[36px] inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white border border-white/15 hover:border-teal-400/60 rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    {copiedKey === 'contract' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-teal-400" />
                        <span className="text-teal-300">Скопировано</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Копировать</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Social links in footer */}
            <div>
              <h3 className="text-xs font-mono text-slate-500 mb-3">Официальные каналы</h3>
              {activeSocials.length > 0 || isConfiguredValue(SEA_CONFIG.email) ? (
                <div className="flex flex-wrap items-center gap-2.5">
                  {activeSocials.map((platform) => (
                    <a
                      key={platform.key}
                      href={SEA_CONFIG.socialLinks[platform.key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[40px] inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/10 bg-[#0E1218] hover:border-teal-400/50 text-xs font-medium text-slate-200 transition-colors"
                    >
                      <SocialPlatformIcon platform={platform.key} className="w-4 h-4" />
                      <span>{platform.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  ))}
                  {isConfiguredValue(SEA_CONFIG.email) && (
                    <a
                      href={`mailto:${SEA_CONFIG.email}`}
                      className="min-h-[40px] inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/10 bg-[#0E1218] hover:border-teal-400/50 text-xs font-medium text-slate-200 transition-colors max-w-full"
                    >
                      <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span className="truncate">Gmail: {SEA_CONFIG.email}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                    </a>
                  )}
                </div>
              ) : (
                <p className="text-xs text-slate-500">
                  Ссылки на каналы добавляются через <code className="font-mono text-slate-400">src/config.ts</code>.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Toast */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            {SEA_CONFIG.name} © {SEA_CONFIG.fullName}. Все права защищены.
          </p>
          <p className="font-mono">Static Build · Zero Server Dependencies</p>
        </div>
      </div>

      {/* Accessible Toast Notification on Copy */}
      {copiedKey && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 z-50 rounded-lg border border-teal-400/40 bg-[#11151B] px-4 py-3 text-xs font-medium text-slate-100 shadow-xl flex items-center gap-2"
        >
          <Check className="w-4 h-4 text-teal-400 shrink-0" aria-hidden="true" />
          <span>Скопировано в буфер обмена</span>
        </div>
      )}
    </footer>
  );
};
