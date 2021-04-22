const axios = require('axios');
const config = require('./config.js');

// configure data object to be sent to BREAD API
// let data = {
//   createdBy: 'EnbaniBanzMoore',
//   // expiration: '2020-10-18',
//   options: {
//     callbackUrl: 'https://www.google.com/?hello=callback',
//     orderRef: 'ABCD-12345',
//     completeUrl: 'https://www.google.com/?hello=hello',
//     errorUrl: 'https://www.google.com/?hello=goodbye',
//     shippingOptions: [
//       {
//         typeId: "ship-01",
//         cost: 799,
//         type: "Overnight Shipping"
//       },
//       {
//         typeId: "ship-02",
//         cost: 499,
//         type: "Two-Day Shipping"
//       }
//     ],
//     shippingContact: {
//       firstName: 'Bread',
//       lastName: 'TestGuru',
//       email: 'breadTestGuru@bread-example.com',
//       address: '23 23rd St',
//       city: 'New York',
//       state: 'NY',
//       zip: '10901'
//     },
//     billingContact: {
//       firstName: 'Bread',
//       lastName: 'TestGuru',
//       email: 'breadCodeGuru@bread-example.com',
//       address: '23 23rd St',
//       city: 'New York',
//       state: 'NY',
//       zip: '10901'
//     },
//     customTotal: 500000,
//     // items: [{
//     //   name: 'Couch',
//     //   price: 10000,
//     //   sku: 'COUCH123',
//     //   imageUrl: 'https://cdn.onlinewebfonts.com/svg/img_571249.png',
//     //   detailUrl: 'https://cdn.onlinewebfonts.com/svg/img_571249.png',
//     //   quantity: 1
//     // }],
//     tax: 500,
//     onCustomerClose: function(err, customer) {
//       if (err !== null) {
//         console.error("An error occurred getting customer close data.");
//         return;
//       }
//       console.log(customer);
//       var prequalStatus = customer.state;
//       switch (prequalStatus) {
//         case 'PREQUALIFIED':
//           setTimeout(function(){
//             alert(customer.email + " was prequalified for financing.");
//           }, 500);
//         break;
//         case 'PARTIALLY_PREQUALIFIED':
//         setTimeout(function(){
//           alert(customer.email + " was partially prequalified for financing.");
//         }, 500);
//         break;
//         case 'NOT_PREQUALIFIED':
//         setTimeout(function(){
//           alert(customer.email + " was not prequalified for financing.");
//           window.location.replace('https://google.com');
//         }, 500);
//         break;
//         case 'ABANDONED':
//           if (customer.email === undefined || customer.email === null) {
//             setTimeout(function(){
//               alert("Unknown customer abandoned their prequalification attempt.");
//             }, 500);
//           } else {
//             setTimeout(function(){
//               alert(customer.email + " abandoned their prequalification attempt.");
//             }, 500);
//           }
//         break;
//       }
//     }
//   }
// };

//
// let data = {
//   expiration: "2021-12-06",
//   options: {
//     orderRef: "416078",
//     completeUrl: "https://www.google.com",
//     errorUrl: "https://www.getbread.com/?error=true",
//     callbackUrl: 'https://www.epson.com',
//     disableEditShipping: true,
//     // customTotal: 102000,
//     shippingOptions: [{
//       type: "FedEx® - 2nd Day",
//       typeId: "shqfedex5_FEDEX_2_DAY",
//       cost: 0
//     }],
//     shippingContact: {
//       fullName: "Heather McMillen",
//       address: "29 Borgo Court",
//       address2:"",
//       city: "Willow Spring",
//       email: "heathermcmillen@me.com",
//       state: "NC",
//       zip: "27592",
//       phone: "9196164038"
//     },
//     billingContact: {
//       fullName: "Heather McMillen",
//       address: "29 Borgo Court",
//       address2:"",
//       city: "Willow Spring",
//       email: "heathermcmillen@me.com",
//       state: "NC",
//       zip: "27592",
//       phone: "9196164038"
//     },
//     items: [{
//       name: "Sony WH-1000XM4 Wireless Over-Ear Headphones - Black",
//       sku: "SONY:WH1000XM4-BLK",
//       quantity: 1,
//       detailUrl: "https://www.audioadvice.com/mtwoosau_admin/catalog/product/view/id/5985/s/sony-wh-1000xm4-wireless-over-ear-headphones-black/",
//       imageUrl: "https://www.audioadvice.com/pub/media/catalog/product/1/_/1._wh-1000xm4_b_stadard1_1_1.jpg",
//       price: 27800
//     }],
//     customTotal: 28000,
//     discounts: [],
//     tax: 1877
//   }
// }

let data = {
    expiration: "2021-04-22",
    createdBy: "GFM API",
    options: {
        orderRef: "GFM62536437",
        customTotal: 42730,
        tax: 3330,
        shippingOptions: [{
                "cost": 1900,
                "type": "FedEx 2 Day",
                "typeId": "17"
            }
        ],
        financingProgramId:'1778786f-854b-43f0-b60c-5afcef67c24e',
        disableEditShipping: true,
        callbackUrl: "https://www.example-callback.com/callback",
        completeUrl: "https:\/\/epson.com\/MAN142863749250203",
        errorUrl: "https:\/\/epson.com\/MAN142863749250203",
        shippingContact: {
            firstName: "Test",
            lastName: "Six",
            email: "rsage@greatfallsmarketing.com",
            address: "21464 Blue Marlin Dr",
            address2: "",
            city: "Springfield",
            state: "LA",
            zip: "70462-8236",
            phone: "2073333561"
        },
        billingContact: {
          firstName: "Test",
          lastName: "Six",
          email: "rsage@greatfallsmarketing.com",
          address: "21464 Blue Marlin Dr",
          address2: "",
          city: "Springfield",
          state: "LA",
          zip: "70462-8236",
          phone: "2073333561"
        }
    }
}

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
.then((res) => console.log(res.data))
.catch((e) => console.log(e.data))

// axios.request({
//   url: 'https://api-sandbox.getbread.com/carts/',
//   method: 'post',
//   headers: {"Content-Type": "application/json"},
//   auth: {
//     username: '7101ea30-8ae3-47ab-a8bd-235860d36f3e',
//     password: 'd0dac82c-7d59-4f95-8390-76a60d9f6b8a'
//   },
//   data
// })
// .then((res) => console.log(res.data.url))
// .catch((e) => console.log(e.data))
