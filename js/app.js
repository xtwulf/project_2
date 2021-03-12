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
var menu_element_pos = [];
let debug_mode = false;

let scrollOptions;

let correction_y = 200;




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function getCoords(i) {
    console.log("section"+i+" ",elements[i].getBoundingClientRect().top);
    el = elements[i].getBoundingClientRect().top;
    // window.scrollTo(0,0);

    window.scrollTo(0,el-pageYOffset+correction_y);
  
    // console.log((box.top + pageYOffset) + " ", box.left + pageXOffset);
  }


function scrollToElement(i) {
    y_pos = menu_element_pos[i] - getNavHeight();
    scrollOptions = {
        left: 0,
        top: y_pos,
        behavior: 'smooth'
      }
    window.scrollTo(scrollOptions);
    console.log("scroll to y:",y_pos);   
    console.log(menu_element_pos);
    console.log("Nav-Height: ", getNavHeight());
}

function getNavHeight() {
    var el = document.getElementById('navigation');
    var nav_height = el.getBoundingClientRect().height;

    return (nav_height);

}

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
    var textnode = document.createTextNode(menu_elements[i].getAttribute('data-nav'));
        
    node.appendChild(textnode);
    node.classList.add('menu__link');
    node.setAttribute('id', 'nav'+i);

    // getting the section y-ccordinates and write them into array  
    menu_element_pos[i] = menu_elements[i].getBoundingClientRect().top + pageYOffset;
    
    //apply on-click event on li-element for call the scroll function      
    node.setAttribute('onclick', 'scrollToElement('+i+')');


    
    menu.appendChild(node);
    
    menu_element_ids.push('section' + i);
}


// ======================================================= //
// Add class 'active' to section when near top of viewport //
// ======================================================= //



// Check if element is in viewport
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

    if (debug_mode) {
        var rect = elements[i].getBoundingClientRect();
        console.log(`Section ${i}:`, rect.top);
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
