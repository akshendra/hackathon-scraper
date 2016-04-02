'use strict';
module.exports = function(sequelize, DataTypes) {
  var Collection = sequelize.define('Collection', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Collection;
};