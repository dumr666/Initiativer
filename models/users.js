'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    location: DataTypes.STRING,
    tags: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    Users.belongsToMany(models.Initiatives, {
      through: 'InitiativeUsers',
      as: 'initiatives',
      foreignKey: 'userId'
    });
  };
  return Users;
};