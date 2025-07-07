import Image from 'next/image';

// 간단하게 회사 언급 + 핵심적인 성과
export default function Career() {
  return (
    <>
      <div className="w-full grid grid-cols-1 justify-items-center lg:grid-cols-2">
        <section className="w-12/12">
          <h4 className="py-4 text-xl font-bold">회사 명</h4>
          <p className="text-base text-slate-400">핵심 성과 배치 지역</p>
          <ul className="p-6 list-disc list-inside font-bold">
            <li>RESTful API 연동 경험</li>
            <li>JWT 기반 인증 처리</li>
            <li>Socket 통신 구현</li>
          </ul>
        </section>

        <section className="w-3/12">
          <Image src={'/dae.webp'} alt="대상혁" width={300} height={300} className="rounded-full" />
        </section>
      </div>
    </>
  );
}
