import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { SEA_CONFIG, EcosystemModuleStatus, isExternalHttpUrl } from '../config';
import { ECOSYSTEM_MODULES, COMMUNITY_PATHS } from '../data/seaContent';

interface EcosystemCommunitySectionProps {
  onOpenAppModal: (contextLabel?: string) => void;
}

const ECOSYSTEM_STATUS_LABELS: Record<EcosystemModuleStatus, string> = {
  concept: 'Концепция',
  'in-progress': 'В разработке',
  planned: 'Планируется',
};

export const EcosystemCommunitySection: React.FC<EcosystemCommunitySectionProps> = ({
  onOpenAppModal,
}) => {
  const [selectedPathId, setSelectedPathId] = useState<string>(COMMUNITY_PATHS[0].id);
  const hasCommunityUrl = isExternalHttpUrl(SEA_CONFIG.communityUrl);
  const hasAppUrl = isExternalHttpUrl(SEA_CONFIG.appUrl);

  return (
    <>
      {/* G. ECOSYSTEM — ЭКОСИСТЕМА SEA */}
      <section id="ecosystem" className="py-20 sm:py-24 border-b border-white/[0.08] bg-[#0B0D10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-mono text-teal-400 mb-3">Структура взаимодействия</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 tracking-tight">
                Экосистема SEA
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Взаимосвязанная архитектура из шести функциональных элементов. Статусы отражают
              фактический этап развития каждого контура.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ECOSYSTEM_MODULES.map((mod, idx) => {
              const status = SEA_CONFIG.ecosystemStatus[mod.key];
              const statusLabel = ECOSYSTEM_STATUS_LABELS[status];
              return (
                <article
                  key={mod.key}
                  className="rounded-xl border border-white/[0.08] bg-[#11151B] p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 text-xs font-mono mb-4">
                      <span className="text-slate-500 tabular-figures">
                        {String(idx + 1).padStart(2, '0')} · {mod.englishTitle}
                      </span>
                      <span
                        className={
                          status === 'in-progress' ? 'text-teal-300' : 'text-slate-400'
                        }
                      >
                        {statusLabel}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-100 mb-2.5">{mod.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{mod.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* H. COMMUNITY — СООБЩЕСТВО */}
      <section id="community" className="py-20 sm:py-24 border-b border-white/[0.08] bg-[#0E1116]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-mono text-teal-400 mb-3">Открытое участие</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 tracking-tight mb-5">
                Создавать возможности вместе
              </h2>
              <p className="text-base text-slate-300 leading-relaxed mb-4">
                SEA развивается через людей, идеи, инициативы и сотрудничество.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Участие не требует обязательного вступления, платного членства, формальных
                обязательств или предварительного наличия готового проекта. Каждый может начать с
                идеи, проблемы, знания, навыка или желания внести вклад.
              </p>

              <div className="pt-5 border-t border-white/[0.08] mb-7">
                <p className="text-xs text-slate-400 leading-relaxed">
                  Сообщество формируется вокруг инициатив и взаимного интереса к созданию реальных
                  решений.
                </p>
              </div>

              {hasCommunityUrl ? (
                <a
                  href={SEA_CONFIG.communityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B0D10] bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Присоединиться к сообществу</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : hasAppUrl ? (
                <a
                  href={SEA_CONFIG.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B0D10] bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Присоединиться к сообществу</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#social"
                    className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B0D10] bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Присоединиться к сообществу</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => onOpenAppModal('Портал сообщества SEA')}
                    className="min-h-[44px] px-4 py-3 text-xs font-medium text-slate-300 hover:text-white border border-white/15 rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    Настройка ссылки портала
                  </button>
                </div>
              )}
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COMMUNITY_PATHS.map((item) => {
                const isSelected = item.id === selectedPathId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedPathId(item.id)}
                    className={`text-left rounded-xl border p-6 transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? 'border-teal-400/50 bg-[#141A22]'
                        : 'border-white/[0.08] bg-[#11151B] hover:border-white/20'
                    }`}
                  >
                    <div>
                      <span
                        className={`block text-xs font-mono tabular-figures mb-3 ${
                          isSelected ? 'text-teal-300' : 'text-slate-500'
                        }`}
                      >
                        Формат {item.index}
                      </span>
                      <h3 className="text-lg font-semibold text-slate-100 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>
                    <p className="pt-3 border-t border-white/[0.06] text-xs text-slate-300">
                      {item.actionHint}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
