export interface DirectionItem {
  id: string;
  index: string;
  englishTitle: string;
  title: string;
  description: string;
  focusPoints: string[];
  targetSectionId: string;
  targetLabel: string;
}

export interface ProcessStepItem {
  index: string;
  englishLabel: string;
  title: string;
  shortTitle: string;
  description: string;
  output: string;
}

export interface EcosystemModuleItem {
  key: 'community' | 'projects' | 'knowledge' | 'initiatives' | 'digitalInfrastructure' | 'resources';
  englishTitle: string;
  title: string;
  description: string;
}

export interface CommunityPathItem {
  id: string;
  index: string;
  title: string;
  description: string;
  actionHint: string;
}

export interface Web3DirectionItem {
  index: string;
  englishTitle: string;
  title: string;
  description: string;
}

export interface RoadmapPhaseItem {
  key: 'foundation' | 'community' | 'projects' | 'digitalEcosystem';
  phaseLabel: string;
  englishTitle: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface SocialPlatformItem {
  key: 'telegram' | 'vk' | 'youtube' | 'instagram';
  name: string;
  description: string;
}

export const NAV_LINKS = [
  { href: '#about', label: 'О SEA' },
  { href: '#mission', label: 'Миссия' },
  { href: '#directions', label: 'Направления' },
  { href: '#how-it-works', label: 'Как это работает' },
  { href: '#ecosystem', label: 'Экосистема' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#community', label: 'Сообщество' },
] as const;

export const PRINCIPLES: string[] = [
  'Открытость',
  'Инициативность',
  'Сотрудничество',
  'Системное мышление',
  'Практическая ценность',
  'Технологическое развитие',
  'Ответственность',
  'Добровольное участие',
];

export const DIRECTIONS: DirectionItem[] = [
  {
    id: 'social-engineering',
    index: '01',
    englishTitle: 'Social Engineering',
    title: 'Социальное проектирование',
    description:
      'Исследование социальных проблем, выявление системных причин и разработка практических решений для улучшения жизни людей.',
    focusPoints: [
      'Анализ общественных процессов и реальных потребностей',
      'Проектирование устойчивых моделей взаимодействия',
      'Переход от точечной реакции к системным изменениям',
    ],
    targetSectionId: 'how-it-works',
    targetLabel: 'Изучить механизм работы',
  },
  {
    id: 'opportunity-economy',
    index: '02',
    englishTitle: 'Opportunity Economy',
    title: 'Экономика возможностей',
    description:
      'Создание условий, в которых люди получают доступ к работе, доходу, знаниям, ресурсам, проектам и равноправному сотрудничеству.',
    focusPoints: [
      'Снижение барьеров входа в совместные проекты',
      'Обмен компетенциями и ресурсами внутри экосистемы',
      'Формирование новых точек профессионального роста',
    ],
    targetSectionId: 'ecosystem',
    targetLabel: 'Посмотреть структуру экосистемы',
  },
  {
    id: 'human-development',
    index: '03',
    englishTitle: 'Human Development',
    title: 'Человеческий потенциал',
    description:
      'Объединение навыков, опыта, знаний и способностей людей для личного развития и реализации совместных инициатив.',
    focusPoints: [
      'Раскрытие практических компетенций участников',
      'Взаимное обучение через реальные задачи',
      'Поддержка инициативных специалистов и исследователей',
    ],
    targetSectionId: 'community',
    targetLabel: 'Узнать о форматах участия',
  },
  {
    id: 'collective-projects',
    index: '04',
    englishTitle: 'Collective Projects',
    title: 'Коллективные проекты',
    description:
      'Формирование команд вокруг реальных проблем, идей и целей. Объединение участников с разными компетенциями для создания решений.',
    focusPoints: [
      'Междисциплинарные команды под конкретные задачи',
      'Прозрачное распределение ролей и этапов',
      'Превращение локальных идей в рабочие инициативы',
    ],
    targetSectionId: 'how-it-works',
    targetLabel: 'Как запускаются проекты',
  },
  {
    id: 'technology-web3',
    index: '05',
    englishTitle: 'Technology & Web3',
    title: 'Технологии и цифровая инфраструктура',
    description:
      'Использование современных технологий, цифровых платформ, автоматизации и Web3-инструментов для прозрачности и новых форм организации.',
    focusPoints: [
      'Децентрализованные стандарты хранения и доступа (IPFS)',
      'Инструменты цифровой идентичности и координации',
      'Открытая технологическая архитектура будущего',
    ],
    targetSectionId: 'web3',
    targetLabel: 'К концепции Web3',
  },
  {
    id: 'urban-social-environment',
    index: '06',
    englishTitle: 'Urban & Social Environment',
    title: 'Развитие среды',
    description:
      'Работа с вопросами городской среды, доступности ресурсов, образования, занятости, качества жизни и устойчивого развития территорий.',
    focusPoints: [
      'Улучшение локальной и городской инфраструктуры',
      'Доступность образовательных и социальных сервисов',
      'Проекты качества жизни для семей и близких',
    ],
    targetSectionId: 'roadmap',
    targetLabel: 'Этапы развития SEA',
  },
];

export const PROCESS_CYCLE_LABELS = [
  'Проблема',
  'Исследование',
  'Объединение компетенций',
  'Проектирование',
  'Реализация',
  'Результат',
  'Улучшение',
] as const;

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    index: '01',
    englishLabel: 'Identify',
    title: 'Определяем проблему',
    shortTitle: 'Выявляем потребность',
    description:
      'Фиксируем реальные потребности людей и общества, отделяя симптомы от корневых задач, требующих решения.',
    output: 'Чёткая формулировка социальной или прикладной задачи',
  },
  {
    index: '02',
    englishLabel: 'Research',
    title: 'Изучаем причины',
    shortTitle: 'Анализируем систему',
    description:
      'Собираем данные, анализируем обстоятельства и контекст, изучаем существующие практики и ищем системные причины проблемы.',
    output: 'Исследовательская база и карта системных факторов',
  },
  {
    index: '03',
    englishLabel: 'Connect',
    title: 'Объединяем людей',
    shortTitle: 'Собираем компетенции',
    description:
      'Привлекаем необходимые знания, опыт, технологии, идеи и инициативы участников, готовых работать над задачей.',
    output: 'Междисциплинарная группа компетенций и ресурсов',
  },
  {
    index: '04',
    englishLabel: 'Design',
    title: 'Проектируем решение',
    shortTitle: 'Формируем план',
    description:
      'Разрабатываем архитектуру решения, стратегию реализации, роли участников и последовательный план действий.',
    output: 'Проектная концепция и дорожная карта запуска',
  },
  {
    index: '05',
    englishLabel: 'Build',
    title: 'Реализуем инициативу',
    shortTitle: 'Запускаем проект',
    description:
      'Создаём проектные команды, разворачиваем необходимые инструменты и воплощаем решение на практике.',
    output: 'Действующий проект или общественное решение',
  },
  {
    index: '06',
    englishLabel: 'Improve',
    title: 'Оцениваем результат',
    shortTitle: 'Масштабируем опыт',
    description:
      'Анализируем реальную эффективность, фиксируем полученный опыт, устраняем узкие места и готовим решение к масштабированию.',
    output: 'Верифицированный результат и улучшение системы',
  },
];

