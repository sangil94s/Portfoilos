'use client';
import { useState } from 'react';

import Image from 'next/image';
import data from '../../public/data/skill.json';
import SkillFilter from './SkillFilter';
import { SkillListType } from '@/types/typeInfomation';

export default function SkillList() {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const filteredSkills = data?.skills.filter(skill => {
    if (selectedCategory === '전체') return true;
    if (selectedCategory === '흥미 있음') return skill.isInterested;
    return skill.category === selectedCategory;
  });

  return (
    <>
      <SkillFilter selected={selectedCategory} onSelect={setSelectedCategory} />

      <div className="grid grid-cols-3 gap-4 lg:grid-cols-6">
        {filteredSkills.map((skill: SkillListType) => {
          const borderClass =
            selectedCategory === 'Frontend' && skill.category === 'Frontend'
              ? 'ring-2 ring-blue-500'
              : selectedCategory === 'Backend' && skill.category === 'Backend'
                ? 'ring-2 ring-green-500'
                : selectedCategory === 'Deploy' && skill.category === 'Deploy'
                  ? 'ring-2 ring-orange-500'
                  : '';

          return (
            <div
              key={skill.id}
              className={`relative group w-20 h-20 rounded-xl bg-white shadow-md p-2
                flex items-center justify-center transition ${borderClass}`}
            >
              <Image
                src={skill.image}
                alt={skill.title}
                width={100}
                height={100}
                className="object-contain"
              />
              <div className="absolute bottom-0 text-xs opacity-0 group-hover:opacity-100 transition text-center bg-black text-white px-1 rounded">
                {skill.title}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
