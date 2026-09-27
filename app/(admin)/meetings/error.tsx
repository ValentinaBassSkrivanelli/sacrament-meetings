'use client';

import Link from 'next/link';

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main>
      <h2>Something went wrong!</h2>
      <p>We could not load the meetings. Please try again.</p>

      <button onClick={() => reset()}>
        Try Again
      </button>

      <Link href="/meetings">
        Back to Meetings
      </Link>
    </main>
  );
}