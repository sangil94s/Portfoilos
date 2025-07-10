// 이력서 Download Component
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';
export default function ResumeDownload() {
  return (
    <>
      <Button variant="ghost">
        <a href="/resume.pdf" download className="flex items-center gap-2 font-bold">
          <FileDown /> 이력서 다운로드
        </a>
      </Button>
    </>
  );
}
