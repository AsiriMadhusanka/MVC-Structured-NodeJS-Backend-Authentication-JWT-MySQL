const jwt = require('jsonwebtoken');

exports.checkToken = (req, res, next) => {
 const authHeader = req.headers['authorization'];
 const token = authHeader && authHeader.split(' ')[1];

 // If the token is not present, return a 401 status code
 if (!token) {
  return res.status(401).json({
    status: 'fail',
    message: 'Access Denied! Unauthorized User'
  });
 }

 // Verify the token using the JWT secret key
 jwt.verify(token, process.env.JWT_KEY, (err, user) => {
  // If the token is invalid, return a 400 status code
  if (err) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid Token'
    });
  }

  // If the user is not found, return a 400 status code
  if (!user) {
    return res.status(400).json({
      status: 'fail',
      message: 'User not found'
    });
  }

  // Attach the user to the request object
  req.user = user;

  // Call the next middleware function
  next();
 });
};







// const jwt = require('jsonwebtoken');

// exports.checkToken = (req, res, next) => {
//  const authHeader = req.headers['authorization'];
//  const token = authHeader && authHeader.split(' ')[1];

//  if (token == null) return res.sendStatus(401);

//  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
//   if (err) return res.sendStatus(403);
//   req.user = user;
//   next();
//  });
// };





// const jwt = require('jsonwebtoken');
// const { User } = require('../models/user');

// exports.checkToken = async (req, res, next) => {
//   const token = req.headers['authorization'];
  
//   if (!token) {
//     return res.status(401).json({
//       status: 'fail',
//       message: 'Access Denied! Unauthorized User'
//     });
//   }

//   try {
//     const decodedToken = jwt.verify(token, process.env.JWT_KEY);

//     const user = await User.findOne({ _id: decodedToken.id });
//     if (!user) {
//       return res.status(400).json({
//         status: 'fail',
//         message: 'User not found'
//       });
//     }

//     req.user = decodedToken;
//     next();
//   } catch (err) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Invalid Token'
//     });
//   }
// };

