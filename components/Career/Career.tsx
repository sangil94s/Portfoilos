import Image from 'next/image';
import data from '../../public/data/work-infomation.json';
// 간단하게 회사 언급 + 핵심적인 성과
export default function Career() {
  return (
    <>
      <div className="w-full grid grid-cols-1 justify-items-center lg:grid-cols-2">
        <section className="w-full">
          <h4 className="py-3 text-xl font-bold">{data?.companytitle}</h4>
          <p className="py-2 text-xs text-slate-400 font-bold">{data?.companydate}</p>
          <p className="text-xs text-slate-400 font-bold">{data?.companyposition}</p>
          <ul className="list-disc list-inside font-bold">
            <li className="text-sm py-4">{data?.performanceone}</li>
            <li className="text-sm py-4">{data?.performancetwo}</li>
            <li className="text-sm py-4">{data?.performancethree}</li>
            <li className="text-sm py-4">{data?.performancefour}</li>
            <li className="text-sm py-4">{data?.performancefive}</li>
          </ul>
        </section>

        <section className="w-full lg:w-4/12 flex justify-center">
          <Image
            src={data?.companylogo}
            alt="회사로고"
            width={300}
            height={300}
            className="rounded-full"
          />
        </section>
      </div>
    </>
  );
}
