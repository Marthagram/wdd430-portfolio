import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-100 text-red-900 py-4 shadow-md text-center">
      <div id="header-title" className="text-2xl font-bold">Martha Itohan Otasowie</div>
      <nav className="max-w-4xl mx-auto px-4 flex justify-center items-center mt-2">
        <ul className="flex gap-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}