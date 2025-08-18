// 위로가기 등 버튼이 여기에 Import 되는 역할
import Top from './Top';
import DarkMode from './DarkMode';

export default function ButtonGroup() {
  return (
    <>
      <div className="border border-slate-300 rounded-xl fixed right-12 bottom-10 dark:bg-white">
        <section>
          <DarkMode />
        </section>

        <section>
          <Top />
        </section>
      </div>
    </>
  );
}
