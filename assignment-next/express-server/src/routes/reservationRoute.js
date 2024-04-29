const express = require("express");
const router = express.Router();
const { addReservation } = require("../controllers/ReservationsController");

// Home page route.
router.post("/", addReservation);

module.exports = router;

