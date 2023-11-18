
import { type Request, type Response } from 'express';
import userModel from '../model/userModel';
import jwt from 'jsonwebtoken';

// criar token
// tratar erros unique e validation
// criar rota de login

const registerNewUser = async (req: Request, res: Response) => {
  const user = req.body;
  const token = jwt.sign({user: user.name}, 'secreteKey', {expiresIn: '30d'});
  const newUser = await userModel.create(req.body);

  res.send({token, newUser});
};

export {
  registerNewUser,
};