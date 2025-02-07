// src/index.ts
import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (optional)
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
	res.send('Hello from Express + TypeScript!');
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
