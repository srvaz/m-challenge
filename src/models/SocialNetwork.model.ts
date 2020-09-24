export interface SocialNetwork {
  id: number;
  name: string;
  icon: string;
  status: SOCIAL_NETWORK_STATUS | null;
}

export enum SOCIAL_NETWORK_STATUS {
  ENABLED = 'enabled',
  DISABLED = 'disabled',
}
