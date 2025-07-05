// 위로가기 등 버튼이 여기에 Import 되는 역할
import { ArrowBigUp, FileDown, Sun } from 'lucide-react';

export default function ButtonGroup() {
  return (
    <>
      <div className="border border-slate-400 rounded-md fixed right-12 bottom-10">
        <p className="p-2">
          <Sun />
        </p>

        <p className="p-2">
          <FileDown />
        </p>

        <p className="p-2">
          <ArrowBigUp />
        </p>
      </div>
    </>
  );
}
