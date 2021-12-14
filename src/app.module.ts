import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CompressorModule } from './compressor/compressor.module';

@Module({
  imports: [CompressorModule],
  providers: [AppService],
})
export class AppModule {}
