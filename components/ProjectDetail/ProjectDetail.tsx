'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

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
      <div className="p-6 rounded-lg max-w-screen-xl min-h-screen my-10 mx-auto space-y-4">
        <div className="w-full h-48 bg-gray-400 flex items-center justify-center rounded-md">
          <p className="text-2xl font-bold">Carousel</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="lg:w-[600px] lg:h-[400px] bg-gray-400 p-4 rounded-md space-y-2">
            <p className="font-bold">📌 프로젝트 제목</p>
            <p>스킬</p>
            <p>역할</p>
            <p>등 정보</p>
          </div>

          <div className="lg:w-[600px] lg:h-[400px] bg-gray-400 p-4 rounded-md">
            <p className="font-bold">💡 주요 기능 등</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="lg:w-[600px] lg:h-[140px] bg-gray-400 p-4 rounded-md">
            <p className="font-bold">⚙️ 기술 선정 사유</p>
          </div>

          <div className="lg:w-[600px] lg:h-[140px] bg-gray-400 p-4 rounded-md">
            <p className="font-bold">🐛 트러블 슈팅</p>
          </div>
        </div>
      </div>
    </>
  );
}
