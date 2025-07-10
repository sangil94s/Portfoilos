'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

interface ProjectDetail {
  detail: string;
  features: string[];
  github: string;
}

export default function ProjectDetail() {
  const params = useParams();
  const title = params?.title as string;
  const [data, setData] = useState<ProjectDetail | null>(null);

  const fetchData = async () => {
    if (!title) return;

    try {
      const res = await fetch('/data/project-detail.json');
      const json = await res.json();
      const detail = json[title];

      if (detail) setData(detail);
      else setData(null);
    } catch (err) {
      console.error('데이터 로딩 실패', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [title]);

  return (
    <>
      <p>{data?.detail}</p>
      <div className="flex flex-col lg:flex-row max-w-screen-xl min-h-screen mx-auto p-4 gap-4">
        <aside className="lg:w-[800px] lg:h-[600px] lg:sticky top-4 space-y-4">
          <div className="bg-gray-400 rounded-lg p-4 shadow">
            <h2 className="text-xl font-bold mb-2">프로젝트 명 : XXXXXX</h2>
            <p className="mb-2 font-bold">사용 기술</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant='outline'>Next.js</Badge>
              <Badge variant='outline'>Typescript</Badge>

            </div>

            <h3 className="my-2 font-bold">참가 인원</h3>
            <p>디자이너 X명, PM X명, FE X명, BE X명 중 XXXXXX 담당</p>

            <h3 className="my-2 font-bold">담당 역할</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>1</li>
            </ul>

            <div className="flex gap-2 mt-2">
              <Button>Github 바로가기</Button>
              <Button>링크 바로가기</Button>
            </div>
          </div>

          <div className="bg-gray-400 rounded-lg h-[200px] flex items-center justify-center text-center">
            Carousel 들어갈 자리
          </div>
        </aside>

        <main className="lg:w-2/3 w-full space-y-6">
          <section className="lg:w-[600px] lg:h-[140px] bg-gray-400 p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">주요 기능 - 어떤게 들어가는지 등</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>1</li>
            </ul>
          </section>

          <section className="lg:w-[600px] lg:h-[140px] bg-gray-400 p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">트러블 슈팅</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>1</li>
            </ul>
          </section>

          <section className="lg:w-[600px] lg:h-[140px] bg-gray-400 p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">예비용 - 특정 기술 선정 사유</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>1</li>
            </ul>
          </section>

          <section className="lg:w-[600px] lg:h-[140px] bg-gray-400 p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">결과 - 성능 개선 결과 or 기타 프로젝트 결과</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>1</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
