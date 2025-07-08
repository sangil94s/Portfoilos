import Link from 'next/link';

export default function Headers() {
  return (
    <>
      <header className="fixed w-full h-10 mb-2 bg-white flex flex-row justify-between">
        <Link href="/">
          <h1 className="p-1 text-xl font-bold">Fronthan.dev</h1>
        </Link>

        <section className="flex gap-6 m-3">
          <Link href="#skill" className="font-bold cursor-pointer">
            Skill
          </Link>
          <Link href="#career" className="font-bold cursor-pointer">
            Career
          </Link>
          <Link href="#project" className="font-bold cursor-pointer">
            Project
          </Link>
        </section>
      </header>
    </>
  );
}
