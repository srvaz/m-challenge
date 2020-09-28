import { IconName } from '@fortawesome/fontawesome-svg-core';

export class SocialNetwork {
  id: number;
  name: string;
  icon: IconName;
  status: SOCIAL_NETWORK_STATUS | null;

  constructor({ id, name, icon, status}: SocialNetwork) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.status = status
  }
}

export enum SOCIAL_NETWORK_STATUS {
  ENABLED = 'enabled',
  DISABLED = 'disabled',
}
