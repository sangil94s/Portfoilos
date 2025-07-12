// 자기소개 파트
'use client';
import Typewriter from 'typewriter-effect';
import ResumeDownload from './Button/ResumeDownload';
import MailButton from './Button/MailButton';
import Image from 'next/image';

// 추가 고려 - 좌측에 이미지?
export default function Introduce() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <section className="w-6/12 lg:w-3/12">
          <Image
            src={'/blacks.png'}
            alt="증명 사진 배치 지역"
            width={300}
            height={300}
            className="rounded-md"
          />
        </section>
        <section className="mx-10 md:w-full lg:w-7/12">
          <h1 className="text-xl font-bold py-4 lg:text-xl">
            <span className="inline-block text-red-500">
              <Typewriter
                options={{
                  strings: [
                    '문제를 먼저 찾고 개선',
                    '개발 문화 개선을 먼저 제안',
                    '적극적으로 협업',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 90,
                  deleteSpeed: 60,
                }}
              />
            </span>
            하는 프론트엔드 XXX입니다.
          </h1>
          <p className="font-bold text-sm py-1">
            기존 상황에서 개선 가능한 부분을 찾고 고쳐내는걸 중시 합니다.
          </p>
          <p className="font-bold text-sm py-1">
            빠른 개발을 위해 후순위로 밀렸던 성능 최적화, 문서화 등
          </p>
          <p className="font-bold text-sm py-1">
            여러 부분에 대해 제안하고 실행하여 더 개선된 서비스나 개발 문화 발전에 기여하고자 합니다
          </p>
          <div className="grid grid-cols-2 justify-items-center gap-2 py-4">
            <ResumeDownload />
            <MailButton />
          </div>
        </section>
      </div>
    </>
  );
}
