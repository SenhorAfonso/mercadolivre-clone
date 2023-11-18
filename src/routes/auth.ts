import express from 'express';

import { registerNewUser } from '../controller/auth';

const router = express.Router();

router.get('/auth', (req, res) => {
  res.render('auth');
});

router.post('/register', registerNewUser);

router.post('/login', (req, res) => {
  res.render('login');
});

export = router;