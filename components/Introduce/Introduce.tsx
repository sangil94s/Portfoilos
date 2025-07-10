// 자기소개 파트
'use client';
import Typewriter from 'typewriter-effect';
import ResumeDownload from './Button/ResumeDownload';
import MailButton from './Button/MailButton';

export default function Introduce() {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold py-4 lg:text-4xl">
        <span className="inline-block text-red-500">
          <Typewriter
            options={{
              strings: ['열정적인 개발', '유연한 개발', '주도적인 개발'],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 40,
            }}
          />
        </span>
        하는 프론트엔드 개발자 한상일입니다.
      </h1>
      <p className="font-bold py-3">항목 1 - XXXXXXX</p>
      <p className="font-bold py-3">항목 2 - XXXXXXX</p>
      <p className="font-bold py-3">항목 3 - XXXXXXX</p>
      <p className="font-bold py-3">항목 4 - XXXXXXX</p>
      <div className="grid grid-cols-2 justify-items-center gap-2 py-4">
        <ResumeDownload />
        <MailButton />
      </div>
    </section>
  );
}
