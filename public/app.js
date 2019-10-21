var opts = {
  buttonId: 'bread-checkout-btn',
  actAsLabel: false,
  asLowAs: true,
  items: [{
    name: 'Bed',
    price: 10000,
    sku: 'BED123',
    imageUrl: 'https://cdn.onlinewebfonts.com/svg/img_571249.png',
    detailUrl: 'https://google.com',
    quantity: 1
  }]
};

opts.calculateTax = function(shippingContact, billingContact, callback) {
  var postData = {
    shippingAddress: shippingContact,
    total: opts.items[0].price * opts.items[0].quantity
  };
  axios.post('/tax', postData)
    .then(function(data){
      callback(null, data.data.taxTotal);
    })
    .catch(function(err){
      console.log(`calculateTax error ${JSON.stringify(err)}`)
      callback(err)
    });
};

opts.calculateShipping = function(shippingContact, callback){
  var postData = {
    shippingAddress: shippingContact,
    total: opts.items[0].price * opts.items[0].quantity
  };
  axios.post('/shipping', postData)
    .then(function(data){
      callback(null, data.data.shippingOptions);
    })
    .catch(function(err){
      callback(err);
    });
};

opts.onCustomerClose = function(err, customer) {
  if (err !== null) {
    console.error("An error occurred getting customer close data.");
    return;
  }
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

opts.customCSS = '@import url(https://fonts.googleapis.com/css?family=Roboto:400,700);#bread-button,body,html{height:100%;margin:0;width:100%}body{display:table}#bread-button{background:#303030;color:#eb0e0e;border-radius:6px;display:table-cell;font-family:Roboto,sans-serif;font-size:16px;text-align:center;vertical-align:middle;transition:all .3s ease}.bread-btn{cursor:pointer}#bread-button.bread-btn:hover{background:#575757}.bread-embed-inner,.bread-label .bread-embed-icon{display:inline-block}.bread-label .bread-embed-icon:after{background:rgba(255,255,255,.5);border-radius:50px;color:#333;content:"i";cursor:pointer;display:inline-block;line-height:1;margin-left:8px;padding:4px 9px}.bread-pot:before{content:"Pay Over Time"}.bread-btn .bread-as-low-as:before,.bread-label .bread-as-low-as:before{content:"As low as "}.bread-for:before{content:"For "}';

bread.checkout(opts);
