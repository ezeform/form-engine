
var APP_URL = 'http://localhost:3001';
var API_URL = APP_URL;

console.log('APP_URL', APP_URL);
// Parse query string
var query = {};
location.search.substr(1).split("&").forEach(function(item) {
  query[item.split("=")[0]] = item.split("=")[1] && decodeURIComponent(item.split("=")[1]);
});

var appUrl = location.origin || APP_URL;
var apiUrl = location.origin || API_URL;
console.log('apiUrl', apiUrl);

angular.module('formioApp').constant('AppConfig', {
  appUrl: appUrl,
  apiUrl: apiUrl,
  forms: {
    userForm: appUrl + '/user',
    userLoginForm: appUrl + '/user/login'
  }
});
