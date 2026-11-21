export type RoadmapPhaseStatus = 'completed' | 'in-progress' | 'planned';

export type EcosystemModuleStatus = 'concept' | 'in-progress' | 'planned';

export type SocialEmptyBehavior = 'soon' | 'hide';

export interface SeaConfig {
  name: string;
  fullName: string;
  slogan: string;
  appUrl: string;
  communityUrl: string;
  web3Domain: string;
  contractAddress: string;
  socialLinks: {
    telegram: string;
    vk: string;
    youtube: string;
    instagram: string;
  };
  email: string;
  socialEmptyBehavior: SocialEmptyBehavior;
  roadmapStatus: {
    foundation: RoadmapPhaseStatus;
    community: RoadmapPhaseStatus;
    projects: RoadmapPhaseStatus;
    digitalEcosystem: RoadmapPhaseStatus;
  };
  ecosystemStatus: {
    community: EcosystemModuleStatus;
    projects: EcosystemModuleStatus;
    knowledge: EcosystemModuleStatus;
    initiatives: EcosystemModuleStatus;
    digitalInfrastructure: EcosystemModuleStatus;
    resources: EcosystemModuleStatus;
  };
  language: 'ru';
  showContractAddress: boolean;
  showWeb3Status: boolean;
  heroStatusLabel: string;
}

export const SEA_CONFIG: SeaConfig = {
  name: 'SEA',
  fullName: 'Social Engineering Association',
  slogan: 'Море возможностей для вас и ваших близких',

  // Внешний URL основного приложения SEA (замените на актуальный домен или IPFS-шлюз)
  appUrl: 'https://app.aragon.org/dao/ethereum-mainnet/sea.dao.eth',

  // Основной портал или канал сообщества для CTA «Присоединиться к сообществу»
  communityUrl: 'https://vk.ru/socialengineeringassociation',

  // Web3-домен Unstoppable Domains (например, "sea-association.x" или "sea.crypto")
  web3Domain: 'Association.blockchain',

  // Адрес смарт-контракта (оставьте пустым, если контракт ещё не развёрнут)
  contractAddress: '',

  socialLinks: {
    telegram: 'https://www.t.me/socialengineeringassociation',
    vk: 'https://vk.ru/socialengineeringassociation',
    youtube: 'https://www.youtube.com/@SocialEngineeringAssociation',
    instagram: 'https://www.instagram.com/socialengineeringassociation',
  },
  email: 'SocialEngineeringAssociation@gmail.com',

  // Поведение карточек соцсетей, если ссылка пока пустая: 'soon' | 'hide'
  socialEmptyBehavior: 'soon',

  roadmapStatus: {
    foundation: 'in-progress',
    community: 'planned',
    projects: 'planned',
    digitalEcosystem: 'planned',
  },

  ecosystemStatus: {
    community: 'in-progress',
    projects: 'concept',
    knowledge: 'in-progress',
    initiatives: 'concept',
    digitalInfrastructure: 'planned',
    resources: 'concept',
  },

  language: 'ru',
  showContractAddress: false,
  showWeb3Status: true,
  heroStatusLabel: 'SEA Ecosystem · Web3 Development',
};

export function isConfiguredValue(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (trimmed.includes('YOUR-APP-URL') || trimmed.includes('YOUR-SEA-DOMAIN')) {
    return false;
  }
  return true;
}

export function isExternalHttpUrl(value: string): boolean {
  if (!isConfiguredValue(value)) return false;
  return /^https?:\/\//i.test(value.trim());
}
