const userService = require('../services/userServices');
const bcrypt = require('bcrypt');

exports.getUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({
      status: 'success',
      data: {
        users,
      },
    });
  } catch (err) {
    next(err);
  }
};



exports.getUserById = async (req, res, next) => {
 try {
   const user = await userService.getUserById(req.params.id);
   res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
 } catch (err) {
   next(err);
 }
};



exports.updateUser = (req, res, next) => {
 const body = req.body;
 const salt = bcrypt.genSaltSync(10);
 body.password = bcrypt.hashSync(body.password, salt);
 userService.updateUser(req.params.id, body, (err, results) => {
 if (err) {
  console.log(err);
  return next(err);
 }
 return res.json({
  success: 1,
  message: "updated successfully"
 });
 });
};



exports.deleteUser = async (req, res, next) => {
 try {
  const result = await userService.deleteUser(req.params.id);
  res.json({ success: 1, message: "deleted successfully" });
 } catch (err) {
  next(err);
 }
};

