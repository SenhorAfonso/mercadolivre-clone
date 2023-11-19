import express from 'express';

const router = express.Router();

router.get('', (req, res) => {
  res.send('homepage');
});

router.get('/sell', (req, res) => {
  res.send('Entering the store');
});

router.post('/sell', (req, res) => {
  res.send(req.body);
});

export = router;