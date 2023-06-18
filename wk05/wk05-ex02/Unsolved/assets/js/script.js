// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/

let root_element = $("#root");

// TODO: Create a `<p>` element that will store an author's name and 
// assign that created element to a new variable

let author_element = $("<p>");

// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"

author_element.text("~ Carol Dweck");

// TODO: Add the class `plain` to the author element

author_element.addClass("plain");

// TODO: Create a new `<h1>` element that will store an author's quote and 
//assign it to new variable

let quote_tag = $("<h1>");

// TODO: Add the following quote text to the quote element, 
// "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."

quote_tag.text("Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.")

// TODO: Apply the class `fancy` to the quote element

quote_tag.attr("class", "fancy")

// TODO: Append the author element to the quote element

quote_tag.append(author_element)

// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
root_element.append(quote_tag)