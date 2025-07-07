// 위로가기 등 버튼이 여기에 Import 되는 역할
import Top from './Top';
import DarkMode from './DarkMode';
import ResumeDownload from './ResumeDownload';

export default function ButtonGroup() {
  return (
    <>
      <div className="border border-slate-300 rounded-xl fixed right-12 bottom-10">
        <section>
          <DarkMode />
        </section>

        <section>
          <ResumeDownload />
        </section>

        <section>
          <Top />
        </section>
      </div>
    </>
  );
}
