"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware (optional)
app.use(express_1.default.json());
// Basic route
app.get('/', (req, res) => {
    res.send('Hello from Express + TypeScript!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
