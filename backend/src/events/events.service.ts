import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CrearDto } from './events.controller'; 
import { ForbiddenException, NotFoundException } from '@nestjs/common';

@Injectable()
export class EventsService {
    constructor(private readonly prisma: PrismaService) {} 
    async crearEvento(data: CrearDto & { id_creator: string }) {
  return this.prisma.event.create({data});
}
async getEvent() {
  return this.prisma.event.findMany();
}
async deleteEvent(id: string, userId: string) {
  const evento = await this.prisma.event.findUnique({
    where: {id_event: id },
  });
  if (!evento) {
    throw new NotFoundException('Evento no encontrado');
  }
  if (evento.id_creator !== userId) {
    throw new ForbiddenException('No tienes permisos para eliminar este evento');
  }

  return this.prisma.event.delete({ where: { id_event: id} });
}
}
