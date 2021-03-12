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

let debug_mode = false;




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function scrollTo(pos) 
{
    console.log("Scroll to element:" + pos);
    window.scrollTo(0,pos);

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

    //apply on-click event on li-element for call the scroll function
    let rect = menu_elements[i].getBoundingClientRect();
    var y_pos = rect.top;
      
    node.setAttribute('onclick', `scrollTo(${y_pos})`);


    
    menu.appendChild(node);
    
    menu_element_ids.push('section' + i);

 
    



}


// ======================================================= //
// Add class 'active' to section when near top of viewport //
// ======================================================= //


// Log coordinates in Frontend
if (debug_mode) {
    document.getElementById("#debug_area").style.display = "inline-flex";
}

else {document.getElementById("#debug_area").style.display = "none";}

function showCoordinates (element) {
    var rect = element.getBoundingClientRect();
    var y_id = document.getElementById("#y1");
    y_id.innerHTML = rect.top;
}

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
     showCoordinates(elements[i]);
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
