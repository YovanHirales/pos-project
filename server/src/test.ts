// server/someRoute.ts
import { prisma } from './prismaClient'; // or wherever you keep this file

async function getUsers() {
	const users = await prisma.user.findMany();
	return users;
}

getUsers()
	.then((users) => {
		console.log(users);
	})
	.catch((error) => {
		console.error(error);
	});