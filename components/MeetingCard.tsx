
import Link from 'next/link';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-indigo-600">
            {meeting.meetingType}
          </p>

          <h2 className="mt-1 text-xl font-bold text-slate-800">
            {meeting.date}
          </h2>
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
          #{meeting.id}
        </span>
      </div>

      <div className="space-y-2 text-sm text-slate-600">
        <p>
          <strong>Presiding:</strong> {meeting.presiding}
        </p>

        <p>
          <strong>Conducting:</strong> {meeting.conducting}
        </p>

        <p>
          <strong>Opening Hymn:</strong>{' '}
          {meeting.openingHymn.number} - {meeting.openingHymn.title}
        </p>
      </div>

      <div className="mt-6">
        <Link
          href={`/meetings/${meeting.id}`}
          className="inline-block rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
        >
          View Meeting
        </Link>
      </div>
    </article>
  );
}
