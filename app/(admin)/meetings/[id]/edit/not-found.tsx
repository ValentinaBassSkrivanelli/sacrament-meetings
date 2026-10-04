import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <h1>Meeting Not Found</h1>
      <p>The meeting you are trying to edit does not exist.</p>
      <Link href="/meetings">Back to Meetings</Link>
    </main>
  );
}