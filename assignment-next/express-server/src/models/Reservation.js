const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sqlite::memory:");

const reservationModel = sequelize.define("reservation", {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true
},
  nom: DataTypes.STRING,
  prenom: DataTypes.STRING,
  email: DataTypes.STRING,
  prestation: DataTypes.STRING,
  nbPassagers: DataTypes.NUMBER,
  address: DataTypes.STRING,
  destionation: DataTypes.STRING,
  datePriseEnCharge: DataTypes.DATE,
  dateRestitution: DataTypes.DATE,
  enfant: DataTypes.BOOLEAN,
  message: DataTypes.STRING,
});

module.exports = { reservationModel };
