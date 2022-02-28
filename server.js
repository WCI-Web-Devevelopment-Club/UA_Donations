require("dotenv").config();

const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(express.static('public'));

app.listen(3000, () => console.log('Running on port 3000'));