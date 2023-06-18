var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (i=0; i < data.length; i++) {
        let user = data[i]
        let user_name = document.createElement("h3")
        let user_url = document.createElement("p")
        user_name.textContent = user.login
        user_url.textContent = user.url
        userContainer.append(user_name)
        userContainer.append(user_url)
      }
    });
}
fetchButton.addEventListener('click', getApi);
