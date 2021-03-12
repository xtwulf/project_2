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

var menu_element_ids = [];




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


// ======================================== //
// Adding the style class to the ul Element //
// ======================================== //

const menu = document.getElementById('navbar__list');
menu.classList.add('navbar__menu');

// =============== //
// create LI nodes //
// =============== //

for (let i=0; i < menu_elements.length; i++) {
    var node = document.createElement('LI');
    var link = document.createElement('A');
    var textnode = document.createTextNode(menu_elements[i].getAttribute('data-nav'));
    console.log(textnode);
    node.appendChild(link);
    link.appendChild(textnode);
    
    node.classList.add('menu__link');
    node.setAttribute('id', 'nav'+i);
    link.setAttribute('href', '#section' + (i+1));


    menu.appendChild(node);
    
    menu_element_ids.push('section' + i);
}









// ======================================================= //
// Add class 'active' to section when near top of viewport //
// ======================================================= //

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
     rect.top >= 0 &&
     rect.left >= 0 &&
     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
   }
   
   var elements = document.querySelectorAll(".section");
    
   function callbackFunc() {
    for (var i = 0; i < elements.length; i++) {
     if (isElementInViewport(elements[i])) {
         elements[i].classList.add("visible");
        document.getElementById('nav'+i).classList.add('visible')
       }
   
    // Else-statement for clearing the .visible if element leaves viewport
     else {
         document.getElementById('nav' + i).classList.remove('visible');
         elements[i].classList.remove("visible");
     }
    }
   }
    
   window.addEventListener("load", callbackFunc);
   window.addEventListener("scroll", callbackFunc);


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


