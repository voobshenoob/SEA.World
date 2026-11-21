import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { SEA_CONFIG, isExternalHttpUrl } from '../config';
import { ResilientImage } from './ResilientImage';
import heroSeaImage from '../assets/images/hero_sea_architecture_1795244892601.jpg';

interface HeroSectionProps {
  onOpenAppModal: (contextLabel?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAppModal }) => {
  const hasAppUrl = isExternalHttpUrl(SEA_CONFIG.appUrl);

  return (
    <section
      id="top"
      className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 border-b border-white/[0.08] architectural-grid overflow-hidden"
    >
      {/* Subtle architectural radial illumination without neon clutter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[640px] h-[480px] rounded-full bg-teal-500/[0.06] blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Core Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              {SEA_CONFIG.showWeb3Status && (
                <p className="text-xs font-mono tracking-wide text-teal-400/90 mb-5">
                  {SEA_CONFIG.fullName}
                  <span className="text-slate-600 mx-2" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-slate-400">{SEA_CONFIG.heroStatusLabel}</span>
                </p>
              )}

              <h1
                className="font-display font-semibold text-slate-50 tracking-tight leading-[1.12] mb-6"
                style={{ fontSize: 'clamp(2.15rem, 4.1vw, 3.75rem)' }}
              >
                Возможности не обязательно ждать. Их можно создавать.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-4">
                SEA — экосистема сотрудничества людей, знаний, технологий и инициатив для решения
                социальных проблем и создания новых возможностей.
              </p>

              <p className="text-sm sm:text-base font-medium text-teal-300/95 mb-8">
                {SEA_CONFIG.name} — {SEA_CONFIG.slogan}.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3.5">
                {hasAppUrl ? (
                  <a
                    href={SEA_CONFIG.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B0D10] bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Открыть приложение</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => onOpenAppModal('Открыть приложение SEA')}
                    className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B0D10] bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Открыть приложение</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                )}

                <a
                  href="#about"
                  className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-200 hover:text-white border border-white/15 hover:border-white/30 bg-[#11151B]/80 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Узнать о SEA</span>
                  <ArrowDown className="w-4 h-4 text-slate-400" />
                </a>
              </div>

              {/* Clean unboxed institutional summary strip */}
              <div className="mt-10 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="block font-mono text-slate-500 mb-1">Формат</span>
                  <span className="text-slate-200 font-medium">Открытая социальная экосистема</span>
                </div>
                <div>
                  <span className="block font-mono text-slate-500 mb-1">Подход</span>
                  <span className="text-slate-200 font-medium">Системное проектирование решений</span>
                </div>
                <div>
                  <span className="block font-mono text-slate-500 mb-1">Архитектура</span>
                  <span className="text-slate-200 font-medium">Автономный Web3 / IPFS-портал</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dominant Architectural Visual */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative flex-1 min-h-[260px] sm:min-h-[340px] rounded-xl overflow-hidden border border-white/10 bg-[#11151B]">
              <ResilientImage
                src={heroSeaImage}
                alt="Минималистичный архитектурный павильон SEA из графитового металла и стекла на фоне спокойного морского горизонта"
                className="w-full h-full lg:h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/85 via-[#0B0D10]/20 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs font-mono text-teal-300/90 mb-1">
                  Социальная инженерия как созидание
                </p>
                <p className="text-sm text-slate-200 leading-snug">
                  Проектирование общественных систем, доступных ресурсов и коллективных инициатив.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
