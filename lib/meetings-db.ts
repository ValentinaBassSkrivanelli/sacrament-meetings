import { neon } from '@neondatabase/serverless';
import type { SacramentMeeting } from './types';

const sql = neon(process.env.DATABASE_URL!);

export async function getMeetings(
  query: string = '',
  currentPage: number = 1,
): Promise<SacramentMeeting[]> {
  const offset = (currentPage - 1) * 5;

  const meetings = await sql`
    SELECT
      id,
      to_char(date, 'YYYY-MM-DD') AS date,
      meeting_type AS "meetingType",
      presiding,
      conducting,
      announcements,
      opening_hymn AS "openingHymn",
      opening_prayer AS "openingPrayer",
      ward_business AS "wardBusiness",
      stake_business AS "stakeBusiness",
      sacrament_hymn AS "sacramentHymn",
      speakers,
      closing_hymn AS "closingHymn",
      closing_prayer AS "closingPrayer"
    FROM meetings
    WHERE
      presiding ILIKE ${`%${query}%`}
      OR conducting ILIKE ${`%${query}%`}
      OR meeting_type ILIKE ${`%${query}%`}
      OR speakers::text ILIKE ${`%${query}%`}
    ORDER BY date DESC
    LIMIT 5
    OFFSET ${offset}
  `;

  return meetings as SacramentMeeting[];
}

export async function getMeetingsTotalPages(
  query: string = '',
): Promise<number> {
  const data = await sql`
    SELECT COUNT(*) AS count
    FROM meetings
    WHERE
      presiding ILIKE ${`%${query}%`}
      OR conducting ILIKE ${`%${query}%`}
      OR meeting_type ILIKE ${`%${query}%`}
      OR speakers::text ILIKE ${`%${query}%`}
  `;

  const totalPages = Math.ceil(Number(data[0].count) / 5);

  return totalPages;
}

export async function getMeetingById(
  id: number,
): Promise<SacramentMeeting | null> {
  const meetings = await sql`
    SELECT
      id,
      to_char(date, 'YYYY-MM-DD') AS date,
      meeting_type AS "meetingType",
      presiding,
      conducting,
      announcements,
      opening_hymn AS "openingHymn",
      opening_prayer AS "openingPrayer",
      ward_business AS "wardBusiness",
      stake_business AS "stakeBusiness",
      sacrament_hymn AS "sacramentHymn",
      speakers,
      closing_hymn AS "closingHymn",
      closing_prayer AS "closingPrayer"
    FROM meetings
    WHERE id = ${id}
    LIMIT 1
  `;

  return (meetings[0] as SacramentMeeting) ?? null;
}

// These functions will be implemented in Week 04.

export async function addMeeting(meeting: SacramentMeeting) {
  // TODO: Implement in Week 04
}

export async function updateMeeting(
  id: number,
  meeting: SacramentMeeting,
) {
  // TODO: Implement in Week 04
}

export async function deleteMeeting(id: number) {
  // TODO: Implement in Week 04
}