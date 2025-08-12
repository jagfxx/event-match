import { Module } from '@nestjs/common';
import { RsvpController } from './rsvp.controller';
import { RsvpService } from './rsvp.service';

@Module({
  controllers: [RsvpController],
  providers: [RsvpService]
})
export class RsvpModule {}
