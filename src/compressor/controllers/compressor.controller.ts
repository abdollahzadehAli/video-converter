import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CompressorService } from '../services/compressor.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller('compressor')
export class CompressorController {
  constructor(private readonly compressorService: CompressorService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return await this.compressorService.videoCompressor(
      file.buffer,
      file.originalname,
    );
  }
}
