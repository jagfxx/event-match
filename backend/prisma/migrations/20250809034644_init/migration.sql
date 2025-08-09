-- CreateTable
CREATE TABLE "public"."role" (
    "id_role" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id_role")
);

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "id_role" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tags" (
    "id_tag" TEXT NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id_tag")
);

-- CreateTable
CREATE TABLE "public"."user_tag" (
    "id_user" TEXT NOT NULL,
    "id_tag" TEXT NOT NULL,

    CONSTRAINT "user_tag_pkey" PRIMARY KEY ("id_user","id_tag")
);

-- CreateTable
CREATE TABLE "public"."event" (
    "id_event" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "id_creator" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id_event")
);

-- CreateTable
CREATE TABLE "public"."event_tags" (
    "id_event" TEXT NOT NULL,
    "id_tag" TEXT NOT NULL,

    CONSTRAINT "event_tags_pkey" PRIMARY KEY ("id_event","id_tag")
);

-- CreateTable
CREATE TABLE "public"."rsvp" (
    "id_rsvp" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_event" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "rsvp_pkey" PRIMARY KEY ("id_rsvp")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- AddForeignKey
ALTER TABLE "public"."users" ADD CONSTRAINT "users_id_role_fkey" FOREIGN KEY ("id_role") REFERENCES "public"."role"("id_role") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_tag" ADD CONSTRAINT "user_tag_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_tag" ADD CONSTRAINT "user_tag_id_tag_fkey" FOREIGN KEY ("id_tag") REFERENCES "public"."tags"("id_tag") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."event" ADD CONSTRAINT "event_id_creator_fkey" FOREIGN KEY ("id_creator") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."event_tags" ADD CONSTRAINT "event_tags_id_event_fkey" FOREIGN KEY ("id_event") REFERENCES "public"."event"("id_event") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."event_tags" ADD CONSTRAINT "event_tags_id_tag_fkey" FOREIGN KEY ("id_tag") REFERENCES "public"."tags"("id_tag") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."rsvp" ADD CONSTRAINT "rsvp_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."rsvp" ADD CONSTRAINT "rsvp_id_event_fkey" FOREIGN KEY ("id_event") REFERENCES "public"."event"("id_event") ON DELETE RESTRICT ON UPDATE CASCADE;
