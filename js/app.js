/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

/* getting all section elements for the menu */
const menu_elements = document.querySelectorAll('section');






/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


const menu = document.getElementById('navbar__list');

// Adding the style class to the ul Element
menu.classList.add('navbar__menu');

// create LI nodes

for (let i=0; i < menu_elements.length; i++) {
    var node = document.createElement('LI');
    var textnode = document.createTextNode(menu_elements[i].getAttribute('data-nav'));
    node.appendChild(textnode);
    node.classList.add('menu__link');

    menu.appendChild(node);

}

console.log(menu);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


