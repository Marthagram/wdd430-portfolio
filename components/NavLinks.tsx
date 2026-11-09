'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary">
   
      <ul className="flex gap-6">
          <li><Link  href="/"
        className={pathname === '/' ? 'active' : ''}
        aria-current={pathname === '/' ? 'page' : undefined}>Home</Link></li>
          <li><Link  href="/about"
        className={pathname === '/about' ? 'active' : ''}
        aria-current={pathname === '/about' ? 'page' : undefined}>About</Link></li>
          <li><Link  href="/contact"
        className={pathname === '/contact' ? 'active' : ''}
        aria-current={pathname === '/contact' ? 'page' : undefined}>Contact</Link></li>
          <li><Link  href="/projects"
        className={pathname === '/projects' ? 'active' : ''}
        aria-current={pathname === '/projects' ? 'page' : undefined}>Overview</Link></li>
          <li><Link  href="/projects/opensource"
        className={pathname === '/projects/opensource' ? 'active' : ''}
        aria-current={pathname === '/projects/opensource' ? 'page' : undefined}>Open Source</Link></li>
          <li><Link  href="/projects/school"
        className={pathname === '/projects/school' ? 'active' : ''}
        aria-current={pathname === '/projects/school' ? 'page' : undefined}>School</Link></li>
        </ul>
    </nav>
  );
}