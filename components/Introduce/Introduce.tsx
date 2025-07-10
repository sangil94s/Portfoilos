// 자기소개 파트
'use client';
import Typewriter from 'typewriter-effect';
import ResumeDownload from './Button/ResumeDownload';
import MailButton from './Button/MailButton';
// 추가 고려 - 좌측에 이미지?
export default function Introduce() {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold py-4 lg:text-3xl">
        <span className="inline-block text-red-500">
          <Typewriter
            options={{
              strings: [
                '레거시의 문제를 개선',
                '개발 문화 개선을 적극적으로 제안',
                '적극적으로 협업',
              ],
              autoStart: true,
              loop: true,
              delay: 90,
              deleteSpeed: 60,
            }}
          />
        </span>
        하는 프론트엔드 개발자 한상일입니다.
      </h1>
      <p className="font-bold py-1">
        레거시의 성능 이슈 (크롬 Performance LCP 평균 30초, Lighthouse NO_FCP) 등을 이후
        프로젝트에서 LCP 1초, Lighthouse 76점으로 개선
      </p>
      <p className="font-bold py-1">
        기존에 없던 API 문서화를 먼저 제안, 팀과 협의 후 Notion으로 문서화하며 2개 프로젝트를 진행.
      </p>
      <p className="font-bold py-1">
        디자이너에게 받은 AI 가이드 파일에 사용한 색상 정보가 부재를 확인, 사용한 색상에 대한 HEX
        코드 추가에 대해 협의를 진행하여 2개 프로젝트에 개선된 방식으로 적용{' '}
      </p>
      <div className="grid grid-cols-2 justify-items-center gap-2 py-4">
        <ResumeDownload />
        <MailButton />
      </div>
    </section>
  );
}
