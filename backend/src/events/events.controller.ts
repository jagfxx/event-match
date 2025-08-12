import { Controller, Post, Get, Put, Delete, Param, Body, UseGuards, Request } from '@nestjs/common';
import { EventsService } from './events.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // ajusta la ruta según tu estructura

export class CrearDto {
    title: string;
    description: string;
    location: string;
    date: Date;
}

@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async crearEvento(@Body() data: CrearDto, @Request() req) {
    // req.user tendrá los datos del usuario extraídos del JWT
    console.log('Usuario del JWT:', req.user);
    const userId = req.user.userId;  // o el campo que tengas en payload

    return this.eventsService.crearEvento({...data, id_creator: userId});
  }
  @Get()
  getEvent() {
    return this.eventsService.getEvent();
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteEvent(@Param('id') id: string, @Request() req) {
    return this.eventsService.deleteEvent(id, req.user.userId);
  }
  
}
