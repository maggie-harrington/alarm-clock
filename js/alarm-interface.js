// var Calculator = require('./../js/alarm.js').calculatorModule;

$(document).ready(function(){

  var time = setInterval(function() {
    checkTime();
  }, 1000);

  function checkTime() {
    $('#time').text(moment().format('hh:mm A'));
    var currentTime = moment().format('HH:mm');
    var timeSet = $('#time-set').val();
    // $('#alarm-set-form').submit(function(event) {
    //   event.preventDefault();
    // });

    $('#alarm-off').submit(function(event) {
      event.preventDefault();
      console.log(timeSet);
      // setInterval(function() {
      //   $('#alarm').show();
      // }, 5000);
      $('#alarm').hide();
      //setTimeout(checkTime(), 5000);
    });
    if (timeSet === currentTime) {
      $('#alarm').show();
      $('#alarm-off').show();
    }
  };

});
