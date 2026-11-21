import React from 'react';
import { SEA_CONFIG } from '../config';
import { PRINCIPLES } from '../data/seaContent';
import { ResilientImage } from './ResilientImage';
import systemNetworkImage from '../assets/images/about_system_network_1795244893734.jpg';

const ACCENT_STATEMENTS = [
  'От отдельных идей — к коллективным решениям.',
  'От проблем — к возможностям.',
  'От ожидания — к действию.',
];

export const AboutMissionSection: React.FC = () => {
  return (
    <>
      {/* C. ABOUT — О SEA */}
      <section id="about" className="py-20 sm:py-24 border-b border-white/[0.08] bg-[#0B0D10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            <div className="lg:col-span-5 flex flex-col">
              <div className="flex-1 rounded-xl overflow-hidden border border-white/10 bg-[#11151B] min-h-[260px]">
                <ResilientImage
                  src={systemNetworkImage}
                  alt="Архитектурная модель взаимосвязанных модулей, символизирующая системное проектирование общества"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Модель взаимосвязей · Системный подход к общественному развитию
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono text-teal-400 mb-3">
                  О концепции · {SEA_CONFIG.name}
                </p>
                <h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 tracking-tight mb-6">
                  Мы проектируем возможности
                </h2>

                <div className="space-y-4 text-base text-slate-300 leading-relaxed max-w-2xl">
                  <p>
                    SEA — Social Engineering Association — это экосистема, направленная на объединение
                    людей, знаний, технологий и инициатив для решения социальных проблем и формирования
                    новых возможностей.
                  </p>
                  <p>
                    Мы рассматриваем общество как систему, которую можно исследовать, улучшать и
                    развивать через сотрудничество. Под социальной инженерией SEA понимает не
                    манипуляции, а системное проектирование общественных процессов, институтов и сред
                    для решения реальных человеческих задач.
                  </p>
                  <p>
                    В SEA идея может стать инициативой, инициатива — проектом, а проект — реальным
                    решением, создающим ценность для людей.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4">
                {ACCENT_STATEMENTS.map((line, index) => (
                  <div
                    key={line}
                    className="rounded-lg border border-white/[0.08] bg-[#11151B] p-4"
                  >
                    <span className="block text-xs font-mono tabular-figures text-teal-400 mb-2">
                      0{index + 1}
                    </span>
                    <p className="text-sm font-medium text-slate-100 leading-snug">{line}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D. MISSION & VISION */}
      <section id="mission" className="py-20 sm:py-24 border-b border-white/[0.08] bg-[#0E1116]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono text-teal-400 mb-3">Миссия, видение и принципы</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 tracking-tight">
              Архитектура коллективного развития
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <article className="rounded-xl border border-white/10 bg-[#12171E] p-7 sm:p-9">
              <p className="text-xs font-mono text-teal-400 mb-3">01 · Миссия</p>
              <h3 className="text-2xl font-semibold text-slate-50 mb-4">Миссия</h3>
              <p className="text-base text-slate-300 leading-relaxed mb-4">
                Объединять людей и компетенции для разработки решений, которые помогают преодолевать
                социальные проблемы и создавать новые возможности.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Мы строим среду, в которой знания, идеи, технологии и ресурсы участников переходят
                в практическую пользу для общества, семей и близких.
              </p>
            </article>

            <article className="rounded-xl border border-white/10 bg-[#12171E] p-7 sm:p-9">
              <p className="text-xs font-mono text-slate-400 mb-3">02 · Видение</p>
              <h3 className="text-2xl font-semibold text-slate-50 mb-4">Видение</h3>
              <p className="text-base text-slate-300 leading-relaxed mb-4">
                Формирование открытой экосистемы, в которой сотрудничество, технологии и инициативы
                становятся инструментами развития человека и общества.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Общество, в котором возможности не ждут как случайное стечение обстоятельств, а
                проектируются совместно через системное мышление и инициативу.
              </p>
            </article>
          </div>

          {/* 8 Core Principles */}
          <div className="rounded-xl border border-white/[0.08] bg-[#0B0D10] p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-6 border-b border-white/[0.08]">
              <h3 className="text-lg font-semibold text-slate-100">Базовые принципы SEA</h3>
              <span className="text-xs text-slate-400">
                Добровольное участие · Открытая коммуникация · Практическая ценность
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5">
              {PRINCIPLES.map((principle, index) => (
                <div
                  key={principle}
                  className="flex items-baseline gap-3 pb-3 border-b border-white/[0.06] last:border-b-0 sm:last:border-b"
                >
                  <span className="text-xs font-mono tabular-figures text-teal-400 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-medium text-slate-200">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
