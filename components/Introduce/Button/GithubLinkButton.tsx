// 깃헙 링크
import { Button } from '@/components/ui/button';
import { Link2 } from 'lucide-react';
import Link from 'next/link';

export default function GithubLinkButton() {
  return (
    <>
      <Link target="_blank" href="https://github.com/">
        <Button variant="outline" className="cursor-pointer">
          <Link2 /> Github 바로가기
        </Button>
      </Link>
    </>
  );
}
