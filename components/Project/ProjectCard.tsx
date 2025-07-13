import Image from 'next/image';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import data from '../../public/data/project-infomation.json';
import Link from 'next/link';
import { ProjectCardListType } from '@/types/typeInfomation';
// 프로젝트를 보여주는 카드 부분

export default function ProjectCard() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 lg:flex-row">
      {data?.project.map((item: ProjectCardListType) => (
        <Link key={item.id} href={`/project/${item.title}`}>
          <Card className="group relative cursor-pointer p-4 w-[90vw] max-w-[500px] sm:max-w-sm lg:w-[650px] lg:h-[400px] hover:bg-gray-400 hover:shadow-md transition-all duration-200">
            <Image
              src={item.image}
              alt="Project main image"
              width={200}
              height={20}
              className="rounded-md object-contain m-auto"
            />
            <h4 className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="text-xl text-blue-600 font-bold border-2 border-blue-600 px-4 py-2 rounded-full bg-inherit backdrop-blur-sm">
                상세 페이지 바로가기
              </span>
            </h4>
            <CardHeader>
              <CardTitle>프로젝트 명 : {item.title}</CardTitle>
              <CardDescription className="py-1">기간: {item.date}</CardDescription>
              <CardDescription className="py-1 font-bold">인원: {item.teamcount}</CardDescription>
              <CardDescription className="py-1 font-bold">담당: {item.parts}</CardDescription>
              <CardDescription className="py-2 text-black dark:text-slate-300">{item.description}</CardDescription>
              <div className="flex flex-row justify-center gap-2">
                <h4 className="text-base font-bold">Skill: </h4>
                {item.useSkillImage.map(skill => (
                  <div key={skill.name} className="relative group flex items-center">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
