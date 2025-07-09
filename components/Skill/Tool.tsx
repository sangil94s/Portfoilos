import Image from 'next/image';
import data from '../../public/data/tool-skill.json';
import { SkillType } from '@/types/typeInfomation';

export default function Tool() {
  return (
    <>
      <div>
        <h1 className="text-center text-xl font-bold py-4">Devops</h1>
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
