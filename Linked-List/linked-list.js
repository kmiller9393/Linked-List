var websiteTitle = $('#website-title');
var websiteURL = $('#website-url');
var enterButton = $('.enter');
var rightSection = $('.right-side');
var clearButton = $('.clear-button')
var readBookmarks = 0;
var unreadBookmarks = 0;

enterButton.on('click', function(event) {
  event.preventDefault();
  checkInput();
});

websiteURL.on('input', function() {
  if (websiteURL.val().length < 1) {
    enterButton.attr('disabled', 'disabled');
  } else {
    enterButton.removeAttr('disabled', 'disabled');
  }
});

rightSection.on('click', '.float-left', function() {
  if ($(this).parent('article').hasClass('read')) {
     readBookmarks--;
     $('#num-read').text('Read: ' + readBookmarks);
     unreadBookmarks++;
    $('#num-unread').text('Unread: ' + unreadBookmarks);
  } else {
    readBookmarks++;
    $('#num-read').text('Read: ' + readBookmarks);
    unreadBookmarks--;
    $('#num-unread').text('Unread: ' + unreadBookmarks);
  }
  $(this).parent('article').toggleClass('read')
});

rightSection.on('click', '.float-right', function() {
  if ($(this).parent('article').hasClass('read')) {
    readBookmarks--;
    $('#num-read').text('Read: ' + readBookmarks);
  } else if (unreadBookmarks === 1) {
    clearButton.attr('disabled', 'disabled');
    unreadBookmarks--;
    $('#num-unread').text('Unread: ' + unreadBookmarks);
  } else {
    unreadBookmarks--;
    $('#num-unread').text('Unread: ' + unreadBookmarks);
  }
  $(this).parent('article').remove();
});

clearButton.on('click', function() {
  readBookmarks = 0;
  $('#num-read').text('Read: ' + readBookmarks);
  unreadBookmarks = 0;
  $('#num-unread').text('Unread: ' + readBookmarks);
  $('.right-side').empty();
  clearButton.attr('disabled', 'disabled');
});

function checkInput() {
  if (websiteURL.val().length < 1 || websiteTitle.val().length < 1){
    alert('ERROR: PLEASE MAKE SURE BOTH INPUTS ARE FILLED OUT');
  } else {
    addBookmark();
  }
};

function addBookmark() {
  $('.right-side').append(fillBookmark());
  enterButton.attr('disabled', 'disabled');
  clearInput();
};

function fillBookmark() {
  var title = websiteTitle.val();
  var url = websiteURL.val();
  clearButton.removeAttr('disabled', 'disabled');
  unreadBookmarks++;
  $('#num-unread').text('Unread: ' + unreadBookmarks);
  $('.right-side').append(
      '<article id="bookmark"><h2 class="website-title">' + 
      title + '</h2><p class="website-url"><a href="' + 
      url + '" target=”_blank”>' + url + 
      '</a></p><button aria-label="Mark bookmark as read" class="float-left">Read</button><button aria-label="Delete bookmark" class="float-right">Delete</button></article>');
};

function clearInput() {
  websiteTitle.val('');
  websiteURL.val('');
};