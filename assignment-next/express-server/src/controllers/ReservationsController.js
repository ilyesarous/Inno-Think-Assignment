const { connection } = require("../config/config");

async function addReservation(req, res) {
  let reservation = ({
    id,
    nom,
    prenom,
    email,
    prestation,
    nbPassagers,
    address,
    destionation,
    datePriseEnCharge,
    dateRestitution,
    enfant,
    message,
  } = req.body);

  const datePriseEnChargeSet = new Date(reservation.datePriseEnCharge);
  const dateRestitutionSet = new Date(reservation.dateRestitution);

  // await reservationModel.create(reservation);

  connection.connect();
  const sql =
    "insert into reservations (nom,prenom,email,prestation,nbPassagers,address,destionation,datePriseEnCharge,dateRestitution,enfant,message) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  connection.query(
    sql,
    [
      reservation.nom,
      reservation.prenom,
      reservation.email,
      reservation.prestation,
      reservation.nbPassagers,
      reservation.address,
      reservation.destionation,
      reservation.datePriseEnCharge= datePriseEnChargeSet,
      reservation.dateRestitution = dateRestitutionSet,
      reservation.enfant,
      reservation.message,
    ],
    (err, result) => {
      if (err) throw err;

      console.log("The solution is: " + result.affectedRows);
    }
  );

  // connection.end();

  res.json({ message: reservation });
}

module.exports = { addReservation };
