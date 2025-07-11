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
      <div className="flex flex-col justify-center items-center gap-4 m-2 lg:gap-8 lg:flex-row">
        {data?.core.map((item: Project) => (
          <section key={item.id} className="max-w-sm w-full lg:h-[400px]">
            <h1 className="text-center text-xl font-bold p-4">{item.title}</h1>
            <h4 className="text-center text-xs font-bold p-2">{item.subtitle}</h4>
            <p className="p-4 text-sm">{item.description}</p>
            <p className="p-4 text-sm">{item.descriptiontwo}</p>
          </section>
        ))}
      </div>
    </>
  );
}
