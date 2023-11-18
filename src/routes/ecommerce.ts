import express from 'express';

const router = express.Router();

router.get('', (req, res) => {
  res.send('homepage');
});

router.get('/store', (req, res) => {
  res.send('Entering the store');
});

export = router;