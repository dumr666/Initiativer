'use strict';
module.exports = (sequelize, DataTypes) => {
  const Initiatives = sequelize.define('Initiatives', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    tags: DataTypes.STRING
  }, {});
  Initiatives.associate = function(models) {
    Initiatives.belongsToMany(models.Users, {
      through: 'InitiativeUsers',
      as: 'users',
      foreignKey: 'initiativeId'
    });
  };
  return Initiatives;
};