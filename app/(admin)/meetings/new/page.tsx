'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { createMeeting, type State } from '@/lib/actions';

const initialState: State = {
  message: null,
  errors: {},
};

export default function NewMeetingPage() {
  const [state, formAction, isPending] = useActionState(
    createMeeting,
    initialState,
  );

  return (
    <main>
      <h1>Create Meeting</h1>

      <form action={formAction}>
        {/* Date */}
        <div>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
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
          {isPending ? 'Creating...' : 'Create Meeting'}
        </button>

        <Link href="/meetings">Cancel</Link>
      </form>
    </main>
  );
}