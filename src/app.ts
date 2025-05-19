import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app: Application = express();

app.use(
    cors({
        origin: ['*', 'http://localhost:3000'],
    }),
);
app.use(express.json({ limit: '50mb' }));
app.use(express.json());
app.use(cookieParser());
// app.use(express.urlencoded({ extended: true }));

// routes
// app.use('/api', appRouter);

// stating point
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success',
        message: 'Portfolio server running..........',
    });
});

// global error handler
app.use(globalErrorHandler);
app.use(notFound);

export default app;