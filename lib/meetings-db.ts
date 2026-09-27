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
  await sql`
    INSERT INTO meetings (
      date,
      meeting_type,
      presiding,
      conducting,
      announcements,
      opening_hymn,
      opening_prayer,
      ward_business,
      stake_business,
      sacrament_hymn,
      speakers,
      closing_hymn,
      closing_prayer
    )
    VALUES (
      ${meeting.date},
      ${meeting.meetingType},
      ${meeting.presiding},
      ${meeting.conducting},
      ${meeting.announcements ?? []},
      ${JSON.stringify(meeting.openingHymn)},
      ${meeting.openingPrayer},
      ${JSON.stringify(meeting.wardBusiness)},
      ${meeting.stakeBusiness},
      ${JSON.stringify(meeting.sacramentHymn)},
      ${JSON.stringify(meeting.speakers)},
      ${JSON.stringify(meeting.closingHymn)},
      ${meeting.closingPrayer}
    )
  `;
}
export async function updateMeeting(
  id: number,
  meeting: SacramentMeeting,
) {
  await sql`
    UPDATE meetings
    SET
      date = ${meeting.date},
      meeting_type = ${meeting.meetingType},
      presiding = ${meeting.presiding},
      conducting = ${meeting.conducting},
      announcements = ARRAY[]::text[],
      opening_hymn = ${JSON.stringify(meeting.openingHymn)},
      opening_prayer = ${meeting.openingPrayer},
      ward_business = ${JSON.stringify(meeting.wardBusiness)},
      stake_business = ${meeting.stakeBusiness},
      sacrament_hymn = ${JSON.stringify(meeting.sacramentHymn)},
      speakers = ${JSON.stringify(meeting.speakers)},
      closing_hymn = ${JSON.stringify(meeting.closingHymn)},
      closing_prayer = ${meeting.closingPrayer}
    WHERE id = ${id}
  `;
}

export async function deleteMeeting(id: number) {
  await sql`
    DELETE FROM meetings
    WHERE id = ${id}
  `;
}