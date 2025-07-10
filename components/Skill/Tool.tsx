import Image from 'next/image';
import data from '../../public/data/tool-skill.json';
import { SkillType } from '@/types/typeInfomation';

export default function Tool() {
  return (
    <>
      <div>
        <h1 className="text-start text-xl font-bold py-4">Devops</h1>
        <p className="text-start text-sm text-slate-400 pb-2">
          프로젝트를 진행하며 사용해 본 기술입니다
        </p>
        <div className="grid grid-cols-1 gap-4 justify-items-center lg:grid-cols-4">
          {data.skills?.map((item: SkillType) => (
            <section
              key={item.id}
              className="border-y-4 border-x-2 border-y-orange-400 border-x-orange-200 rounded-xs w-full max-w-sm m-2 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
            >
              <div className="flex flx-row m-2">
                <Image
                  src={item.image}
                  alt="Skill Image"
                  width={40}
                  height={40}
                  className="rounded-md object-contain"
                />
                <h1 className="py-4 px-2 font-bold">{item.title}</h1>
              </div>
              <ul className="px-6 py-2 list-disc list-inside font-bold">
                <li className="pb-2">{item.description}</li>
                <li className="pb-2">{item.descriptiontwo}</li>
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
