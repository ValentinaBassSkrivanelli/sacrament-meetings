import MeetingCard from '@/components/MeetingCard';
import { getMeetings } from '@/lib/meetings-db';

export default async function CurrentMeetingPage() {
  const meetings = await getMeetings();

  return (
    <main>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Current Meetings
        </h1>

        <p className="mt-2 text-slate-600">
          View current sacrament meetings.
        </p>
      </div>

      {meetings.length === 0 ? (
        <p>No meetings found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {meetings.map((meeting) => (
            <MeetingCard
              key={meeting.id}
              meeting={meeting}
            />
          ))}
        </div>
      )}
    </main>
  );
}