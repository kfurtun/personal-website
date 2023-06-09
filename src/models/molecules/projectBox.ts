export interface ProjectBoxProps {
  data: Project;
}

export interface Project {
  title: string;
  type: string;
  description: string;
  image: { img: string; alt: string };
  link: string;
  github: string;
}
