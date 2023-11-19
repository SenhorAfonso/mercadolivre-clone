/* eslint-disable @typescript-eslint/no-explicit-any */

import { type Request, type Response } from 'express';
import userModel from '../model/userModel';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// criar token
// tratar erros unique e validation
// criar rota de login

const registerNewUser = async (req: Request, res: Response) => {
  const jwtSecret = String(process.env.JWT_SECRET_KEY);

  const user = req.body;
  const token = jwt.sign({userName: user.name}, jwtSecret, {expiresIn: '30d'});
  const newUser = await userModel.create(req.body);

  res.send({token, newUser});
};

const loginUser = async (req: Request, res: Response) => {
  res.send(`Olá, ${req.user.userName}. Seja bem vindo(a)!`);

};

export {
  registerNewUser,
  loginUser
};