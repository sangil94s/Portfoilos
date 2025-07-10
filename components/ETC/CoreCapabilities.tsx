// 핵심 역량
import data from '../../public/data/core-capabilities.json';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  descriptiontwo: string;
  descriptionthree?: string;
}
export default function CoreCapabilities() {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-4 m-2">
        {data?.core.map((item: Project) => (
          <section
            key={item.id}
            className="border border-slate-300 rounded-md max-w-sm w-full lg:w-[650px] lg:h-[200px]"
          >
            <h1 className="text-center text-xl font-bold py-4">{item.title}</h1>
            <h4 className="text-center text-xs font-bold pb-4">{item.subtitle}</h4>
            <ul className="px-4 py-2 list-disc list-inside font-bold">
              <li className="pb-2">{item.description}</li>
              <li className="pb-2">{item.descriptiontwo}</li>
              {item.descriptionthree !== '' ? (
                <li className="pb-2">{item.descriptionthree}</li>
              ) : (
                ''
              )}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
