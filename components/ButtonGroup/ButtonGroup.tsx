// 위로가기 등 버튼이 여기에 Import 되는 역할
import { FileDown } from 'lucide-react';
import Top from './Top';
import DarkMode from './DarkMode';

export default function ButtonGroup() {
  return (
    <>
      <div className="border border-slate-300 rounded-xl fixed right-12 bottom-10">
        <section>
          <DarkMode />
        </section>

        <p className="p-3">
          <FileDown />
        </p>

        <section>
          <Top />
        </section>
      </div>
    </>
  );
}
