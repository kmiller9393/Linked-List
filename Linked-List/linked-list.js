var websiteTitle = $('#website-title');
var websiteURL = $('#website-url');
var enterButton = $('.enter');
var readButton = $('.float-left');
var deleteButton = $('.float-right');


// websiteTitle.on('input',);
// websiteURL.on('input',);
// enterButton.on('click',);
// deleteButton.on('click',);

readButton.on('click', function () {
   $(this).parent('article').toggleClass('read');
});

