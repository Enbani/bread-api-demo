// require  packages
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const  _ = require('lodash');
// run on port 3000 locally, or whichever PORT heroku configures in PROD
const port = process.env.PORT || 3000;

// initialize app
const app = express();

// treat all requests as json
app.use(bodyParser.json());

// serve static files from the public directory
app.use(express.static(__dirname + '/public'));

app.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/premade-cart.html'));
})

// all get requests will return the main html page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/main.html'))
})

// route handler to return tax info
app.post('/tax', (req, res) => {
  let data = _.pick(req.body, ['shippingAddress', 'total']);
  if (data.shippingAddress == null || data.total == null) {
    return res.status(400).send({error: 'Please make sure to include a shipping address and total'});
  }
  if (data.shippingAddress.state === "NY") {
    let taxTotal = 500.00;
    return res.send({taxTotal});
  }
  let taxTotal = 0;
  return res.send({taxTotal});
})

// route handler to return shipping options
app.post('/shipping', (req, res) => {
  let data = _.pick(req.body, ['shippingAddress', 'total']);
  if (data.shippingAddress == null || data.total == null) {
    return res.status(400).send({error: 'Please make sure to include a shipping address and total'});
  }
  let shippingOptions = [
    {
      typeId: "ship-01",
      cost: 799,
      type: "Overnight Shipping"
    },
    {
      typeId: "ship-02",
      cost: 499,
      type: "Two-Day Shipping"
    }
  ];
  return res.send({shippingOptions});
})

app.post('/add-to-cart', (req, res) => {
  return res.send({status: 'success'})
});

// page to return when confirmation is received
app.post('/confirm', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/confirm.html'));
})

// start server
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
