/* Some programming languages (like Python) include a "title" method to return a string with Every Word Capitalized (e.g. 'title case'.title() returns 'Title Case').  

JavaScript has no .title method, but that won't stop us!  Use the string methods you know to print 'Title Case' from 'title case'. */

let notTitle = 'title case';
let titleT = notTitle.replace('t', 'T');
console.log(titleT);
let titleC = notTitle.replace('c','C');
console.log(titleC);
let titleNew =(titleT +titleC);

console.log(titleNew)

titleNew.slice(0,4) + titleNew.slice(14,20)