export const ECOSYSTEM_MODULES: EcosystemModuleItem[] = [
  {
    key: 'community',
    englishTitle: 'Community',
    title: 'Сообщество',
    description:
      'Открытая среда людей, идей, компетенций и инициатив, объединённых интересом к созидательному проектированию.',
  },
  {
    key: 'projects',
    englishTitle: 'Projects',
    title: 'Проекты',
    description:
      'Практические инициативы и междисциплинарные команды, направленные на решение конкретных социальных и прикладных проблем.',
  },
  {
    key: 'knowledge',
    englishTitle: 'Knowledge',
    title: 'Знания',
    description:
      'Исследования, системная аналитика, методология социального проектирования, образовательные материалы и обмен опытом.',
  },
  {
    key: 'initiatives',
    englishTitle: 'Initiatives',
    title: 'Инициативы',
    description:
      'Предложения участников, новые идеи, гипотезы и направления развития, из которых формируются будущие проекты.',
  },
  {
    key: 'digitalInfrastructure',
    englishTitle: 'Digital Infrastructure',
    title: 'Цифровая инфраструктура',
    description:
      'Цифровые инструменты, профили участников, каналы коммуникации, координация команд и управление проектами.',
  },
  {
    key: 'resources',
    englishTitle: 'Resources',
    title: 'Ресурсы',
    description:
      'Компетенции, время, технологии, экспертиза и открытая информация, которые могут объединяться для достижения общих целей.',
  },
];

export const COMMUNITY_PATHS: CommunityPathItem[] = [
  {
    id: 'propose-idea',
    index: '01',
    title: 'Предложить идею',
    description:
      'Сформулируйте социальную проблему, потребность или концепцию решения, чтобы обсудить её с единомышленниками.',
    actionHint: 'Достаточно описать задачу и предполагаемую ценность для людей.',
  },
  {
    id: 'share-skills',
    index: '02',
    title: 'Поделиться компетенциями',
    description:
      'Включите свой профессиональный опыт — в разработке, аналитике, дизайне, праве, урбанистике или управлении проектами.',
    actionHint: 'Вы сами определяете формат и объём своего участия.',
  },
  {
    id: 'join-initiative',
    index: '03',
    title: 'Присоединиться к инициативе',
    description:
      'Выберите существующее направление или формирующуюся рабочую группу, задачи которой близки вашим интересам.',
    actionHint: 'Без обязательных взносов и формального членства.',
  },
  {
    id: 'create-project',
    index: '04',
    title: 'Создать собственный проект',
    description:
      'Инициируйте практический проект и соберите команду специалистов с дополняющими друг друга навыками.',
    actionHint: 'От локальной инициативы до системного общественного решения.',
  },
];

