import React, { useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { PROCESS_CYCLE_LABELS, PROCESS_STEPS } from '../data/seaContent';

export const HowItWorksSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeStep = PROCESS_STEPS[activeIndex];

  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-24 border-b border-white/[0.08] bg-[#0E1116]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-mono text-teal-400 mb-3">Механизм работы SEA</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 tracking-tight mb-4">
            От проблемы к системному решению в 6 шагов
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Деятельность сообщества строится как воспроизводимый цикл исследования, объединения
            компетенций и практической реализации.
          </p>
        </div>

        {/* High-level conceptual cycle strip */}
        <div className="rounded-xl border border-white/[0.08] bg-[#0B0D10] p-4 sm:p-5 mb-8 overflow-x-auto">
          <div className="flex items-center gap-2.5 min-w-max text-xs sm:text-sm">
            {PROCESS_CYCLE_LABELS.map((label, idx) => (
              <React.Fragment key={label}>
                <span
                  className={`font-medium ${
                    idx === 0 || idx === PROCESS_CYCLE_LABELS.length - 1
                      ? 'text-teal-300'
                      : 'text-slate-200'
                  }`}
                >
                  {label}
                </span>
                {idx < PROCESS_CYCLE_LABELS.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 pl-2 border-l border-white/10 ml-1">
              <RotateCcw className="w-3.5 h-3.5 text-teal-400/80" aria-hidden="true" />
              <span>непрерывный цикл</span>
            </span>
          </div>
        </div>

        {/* Interactive 6-Step Selector + Progress Rail */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {PROCESS_STEPS.map((step, index) => {
            const isActive = index === activeIndex;
            const isPast = index < activeIndex;
            return (
              <button
                key={step.index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`text-left rounded-xl border p-4 transition-all duration-200 ${
                  isActive
                    ? 'border-teal-400/60 bg-[#151C24]'
                    : isPast
                    ? 'border-teal-400/20 bg-[#11151B] hover:border-white/20'
                    : 'border-white/[0.08] bg-[#11151B] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span
                    className={`text-xs font-mono tabular-figures ${
                      isActive ? 'text-teal-300' : 'text-slate-500'
                    }`}
                  >
                    {step.index}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">{step.englishLabel}</span>
                </div>
                <p className="text-sm font-semibold text-slate-100 leading-snug mb-1">
                  {step.title}
                </p>
                <p className="text-xs text-slate-400 leading-snug">{step.shortTitle}</p>
                <div className="mt-3 h-0.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-200 ${
                      isActive ? 'w-full bg-teal-400' : isPast ? 'w-full bg-teal-500/40' : 'w-0'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Dive */}
        <div className="rounded-xl border border-white/10 bg-[#11151B] p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-mono text-teal-400 mb-2">
                Этап {activeStep.index} · {activeStep.englishLabel}
              </p>
              <h3 className="text-2xl font-semibold text-slate-50 mb-3">{activeStep.title}</h3>
              <p className="text-base text-slate-300 leading-relaxed mb-4">
                {activeStep.description}
              </p>
              <p className="text-xs text-slate-400">
                <span className="text-slate-500 font-mono mr-2">Результат этапа:</span>
                <span className="text-slate-200">{activeStep.output}</span>
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev === 0 ? PROCESS_STEPS.length - 1 : prev - 1))}
                className="min-h-[44px] px-4 py-2 text-xs font-medium text-slate-200 hover:text-white border border-white/15 hover:border-white/30 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Предыдущий этап
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev + 1) % PROCESS_STEPS.length)}
                className="min-h-[44px] px-4 py-2 text-xs font-semibold text-[#0B0D10] bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Следующий этап
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
