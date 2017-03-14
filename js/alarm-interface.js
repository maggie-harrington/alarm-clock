// var Calculator = require('./../js/alarm.js').calculatorModule;

$(document).ready(function(){
  var time = setInterval(function() {
    checkTime();
  }, 1000);

  function checkTime() {
    $('#time').text(moment().format('hh:mm A'));
    var currentTime = moment().format('HH:mm');
    var timeSet = $('#time-set').val();
    $('#alarm-set-form').submit(function(event) {
      event.preventDefault();
    });

    if (timeSet === currentTime) {
      $('#alarm').text('ALAAAAAAAAAARM');
    }
    console.log(timeSet);
  };
});
