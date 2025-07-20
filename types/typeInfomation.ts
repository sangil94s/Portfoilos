export interface ITypese {
  id:number;
  title: string;
}
export interface CoreCapabilitiesType extends ITypese  {
  subtitle: string;
  description: string;
  descriptiontwo: string;
  descriptionthree?: string;
}

export interface SkillListType extends ITypese {
  category: string;
  isInterested: boolean;
  image: string;
} // components/Skill/SkillList.tsx

export interface ProjectCardSkillImageType {
  name: string;
  image: string;
} //components/Project/ProjectCard.tsx

export interface ProjectCardListType extends ITypese {
  date: string;
  teamcount: string;
  description: string;
  parts: string;
  useSkillImage: ProjectCardSkillImageType[];
  image: string;
} //components/Project/ProjectCard.tsx

/* components/Project/Detail/ProjectDetail.tsx 에서 사용 */

export interface ITypes {
  name: string;
  issue?: string;
  solution?: string;
  result?: string;
  AccordionTrigger?: string
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
  projectskill: ProjectCardSkillImageType[];
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
