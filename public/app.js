// configure opts
// var opts = {
//   // formId: 'bread-checkout-btn',
//   buttonId: 'bread-checkout-btn',
//   actAsLabel: false,
//   // allowCheckout: false,
//   // showInWindow: true,
//   asLowAs: true,
//   // customTotal: 54999,
//   disableEditShipping: true,
//   tax: 5000,
//   shippingOptions:[{
//     typeId:"TEST-CODE",
//     cost: 1200,
//     type: ""
//   }],
//   // showInWindow: true,
//   items: [{
//     name: 'Safe Home Starter',
//     price: 63000,
//     sku: 'BED1234',
//     // imageUrl: 'https://cdn.onlinewebfonts.com/svg/img_571249.png',
//     detailUrl: 'https://local.google.com',
//     quantity: 1
//   },
//   {
//     name: 'Safe Home Doorbell',
//     price: 4999,
//     sku: 'Sheets1234',
//     // imageUrl: 'https://cdn.onlinewebfonts.com/svg/img_571249.png',
//     detailUrl: 'https://local.google.com',
//     quantity: 1
//   }]
// };

// opts.financingProgramId = null;

// opts.shippingContact = {
//   fullName: "Enbani Moore",
//   firstName: "Enbani",
//   lastName: "Moore",
//   address: "329 3rd Ave",
//   zip: "10010",
//   city: "New York",
//   state: "NY",
//   phone: "2123109442",
//   email: "enbani@example.com"
// }
//
//
// // //
// opts.billingContact = {
//   fullName: "Enbani Moore",
//   firstName: "Enbani",
//   lastName: "Moore",
//   address: "329 3rd Ave",
//   zip: "10010",
//   city: "New York",
//   state: "NY",
//   phone: "2123109442",
//   email: "enbani@example.com"
// }

// calculateTax function should make a server request which returns tax info
// opts.calculateTax = function(shippingContact, billingContact, callback) {
//   var postData = {
//     shippingAddress: shippingContact,
//     total: opts.items[0].price * opts.items[0].quantity
//   };
//   axios.post('/tax', postData)
//     .then(function(data){
//       callback(null, data.data.taxTotal);
//     })
//     .catch(function(err){
//       // console.log(`calculateTax error ${JSON.stringify(err)}`)
//       callback(err)
//     });
// };

// opts.addToCart = function(err, callback) {
//   var postData ={
//     type: 'none'
//   };
//
//   axios.post('/add-to-cart', postData)
//     .then(function(data){
//       console.log(data);
//       callback(null)
//     })
//     .catch(function(err){
//       callback(err)
//     })
// }

// calculateShipping function should make a server request which returns shipping options
// opts.calculateShipping = function(shippingContact, callback){
//   var postData = {
//     shippingAddress: shippingContact,
//     total: opts.items[0].price * opts.items[0].quantity
//   };
//   axios.post('/shipping', postData)
//     .then(function(data){
//       callback(null, data.data.shippingOptions);
//     })
//     .catch(function(err){
//       callback(err);
//     });

//   setTimeout(function(){
//     var postData = {
//       shippingAddress: shippingContact,
//       total: opts.items[0].price * opts.items[0].quantity
//     };
//     axios.post('/shipping', postData)
//       .then(function(data){
//         callback(null, data.data.shippingOptions);
//       })
//       .catch(function(err){
//         callback(err);
//       });
//   }, 50000)
// };

// opts.onCustomerOpen = function(err, data, callback) {
//   if (err !== null) {
//     console.error("An error occurred getting customer open data.");
//     return;
//   }
//
//   console.log(data);
//
//   switch (data.source) {
//     case 'PROMO':
//       alert('Triggered by a promo click.');
//       callback(true);
//       break;
//     case 'OFFSITE':
//       alert('Triggered by an offsite redirect.');
//       callback(true);
//       break;
//     case 'BUTTON':
//       alert('Triggered by a button click');
//       // Example use case where you want to make sure a user
//       // applies discounts before proceeding. `user` object is
//       // fictional and not related to Bread.
//         callback(data);
//
//       break;
//     default:
//       callback(true);
//   }
  // or add your own logic here
  // This code will run in the time between the customer clicking on the Bread button
  // and the Bread modal appearing
  // Finally, make sure to run callback(data) or the Bread modal won't open
  // callback(data);
// }

