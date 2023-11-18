
import { type Request, type Response } from 'express';

const registerNewUser = async (req: Request, res: Response) => {
  res.send(req.body);
};

export {
  registerNewUser,
};