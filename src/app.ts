// 1. Sending requests to db from client

import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { errorHandler } from './app/modules/Error/globalErrorHandler';
import { userRoutes } from './app/modules/User/user.routes';
import { authRoutes } from './app/modules/Auth/auth.routes';
import { blogRoutes } from './app/modules/Blog/blog.routes';
import { projectRoutes } from './app/modules/Project/project.routes';
import { categoryRoutes } from './app/modules/Category/category.routes';
import { skillRoutes } from './app/modules/skill/skill.routes';
import { credentialsRoutes } from './app/modules/credentials/credentials.routes';
import { StatusCodes } from 'http-status-codes';
import os from "os";

const app: Application = express();

// Middleware
app.use(express.json());
const allowedOrigins = ['http://localhost:3000', 'https://dashboard-nexus-blue.vercel.app', 'https://joychandrauday-nexus.vercel.app']

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // Allow the origin
      } else {
        callback(new Error('Not allowed by CORS'), false);
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.get("/", (req: Request, res: Response) => {
  const currentDateTime = new Date().toISOString();
  const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const serverHostname = os.hostname();
  const serverPlatform = os.platform();
  const serverUptime = os.uptime();

  res.status(StatusCodes.OK).json({
    success: true,
    message: "Welcome to Portfolio Server of Joy Chandra Uday",
    version: "1.0.0",
    clientDetails: {
      ipAddress: clientIp,
      accessedAt: currentDateTime,
    },
    serverDetails: {
      hostname: serverHostname,
      platform: serverPlatform,
      uptime: `${Math.floor(serverUptime / 60 / 60)} hours ${Math.floor(
        (serverUptime / 60) % 60
      )} minutes`,
    },
    developerContact: {
      email: "joychandraud@gmail.com",
      website: "joychandrauday-nexus.vercel.app",
    },
  });
});

// //appllication routes
app.use('/api/auth', authRoutes) // order routes
app.use('/api/users', userRoutes) // product routes
app.use('/api/blogs', blogRoutes) // order routes
app.use('/api/admin', userRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/skill', skillRoutes)
app.use('/api/credentials', credentialsRoutes)



app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, req, res, next);
});
export default app;
