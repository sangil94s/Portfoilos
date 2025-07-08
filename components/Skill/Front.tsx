import Image from 'next/image';
import data from '../../public/data/front-skill.json';
import { SkillType } from '@/types/typeInfomation';
// 프론트 스킬

export default function Front() {
  return (
    <>
      <div>
        <h1 className="text-center text-xl font-bold py-4">Frontend</h1>
        <div className="grid grid-cols-1 gap-4 justify-items-center lg:grid-cols-3">
          {data.skills?.map((item: SkillType) => (
            <section
              key={item.id}
              className="border-y-4 border-x-2 border-y-blue-400 border-x-blue-200 rounded-xs w-full max-w-sm m-2 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
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
                <li>{item.description}</li>
                <li>{item.descriptiontwo}</li>
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
