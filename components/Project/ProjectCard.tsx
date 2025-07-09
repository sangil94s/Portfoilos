import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import data from '../../public/data/project-infomation.json';
import Link from 'next/link';

// 프로젝트를 보여주는 카드 부분
interface Project {
  id: number;
  title: string;
  date: string;
  teamcount: string;
  description: string;
  parts: string;
  image: string;
}

export default function ProjectCard() {
  return (
    <div className="grid grid-cols-1 m-2 gap-4 justify-items-center lg:grid-cols-2">
      {data?.project.map((item: Project) => (
        <Link key={item.id} href={`/project/${item.title}`}>
          <Card className="group relative cursor-pointer p-4 lg:w-[650px] lg:h-[400px] w-full max-w-sm hover:bg-gray-400 hover:shadow-md transition-all duration-200">
            <Image
              src={item.image}
              alt="Project main image"
              width={200}
              height={20}
              className="rounded-md object-contain m-auto"
            />
             <h4 className="absolute top-40 right-16 text-xl text-center text-blue-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              상세 페이지 바로가기
            </h4>
            <CardHeader>
              <CardTitle>프로젝트 명 : {item.title}</CardTitle>
              <CardDescription className="py-1">진행 기간 : {item.date}</CardDescription>
              <CardDescription className="py-1">진행 인원 : {item.teamcount}</CardDescription>
              <CardDescription className="py-1">담당 부분 : {item.parts}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
             
          </Card>
        
        </Link>
      ))}
    </div>
  );
}
