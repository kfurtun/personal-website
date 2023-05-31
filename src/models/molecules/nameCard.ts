export interface NameCardProps {
  data: NameCard;
}

export interface NameCard {
  portrait: Portrait;
  name: string;
  title: string;
  buttons: Buttons[];
}

interface Portrait {
  src: string;
  alt: string;
}

interface Buttons {
  text: string;
  path: string;
  isPrimary?: boolean;
}
