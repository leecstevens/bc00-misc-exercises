// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the 
// background color for each box white.

$('#root').children('ul').children('li').css('background-color', 'white')

// TODO: Starting from `rootEl`, create the jQuery statement 
// that will add "O" to block the "X" from winning
//       <li class="item-a2">O</li>
//$('#root').children('ul').children().eq(6).text('O')

rootEl.children('ul').eq(2).children('li').eq(0).text('O');