// logic when a customer exits checkout flow before confirmation
// opts.onCustomerClose = function(err, customer) {
//   if (err !== null) {
//     console.error("An error occurred getting customer close data.");
//     return;
//   }
//   console.log(customer);
//   // console.log(window.customBreadOpts)
//   var prequalStatus = customer.state;
  // switch (prequalStatus) {
  //   case 'PREQUALIFIED':
  //     setTimeout(function(){
  //       alert(customer.email + " was prequalified for financing.");
  //     }, 500);
  //   break;
  //   case 'PARTIALLY_PREQUALIFIED':
  //   setTimeout(function(){
  //     alert(customer.email + " was partially prequalified for financing.");
  //   }, 500);
  //   break;
  //   case 'NOT_PREQUALIFIED':
  //   setTimeout(function(){
  //     alert(customer.email + " was not prequalified for financing.");
  //     window.location.replace('https://google.com');
  //   }, 500);
  //   break;
  //   case 'ABANDONED':
  //     if (customer.email === undefined || customer.email === null) {
  //       setTimeout(function(){
  //         alert("Unknown customer abandoned their prequalification attempt.");
  //       }, 500);
  //     } else {
  //       setTimeout(function(){
  //         alert(customer.email + " abandoned their prequalification attempt.");
  //       }, 500);
  //     }
  //   break;
  // }
// };


// opts.done = function(err, txn) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//
//   console.log('done function txn is: ',txn);
//   // window.location.replace('https://www.google.com')
//   return;
// }
// custom styling for checkout button
// opts.customCSS = '#bread-button,body,html{height:100%;margin:0;width:100% }body{display:table }#bread-button{color:#333;border:0px solid #FFFFFF;border-radius:4px;display:table-cell;font-family:Lato, HelveticaNeue, Helvetica Neue, sans-serif;font-size:16px;font-weight:400;text-align:left;vertical-align:middle;transition:all .3s ease }.bread-btn{cursor:pointer }#bread-button.bread-btn:hover{opacity: 0.7;}.bread-embed-inner,.bread-label .bread-embed-icon{display:inline-block }#bread-center-inner {text-decoration: underline;}.bread-label .bread-embed-icon:after{background:rgba(255,255,255,.5);border-radius:50px;color:#333;content:"i";cursor:pointer;display:inline-block;line-height:1;margin-left:8px;padding:4px 9px }.bread-pot:before{content:"Pay over time" }.bread-btn .bread-as-low-as:before,.bread-label .bread-as-low-as:before{content:"As low as " }.bread-for:before{content:"For " }@media only screen and (max-width: 600px){.bread-as-low-as-tooltip-external{right:0px !important}}'

// opts.customCSS = '@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600);#bread-button,body,html{height:100%;margin:0;width:100%}body{display:table}#bread-button{color:#181818;display:table-cell;font-family:"Open Sans",sans-serif;font-size:16px;text-align:center;vertical-align:middle}.bread-text{cursor:pointer;transition:all .2s ease}.bread-text:hover{color:#197797}.bread-dur{text-transform:lowercase;word-spacing:-3px;margin-left:-3px}.bread-embed-inner,.bread-label .bread-embed-icon{display:inline-block}#bread-as-low-as:before{content:"Or as low as "}#bread-as-low-as:after{content:"with financing*" text-decoration: underline;font-weight:700}.bread-for:before{content:"Or as low as "}.bread-for:after{content:"with financing*";text-decoration:underline;font-weight:700}#bread-as-low-as-amount{color:#181818}'

// opts.customCSS = '#bread-button,body,html{height:100%;margin-top:0px;width:100%}body{display:table}#bread-button{background:#ffffff;color:#000000;border:0px solid #5156ea;border-radius:4px;display:table-cell;font-family:Helvetica, Arial, sans-serif;font-size:16px;font-weight:700;text-align:left;vertical-align:middle;transition:all .3s ease}.bread-btn{cursor:pointer}#bread-button.bread-btn:hover{background:#ffffff}.bread-embed-inner,.bread-label .bread-embed-icon{display:inline-block}.bread-label .bread-embed-icon:after{background:rgba(255,255,255,.5);border-radius:50px;color:#333;content:"i";cursor:pointer;display:inline-block;line-height:1;margin-left:0px;padding:4px 9px}.bread-pot:before{content:"Pay over time"}.bread-btn .bread-as-low-as:before,.bread-label #bread-as-low-as:before{content:"As low as "}#bread-as-low-as:after{content:"Learn More "; text-decoration: underline;font-weight:lighter}.bread-for:before{content:"For "}'


