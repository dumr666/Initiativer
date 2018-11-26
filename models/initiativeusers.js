'use strict';
module.exports = (sequelize, DataTypes) => {
  const InitiativeUsers = sequelize.define('InitiativeUsers', {
    userId: DataTypes.INTEGER,
    initiativeId: DataTypes.INTEGER
  }, {});
  InitiativeUsers.associate = function(models) {
    // associations can be defined here
  };
  return InitiativeUsers;
};