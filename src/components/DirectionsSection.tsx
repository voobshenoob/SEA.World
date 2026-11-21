import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { DIRECTIONS, DirectionItem } from '../data/seaContent';
import { DirectionIcon } from './icons/SeaIcons';

export const DirectionsSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(DIRECTIONS[0].id);
  const selectedDirection: DirectionItem =
    DIRECTIONS.find((item) => item.id === selectedId) ?? DIRECTIONS[0];

  return (
    <section id="directions" className="py-20 sm:py-24 border-b border-white/[0.08] bg-[#0B0D10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-mono text-teal-400 mb-3">Основные направления</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 tracking-tight">
              Шесть векторов социального проектирования
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            Выберите направление, чтобы увидеть ключевые задачи и перейти к соответствующему
            разделу экосистемы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIRECTIONS.map((dir) => {
            const isSelected = dir.id === selectedDirection.id;
            return (
              <div
                key={dir.id}
                onClick={() => setSelectedId(dir.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedId(dir.id);
                  }
                }}
                aria-pressed={isSelected}
                className={`group rounded-xl border p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-teal-400/50 bg-[#141A22]'
                    : 'border-white/[0.08] bg-[#11151B] hover:border-white/20 hover:bg-[#131820]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-10 h-10 rounded-lg border border-white/10 bg-[#0B0D10] flex items-center justify-center text-slate-200 group-hover:text-teal-300 transition-colors">
                      <DirectionIcon id={dir.id} className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono tabular-figures text-slate-500">
                      {dir.index} · {dir.englishTitle}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-100 mb-2.5">
                    {dir.index}. {dir.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">{dir.description}</p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className={isSelected ? 'text-teal-300 font-medium' : 'text-slate-400'}>
                    {isSelected ? 'Выбрано для обзора' : 'Раскрыть фокус'}
                  </span>
                  <a
                    href={`#${dir.targetSectionId}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-slate-200 hover:text-teal-300 font-medium transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Подробнее</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Focus Panel for Selected Direction */}
        <div className="mt-8 rounded-xl border border-white/10 bg-[#11151B] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-mono text-teal-400 mb-1.5">
                Фокус направления · {selectedDirection.index} / {selectedDirection.englishTitle}
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-50 mb-2">
                {selectedDirection.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedDirection.description}
              </p>
            </div>

            <div className="lg:col-span-5 space-y-2.5">
              {selectedDirection.focusPoints.map((point, idx) => (
                <div key={point} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="text-xs font-mono tabular-figures text-teal-400 mt-0.5">
                    0{idx + 1}
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2 flex lg:justify-end">
              <a
                href={`#${selectedDirection.targetSectionId}`}
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-100 hover:text-[#0B0D10] border border-white/15 hover:border-teal-400 hover:bg-teal-400 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>{selectedDirection.targetLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