// opts.customCSS = '@import url(https://fonts.googleapis.com/css?family=Roboto).#bread-button,body,html{height:100%;margin-top:0px;width:100%}body{display:table}#bread-button{background:#ffffff;color:#000000;border:0px solid #5156ea;border-radius:4px;display:table-cell;font-family:Helvetica, Arial, sans-serif;font-size:13px;font-weight:600;text-align:left;vertical-align:middle;transition:all .3s ease}.bread-btn{cursor:pointer}#bread-button.bread-btn:hover{background:#ffffff}.bread-embed-inner,.bread-label .bread-embed-icon{display:inline-block}.bread-label .bread-embed-icon:after{background:rgba(255,255,255,.5);border-radius:50px;color:#333;content:"i";cursor:pointer;display:inline-block;line-height:1;margin-left:0px;padding:4px 9px}.bread-pot:before{content:"Pay over time"}.bread-btn .bread-as-low-as:before,.bread-label #bread-as-low-as:before{content:"As low as "}#bread-as-low-as:after{content:"Prequalify Now "; text-decoration: underline;font-weight:bold; color: #5156ea}.bread-for:before{content:"For "}.bread-for:after{content:"Prequalify Now"; text-decoration: underline;font-weight:bold; color: #5156ea}'

// opts.allowSplitPayCheckout = false;

// var total = opts.customTotal || opts.items.reduce(function(sum, i) {
//   return (i.price * i.quantity) + sum;
// }, 0)
//
// if (total <= 100000 && total >= 5000) {
//   bread.showSplitPayPromo({
//     selector: '.splitpay-clickable-price',
//     total: total,
//     includeInstallments: true,
//     openModalOnClick: true,
//     opts: opts
//   });
//
//   bread.showSplitPayPromo({
//     selector: '.splitpay-clickable-button',
//     total: total,
//     includeInstallments: false,
//     openModalOnClick: true,
//     opts: opts
//   });
// }

var opts = {
  buttonId: 'bread-checkout-btn',
  //replace buttonId with the id attribute of the html element where as low as will render
  done: function(err, txn) {
    // done function runs when a customer completes their bread checkout
    // done function will not be used at cart, but it's required for the configuration
    if (err) {
      console.log(err);
    }

    console.log(txn);
  },
  customTotal: 69000, //replace with the price of the cart in cents
  actAsLabel: false,
  asLowAs: true,
  allowCheckout: true,
  // customCSS: '@import url(https://fonts.googleapis.com/css?family=Roboto).#bread-button, body, html {height: 100%;margin-top: 0px;width: 100% }body {display: table }#bread-button {color: #000000;border: 0px solid #5156EA;border-radius: 4px;display: table-cell;font-family: Helvetica, Arial, sans-serif;font-weight: 600;text-align: left;vertical-align: middle;transition: all .3s ease;font-size: 12px;}.bread-btn {cursor: pointer }#bread-button.bread-btn:hover {}.bread-embed-inner, .bread-label .bread-embed-icon {display: inline-block }.bread-label .bread-embed-icon:after {border-radius: 50px;color: #333;content: "i";cursor: pointer;display: inline-block;line-height: 1;margin-left: 0px;padding: 4px 9px }.bread-pot:before {content: "Pay over time" }.bread-btn .bread-as-low-as:before, .bread-label #bread-as-low-as:before {content: "Starting at 0% APR | Pay as low as " }#bread-as-low-as:after {content: "Prequalify Now ";text-decoration: underline;font-weight: bold;color: #5156EA }.bread-for:before {content: "For " }.bread-for:after {content: "Prequalify Now";text-decoration: underline;font-weight: bold;color: #5156EA }',
  buttonLocation: 'cart_summary',
  // customCSS: 'body, html {height: 100%;margin-top: 0px;width: 100% }body {display: table }#bread-button {color: #000000;border: 0px solid #5156EA;border-radius: 4px;display: table-cell;font-family: Helvetica, Arial, sans-serif;font-weight: 600;text-align: left;vertical-align: middle;transition: all .3s ease;font-size: 12px;}.bread-btn {cursor: pointer }#bread-button.bread-btn:hover {}.bread-embed-inner, .bread-label .bread-embed-icon {display: inline-block }.bread-label .bread-embed-icon:after {border-radius: 50px;color: #333;content: "i";cursor: pointer;display: inline-block;line-height: 1;margin-left: 0px;padding: 4px 9px }.bread-pot:before {content: "Pay over time" }.bread-btn .bread-as-low-as:before, .bread-label #bread-as-low-as:before {content: "Pay as low as " }#bread-as-low-as:after {content: "Prequalify Now ";text-decoration: underline;font-weight: bold;color: #5156EA }.bread-for:before {content: "For " }.bread-for:after {content: "Prequalify Now";text-decoration: underline;font-weight: bold;color: #5156EA } #bread-checkout-btn-bread-iframe { height: 30px !important; width: 275px !important; }',
  // customCSS: '@import url(, body, html {height: 100%;margin-top: 0px;width: 100% }body {display: table }#bread-button {color: #000000;border: 0px solid #5156EA;border-radius: 4px;display: table-cell;font-family: Helvetica, Arial, sans-serif;font-weight: 600;text-align: left;vertical-align: middle;transition: all .3s ease;font-size: 12px;}.bread-btn {cursor: pointer }#bread-button.bread-btn:hover {}.bread-embed-inner, .bread-label .bread-embed-icon {display: inline-block }.bread-label .bread-embed-icon:after {border-radius: 50px;color: #333;content: "i";cursor: pointer;display: inline-block;line-height: 1;margin-left: 0px;padding: 4px 9px }.bread-pot:before {content: "Pay over time" }.bread-btn .bread-as-low-as:before, .bread-label #bread-as-low-as:before {content: "Starting at 0% APR | Pay as low as " }#bread-as-low-as:after {content: "Prequalify Now ";text-decoration: underline;font-weight: bold;color: #5156EA }.bread-for:before {content: "Starting at 0% APR | Pay as low as " }.bread-for:after {content: "Prequalify Now";text-decoration: underline;font-weight: bold;color: #5156EA }'
}

