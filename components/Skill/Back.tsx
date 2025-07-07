import Image from 'next/image';

// 백엔드

export default function Back() {
  return (
    <>
      <div className="mx-2">
        <h1 className="text-center text-xl font-bold py-2">Backend</h1>
        <div className="grid grid-cols-1 gap-2 justify-items-center lg:grid-cols-4">
          <section className="border border-slate-300 rounded-md m-2 w-full max-w-sm hover:bg-gray-100 hover:shadow-md transition-all duration-200">
            <div className="flex flx-row m-2">
              <Image
                src={'/dae.webp'}
                alt="대상혁"
                width={60}
                height={20}
                className="rounded-full"
              />
              <h1 className="py-4 px-6 text-xl font-bold">React</h1>
            </div>
            <ul className="px-6 py-2 list-disc list-inside font-bold">
              <li>RESTful API 연동 경험</li>
              <li>JWT 기반 인증 처리</li>
              <li>Socket 통신 구현</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
