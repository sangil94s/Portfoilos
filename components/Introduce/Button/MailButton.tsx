import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function MailButton() {
  return (
    <>
      <Button variant="ghost">
        <a href="mailto:bsc7417@gmail.com" className="flex items-center font-bold">
          <Mail className="mx-1" /> 메일 보내기
        </a>
      </Button>
    </>
  );
}
