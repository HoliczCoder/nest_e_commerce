import { NestExpressApplication } from '@nestjs/platform-express';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';

export const setAppDB = (app: NestExpressApplication) => {
  app.setGlobalPrefix('/api/v1');
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ limit: '10mb' }));
  app.use(cookieParser());
  app.use(
    cors({
      credentials: true,
      origin: process.env.ORIGIN,
    }),
  );

  app.use(
    session({
      cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        secure: false,
      },
      secret: process.env.COOKIE_KEY,
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
};
