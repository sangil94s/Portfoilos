'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ProjectDetail {
  detail: string;
  features: string[];
  github: string;
}

export default function ProjectDetail() {
  const params = useParams();
  const title = params?.title as string;
  const [data, setData] = useState<ProjectDetail | null>(null);

  const fetchData = async () => {
    if (!title) return;

    try {
      const res = await fetch('/data/project-detail.json');
      const json = await res.json();
      const detail = json[title];

      if (detail) setData(detail);
      else setData(null);
    } catch (err) {
      console.error('데이터 로딩 실패', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [title]);

  return (
    <>
      <p>{data?.detail}</p>
    </>
  );
}
