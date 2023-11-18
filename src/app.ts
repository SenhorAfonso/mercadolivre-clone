import app from './server';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000;

try {
  app.listen(port, () => {
    console.log(`Server is listening in ${port} port`);
  });
} catch (error) {
  console.log(error);
}