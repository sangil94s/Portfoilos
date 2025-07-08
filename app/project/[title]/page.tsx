import ProjectDetail from '@/components/ProjectDetail/ProjectDetail';
import { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

type Params = Promise<{ title: string }>;
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { title } = await params;

  const filePath = path.join(process.cwd(), 'public', 'data', 'project-detail.json');
  const fileContents = await fs.readFile(filePath, 'utf-8');
  const json = JSON.parse(fileContents);

  const data = json[title];

  return {
    title: data ? `${title}` : '프로젝트 상세보기',
  };
}

export default function page() {
  return (
    <>
      <ProjectDetail />
    </>
  );
}
