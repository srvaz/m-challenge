import { SocialNetwork } from './SocialNetwork.model';

export interface PostCardProps {
  socialNetwork: SocialNetwork,
  userName: string,
  image: any,
  description: string,
  publicationDate?: Date
}