import Career from '@/components/Career/Career';
import CoreCapabilities from '@/components/ETC/CoreCapabilities';
import Introduce from '@/components/Introduce/Introduce';
import ProjectCard from '@/components/Project/ProjectCard';
import Back from '@/components/Skill/Back';
import Front from '@/components/Skill/Front';
import Tool from '@/components/Skill/Tool';
import FadeInSection from '@/components/util/FramerMotion/FadeIn';

export default function Home() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto px-6">
        <div className="min-h-screen flex flex-col justify-center">
          <Introduce />
        </div>
        <div className="min-h-screen flex flex-col justify-center">
          <FadeInSection>
            <CoreCapabilities />
          </FadeInSection>
        </div>
        <div className="min-h-screen flex flex-col justify-center">
          <h1 id="skill" className="text-center text-xl font-bold py-4 lg:text-4xl">
            SKILLS
          </h1>
          <div className="flex flex-col justify-center">
            <FadeInSection>
              <Front />
            </FadeInSection>
            <FadeInSection>
              <Back />
            </FadeInSection>
            <FadeInSection>
              <Tool />
            </FadeInSection>
          </div>
        </div>
        <div className="min-h-screen flex flex-col justify-center">
          <h1 id="career" className="text-center text-xl font-bold py-4 lg:text-4xl">
            CAREER
          </h1>
          <FadeInSection>
            <Career />
          </FadeInSection>
        </div>
        <div className="min-h-screen flex flex-col justify-center">
          <h1 id="project" className="text-center text-xl font-bold py-4 lg:text-4xl">
            PROJECT
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
