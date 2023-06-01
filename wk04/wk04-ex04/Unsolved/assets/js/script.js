// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');

// Change style by accessing style object's properties
//console.log(articlesDiv.childNodes)
//articlesDiv.children[0].style.fontSize = '50px'; // Change high level, would add
articlesDiv.children[0].children[1].style.fontSize = '50px';
//headerDiv.style.color = 'white';
headerDiv.children[0].style.color = 'white';
// document.querySelector("#articles > article > h3")