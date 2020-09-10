// configure opts
var opts = {
  formId: 'bread-checkout-btn',
  // buttonId: 'bread-checkout-btn',
  actAsLabel: false,
  allowCheckout: true,
  // showInWindow: true,
  // asLowAs: true,
  customTotal: 11112,
  disableEditShipping: true,
  tax: 5000,
  // shippingOptions:[{
  //   typeId:"TEST-CODE",
  //   cost: 1200,
  //   type: ""
  // }],
  // showInWindow: true,
  items: [{
    name: 'Bed',
    price: 1000,
    sku: 'BED123',
    // imageUrl: 'https://cdn.onlinewebfonts.com/svg/img_571249.png',
    detailUrl: 'https://google.com',
    quantity: 1
  },
  {
    name: 'Bed2',
    price: 20000,
    sku: 'BED124',
    // imageUrl: 'https://cdn.onlinewebfonts.com/svg/img_571249.png',
    detailUrl: 'https://google.com',
    quantity: 1
  }]
};

opts.financingProgramId = null;

opts.shippingContact = {
  fullName: "Jimmy Bond",
  firstName: "Jim",
  lastName: "Bond",
  address: "110 Bun Time Street",
  zip: "10901",
  city: "Suffern",
  state: "NY",
  phone: "3017870035",
  email: "jimmybond@example.com"
}
//
opts.billingContact = {
  fullName: "Indiana Jones",
  firstName: "Indiana",
  lastName: "Jones",
  address: "110 Bun Time Street",
  zip: "10901",
  city: "Suffern",
  state: "NY",
  phone: "2123101100",
  email: "indianajones@example.com"
}

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

opts.addToCart = function(err, callback) {
  var postData ={
    type: 'none'
  };

  axios.post('/add-to-cart', postData)
    .then(function(data){
      console.log(data);
      callback(null)
    })
    .catch(function(err){
      callback(err)
    })
}

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
// };



// logic when a customer exits checkout flow before confirmation
// opts.onCustomerClose = function(err, customer) {
//   if (err !== null) {
//     console.error("An error occurred getting customer close data.");
//     return;
//   }
//   console.log(customer);
//   var prequalStatus = customer.state;
//   switch (prequalStatus) {
//     case 'PREQUALIFIED':
//       setTimeout(function(){
//         alert(customer.email + " was prequalified for financing.");
//       }, 500);
//     break;
//     case 'PARTIALLY_PREQUALIFIED':
//     setTimeout(function(){
//       alert(customer.email + " was partially prequalified for financing.");
//     }, 500);
//     break;
//     case 'NOT_PREQUALIFIED':
//     setTimeout(function(){
//       alert(customer.email + " was not prequalified for financing.");
//       window.location.replace('https://google.com');
//     }, 500);
//     break;
//     case 'ABANDONED':
//       if (customer.email === undefined || customer.email === null) {
//         setTimeout(function(){
//           alert("Unknown customer abandoned their prequalification attempt.");
//         }, 500);
//       } else {
//         setTimeout(function(){
//           alert(customer.email + " abandoned their prequalification attempt.");
//         }, 500);
//       }
//     break;
//   }
// };

opts.onCustomerClose = function(err, customer) {
  if (err !== null) {
    console.error("An error occurred getting customer close data.");
    return;
  }

  console.log(customer)

  if(customer.state === 'NOT_PREQUALIFIED') {
    setTimeout(function(){
      alert(customer.email + " was not prequalified for financing.");
      window.location.replace('https://google.com');
    }, 500);
  }
};


opts.done = function(err, txn) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(txn);
  // window.location.replace('https://www.google.com')
  return;
}
// custom styling for checkout button
opts.customCSS = '#bread-button,body,html{height:100%;margin:0;width:100% }body{display:table }#bread-button{color:#333;border:0px solid #ffffff;border-radius:4px;text-decoration: underline;display:table-cell;font-family:Lato, HelveticaNeue, Helvetica Neue, sans-serif;font-size:16px;font-weight:400;text-align:center;vertical-align:middle;transition:all .3s ease }.bread-btn{cursor:pointer }#bread-button.bread-btn:hover{opacity: 0.7;}.bread-embed-inner,.bread-label .bread-embed-icon{display:inline-block }.bread-label .bread-embed-icon:after{background:rgba(255,255,255,.5);border-radius:50px;color:#333;content:"i";cursor:pointer;display:inline-block;line-height:1;margin-left:8px;padding:4px 9px }.bread-pot:before{content:"Pay over time" }.bread-btn .bread-as-low-as:before,.bread-label .bread-as-low-as:before{content:"As low as " }.bread-for:before{content:"For " }.checkout-wrapper{width: 100vw;border:1px solid blue}'

// var MAX_SECS_BEFORE_ABORT = 5;
// var TIMEOUT_INTERVAL = 100;
// var RETRIES = MAX_SECS_BEFORE_ABORT * 1000 / TIMEOUT_INTERVAL;
// var ERROR_PREFIX = 'Bread Integration Error: Could not setup promotional label for SplitPay. Reason: ';
// var INTEGRATION_ERROR = 'Could not create Bread SplitPay Promotional Label within 5 seconds. Please verify that the provided selector is valid';
//
// var retryCount = 0;
// var retry = setInterval(function() {
//   try {
//     if (window.bread && window.bread.ldflags && window.bread.ldflags._isReady) {
//       window.clearInterval(retry);
//       breadShowSplitPayButton();
//     }
//     if (retryCount < RETRIES) {
//       retryCount += 1;
//     } else {
//       throw new Error(INTEGRATION_ERROR);
//     }
//   } catch (err) {
//     console.warn(ERROR_PREFIX + err);
//     window.clearInterval(retry);
//   }
// }, TIMEOUT_INTERVAL);
//
// function breadShowSplitPayButton() {
//   if (bread !== undefined && bread.ldflags['multipay-enable']) {
//
//     var total = null;
//     if (opts.hasOwnProperty('customTotal')) {
//       total = opts.customTotal;
//     } else if (opts.hasOwnProperty('items')) {
//       total = opts.items.reduce(function(sum, i) {
//         return (i.price * i.quantity) + sum;
//       }, 0);
//     } else {
//       console.warn('[Bread-SplitPay] failed to calculate total')
//     }
//
//     opts.allowSplitPayCheckout = false;
//
//     if (total <= 100000 && total >= 5000) {
//       bread.showSplitPayPromo({
//         selector: '.splitpay-clickable-price',
//         total: total,
//         includeInstallments: true,
//         openModalOnClick: true,
//         opts: opts
//       });
//
//       bread.showSplitPayPromo({
//         selector: '.splitpay-clickable-button',
//         total: total,
//         includeInstallments: false,
//         openModalOnClick: true,
//         opts: opts
//       });
//     }
//   }
// }


bread.checkout(opts);
