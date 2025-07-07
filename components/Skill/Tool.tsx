import Image from 'next/image';
import data from '../../public/data/tool-skill.json';

// 기타 툴 - Vercel 등
interface ITypes {
  id: number;
  title: string;
  description: string;
  descriptiontwo: string;
  image: string;
}
export default function Tool() {
  return (
    <>
      <div>
        <h1 className="text-center text-xl font-bold py-2">Tool</h1>
        <div className="grid grid-cols-1 gap-2 justify-items-center lg:grid-cols-4">
          {data.skills?.map((item: ITypes) => (
            <section
              key={item.id}
              className="border border-slate-300 rounded-md w-full max-w-sm m-2 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
            >
              <div className="flex flx-row m-2">
                <Image
                  src={item.image}
                  alt="Skill Image"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
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
