var requestUrl = 'https://api.github.com/orgs/nodejs/oreps?per_page=5';
//let requestUrl = "http://www.cisco.com"
var responseText = document.getElementById('response-text');

function getApi(request) {
  fetch(requestUrl)
    .then(function (response) {
      // Check the console first to see the response.status
      //console.log(response.status);
      if (response.status !== 200) {
        responseText.innerHTML = response.status
        //console.log(response)
      }
      // Then write the conditional based on that response.status value
      // Make sure to display the response on the page
    })
    .then(function (data) {
      console.log(data);
    });
}

getApi(requestUrl);
