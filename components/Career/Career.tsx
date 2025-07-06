// 간단하게 회사 언급 + 핵심적인 성과

export default function Career() {
  return (
    <>
      <div className="w-full grid grid-cols-2 justify-items-center">
        <section className="w-8/12 border border-slate-300">
          <h4>회사 명</h4>
          <p>핵심 성과 배치 지역</p>
        </section>

        <section className="w-3/12 border border-slate-300 rounded-full">
          <p>회사 로고 배치 지역</p>
        </section>
      </div>
    </>
  );
}
