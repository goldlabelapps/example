// core/app/api/route.ts
import { NextResponse } from 'next/server';
import { baseURL, header, footer } from './lib';

export async function GET() {
  return NextResponse.json({
    name: 'Example API',
    time: Date.now(),
    start: `${baseURL()}/api/`,
    header: header(),
    footer: footer(),
  });
}