export const WEB3_DIRECTIONS: Web3DirectionItem[] = [
  {
    index: '01',
    englishTitle: 'Decentralized Infrastructure',
    title: 'Децентрализованная инфраструктура',
    description:
      'Автономная публикация информационных узлов и порталов через IPFS и распределённые сети хранения данных без привязки к единой точке отказа.',
  },
  {
    index: '02',
    englishTitle: 'Digital Identity',
    title: 'Цифровая идентичность',
    description:
      'Концепция проверяемого профиля участника, где человек контролирует свои данные, репутацию и подтверждённые компетенции.',
  },
  {
    index: '03',
    englishTitle: 'Blockchain',
    title: 'Блокчейн-технологии',
    description:
      'Использование распределённого реестра как технологического слоя для верификации договорённостей и неизменяемого учёта вклада.',
  },
  {
    index: '04',
    englishTitle: 'Transparent Governance',
    title: 'Прозрачное управление',
    description:
      'Открытые механизмы принятия коллективных решений, приоритизации инициатив и отслеживания этапов реализации проектов.',
  },
  {
    index: '05',
    englishTitle: 'Digital Community',
    title: 'Цифровое сообщество',
    description:
      'Связь между участниками, проектами и ресурсами в единой цифровой среде, устойчивой к внешним ограничениям.',
  },
  {
    index: '06',
    englishTitle: 'Future DAO Architecture',
    title: 'Архитектура DAO будущего',
    description:
      'Долгосрочное исследование децентрализованных моделей координации и самоуправления вокруг общественно полезных задач.',
  },
];

export const ROADMAP_PHASES: RoadmapPhaseItem[] = [
  {
    key: 'foundation',
    phaseLabel: 'Phase 01',
    englishTitle: 'Foundation',
    title: 'Фундамент',
    description:
      'Формирование концепции, миссии, идентичности, структуры сообщества и базовой цифровой инфраструктуры.',
    deliverables: [
      'Публикация концепции и принципов SEA',
      'Запуск статического Web3-портала для IPFS',
      'Базовая настройка Web3-домена и архитектуры',
    ],
  },
  {
    key: 'community',
    phaseLabel: 'Phase 02',
    englishTitle: 'Community',
    title: 'Сообщество',
    description:
      'Развитие информационных площадок, привлечение участников, формирование инициатив и первичных проектных команд.',
    deliverables: [
      'Запуск официальных каналов коммуникации',
      'Сбор первых инициатив и обмен компетенциями',
      'Формирование рабочих групп по направлениям',
    ],
  },
  {
    key: 'projects',
    phaseLabel: 'Phase 03',
    englishTitle: 'Projects',
    title: 'Проекты',
    description:
      'Исследование проблем, запуск пилотных инициатив, разработка решений и формирование практических проектов.',
    deliverables: [
      'Аналитика ключевых социальных и городских задач',
      'Пилотный цикл от идеи до реализации',
      'Документирование методологии и результатов',
    ],
  },
  {
    key: 'digitalEcosystem',
    phaseLabel: 'Phase 04',
    englishTitle: 'Digital Ecosystem',
    title: 'Цифровая экосистема',
    description:
      'Развитие цифровой платформы, Web3-инструментов, механизмов координации, взаимодействия и масштабирования.',
    deliverables: [
      'Цифровые профили участников и проектные пространства',
      'Прозрачные инструменты координации команд',
      'Масштабирование децентрализованной инфраструктуры',
    ],
  },
];

export const SOCIAL_PLATFORMS: SocialPlatformItem[] = [
  {
    key: 'telegram',
    name: 'Telegram',
    description: 'Анонсы инициатив, обсуждения, заметки о развитии экосистемы и прямая связь с сообществом.',
  },
  {
    key: 'vk',
    name: 'VK',
    description: 'Публикации материалов, разборы социальных проектов, новости направлений и открытые дискуссии.',
  },
  {
    key: 'youtube',
    name: 'YouTube',
    description: 'Видеоматериалы о методологии социального проектирования, обзоры инициатив и диалоги с участниками.',
  },
  {
    key: 'instagram',
    name: 'Instagram',
    description: 'Визуальные хроники проектов, ключевые идеи SEA и краткие форматы о развитии среды.',
  },
];
