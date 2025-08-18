'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Headers() {
  const pathname = usePathname();
  return (
    <>
      <header className="fixed z-40 w-full h-10 mb-2 flex flex-row justify-between">
        <Link href="/">
          <h1 className="p-1 text-xl font-bold dark:text-blue-500">Fronthan.dev</h1>
        </Link>
        {pathname === '/' && (
          <section className="flex gap-6 m-3">
            <Link
              href="#core"
              className="font-bold text-xs lg:text-base cursor-pointer dark:text-blue-500"
            >
              핵심 역량
            </Link>
            <Link
              href="#skill"
              className="font-bold text-xs lg:text-base cursor-pointer dark:text-blue-500"
            >
              사용 기술
            </Link>
            <Link
              href="#career"
              className="font-bold text-xs lg:text-base cursor-pointer dark:text-blue-500"
            >
              경력
            </Link>
            <Link
              href="#project"
              className="font-bold text-xs lg:text-base cursor-pointer dark:text-blue-500"
            >
              프로젝트
            </Link>
          </section>
        )}
      </header>
    </>
  );
}
