import React from 'react';
import { ArrowUpRight, Layers, FolderGit2, Link2, User } from 'lucide-react';
import { SEA_CONFIG, isExternalHttpUrl } from '../config';
import { SOCIAL_PLATFORMS } from '../data/seaContent';
import { SocialPlatformIcon } from './icons/SeaIcons';

interface SocialProfileCtaSectionProps {
  onOpenAppModal: (contextLabel?: string) => void;
}

export const SocialProfileCtaSection: React.FC<SocialProfileCtaSectionProps> = ({
  onOpenAppModal,
}) => {
  const hasAppUrl = isExternalHttpUrl(SEA_CONFIG.appUrl);

  const visibleSocialPlatforms = SOCIAL_PLATFORMS.filter((platform) => {
    const url = SEA_CONFIG.socialLinks[platform.key];
    if (isExternalHttpUrl(url)) return true;
    return SEA_CONFIG.socialEmptyBehavior !== 'hide';
  });

  return (
    <>
      {/* K. SOCIAL MEDIA — ОФИЦИАЛЬНЫЕ КАНАЛЫ */}
      {visibleSocialPlatforms.length > 0 && (
        <section id="social" className="py-20 sm:py-24 border-b border-white/[0.08] bg-[#0B0D10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <p className="text-xs font-mono text-teal-400 mb-3">Официальные каналы</p>
                <h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 tracking-tight">
                  Медиапространство сообщества
                </h2>
              </div>
              <p className="text-sm text-slate-400 max-w-md leading-relaxed">
                Следите за развитием SEA, новыми инициативами, проектами и материалами сообщества.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {visibleSocialPlatforms.map((platform) => {
                const url = SEA_CONFIG.socialLinks[platform.key];
                const isReady = isExternalHttpUrl(url);

                return (
                  <article
                    key={platform.key}
                    className="group rounded-xl border border-white/[0.08] bg-[#11151B] hover:border-white/20 p-6 flex flex-col justify-between transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div className="w-10 h-10 rounded-lg border border-white/10 bg-[#0B0D10] flex items-center justify-center text-slate-200 group-hover:text-teal-300 transition-colors">
                          <SocialPlatformIcon platform={platform.key} className="w-5 h-5" />
                        </div>
                        <span
                          className={`text-xs font-mono ${
                            isReady ? 'text-teal-300' : 'text-slate-500'
                          }`}
                        >
                          {isReady ? 'Активно' : 'Скоро'}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-slate-100 mb-2">{platform.name}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed mb-6">
                        {platform.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06]">
                      {isReady ? (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[40px] w-full inline-flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-100 hover:text-[#0B0D10] border border-white/15 hover:border-teal-400 hover:bg-teal-400 rounded-lg transition-colors"
                        >
                          <span>Перейти в {platform.name}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      ) : (
                        <div className="min-h-[40px] w-full inline-flex items-center justify-between px-3.5 py-2 text-xs font-medium text-slate-400 border border-white/[0.06] bg-[#0B0D10]/70 rounded-lg">
                          <span>Канал готовится к запуску</span>
                          <span className="font-mono text-slate-500">Скоро</span>
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* L. PROFILE & DIGITAL PARTICIPATION */}
      <section id="profile" className="py-20 sm:py-24 border-b border-white/[0.08] bg-[#0E1116]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="text-xs font-mono text-teal-400 mb-3">
                Цифровое участие · Концепция профиля
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 tracking-tight mb-5">
                Ваш цифровой профиль — пространство взаимодействия с экосистемой SEA
              </h2>
              <p className="text-base text-slate-300 leading-relaxed mb-4">
                В будущем цифровая платформа SEA сможет объединять профили участников, компетенции,
                интересы, социальные связи, проекты и инициативы.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed mb-8">
                Пользователи смогут управлять своим цифровым присутствием и при наличии
                соответствующего функционала связывать внешние социальные сети с профилем.
                Представленная схема отражает целевую архитектуру интерфейса.
              </p>

              {hasAppUrl ? (
                <a
                  href={SEA_CONFIG.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B0D10] bg-slate-100 hover:bg-teal-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Войти в приложение</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => onOpenAppModal('Цифровой профиль SEA')}
                  className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B0D10] bg-slate-100 hover:bg-teal-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Войти в приложение</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Conceptual Profile Blueprint (Honest architectural preview, not fake login) */}
            <div className="lg:col-span-6">
              <div className="rounded-xl border border-white/10 bg-[#11151B] p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-lg border border-white/15 bg-[#0B0D10] flex items-center justify-center text-teal-300">
                      <User className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-100">Профиль участника SEA</p>
                      <p className="text-xs text-slate-400">
                        Концептуальная визуализация · В разработке
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-500">Web3 Identity</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div className="rounded-lg border border-white/[0.06] bg-[#0B0D10] p-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-2">
                      <Layers className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Компетенции и интересы</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Системное проектирование, исследования среды, технологическая разработка,
                      координация инициатив.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/[0.06] bg-[#0B0D10] p-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-2">
                      <FolderGit2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Проекты и роли</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Участие в рабочих группах, история вклада в решения и статус текущих
                      инициатив.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-white/[0.06] bg-[#0B0D10] p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Link2 className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                    <span>Связь с внешними каналами и Web3-доменом</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 whitespace-nowrap shrink-0">
                    Планируется
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* M. FINAL CTA */}
      <section className="py-20 sm:py-28 border-b border-white/[0.08] bg-[#0B0D10] architectural-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-mono text-teal-400 mb-4">
            {SEA_CONFIG.name} · {SEA_CONFIG.fullName}
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold text-slate-50 tracking-tight mb-6">
            Будущее создаётся взаимодействием.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-4">
            Мы верим, что объединение людей, идей и технологий позволяет превращать проблемы в
            проекты, а проекты — в возможности.
          </p>
          <p className="text-sm sm:text-base font-medium text-teal-300 mb-9">
            {SEA_CONFIG.name} — {SEA_CONFIG.slogan}.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
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
              href="#social"
              className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-100 hover:text-white border border-white/15 hover:border-white/30 bg-[#11151B] rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <span>Подписаться на SEA</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
