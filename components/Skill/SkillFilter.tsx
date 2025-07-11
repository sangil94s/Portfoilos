'use client';
interface Props {
  selected: string;
  onSelect: (category: string) => void;
}

const categories = ['전체', 'Frontend', 'Backend', 'Deploy', '흥미 있음'];

export default function SkillFilter({ selected, onSelect }: Props) {
  return (
    <>
      <div className="flex flex-wrap gap-2 my-6">
        {categories.map(CategoryName => (
          <button
            key={CategoryName}
            onClick={() => onSelect(CategoryName)}
            className={`p-4 py-2 text-sm transition border rounded-full cursor-pointer m-auto
            ${selected === CategoryName ? 'bg-black text-white font-bold' : 'bg-gray-100 text-gray-800 font-bold'}
          `}
          >
            {CategoryName}
          </button>
        ))}
      </div>
    </>
  );
}
