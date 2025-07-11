import Image from 'next/image';
import data from '../../public/data/work-infomation.json';
// 간단하게 회사 언급 + 핵심적인 성과
export default function Career() {
  return (
    <>
      <div className="flex flex-col md:flex-row p-6">
        <section className="flex-shrink-0 border-b-2 md:border-b-0 md:border-r-2 border-slate-100">
          <Image
            src={data?.companylogo}
            alt="회사로고"
            width={140}
            height={140}
            className="rounded-full m-2"
          />
        </section>

        <section className="w-full md:mx-6">
          <h4 className="py-3 text-xl font-bold">{data?.companytitle}</h4>
          <p className="py-2 text-sm text-slate-400 font-bold">{data?.companydate}</p>
          <p className="text-sm text-slate-400 font-bold">{data?.companyposition}</p>
          <p className="text-sm text-slate-400 font-bold py-2">{data?.companyInfo}</p>
          <ul className="list-disc list-inside font-bold">
            <li className="text-sm py-4">{data?.performanceone}</li>
            <li className="text-sm py-4">{data?.performancetwo}</li>
            <li className="text-sm py-4">{data?.performancethree}</li>
            <li className="text-sm py-4">{data?.performancefour}</li>
            <li className="text-sm py-4">{data?.performancefive}</li>
          </ul>
        </section>
      </div>
    </>
  );
}
