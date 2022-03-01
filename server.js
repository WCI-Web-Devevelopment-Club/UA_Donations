require("dotenv").config();

const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

const YOUR_DOMAIN = "http://localhost:3000"

const publicOptions = {
    "extensions": ['html']
}

app.use(express.static('public', publicOptions));
// Parse content passed to the server
// Needed to read information from post requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// TODO: Check that amount is valid
app.post("/donate", async (req, res) => {
    let amount = req.body.amount;
    if (amount == "custom") {
        let custom_amount = req.body.custom_amount;
        if (parseFloat(custom_amount) != NaN) {
            amount = parseFloat(custom_amount)*100;
        }
    }
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: "cad",
                    product_data: {
                        name: "Donate"
                    },
                    unit_amount: amount
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `http://localhost:3000/success.html`,
        cancel_url: `http://localhost:3000/cancel.html`,
    });

    res.redirect(303, session.url);
});

app.listen(3000, () => console.log('Running on port 3000'));