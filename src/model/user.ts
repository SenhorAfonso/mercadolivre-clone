import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

/**
 * validar email usando validator
 * fazer o hash de senha
 */

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Need provide a user name'],
    maxLength: [55, 'Name should be less than 55 characters']
  },
  email: String,
  validate: {
    validator: validator.isEmail,
    message: 'Please provida a valid email'
  },
  password: {
    type: String,
    require: [true, 'Please provide a password'],
    minLength: 8,
  }
});

userSchema.pre('save', async function() {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password!, salt);
});

export default mongoose.model('User', userSchema); 
