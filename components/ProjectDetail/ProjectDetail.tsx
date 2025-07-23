/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectDetailType } from '@/types/typeInfomation';
import CompactTable from '../ETC/CompactTable';
import CompactCarousel from './Carousel/CompactCarousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export default function ProjectDetail() {
  const params = useParams();
  const title = params?.title as string;
  const [data, setData] = useState<ProjectDetailType | null>(null);

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
          <div className="bg-gray-50 rounded-lg p-4 shadow">
            <h2 className="text-xl font-bold py-6 dark:text-black">프로젝트 명 : {data?.title}</h2>
            {data?.thumbnailImage && (
              <Image
                src={data?.thumbnailImage}
                width={200}
                height={100}
                alt="프로젝트 썸네일 이미지"
                className="m-auto"
              />
            )}
            <p className="py-4 text-lg font-bold dark:text-black">사용 기술</p>

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

            <h3 className="py-6 text-lg font-bold dark:text-black">참가 인원</h3>
            <p className="underline text-xs lg:text-base dark:text-black">{data?.projectpeople}</p>

            <h3 className="py-6 text-lg font-bold dark:text-black">진행 기간</h3>
            <p className="text-xs lg:text-base dark:text-black">{data?.date}</p>

            <h3 className="py-6 text-lg font-bold dark:text-black">진행 목적</h3>
            <p className="text-xs lg:text-base dark:text-black">{data?.detail}</p>

            <h3 className="py-6 text-lg font-bold dark:text-black">담당 역할</h3>
            {data?.projectpart.map(item => (
              <ul key={item.name} className="list-disc list-inside space-y-1">
                <li className="py-2 dark:text-black">{item.name}</li>
              </ul>
            ))}
            {data?.deploy?.length !== 0 && (
              <>
                <h3 className="py-4 text-lg font-bold dark:text-black">Link</h3>

                <div className="flex gap-2 mt-2">
                  <Link
                    href={`${data?.github}`}
                    target="_blank"
                    className="border border-slate-300 rounded-md p-2 font-bold dark:text-black"
                  >
                    Github 바로가기
                  </Link>
                  <Link
                    href={`${data?.deploy}`}
                    target="_blank"
                    className="border border-slate-300 rounded-md p-2 font-bold dark:text-black"
                  >
                    배포 링크 바로가기
                  </Link>
                </div>
              </>
            )}
          </div>
        </aside>

        <main className="lg:w-2/3 w-full space-y-6">
          <section className="lg:w-[600px] lg:h-max bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-bold py-2 dark:text-black">기술 선정 사유</h3>
            {data?.skill?.map(skills => (
              <ul key={skills.name} className="list-disc list-inside space-y-1">
                <h4 className="font-bold dark:text-black">{skills.name}</h4>
                <li className="py-2 dark:text-black">{skills.description}</li>
              </ul>
            ))}
          </section>

          <section className="lg:w-[600px] lg:h-max bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-bold py-2 dark:text-black">주요 기능</h3>
            <ul className="list-disc list-inside space-y-1">
              {data?.features.map(item => (
                <li className="py-2 dark:text-black" key={item.name}>
                  {item.name}
                </li>
              ))}
            </ul>
          </section>

          <section className="lg:w-[600px] lg:h-max bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-bold py-2 dark:text-black">
              문제 발생과 해결 {title === 'AFO' && '- AFO'}{' '}
              {title === 'Compact-Machine' && '- Compact-Machine'}
            </h3>
            <Accordion type="multiple" className="space-y-2">
              <div className="space-y-4">
                {data?.troubleshootings.map((item, index) => (
                  <AccordionItem key={index} value={`${index}`} className="py-2 dark:text-black">
                    <AccordionTrigger className="font-bold cursor-pointer">
                      {item.AccordionTrigger}
                    </AccordionTrigger>
                    <AccordionContent>
                      <section className="py-4">
                        <h1 className="font-bold py-1">문제</h1>
                        <p className="py-1">{item.issue}</p>
                      </section>
                      <section className="py-4">
                        <h1 className="font-bold py-1">해결</h1>
                        <ul className='list-disc list-inside'>
                        <li className="py-2">{item.solution}</li>
                        {item.solutiontwo && <li className="py-2">{item.solutiontwo}</li>}
                        {item.solutionthree && <li className="py-2">{item.solutionthree}</li>}
                        </ul>
                        {/* solutiontwo, three 있을 경우만 보여지도록 조건부 렌더링 추가. */}
                      </section>
                      <section className="py-4">
                        <h1 className="font-bold py-1">결과</h1>
                        <ul className='list-disc list-inside'>
                        <li className="py-2">{item.result}</li>
                        {item.resulttwo && <li className="py-2">{item.resulttwo}</li>}
                        {item.resultthree && <li className="py-2">{item.resultthree}</li>}
                        </ul>
                      </section>
                    </AccordionContent>
                  </AccordionItem>
                ))}
                {/* 스타일 수정 필요 */}
              </div>
            </Accordion>
          </section>
          {title === 'Compact-Machine' && (
            <div className=" flex items-center justify-center text-center dark:text-black">
              <CompactCarousel />
            </div>
          )}

          {title === 'Compact-Machine' && (
            <section className="lg:w-[600px] lg:h-max bg-gray-50 p-4 rounded-md">
              <h3 className="text-lg font-bold py-2 dark:text-black">
                APEHEX와 컴팩트머신 관리자 페이지 기준 비교
              </h3>
              <CompactTable />
            </section>
          )}
        </main>
      </div>
    </>
  );
}
