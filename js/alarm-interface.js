// var Calculator = require('./../js/alarm.js').calculatorModule;

$(document).ready(function(){

  setInterval(function() {
    checkTime();
  }, 60000);

  setInterval(function() {
    displayTime();
  }, 1000);

  function displayTime() {
    $('#time').text(moment().format('hh:mm A'));
  }

  function checkTime() {
    var currentTime = moment().format('HH:mm');
    var timeSet = $('#time-set').val();

    if (timeSet === currentTime) {
      $('#alarm').show();
      $('#alarm-off').show();
    }
    
    $('#alarm-off').submit(function(event) {
      event.preventDefault();
      $('#alarm').hide();
      $('#alarm-off').hide();
    });

  };

});
