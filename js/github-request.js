// save apiKey in .env file which is addded to .gitignore or list of files that are ignored when you deploy your application to github or heroku
// you should not leave your api key in your source code to prevent theft
var apiKey = require('../.env').apiKey;

exports.Search = function(){
};

exports.Search.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos' + '?access_token=' + apiKey).then(function(response){
    for(i = 0; i < response.length; i++) {
      if (response[i].description === "") {
        $('.showRepos').append("<p>" + "Repository Name: " + response[i].name + "</p>");
      }
      else {
        $('.showRepos').append("<p>" + "Repository Name: " + response[i].name + "</p>" + "<br>" + "<p>" + "Description: " + response[i].description);
      }
    }
  }).fail(function(error){
    $('.showError').text(error.responseJSON.message);
  });
};