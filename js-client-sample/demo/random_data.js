var locations = [
  {
    "city" : "USA/CO/Boulder",
    "state" : "USA/CO",
    "country": "USA"
  },
  {
    "city" : "USA/CO/Denver",
    "state" : "USA/CO",
    "country": "USA"
  },
  {
    "city" : "USA/CO/Lakewood",
    "state" : "USA/CO",
    "country": "USA"
  }
];

var categories = [
  "dining",
  "travel",
  "electronics",
  "books",
  "household",
  "toys",
  "services"
];


var randomLocation = function() {
  locations[r(locations.length)];
};

var randomAgeRange = function() {
  var ageBracketMin = Math.floor((r(35) + r(35)) / 2 / 10) * 10;
  return ageBracketMin + "-" + (ageBracketMin + 10);
};

var r = function(x) { return Math.floor(Math.random() * x); };

var rdist = function(values) {
  var id = Math.floor((r(values.length) + r(values.length)) / 2)
  return values[id];
};

var randomTime = function() { 
  var date = new Date();
  date.setHours(Math.floor(Math.random() * date.getHours()) + 1);
  date.setMinutes(Math.floor(Math.random() * 60) + 1);
  return Math.random() < 0.90 ? date.getTime() : true;
};


