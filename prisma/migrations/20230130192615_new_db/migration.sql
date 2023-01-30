-- CreateTable
CREATE TABLE "car" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "engine" TEXT NOT NULL,
    "hp" INTEGER NOT NULL,

    CONSTRAINT "car_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "circuits" (
    "id" SERIAL NOT NULL,
    "racer_id" INTEGER NOT NULL,
    "car_id" INTEGER NOT NULL,
    "track_id" INTEGER NOT NULL,
    "time_lap" INTEGER NOT NULL,

    CONSTRAINT "circuits_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "racer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "birth" DATE NOT NULL,
    "number" INTEGER NOT NULL,
    "races" INTEGER DEFAULT 0,

    CONSTRAINT "racer_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "track" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "track_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "racer_number_key" ON "racer"("number");

-- CreateIndex
CREATE UNIQUE INDEX "track_name_key" ON "track"("name");

-- AddForeignKey
ALTER TABLE "circuits" ADD CONSTRAINT "circuits_fk0" FOREIGN KEY ("racer_id") REFERENCES "racer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "circuits" ADD CONSTRAINT "circuits_fk1" FOREIGN KEY ("car_id") REFERENCES "car"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "circuits" ADD CONSTRAINT "circuits_fk2" FOREIGN KEY ("track_id") REFERENCES "track"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
