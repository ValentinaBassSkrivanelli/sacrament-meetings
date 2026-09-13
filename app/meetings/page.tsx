import MeetingCard from '@/components/MeetingCard';
import { getMeetings } from '@/lib/meetings-db';

export default async function MeetingsPage() {
  const meetings = await getMeetings();

  return (
    <main>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Sacrament Meetings
        </h1>

        <p className="mt-2 text-slate-600">
          View and manage sacrament meetings.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {meetings.map((meeting) => (
          <MeetingCard
            key={meeting.id}
            meeting={meeting}
          />
        ))}
      </div>
    </main>
  );
}
