// core/app/api/route.ts
import {
  // NextRequest,
  NextResponse,
} from 'next/server';
import { baseURL } from '../lib/baseURL';

export async function GET() {
  // request: NextRequest
  return NextResponse.json({
    time: Date.now(),
    start: `${baseURL()}/api/gl-api/`,
  });
}
