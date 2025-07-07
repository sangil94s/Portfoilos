// 이력서 Download Component
import { FileDown } from 'lucide-react';

export default function ResumeDownload() {
  return (
    <>
      <div className="p-3 cursor-pointer">
        <a href="/resume.pdf" download>
          <FileDown />
        </a>
      </div>
    </>
  );
}
