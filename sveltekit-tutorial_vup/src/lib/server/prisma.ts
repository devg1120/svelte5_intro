import { dev } from '$app/environment';
import { PrismaClient } from '@prisma/client';

declare const global: {
	prisma: PrismaClient;
};

let prisma: PrismaClient;

if (!dev) {
	prisma = new PrismaClient();
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient();
	}
	prisma = global.prisma;
}

export default prisma;
