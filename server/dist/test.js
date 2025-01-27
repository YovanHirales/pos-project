"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// server/someRoute.ts
const prismaClient_1 = require("./prismaClient"); // or wherever you keep this file
async function getUsers() {
    const users = await prismaClient_1.prisma.user.findMany();
    return users;
}
getUsers()
    .then((users) => {
    console.log(users);
})
    .catch((error) => {
    console.error(error);
});
