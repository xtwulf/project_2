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
const menu = document.getElementById('navbar__list');
const menu_elements = document.querySelectorAll('section');

let menu_element_pos = [];
let debug_mode = false;
let scrollOptions;
let correction_y = 50;
let navbar = document.getElementById('page__header');
let elements = document.querySelectorAll(".section");

let scroll_button = document.getElementById("scroll_btn");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
* name: addCollapsible
* description:
* - adds the collapsible function on every element with the class name "collapsible"
* - the function itself sets the display style to none/block depending on the current style.
*/
function addCollapsible () {
    let collapsible = document.getElementsByClassName('collapsible');

    for (i=0; i < collapsible.length; i++) {
        collapsible[i].addEventListener('click', function() {
            this.classList.toggle('active');
            var content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = "none";
            }
            else {
                content.style.display = "block";
            }

            let current = document.getElementsByClassName("collapsible");
            let nextSibling = current.nextElementSibling;

            while(nextSibling) {
            
            nextSibling = nextSibling.nextElementSibling;
}
        });

    }
}


function getCoords(i) {
    el = elements[i].getBoundingClientRect().top;
    // window.scrollTo(0,el-pageYOffset+correction_y);
    console.log("element ",i,el);
  }



/**
* name: scrollToElement
* parameter: i 
* dScroll to anchor ID using scrollTO event
*/
function scrollToElement(i) {
    console.log(menu_elements[i].getBoundingClientRect().top);
    y_pos = menu_element_pos[i] - getNavHeight() + (i*correction_y);
    scrollToPos(y_pos);
    console.log("scroll to:", y_pos);
    console.log(menu_elements[i].getBoundingClientRect().top);
    
}

function scrollToPos(y) {
    scrollOptions = {
        left: 0,
        top: y,
        behavior: 'smooth'
      }
    window.scrollTo(scrollOptions);

}

// returns the height of nav-element for the correction factor
function getNavHeight() {
    let el = document.getElementById('navigation');
    let nav_height = el.getBoundingClientRect().height;
    return (nav_height);
}

function isElementInViewport(element) {
    let rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
}


// display button when user scrolls out of defined area
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scroll_button.style.display = "block";
    } else {
      scroll_button.style.display = "none";
    }
  }

function topFunction() {
    scrollToPos(0);

}

function fadeIn(element) {
    setTimeout()
    var opacity = 0;
    var intervalID = setInterval(function() {

        if (opacity < 1) {
            opacity = opacity + 0.05
            element.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 10);

    element.classList.add('page__header');
}

function show_menu() {
    navbar.classList.add('page__header');
}
    

//Slide function 2
function slide() {
    var slideSource = document.getElementById('slideSource');
    slideSource.classList.toggle('fade');
}


// =============================================== //
// Building the menu and doing other useful things //
// =============================================== //


menu.classList.add('navbar__menu');

for (let i=0; i < menu_elements.length; i++) {
    // create LI nodes //
    let node = document.createElement('LI');
    let textnode = document.createTextNode(menu_elements[i].getAttribute('data-nav'));
      
    node.appendChild(textnode);       
    menu.appendChild(node);

    node.classList.add('menu__link');
    node.setAttribute('id', 'nav'+i);

    // getting the section y-ccordinates and write them into array
    // used for the scroll effect  
    menu_element_pos[i] = menu_elements[i].getBoundingClientRect().top + pageYOffset;
    
    //apply on-click event on li-element for call the scroll function      
    node.setAttribute('onclick', 'scrollToElement('+i+')');

    //ad function for debugging the y-coordinates
    let el = document.getElementById('nav'+i);

    el.addEventListener('mouseover', getCoords(i));

}

// ======================================================================= //
// Add class 'active' to section an nav elements when near top of viewport //
// ======================================================================= //

       
function callbackFunc() {
    // console.log("callbackFunc");
    
    for (let i = 0; i < elements.length; i++) {
        let active_nav = "nav"+i;
        if (isElementInViewport(elements[i])) {
            elements[i].classList.add("your-active-class");
            document.getElementById(active_nav).classList.add('nav_element_active');
        }
        
        // Else-statement for clearing the .visible if element leaves viewport
        else {
            document.getElementById('nav' + i).classList.remove('visible');
            elements[i].classList.remove("your-active-class");
            document.getElementById(active_nav).classList.remove('nav_element_active');            
        }

    if (debug_mode) {
        let rect = elements[i].getBoundingClientRect();
        if (isElementInViewport(elements[i])) {
            console.log(elements[i]);
        }
    }
}
}
    
// Adding Event Listeners
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
window.onscroll = function() {scrollFunction()};
window.addEventListener('load', addCollapsible);

