import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

// 프로젝트를 보여주는 카드 부분
export default function ProjectCard() {
  return (
    <div className="grid grid-cols-1 m-2 gap-4 justify-items-center lg:grid-cols-4">
      <Card className="cursor-pointer w-full hover:bg-gray-100 hover:shadow-md transition-all duration-200">
        <Image
          src={'/dae.webp'}
          alt="대상혁"
          width={250}
          height={20}
          className="rounded-md object-contain m-auto"
        />
        <CardHeader>
          <CardTitle>AFO</CardTitle>
          <CardDescription>기간 : 2023.03 - 2023.09 [X개월]</CardDescription>
          <CardDescription>인원 : X명</CardDescription>
        </CardHeader>
        <CardContent>
          <p>XXXXX 프로젝트 입니다</p>
        </CardContent>
        <CardFooter className="grid grid-cols-3 justify-items-center gap-2">
          <Badge variant="secondary" className="mx-1 font-bold">
            회사 프로젝트
          </Badge>
          <Badge variant="secondary" className="mx-1 font-bold">
            Frontend
          </Badge>
          <Badge variant="secondary" className="mx-1 font-bold">
            Backend
          </Badge>
          <Badge variant="secondary" className="mx-1 font-bold">
            React
          </Badge>
          <Badge variant="secondary" className="mx-1 font-bold">
            Express
          </Badge>
          <Badge variant="secondary" className="mx-1 font-bold">
            GCP
          </Badge>
        </CardFooter>
      </Card>
      <Card className="cursor-pointer w-full hover:bg-gray-100 hover:shadow-md transition-all duration-200">
        <Image
          src={'/dae.webp'}
          alt="대상혁"
          width={250}
          height={20}
          className="rounded-md object-contain m-auto"
        />

        <CardHeader>
          <CardTitle>Compact Machine</CardTitle>
          <CardDescription>기간 : 2023.03 - 2023.09 [X개월]</CardDescription>
          <CardDescription>인원 : X명</CardDescription>
        </CardHeader>
        <CardContent>
          <p>XXXXX 프로젝트 입니다</p>
        </CardContent>
        <CardFooter className="grid grid-cols-3 justify-items-center gap-2">
          <Badge variant="secondary" className="mx-1 font-bold">
            회사 프로젝트
          </Badge>
          <Badge variant="secondary" className="mx-1 font-bold">
            Frontend
          </Badge>
          <Badge variant="secondary" className="mx-1 font-bold">
            Backend
          </Badge>
          <Badge variant="secondary" className="mx-1 font-bold">
            React
          </Badge>
          <Badge variant="secondary" className="mx-1 font-bold">
            Express
          </Badge>
          <Badge variant="secondary" className="mx-1 font-bold">
            GCP
          </Badge>
        </CardFooter>
      </Card>
      <Card className="cursor-pointer w-full hover:bg-gray-100 hover:shadow-md transition-all duration-200">
        <Image
          src={'/dae.webp'}
          alt="대상혁"
          width={250}
          height={20}
          className="rounded-md object-contain m-auto"
        />

        <CardHeader>
          <CardTitle>Steamrader</CardTitle>
          <CardDescription>기간 : 2023.03 - 2023.09 [X개월]</CardDescription>
          <CardDescription>인원 : X명</CardDescription>
        </CardHeader>
        <CardContent>
          <p>XXXXX 프로젝트 입니다</p>
        </CardContent>
        <CardFooter className="grid grid-cols-3 justify-items-center gap-2">
          <Badge variant="secondary" className="mx-1 font-bold">
            개인 프로젝트
          </Badge>
          <Badge variant="secondary" className="mx-1 font-bold">
            Frontend
          </Badge>
          <Badge variant="secondary" className="mx-1 font-bold">
            React
          </Badge>
          <Badge variant="secondary" className="mx-1 font-bold">
            Next.js
          </Badge>
          <Badge variant="secondary" className="mx-1 font-bold">
            Prisma
          </Badge>
        </CardFooter>
      </Card>
      <Card className="cursor-pointer w-full hover:bg-gray-100 hover:shadow-md transition-all duration-200">
        <Image
          src={'/dae.webp'}
          alt="대상혁"
          width={250}
          height={20}
          className="rounded-md object-contain m-auto"
        />

        <CardHeader>
          <CardTitle>Portfoilo</CardTitle>
          <CardDescription>기간 : 2023.03 - 2023.09 [X개월]</CardDescription>
          <CardDescription>인원 : X명</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter className="grid grid-cols-3 justify-items-center gap-2">
          <Badge variant="secondary" className="mx-1 font-bold">
            개인 프로젝트
          </Badge>
          <Badge variant="secondary" className="mx-1 font-bold">
            Frontend
          </Badge>
          <Badge variant="secondary" className="mx-1 font-bold">
            React
          </Badge>
          <Badge variant="secondary" className="mx-1 font-bold">
            Next.js
          </Badge>
        </CardFooter>
      </Card>
    </div>
  );
}
