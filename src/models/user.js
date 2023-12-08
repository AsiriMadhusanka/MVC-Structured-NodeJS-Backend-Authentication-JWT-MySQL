const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');


const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'registration', // Make sure to match the table name in your MySQL database
  timestamps: false, // Disable timestamps (createdAt, updatedAt)
});

module.exports = User;

   