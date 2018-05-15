var websiteTitle = $('#website-title');
var websiteURL = $('#website-url');
var enterButton = $('.enter');
var rightSection = $('.right-side');
var clearButton = $('.clear-button')
var readBookmarks = 0;
var unreadBookmarks = 0;

enterButton.on('click', function(e) {
  e.preventDefault();
  checkInput();
});

websiteTitle.keyup(disableSubmit);
websiteURL.keyup(disableSubmit);

rightSection.on('click', '.float-left', function() {
  $(this).parent('article').toggleClass('read')
  $('.num-read').text(readBookmarks++);
  $('.num-unread').text(unreadBookmarks--);
});

rightSection.on('click', '.float-right', function() {
 if ($(this).parent('article').hasClass('read')) {
    $('.num-read').text(readBookmarks--);
  } else {
    $('.num-unread').text(unreadBookmarks--);
  }
  $(this).parent('article').remove();
});

clearButton.on('click', function() {
  readBookmarks = 0;
  unreadBookmarks = 0;
  $('.right-side').empty();
});

function checkInput() {
  if (websiteURL.val().length < 1 || websiteTitle.val().length < 1){
    alert('ERROR: PLEASE MAKE SURE BOTH INPUTS ARE FILLED OUT');
  } else {
    addBookmark();
  }
}

function addBookmark() {
  $('.right-side').append(fillBookmark());
  $('.num-unread').text(unreadBookmarks++);
  clearInput();
}

function fillBookmark() {
  var title = websiteTitle.val();
  var url = websiteURL.val();
  $('.right-side').append(
      '<article id="bookmark"><h2 class="website-title">' + title + '</h2><p class="website-url"><a href="' + url + '" target=”_blank”>' + url + '</a></p><button class="float-left">Read</button><button class="float-right">Delete</button></article>');
}

function clearInput() {
  websiteTitle.val('');
  websiteURL.val('');
}

function disableSubmit() {
 if (websiteURL.val().length < 1 || websiteTitle.val().length < 1) {
   enterButton.attr('disabled', 'disabled');
 } else {
   enterButton.removeAttr('disabled', 'disabled');
 }
}






