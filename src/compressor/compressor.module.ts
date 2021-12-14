import { Module } from '@nestjs/common';
import { CompressorService } from './services/compressor.service';
import { CompressorController } from './controllers/compressor.controller';

@Module({
  controllers: [CompressorController],
  providers: [CompressorService],
})
export class CompressorModule {}
