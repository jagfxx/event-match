// prisma/seed.ts

import { PrismaClient } from '../generated/prisma';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // create base roles
  const adminRole = await prisma.role.create({
    data: {
      role: 'admin',
      description: 'Administrator role with full access',
    },
  });

  const userRole = await prisma.role.create({
    data: {
      role: 'user',
      description: 'Standard user role with limited access',
    },
  });

  // create base tags
  const tags = await prisma.tags.createMany({
    data: [
      { tag: 'cybersecurity' },
      { tag: 'AI' },
      { tag: 'web development' },
      { tag: 'CTF' },
    ],
  });

  // create test users
  const passwordHash = await hash('password123', 10); // password encryption

  const adminUser = await prisma.users.create({
    data: {
      name: 'Alice Admin',
      email: 'alice@example.com',
      password: passwordHash,
      id_role: adminRole.id_role,
    },
  });

  const normalUser = await prisma.users.create({
    data: {
      name: 'Bob User',
      email: 'bob@example.com',
      password: passwordHash,
      id_role: userRole.id_role,
    },
  });

  // create test events
  const event1 = await prisma.event.create({
    data: {
      title: 'Intro to CTFs',
      description: 'A beginner-friendly Capture the Flag event.',
      location: 'UPB Main Hall',
      date: new Date('2025-09-10T18:00:00Z'),
      id_creator: adminUser.id,
    },
  });

  const event2 = await prisma.event.create({
    data: {
      title: 'AI in Cybersecurity',
      description: 'Exploring the role of AI in modern security challenges.',
      location: 'UPB Lab 2',
      date: new Date('2025-09-15T14:00:00Z'),
      id_creator: normalUser.id,
    },
  });

  // add tags to events
  await prisma.event_tags.createMany({
    data: [
      { id_event: event1.id_event, id_tag: (await prisma.tags.findFirst({ where: { tag: 'CTF' } }))!.id_tag },
      { id_event: event2.id_event, id_tag: (await prisma.tags.findFirst({ where: { tag: 'AI' } }))!.id_tag },
    ],
  });

  console.log('✅ Database seeded successfully.');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
