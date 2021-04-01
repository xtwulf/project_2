
  

# Landing Page Project

  

In this project, several dynamic functions are to be added to the given template

## Doings

  

this was mainly done by implementig javsacript code at the app.js file

  

## menu

  

### added a dynamic menu as an unordered list

a loop goes over the sections and creates an list element for every section in the page

  

### displayed the menu bar horizontally

changed the vertical alignment of the list element by using the `inline-flex` value instead of `block`

## sections

### additional sections
added additional sections (which will generate the relating menu elements)

### Highlight sections and nav elements
highlighted the sections when in vp. therefore the function uses the `getBoundingClientRect` method of the section elements.

### made the sections collapsible
- wrapped an `button` element around the section headers and added an `onclick`event to them
- when clicking, the function sets the display property of the following content div to `none`or ´block´

###  Scroll up button
- if the y-page offset rises over a defined value a button is displayed
- the function scrolls to the top of the page


# credits
thanks to:
- w3schools.com
- stackoverflow.com

