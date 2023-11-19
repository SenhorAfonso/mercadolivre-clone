/* eslint-disable @typescript-eslint/no-explicit-any */


import { type Request, type Response, type NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  let token: string = '';

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('No token provide');
  } else {
    token = authHeader.split(' ')[1];
  }

  try {
    const jwtSecret = String(process.env.JWT_SECRET_KEY);
    const decoded: any = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (err) {
    console.log('Não autorizado');
  }

};

export {
  authenticationMiddleware
};