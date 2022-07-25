import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const create = async() => {
   await prisma.$connect();
   await prisma.game.create({
       data: {
           name: 'test'
       }
   });
}

