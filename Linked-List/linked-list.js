//declared variables
var websiteTitle = $('#website-title');
var websiteURL = $('#website-url');
var enterButton = $('.enter');
var readButton = $('.float-left');
var deleteButton = $('.float-right');

//functions
websiteTitle.on('input', function() {
});

websiteURL.on('input', function() {
});

function addBookmark() {
  $('.right-side').append(fillBookmark());
}

function fillBookmark() {
  this.title = websiteTitle.val();
  this.url = websiteURL.val();
  $('.right-side').append(
      '<article id="bookmark"><h2 class="website-title">' + this.title + '</h2> <p class="website-url"><a href="#" target=”_blank”>' + this.url + '</a></p><button class="float-left">Read</button><button class="float-right">Delete</button></article>');
}

//enterButton.on('click', function(e) {
 // e.preventDefault();
  //bookmark1Title.text(websiteTitle.val());
  //bookmark1Url.text(websiteURL.val());
//});

enterButton.on('click', function(e) {
  e.preventDefault();
  checkInput();
});

deleteButton.on('click', function() {
  //$(this).parent('article').toggle('');
  console.log('working!');
});

readButton.on('click', function () {
  $(this).parent('article').toggleClass('read');
});

function checkInput() {
  if (websiteURL.val().length < 1 || websiteTitle.val().length < 1){
    alert('ERROR: PLEASE MAKE SURE BOTH INPUTS ARE FILLED OUT');
  } else {
    addBookmark();
  }
}








