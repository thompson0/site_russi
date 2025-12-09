import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  const videoPath = path.join(process.cwd(), 'public', 'speedmetter.mp4');
  
  try {
    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = request.headers.get('range');

    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunkSize = end - start + 1;

      const videoStream = fs.createReadStream(videoPath, { start, end });
      const chunks = [];
      
      for await (const chunk of videoStream) {
        chunks.push(chunk);
      }
      
      const buffer = Buffer.concat(chunks);

      return new NextResponse(buffer, {
        status: 206,
        headers: {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunkSize.toString(),
          'Content-Type': 'video/mp4',
          'Cache-Control': 'public, max-age=31536000',
        },
      });
    }

    const videoBuffer = fs.readFileSync(videoPath);

    return new NextResponse(videoBuffer, {
      status: 200,
      headers: {
        'Content-Length': fileSize.toString(),
        'Content-Type': 'video/mp4',
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error) {
    return new NextResponse('Video not found', { status: 404 });
  }
}

export const dynamic = 'force-dynamic';
