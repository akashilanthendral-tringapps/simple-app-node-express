'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    userId:{
      type: DataTypes.INTEGER,
      primaryKey : true,
      autoIncrementIdentity: true
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname:{
      type: DataTypes.STRING,
      allowNull: false
    }, 
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    emailid:{
      type: DataTypes.STRING,
      allowNull: false
    },
    phonenumber: {
      type: DataTypes.BIGINT, 
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'sampletable'
  });
  return User;
};