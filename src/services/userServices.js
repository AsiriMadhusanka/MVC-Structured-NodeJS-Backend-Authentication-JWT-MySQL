const User = require('../models/user');

exports.getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (err) {
    throw err;
  }
};



exports.getUserById = async (id) => {
 try {
  const user = await User.findOne({ where: { id: id } });
 return user;
 } catch (err) {
  throw err;
}
};



exports.updateUser = (id, updatedUserData, callback) => {
 User.update(updatedUserData, { where: { id: id } })
 .then(result => callback(null, result))
 .catch(err => callback(err));
};




exports.deleteUser = async (id) => {
 const result = await User.destroy({ where: { id: id } });
 return result;
};




