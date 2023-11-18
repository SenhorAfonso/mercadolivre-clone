import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Need to provide a user name'],
    maxlength: [55, 'Name should be less than 55 characters']
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email'
    },
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: [6, 'Password should be at least 6 characters'],
  }
});


userSchema.pre('save', async function() {
  console.clear();
  console.log(this.password, this.name, this.email);
  if (typeof (this.password) !== 'string') {
    throw new Error('Please provide a password');
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password!, salt);
});

export default mongoose.model('User', userSchema); 
