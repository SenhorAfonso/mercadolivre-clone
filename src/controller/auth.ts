
import { type Request, type Response } from 'express';
import userModel from '../model/userModel';

// criar token
// tratar erros unique e validation
// criar rota de login

const registerNewUser = async (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  const newUser = await userModel.create(req.body);

  res.send(newUser);
};

export {
  registerNewUser,
};