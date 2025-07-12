'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ITypes {
  name: string;
}
interface SkillImage {
  name: string;
  image: string;
}
interface ProjectDetail {
  title: string;
  detail: string;
  features: ITypes[];
  troubleshooting: ITypes[];
  result: ITypes[];
  projectskill: SkillImage[];
  projectpeople: string;
  projectpart: ITypes[];
  reserve?: string[];
  thumbnailImage: string;
  github?: string;
  deploy?: string;
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
      <div className="flex flex-col lg:flex-row max-w-screen-xl min-h-screen m-auto my-8 p-4 gap-4">
        <aside className="lg:w-[800px] lg:h-[600px] lg:sticky top-4 space-y-4">
          <div className="bg-gray-100 rounded-lg p-4 shadow">
            <h2 className="text-xl font-bold py-6">프로젝트 명 : {data?.title}</h2>
            <p className="pb-2 text-lg font-bold">사용 기술</p>

            <div className="flex flex-wrap gap-2">
              {data?.projectskill.map(skill => (
                <div key={skill.name} className="relative group flex items-center">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            <h3 className="py-4 text-lg font-bold">참가 인원</h3>
            <p className="text-xs lg:text-base">{data?.projectpeople}</p>

            <h3 className="py-4 text-lg font-bold">담당 역할</h3>
            {data?.projectpart.map(item => (
              <ul key={item.name} className="list-disc list-inside space-y-1">
                <li>{item.name}</li>
              </ul>
            ))}
            {data?.deploy?.length !== 0 && (
              <>
                <h3 className="py-4 text-lg font-bold">Link</h3>

                <div className="flex gap-2 mt-2">
                  <Link href={`${data?.github}`} target="_blank" className="font-bold">
                    Github 바로가기
                  </Link>
                  <Link href={`${data?.deploy}`} target="_blank" className="font-bold">
                    배포 링크 바로가기
                  </Link>
                </div>
              </>
            )}
          </div>

          {title === 'Compact-Machine' && (
            <div className="bg-gray-100 rounded-lg h-[200px] flex items-center justify-center text-center">
              Carousel 들어갈 자리
            </div>
          )}
        </aside>

        <main className="lg:w-2/3 w-full space-y-6">
          <section className="lg:w-[600px] lg:h-[140px] bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">주요 기능 - 어떤게 들어가는지 등</h3>
            <ul className="list-disc list-inside space-y-1">
              {data?.features.map(item => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </section>

          <section className="lg:w-[600px] lg:h-[140px] bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">트러블 슈팅</h3>
            <ul className="list-disc list-inside space-y-1">
              {data?.troubleshooting.map(item => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </section>

          <section className="lg:w-[600px] lg:h-[140px] bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">예비용 - 특정 기술 선정 사유</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>1</li>
            </ul>
          </section>

          <section className="lg:w-[600px] lg:h-[140px] bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2">결과 - 성능 개선 결과 or 기타 프로젝트 결과</h3>
            <ul className="list-disc list-inside space-y-1">
              {data?.result.map(item => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
