import Career from '@/components/Career/Career';
import CoreCapabilities from '@/components/ETC/CoreCapabilities';
import Introduce from '@/components/Introduce/Introduce';
import ProjectCard from '@/components/Project/ProjectCard';
import SkillList from '@/components/Skill/SkillList';
import FadeInSection from '@/components/util/FramerMotion/FadeIn';

export default function Home() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto px-6">
        <div className="min-h-screen flex flex-col justify-center">
          <Introduce />
        </div>
        <div className="min-h-screen flex flex-col justify-center">
          <h1 id="core" className="text-center text-xl font-bold py-4 lg:text-4xl">
            핵심 역량
          </h1>
          <h4 className="text-center font-bold py-2">
            주도적으로 항상 문제 개선을 제안하고 해결을 추진합니다.
          </h4>
          <FadeInSection>
            <CoreCapabilities />
          </FadeInSection>
        </div>
        <div className="min-h-screen flex flex-col justify-center">
          <h1 id="skill" className="text-center text-xl font-bold py-4 lg:text-4xl">
            사용 기술
          </h1>
          <div className="flex flex-col justify-center items-center">
            <FadeInSection>
              <SkillList />
            </FadeInSection>
          </div>
        </div>
        <div className="min-h-screen flex flex-col justify-center">
          <h1 id="career" className="text-center text-xl font-bold py-4 lg:text-4xl">
            경력 사항
          </h1>
          <FadeInSection>
            <Career />
          </FadeInSection>
        </div>
        <div className="min-h-screen flex flex-col justify-center">
          <h1 id="project" className="text-center text-xl font-bold py-4 lg:text-4xl">
            프로젝트
          </h1>
          <p className="text-center text-base font-bold py-2">
            현재 까지 진행한 회사 프로젝트 또는 개인 프로젝트 입니다.
          </p>
          <FadeInSection>
            <ProjectCard />
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
