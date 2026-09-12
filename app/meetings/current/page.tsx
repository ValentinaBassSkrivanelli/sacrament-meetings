import MeetingCard from '@/components/MeetingCard';
import { getMeetings } from '@/lib/meetings-db';

export default function CurrentMeetingPage() {
  const today = new Date().toISOString().split('T')[0];
  const meetings = getMeetings(today);

  return (
    <main>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Current Meeting
        </h1>

        <p className="mt-2 text-slate-600">
          Sacrament meeting scheduled for today.
        </p>
      </div>

      {meetings.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {meetings.map((meeting) => (
            <MeetingCard
              key={meeting.id}
              meeting={meeting}
            />
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-slate-200 bg-white p-6 text-slate-500">
          There is no sacrament meeting scheduled for today.
        </p>
      )}
    </main>
  );
}