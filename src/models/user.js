//e-mail, name, graduated. require name and email. give graduated a default value = false
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    }
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
    password:{
      type: String,
      required: true,
        trim: true,
        minlength: 6,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error("Password can not include password")
            }
        }
  },
  graduated: {
    type: Boolean,
    default: false
  }
});

userSchema.pre('save', async function(next){
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 7);
    }
});
//when we send a post or patch request, then bcrypt will run BEFORE he user password is saved to the mongo object
const User = mongoose.model("user", {userSchema});

module.exports = User;
