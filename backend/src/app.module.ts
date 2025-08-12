import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
import { RsvpModule } from './rsvp/rsvp.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,  // Hace que el módulo esté disponible en toda la app sin importar importarlo en otros módulos
    }),AuthModule,
    EventsModule,
    RsvpModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
