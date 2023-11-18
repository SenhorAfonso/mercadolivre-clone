console.clear();
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connect';
import auth from './routes/auth';
import ecommerce from './routes/ecommerce';
import path from 'path';

const app = express();
const publicPath = path.resolve(__dirname, 'public');
console.log(publicPath);

app.use(express.static(publicPath));
app.use(express.json());

app.set('views', path.resolve(__dirname.replace('dist', 'src'), 'views'));
app.set('view engine', 'ejs');

app.use('/mercadoclone', auth);
app.use('/mercadoclone', ecommerce);

app.get('*', (req, res) => {
  res.send('404');
});

const start = async () => {
  try {
    dotenv.config();
    const mongoURL = process.env.MONGO_URI;
    if (mongoURL != null) {
      await connectDB(mongoURL);
    }
  } catch (error) {
    console.log(error);
  }
};

start();

export default app;
