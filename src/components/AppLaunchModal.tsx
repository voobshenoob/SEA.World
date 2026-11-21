import React, { useEffect } from 'react';
import { X, ArrowUpRight, Globe } from 'lucide-react';
import { SEA_CONFIG, isExternalHttpUrl } from '../config';

interface AppLaunchModalProps {
  isOpen: boolean;
  onClose: () => void;
  contextLabel?: string;
}

export const AppLaunchModal: React.FC<AppLaunchModalProps> = ({
  isOpen,
  onClose,
  contextLabel = 'Основное приложение SEA',
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const hasAppUrl = isExternalHttpUrl(SEA_CONFIG.appUrl);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sea-app-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-xl border border-white/10 bg-[#11151B] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <p className="text-xs font-mono text-teal-400 mb-1">
              {SEA_CONFIG.name} · Конфигурация доступа
            </p>
            <h3 id="sea-app-modal-title" className="text-xl font-semibold text-slate-100">
              {contextLabel}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть окно"
            className="min-h-[40px] min-w-[40px] inline-flex items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-slate-100 hover:border-white/20 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm text-slate-300 leading-relaxed">
          {hasAppUrl ? (
            <>
              <p>
                Цифровое приложение экосистемы SEA настроено и готово к открытию во внешней вкладке.
              </p>
              <div className="rounded-lg border border-white/10 bg-[#0B0D10] p-3.5 font-mono text-xs text-slate-300 break-all">
                {SEA_CONFIG.appUrl}
              </div>
            </>
          ) : (
            <>
              <p>
                Внешний адрес основного приложения SEA пока задан как шаблонный параметр и ещё не
                привязан к действующему домену.
              </p>
              <p className="text-slate-400">
                Портал работает как автономная статическая точка входа. Чтобы подключить
                приложение или DApp-интерфейс, укажите актуальный URL в параметре{' '}
                <code className="font-mono text-teal-300">appUrl</code> в файле{' '}
                <code className="font-mono text-slate-200">src/config.ts</code> перед сборкой для
                IPFS.
              </p>
              <div className="rounded-lg border border-white/10 bg-[#0B0D10] p-3.5 flex items-center gap-3 text-xs text-slate-400">
                <Globe className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Статус интерфейса: портал готов к публикации в IPFS</span>
              </div>
            </>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-white/10 pt-5">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white border border-white/10 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Вернуться на портал
          </button>
          {hasAppUrl ? (
            <a
              href={SEA_CONFIG.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0B0D10] bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <span>Перейти в приложение</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          ) : (
            <a
              href="#social"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0B0D10] bg-slate-100 hover:bg-white rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <span>Официальные каналы</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
