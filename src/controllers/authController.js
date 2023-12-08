const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const authService = require('../services/authService');

exports.register = async (req, res, next) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};

 



exports.login = async (req, res, next) => {
 try {
   const { user, token } = await authService.login(req.body);
   res.status(200).json({
     status: 'success',
     data: {
       token,
     },
   });
 } catch (err) {
   next(err);
 }
};
