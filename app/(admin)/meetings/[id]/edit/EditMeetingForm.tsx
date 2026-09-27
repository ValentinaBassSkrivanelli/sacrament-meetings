'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import {
  updateMeeting,
  deleteMeeting,
  type State,
} from '@/lib/actions';
import type { SacramentMeeting } from '@/lib/types';

const initialState: State = {
  message: null,
  errors: {},
};

interface EditMeetingFormProps {
  meeting: SacramentMeeting;
}

export default function EditMeetingForm({
  meeting,
}: EditMeetingFormProps) {
  const updateMeetingWithId = updateMeeting.bind(null, meeting.id);

  const [state, formAction, isPending] = useActionState(
    updateMeetingWithId,
    initialState,
  );

  return (
    <form action={formAction}>
      {/* Date */}
      <div>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          defaultValue={meeting.date}
          aria-describedby="date-error"
        />

        <div id="date-error" aria-live="polite">
          {state.errors?.date?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      </div>

      {/* Meeting Type */}
      <div>
        <label htmlFor="meetingType">Meeting Type</label>

        <select
          id="meetingType"
          name="meetingType"
          defaultValue={meeting.meetingType}
          aria-describedby="meetingType-error"
        >
          <option value="">Select a meeting type</option>
          <option value="regular">Regular</option>
          <option value="testimony">Testimony</option>
          <option value="stake">Stake</option>
          <option value="general">General</option>
        </select>

        <div id="meetingType-error" aria-live="polite">
          {state.errors?.meetingType?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      </div>

      {/* Presiding */}
      <div>
        <label htmlFor="presiding">Presiding</label>

        <input
          id="presiding"
          name="presiding"
          type="text"
          defaultValue={meeting.presiding}
          aria-describedby="presiding-error"
        />

        <div id="presiding-error" aria-live="polite">
          {state.errors?.presiding?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      </div>

      {/* Conducting */}
      <div>
        <label htmlFor="conducting">Conducting</label>

        <input
          id="conducting"
          name="conducting"
          type="text"
          defaultValue={meeting.conducting}
          aria-describedby="conducting-error"
        />

        <div id="conducting-error" aria-live="polite">
          {state.errors?.conducting?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      </div>

      {/* General error */}
      {state.message && (
        <div aria-live="polite">
          <p>{state.message}</p>
        </div>
      )}

           <button type="submit" disabled={isPending}>
        {isPending ? 'Saving...' : 'Save Changes'}
      </button>

      <button
        type="submit"
        formAction={deleteMeeting.bind(null, meeting.id)}
      >
        Delete Meeting
      </button>

      <Link href="/meetings">Cancel</Link>

    </form>
  );
}