import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import data from '../../public/data/project-infomation.json';

// 프로젝트를 보여주는 카드 부분
interface Project {
  id: number;
  title: string;
  date: string;
  teamcount: string;
  description: string;
  tags: string[];
  image: string;
}

export default function ProjectCard() {
  return (
    <div className="grid grid-cols-1 m-2 gap-4 justify-items-center lg:grid-cols-4">
      {data?.project.map((item: Project) => (
        <Card
          key={item.id}
          className="cursor-pointer w-full max-w-sm hover:bg-gray-100 hover:shadow-md transition-all duration-200"
        >
          <Image
            src={item.image}
            alt="Project main image"
            width={260}
            height={20}
            className="rounded-md object-contain m-auto"
          />
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.date}</CardDescription>
            <CardDescription>{item.teamcount}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{item.description}</p>
          </CardContent>
          <CardFooter className="grid grid-cols-4 justify-items-center gap-2">
            {item?.tags.map((tag, idx) => (
              <Badge key={idx} variant="secondary" className="font-bold">
                {tag}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
