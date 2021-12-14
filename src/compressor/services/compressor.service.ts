import { BadRequestException, Injectable } from '@nestjs/common';
import { spawn } from 'child_process';

@Injectable()
export class CompressorService {
  async videoCompressor(buffer, filename) {
    const splattedFileName = filename.split('.');
    const proc = spawn('C:\\ffmpeg\\bin\\ffmpeg.exe', [
      '-i',
      '-',
      '-rtsp_transport',
      'tcp',
      '-vcodec',
      'libx265',
      '-c:a',
      'copy',
      '-crf',
      '28',
      `${
        splattedFileName[0] + new Date().getTime() + '.' + splattedFileName[1]
      }`,
    ]);
    proc.stdin.write(Buffer.from(buffer.slice(0)));
    proc.stdin.end();
    proc.on('error', (err) => {
      throw new BadRequestException(err.message);
    });
    proc.stderr.pipe(process.stdout);
  }
}
