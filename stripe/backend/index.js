require("dotenv").config()
const express = require('express');
const cors = require('cors')
const stripe = require('stripe')(process.env.STRIPE_CODE)
const app = express();

app.use(cors())
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
    console.log("Check")
  const session = await stripe.checkout.sessions.create({
    line_items: [
        {
            price_data: {
              currency: 'inr',
              product_data: {
                name: 'T-shirt',
              },
              unit_amount: 2000,
            },
            quantity: 1,
          },
    ],
    mode: 'payment',
    success_url: `${process.env. YOUR_DOMAIN}/checkout-success`,
    cancel_url: `${process.env.YOUR_DOMAIN}/checkout-cancel`,
  });

  res.send({url: session.url});
});


app.listen(5000,()=>{
    console.log('listening on 5000')
})