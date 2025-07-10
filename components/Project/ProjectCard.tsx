import Image from 'next/image';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import data from '../../public/data/project-infomation.json';
import Link from 'next/link';

// 프로젝트를 보여주는 카드 부분

interface SkillImage {
  name: string;
  image: string;
}

interface Project {
  id: number;
  title: string;
  date: string;
  teamcount: string;
  description: string;
  parts: string;
  image: string;
  useSkillImage: SkillImage[];
}

export default function ProjectCard() {
  return (
    <div className="grid grid-cols-1 m-2 gap-4 justify-items-center lg:grid-cols-2">
      {data?.project.map((item: Project) => (
        <Link key={item.id} href={`/project/${item.title}`}>
          <Card className="group relative cursor-pointer p-4 w-full max-w-sm lg:w-[650px] lg:h-[400px] hover:bg-gray-400 hover:shadow-md transition-all duration-200">
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
              <CardDescription className="py-1">인원: {item.teamcount}</CardDescription>
              <CardDescription className="py-1">담당: {item.parts}</CardDescription>
              <CardDescription className="py-1 text-black">{item.description}</CardDescription>
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
