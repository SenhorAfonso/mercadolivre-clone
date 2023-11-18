import mongoose from 'mongoose';

async function connectDB(URI: string): Promise<typeof mongoose> {
  return await mongoose.connect(URI);
}

export = connectDB;