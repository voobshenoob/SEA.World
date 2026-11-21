import React from 'react';
import { CheckCircle2, Clock, CircleDot } from 'lucide-react';
import { SEA_CONFIG, RoadmapPhaseStatus } from '../config';
import { WEB3_DIRECTIONS, ROADMAP_PHASES } from '../data/seaContent';
import { ResilientImage } from './ResilientImage';
import web3InfraImage from '../assets/images/web3_digital_infrastructure_1795244892435.jpg';

const ROADMAP_STATUS_META: Record<
  RoadmapPhaseStatus,
  { label: string; textClass: string; icon: React.ReactNode }
> = {
  completed: {
    label: 'Завершено',
    textClass: 'text-emerald-300',
    icon: <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />,
  },
  'in-progress': {
    label: 'В процессе',
    textClass: 'text-teal-300',
    icon: <CircleDot className="w-4 h-4 text-teal-400 shrink-0" aria-hidden="true" />,
  },
  planned: {
    label: 'Планируется',
    textClass: 'text-slate-400',
    icon: <Clock className="w-4 h-4 text-slate-500 shrink-0" aria-hidden="true" />,
  },
};

export const Web3RoadmapSection: React.FC = () => {
  return (
    <>
      {/* I. WEB3 — DIGITAL FUTURE */}
      <section id="web3" className="py-20 sm:py-24 border-b border-white/[0.08] bg-[#0B0D10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch mb-12">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-xs font-mono text-teal-400 mb-3">
                Технологический вектор · Концепция развития
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 tracking-tight mb-5">
                Цифровая инфраструктура нового взаимодействия
              </h2>
              <p className="text-base text-slate-300 leading-relaxed mb-4">
                SEA рассматривает Web3 и блокчейн как потенциальные инструменты развития цифровой
                инфраструктуры сообщества: прозрачности процессов, цифровой идентичности,
                управления, взаимодействия и новых моделей координации.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Это долгосрочное технологическое направление, ориентированное на надёжность и
                автономность общественной координации — без финансовых гарантий, спекулятивных
                механик или инвестиционных обещаний.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[240px] sm:min-h-[300px] rounded-xl overflow-hidden border border-white/10 bg-[#11151B] relative">
                <ResilientImage
                  src={web3InfraImage}
                  alt="Архитектура исследовательского пространства с упорядоченной решёткой из тёмного алюминия и матового стекла"
                  className="w-full h-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/85 via-transparent to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-mono text-teal-300/90">
                    IPFS · Децентрализованная публикация · Устойчивый доступ
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WEB3_DIRECTIONS.map((item) => (
              <article
                key={item.englishTitle}
                className="rounded-xl border border-white/[0.08] bg-[#11151B] p-6"
              >
                <p className="text-xs font-mono tabular-figures text-slate-500 mb-3">
                  {item.index} · {item.englishTitle}
                </p>
                <h3 className="text-base font-semibold text-slate-100 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* J. ROADMAP — ДОРОЖНАЯ КАРТА */}
      <section id="roadmap" className="py-20 sm:py-24 border-b border-white/[0.08] bg-[#0E1116]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-mono text-teal-400 mb-3">Дорожная карта</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 tracking-tight">
                Последовательность развития SEA
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Статусы этапов управляются через конфигурацию и честно отражают текущую фазу
              формирования экосистемы.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {ROADMAP_PHASES.map((phase) => {
              const statusKey = SEA_CONFIG.roadmapStatus[phase.key];
              const meta = ROADMAP_STATUS_META[statusKey];
              const isInProgress = statusKey === 'in-progress';

              return (
                <article
                  key={phase.key}
                  className={`rounded-xl border p-6 flex flex-col justify-between ${
                    isInProgress
                      ? 'border-teal-400/40 bg-[#131921]'
                      : 'border-white/[0.08] bg-[#11151B]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-white/[0.08]">
                      <span className="text-xs font-mono tabular-figures text-slate-400">
                        {phase.phaseLabel} · {phase.englishTitle}
                      </span>
                      <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${meta.textClass}`}>
                        {meta.icon}
                        <span>{meta.label}</span>
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-slate-100 mb-2.5">{phase.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-5">
                      {phase.description}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-4 border-t border-white/[0.06] text-xs text-slate-300">
                    {phase.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-teal-400/80 font-mono mt-0.5" aria-hidden="true">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