opts.shippingContact = {
  fullName: "Enbani Moore",
  firstName: "Enbani",
  lastName: "Moore",
  address: "329 3rd Ave",
  zip: "10010",
  city: "New York",
  state: "NY",
  phone: "2123109652",
  email: "enbani@example.com"
}



opts.billingContact = {
  fullName: "Enbani Moore",
  firstName: "Enbani",
  lastName: "Moore",
  address: "24 Glassgow Loop",
  zip: "37090",
  city: "10010",
  state: "NY",
  phone: "2123109652",
  email: "enbani@example.com"
}

opts.items = [{
    name: 'Safe Home Starter',
    price: 63000,
    sku: 'Bell123',
    imageUrl: 'https://cdn.vox-cdn.com/thumbor/0kzBdS0LmljyTGXYun9nHPTATDU=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/13662774/Untitled_3.png',
    detailUrl: 'https://local.google.com',
    quantity: 1
  },
  {
    name: 'Safe Home Doorbell',
    price: 4999,
    sku: 'Bell1234',
    imageUrl: 'https://i.pcmag.com/imagery/reviews/01k7CnwpkWn1f70eNqG6nFV-1..1599855093.png',
    detailUrl: 'https://local.google.com',
    quantity: 1
  }]

opts.customCSS = 'body, html {height: 100%;margin-top: 0px;width: 100% }body {display: table }#bread-button {color: #000000;border: 0px solid #5156EA;border-radius: 4px;display: table-cell;font-family: Helvetica, Arial, sans-serif;font-weight: 600;text-align: left;vertical-align: middle;transition: all .3s ease;font-size: 12px;}.bread-btn {cursor: pointer }#bread-button.bread-btn:hover {}.bread-embed-inner, .bread-label .bread-embed-icon {display: inline-block }.bread-label .bread-embed-icon:after {border-radius: 50px;color: #333;content: "i";cursor: pointer;display: inline-block;line-height: 1;margin-left: 0px;padding: 4px 9px }.bread-pot:before {content: "Pay over time" }.bread-btn .bread-as-low-as:before, .bread-label #bread-as-low-as:before {content: "Pay as low as " }#bread-as-low-as:after {content: "Prequalify Now ";text-decoration: underline;font-weight: bold;color: #5156EA }.bread-for:before {content: "For " }.bread-for:after {content: "Prequalify Now";text-decoration: underline;font-weight: bold;color: #5156EA } #bread-checkout-btn-bread-iframe { height: 30px !important; width: 275px !important; }';

opts.onCustomerClose = function(err, customer) {
  if (err !== null) {
    console.error("An error occurred getting customer close data.");
    return;
  }
  console.log(customer);
  // console.log(window.customBreadOpts)
  var prequalStatus = customer.state;
  switch (prequalStatus) {
    case 'PREQUALIFIED':
      setTimeout(function(){
        alert(customer.email + " was prequalified for financing.");
      }, 500);
    break;
    case 'PARTIALLY_PREQUALIFIED':
    setTimeout(function(){
      alert(customer.email + " was partially prequalified for financing.");
    }, 500);
    break;
    case 'NOT_PREQUALIFIED':
    setTimeout(function(){
      alert(customer.email + " was not prequalified for financing.");
      window.location.replace('https://google.com');
    }, 500);
    break;
    case 'ABANDONED':
      if (customer.email === undefined || customer.email === null) {
        setTimeout(function(){
          alert("Unknown customer abandoned their prequalification attempt.");
        }, 500);
      } else {
        setTimeout(function(){
          alert(customer.email + " abandoned their prequalification attempt.");
        }, 500);
      }
    break;
  }
};

bread.checkout(opts)
