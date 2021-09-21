var PesaPal = require('pesapaljs').init({
    key: CONSUMER_KEY,
    secret: CONSUMER_SECRET,
    debug: true // false in production!
});

// Listen for IPNs (With an express app)
app.get('/ipn', PesaPal.paymentListener, function(req, res) { 
    var payment = req.payment;
    // do shit with payment {transaction, method, status, reference}

    // DO NOT res.send()
});

var options = {
    reference: "42314123", // Send this
    transaction: "175c6485-0948-4cb9-8d72-05a2c3f25be5" // or both.
};
PesaPal.getPaymentStatus(options, function(error, status}{
    // do shit
});

PesaPal.getPaymentDetails(options, function (error, payment) {
    //payment -> {transaction, method, status, reference}
    //do shit
});
var customer = new PesaPal.Customer("kariuki@pesapal.com");
var order = new PesaPal.Order("42314123", customer, "Ma ndazi", 1679.50, "KES", "MERCHANT");

// Redirect user to PesaPal
var url = PesaPal.getPaymentURL(order, "http://mysite.co.ke/callback");
// send it to an iframe ?

jQuery(document).ready(function($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 400});

    /* ======= Fixed header when scrolled ======= */

    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 50) {
             $('#header').addClass('navbar-fixed-top');
         }
         else {
             $('#header').removeClass('navbar-fixed-top');
         }
    });

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){

        //store hash
        var target = this.hash;

        e.preventDefault();

    $('body').scrollTo(target, 800, {offset: -70, 'axis':'y'});
        //Collapse mobile menu after clicking
    if ($('.navbar-collapse').hasClass('in')){
      $('.navbar-collapse').removeClass('in').addClass('collapse');
    }

  });

});
