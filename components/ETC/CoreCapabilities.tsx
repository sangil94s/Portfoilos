// 핵심 역량
import data from '../../public/data/core-capabilities.json';
import { CoreCapabilitiesType } from '@/types/typeInfomation';

export default function CoreCapabilities() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 m-2 w-full lg:gap-10 lg:flex-row">
        {data?.core.map((item: CoreCapabilitiesType) => (
          <section key={item.id} className="lg:h-[400px]">
            <h1 className="text-center text-xl font-bold p-4">{item.title}</h1>
            <h4 className="text-center text-xs font-bold p-2">{item.subtitle}</h4>
            <ul className="list-disc">
              <li className="p-4 text-sm">{item.description}</li>
              <li className="p-4 text-sm">{item.descriptiontwo}</li>
              <li className="p-4 text-sm">{item.descriptionthree}</li>
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
