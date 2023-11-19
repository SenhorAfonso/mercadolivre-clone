console.clear();
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connect';
import auth from './routes/auth';
import ecommerce from './routes/ecommerce';
import path from 'path';

const app = express();

app.use('/img',express.static(path.join(__dirname, '../src/public/img')));
app.use('/js',express.static(path.join(__dirname, '/public/js')));
app.use('/css',express.static(path.join(__dirname, '../src/public/css')));

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
    const mongoURI = process.env.MONGO_URI;
    if (mongoURI != null) {
      await connectDB(mongoURI)
        .then(() => {
          console.log('conectado');
        });
    }
  } catch (error) {
    console.log(error);
  }
};

start();

export default app;
