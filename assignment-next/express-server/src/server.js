const express = require("express");
const cors = require("cors");
const reservation = require("./routes/reservationRoute.js");


const app = express();
app.use(express.json())

app.use(cors());

app.use('/reservation', reservation)

app.listen(3001, () => {
  console.log("express server connected on 3001");
});
