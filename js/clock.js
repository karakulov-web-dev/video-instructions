setInterval(displayClock, 1000);

Date.prototype.getFullDay = function() {
  return this.getDate() < 10 ? "0" + this.getDate() : this.getDate();
};
Date.prototype.getFullMonth = function() {
  var m = this.getMonth() + 1;
  return m < 10 ? "0" + m : m;
};

function zeroPad(num) {
  return (num < 10 ? "0" : "") + num;
}

function displayClock() {
  var dateTime = new Date();
  var hours = zeroPad(dateTime.getHours());
  var minutes = zeroPad(dateTime.getMinutes());
  var textTime;
  textTime = hours + ":" + minutes;
  document.getElementById("textTime").innerHTML = textTime;
  document.getElementById("textTime_p").innerHTML = textTime;
}
