export interface IntroductionProps {
  data: Introduction;
}

export interface Introduction {
  header: string;
  intro: string;
  buttons: { text: string; path: string; isPrimary?: boolean }[];
  description: string;
}
