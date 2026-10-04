import { auth } from '@/auth';
import Link from 'next/link';
import LogoutButton from './LogoutButton';

export default async function AuthButton() {
  const session = await auth();

  if (session?.user) {
    return <LogoutButton />;
  }

  return (
    <Link
      href="/login"
      className="text-slate-600"
    >
      Log in
    </Link>
  );
}