
import { type Request, type Response } from 'express';
import userModel from '../model/userModel';

const registerNewUser = async (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  const newUser = await userModel.create(req.body);

  res.send(newUser);
};

export {
  registerNewUser,
};