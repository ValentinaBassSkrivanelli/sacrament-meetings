import { NextResponse } from 'next/server';

import { getMeetings } from '@/lib/meetings-db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get('query') || '';
  const currentPage = Number(searchParams.get('page')) || 1;

  const meetings = await getMeetings(query, currentPage);

  return NextResponse.json(meetings);
}
