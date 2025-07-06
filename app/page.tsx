import Career from '@/components/Career/Career';
import Introduce from '@/components/Introduce/Introduce';
import ProjectCard from '@/components/Project/ProjectCard';
import Back from '@/components/Skill/Back';
import Front from '@/components/Skill/Front';
import Tool from '@/components/Skill/Tool';
export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center mx-auto">
      <section className="relative w-full h-screen flex-1">
        <div className="flex-2">
          <h1 className="text-center text-2xl font-bold py-4">Introduce</h1>
          <Introduce />
        </div>
        <div className="flex-2">
          <h1 className="text-center text-2xl font-bold py-4">Skill</h1>
          <div className="grid grid-cols-3 justify-items-center">
            <Front />
            <Back />
            <Tool />
          </div>
        </div>
        <div className="flex-2">
          <h1 className="text-center text-2xl font-bold py-4">Career</h1>
          <Career />
        </div>
        <div className="flex-2">
          <h1 className="text-center text-2xl font-bold py-4">Project</h1>
          <ProjectCard />
        </div>
      </section>
    </section>
  );
}
