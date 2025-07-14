export interface CoreCapabilitiesType {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  descriptiontwo: string;
  descriptionthree?: string;
}

export interface SkillListType {
  id: number;
  title: string;
  category: string;
  isInterested: boolean;
  image: string;
} // components/Skill/SkillList.tsx

export interface ProjectCardSkillImageType {
  name: string;
  image: string;
} //components/Project/ProjectCard.tsx

export interface ProjectCardListType {
  id: number;
  title: string;
  date: string;
  teamcount: string;
  description: string;
  parts: string;
  image: string;
  useSkillImage: ProjectCardSkillImageType[];
} //components/Project/ProjectCard.tsx

/* components/Project/Detail/ProjectDetail.tsx 에서 사용 */

export interface ITypes {
  name: string;
  issue?: string;
  solution?: string;
  result?: string;
}
export interface SkillImage {
  name: string;
  image: string;
}
export interface SkillDescription {
  name: string;
  description: string;
}
export interface ProjectDetailType {
  title: string;
  detail: string;
  features: ITypes[];
  troubleshootings: ITypes[];
  projectskill: SkillImage[];
  projectpeople: string;
  projectpart: ITypes[];
  skill: SkillDescription[];
  thumbnailImage: string;
  date: string;
  github?: string;
  deploy?: string;
}
/* components/Project/Detail/ProjectDetail.tsx 에서 사용 */

// 추후 중복 타입 extends 등 으로 통합할것
