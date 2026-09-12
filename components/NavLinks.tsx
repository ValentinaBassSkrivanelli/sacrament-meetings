'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <div className="flex gap-6">
        <Link
          href="/"
          className={pathname === '/' ? 'font-bold text-indigo-700' : 'text-slate-600'}
        >
          Home
        </Link>

        <Link
          href="/meetings"
          className={
            pathname === '/meetings'
              ? 'font-bold text-indigo-700'
              : 'text-slate-600'
          }
        >
          Meetings
        </Link>

        <Link
          href="/meetings/current"
          className={
            pathname === '/meetings/current'
              ? 'font-bold text-indigo-700'
              : 'text-slate-600'
          }
        >
          Current Meeting
        </Link>
      </div>
    </nav>
  );
}
