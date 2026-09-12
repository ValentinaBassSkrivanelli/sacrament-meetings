
import type { SacramentMeeting } from '@/lib/types';

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({
  meeting,
}: MeetingDetailProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="mb-8 border-b border-slate-200 pb-6">
        <p className="text-sm font-medium uppercase tracking-wide text-indigo-600">
          {meeting.meetingType} meeting
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-800">
          Sacrament Meeting
        </h1>

        <p className="mt-2 text-slate-500">{meeting.date}</p>

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <p>
            <strong>Presiding:</strong> {meeting.presiding}
          </p>

          <p>
            <strong>Conducting:</strong> {meeting.conducting}
          </p>
        </div>
      </header>

      <div className="space-y-8">
        {meeting.announcements &&
          meeting.announcements.length > 0 && (
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-800">
                Announcements
              </h2>

              <ul className="list-disc space-y-1 pl-5 text-slate-600">
                {meeting.announcements.map((announcement, index) => (
                  <li key={index}>{announcement}</li>
                ))}
              </ul>
            </section>
          )}

        <section>
          <h2 className="mb-3 text-xl font-semibold text-slate-800">
            Opening
          </h2>

          <div className="space-y-2 text-slate-600">
            <p>
              <strong>Opening Hymn:</strong>{' '}
              {meeting.openingHymn.number} - {meeting.openingHymn.title}
            </p>

            <p>
              <strong>Opening Prayer:</strong> {meeting.openingPrayer}
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-slate-800">
            Ward Business
          </h2>

          {meeting.wardBusiness.length > 0 ? (
            <ul className="list-disc space-y-1 pl-5 text-slate-600">
              {meeting.wardBusiness.map((item, index) => (
                <li key={index}>{item.description}</li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-500">No ward business.</p>
          )}

          <p className="mt-3 text-slate-600">
            <strong>Stake Business:</strong>{' '}
            {meeting.stakeBusiness ? 'Yes' : 'No'}
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-slate-800">
            Sacrament
          </h2>

          <p className="text-slate-600">
            <strong>Sacrament Hymn:</strong>{' '}
            {meeting.sacramentHymn.number} -{' '}
            {meeting.sacramentHymn.title}
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-slate-800">
            Speakers and Musical Numbers
          </h2>

          {meeting.speakers.length > 0 ? (
            <div className="space-y-4">
              {meeting.speakers.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-slate-50 p-4"
                >
                  <p className="font-semibold text-slate-800">
                    {item.type === 'musical-number'
                      ? 'Musical Number'
                      : 'Speaker'}
                  </p>

                  <p className="text-slate-700">{item.name}</p>

                  {item.topic && (
                    <p className="text-sm text-slate-500">
                      {item.topic}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500">
              No speakers or musical numbers listed.
            </p>
          )}
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-slate-800">
            Closing
          </h2>

          <div className="space-y-2 text-slate-600">
            <p>
              <strong>Closing Hymn:</strong>{' '}
              {meeting.closingHymn.number} - {meeting.closingHymn.title}
            </p>

            <p>
              <strong>Closing Prayer:</strong> {meeting.closingPrayer}
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
