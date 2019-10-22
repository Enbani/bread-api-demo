const axios = require('axios');
const config = require('./config.js');

// configure data object to be sent to BREAD API
let data = {
  options: {
    callbackUrl: 'https://getbread.com',
    completeUrl: 'https://docs.getbread.com/api/api/#create-a-cart',
    errorUrl: 'https://www.getbread.com/contact/',
    shippingOptions: [
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
    ],
    shippingContact: {
      firstName: 'Bread',
      lastName: 'TestGuru',
      email: 'breadTestGuru@bread-example.com',
      address: '23 23rd St',
      city: 'New York',
      state: 'NY',
      zip: '10901'
    },
    billingContact: {
      firstName: 'Bread',
      lastName: 'TestGuru',
      email: 'breadCodeGuru@bread-example.com',
      address: '23 23rd St',
      city: 'New York',
      state: 'NY',
      zip: '10901'
    },
    items: [{
      name: 'Couch',
      price: 10000,
      sku: 'COUCH123',
      imageUrl: 'https://cdn.onlinewebfonts.com/svg/img_571249.png',
      detailUrl: 'https://cdn.onlinewebfonts.com/svg/img_571249.png',
      quantity: 1
    }],
    tax: 500
  }
};

// POST request to BREAD API
axios.request({
  url: 'https://api-sandbox.getbread.com/carts/',
  method: 'post',
  headers: {"Content-Type": "application/json"},
  auth: {
    username: config.api.sandboxApiKey,
    password: config.api.sandboxSecretKey
  },
  data
})
.then((res) => console.log(res.data.url))
.catch((e) => console.log(e.data))
