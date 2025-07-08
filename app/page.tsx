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
        <div className="min-h-screen flex flex-col justify-center border-b-2 border-slate-300">
          <Introduce />
        </div>
        <div className="min-h-screen flex flex-col justify-center border-b-2 border-slate-300">
          <h1 className="text-center text-xl font-bold py-4 lg:text-4xl">SKILLS</h1>
          <div className="flex flex-col justify-center">
            <Front />
            <Back />
            <Tool />
            <p className='text-center text-red-600 font-bold py-4'>임시 : GCP, Vercel Devops로 분리 고려.</p>
          </div>
          {/* 이 부분은 grid-cols-3을 하거나 flex-col을 하거나 */}
        </div>
        <div className="min-h-screen flex flex-col justify-center border-b-2 border-slate-300">
          <h1 className="text-center text-xl font-bold py-4 lg:text-4xl">CAREER</h1>
          <Career />
        </div>
        <div className="min-h-screen flex flex-col justify-center">
          <h1 className="text-center text-xl font-bold py-4 lg:text-4xl">PROJECT</h1>
          <p className="text-center text-base font-bold py-2">
            현재 까지 진행한 회사 프로젝트 또는 개인 프로젝트 입니다.
          </p>
          <ProjectCard />
        </div>
      </section>
    </>
  );
}
