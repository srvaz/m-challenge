import { SocialNetwork } from './SocialNetwork.model';

export interface PostCardProps {
  socialNetwork: SocialNetwork,
  userName: string,
  description: string,
  publicationDate?: Date
  media?: string,
}