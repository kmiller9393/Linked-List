var websiteTitle = document.querySelector('#website-title');
var websiteURL = document.querySelector('#website-url');
var enterButton = document.querySelector('.enter');
var readButton = document.querySelector('.first-read-button');
var bookmark = document.querySelector('#bookmark1');
var deleteButton = document.querySelector('.float-right');


// websiteTitle.addEventListener('input',);
// websiteURL.addEventListener('input',);
// enterButton.addEventListener('click',);
// deleteButton.addEventListener('click',);
readButton.addEventListener('click', function () {
   // //event delegation?
   // let target = event.target;
   // addReadClass(target);
   bookmark.classList.add('read');
});

