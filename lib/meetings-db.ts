import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-05-03',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: May 10']
  },

  {
    id: 2,
    date: '2026-05-10',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Sister Miller',
    openingHymn: {
      number: 85,
      title: 'How Firm a Foundation',
    },
    openingPrayer: 'Brother Wilson',
    wardBusiness: [
      { description: 'Ward temple night reminder' },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 172,
      title: 'In Humility, Our Savior',
    },
    speakers: [
      {
        name: 'Brother Anderson',
        topic: 'The Power of Prayer',
        type: 'speaker',
      },
      {
        name: 'Sister Taylor',
        topic: 'Serving Others',
        type: 'speaker',
      },
    ],
    closingHymn: {
      number: 223,
      title: 'Have I Done Any Good?',
    },
    closingPrayer: 'Sister Davis',
    announcements: [
      'Ward temple night is today',
    ],
  },

  {
    id: 3,
    date: '2026-05-17',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Garcia',
    openingHymn: {
      number: 96,
      title: 'Dearest Children, God Is Near You',
    },
    openingPrayer: 'Sister Johnson',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 174,
      title: 'While of These Emblems We Partake',
    },
    speakers: [],
    closingHymn: {
      number: 227,
      title: 'There Is Sunshine in My Soul Today',
    },
    closingPrayer: 'Brother Martinez',
    announcements: [
      'Youth activity this Saturday',
    ],
  },

  {
    id: 4,
    date: '2026-05-24',
    meetingType: 'stake',
    presiding: 'Stake President Clark',
    conducting: 'Brother Adams',
    openingHymn: {
      number: 27,
      title: 'Praise to the Man',
    },
    openingPrayer: 'Sister Brown',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: {
      number: 181,
      title: 'Jesus of Nazareth, Savior and King',
    },
    speakers: [
      {
        name: 'President Clark',
        topic: 'Strengthening Families',
        type: 'speaker',
      },
      {
        name: 'Sister Lewis',
        topic: 'Following the Savior',
        type: 'speaker',
      },
    ],
    closingHymn: {
      number: 219,
      title: 'Because I Have Been Given Much',
    },
    closingPrayer: 'Brother Thomas',
  },

  {
    id: 5,
    date: '2026-05-31',
    meetingType: 'general',
    presiding: 'Bishop Smith',
    conducting: 'Sister Wilson',
    openingHymn: {
      number: 66,
      title: 'Rejoice, the Lord Is King!',
    },
    openingPrayer: 'Brother Harris',
    wardBusiness: [
      {
        description: 'Primary summer activity announcement',
      },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 190,
      title: 'In Memory of the Crucified',
    },
    speakers: [
      {
        name: 'Sister Martinez',
        topic: 'Finding Peace Through the Gospel',
        type: 'speaker',
      },
      {
        name: 'Ward Choir',
        topic: '',
        type: 'musical-number',
      },
    ],
    closingHymn: {
      number: 219,
      title: 'Because I Have Been Given Much',
    },
    closingPrayer: 'Sister Harris',
    announcements: [
      'Summer Primary activities begin next week',
    ],
  },

];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter(m => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}