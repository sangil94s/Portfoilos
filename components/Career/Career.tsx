import Image from 'next/image';
import data from '../../public/data/work-infomation.json';
// 간단하게 회사 언급 + 핵심적인 성과
export default function Career() {
  // console.log(data)
  console.log(data?.companytitle);
  return (
    <>
      <div className="w-full grid grid-cols-1 justify-items-center lg:grid-cols-2">
        <section className="w-full">
          <h4 className="py-4 text-xl font-bold">{data?.companytitle}</h4>
          <p className="py-2 text-xs text-slate-400 font-bold">{data?.companydate}</p>
          <p className="text-xs text-slate-400">{data?.companyposition}</p>
          <ul className="p-4 list-disc list-inside font-bold">
            <li className="text-sm py-2">{data?.performanceone}</li>
            <li className="text-sm py-2">{data?.performancetwo}</li>
            <li className="text-sm py-2">{data?.performancethree}</li>
            <li className="text-sm py-2">{data?.performancefour}</li>
            <li className="text-sm py-2">{data?.performancefive}</li>
          </ul>
        </section>

        <section className="w-full lg:w-5/12 flex justify-center">
          <Image
            src={data?.companylogo}
            alt="대상혁"
            width={300}
            height={300}
            className="rounded-full"
          />
        </section>
      </div>
    </>
  );
}
