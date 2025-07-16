'use client';
import { ArrowBigUp } from 'lucide-react';
export default function Top() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="p-3 cursor-pointer">
      <ArrowBigUp onClick={scrollTop} className="w-4 h-4 m-auto dark:text-blue-500" />
    </div>
  );
}
