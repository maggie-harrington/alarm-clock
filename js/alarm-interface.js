// var Calculator = require('./../js/alarm.js').calculatorModule;

$(document).ready(function(){
  var currentTime = $('#time').text(moment());
  $('#alarm-set-form').submit(function(event) {
    event.preventDefault();
    var alarmSet = $('#alarm-set').val();
    console.log(alarmSet);
    if (alarmSet === currentTime) {
      console.log('alarm');
    }

  });
});
