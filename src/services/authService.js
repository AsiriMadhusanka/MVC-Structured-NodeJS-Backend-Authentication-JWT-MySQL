const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (userData) => {
  const { email, password } = userData;

  // Check if a user with the same email already exists
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error('User already exists');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user
  const user = await User.create({
    ...userData,
    password: hashedPassword,
  });

  return user;
};





exports.login = async (userData) => {
 const { email, password } = userData;

 // Find the user in the database
 const user = await User.findOne({ where: { email } });
 if (!user) {
   throw new Error('User not found');
 }

 // Check if the password is correct
 const passwordIsValid = await bcrypt.compare(password, user.password);
 if (!passwordIsValid) {
   throw new Error('Invalid password');
 }

 // Generate JWT token
 const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_KEY, { expiresIn: '1m' });

 return { user, token };
};


