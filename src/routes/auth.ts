import express from 'express';

import { loginUser, registerNewUser } from '../controller/auth';
import { authenticationMiddleware } from '../middleware/authentication';

const router = express.Router();

router.get('/auth', (req, res) => {
  res.render('auth');
});

router.post('/register', registerNewUser);

router.post('/login', authenticationMiddleware, loginUser);

export = router;