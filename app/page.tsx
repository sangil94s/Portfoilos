import Career from '@/components/Career/Career';
import Introduce from '@/components/Introduce/Introduce';
import ProjectCard from '@/components/Project/ProjectCard';
import Back from '@/components/Skill/Back';
import Front from '@/components/Skill/Front';
import Tool from '@/components/Skill/Tool';
export default function Home() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto px-6">
        <div className="min-h-screen flex flex-col justify-center">
          <Introduce />
        </div>
        <div className="min-h-screen flex flex-col justify-center">
          <h1 className="text-center text-2xl font-bold py-4">Tech Skill</h1>
          <div className="flex flex-col justify-center">
            <Front />
            <Back />
            <Tool />
          </div>
          {/* 이 부분은 grid-cols-3을 하거나 flex-col을 하거나 */}
        </div>
        <div className="min-h-screen flex flex-col justify-center">
          <h1 className="text-center text-2xl font-bold py-4">Career</h1>
          <Career />
        </div>
        <div className="min-h-screen flex flex-col justify-center">
          <h1 className="text-center text-2xl font-bold py-4">Project</h1>
          <p className="text-center text-base font-bold py-2">
            현재 까지 진행한 회사 프로젝트 또는 개인 프로젝트 입니다.
          </p>
          <ProjectCard />
        </div>
      </section>
    </>
  );
}
