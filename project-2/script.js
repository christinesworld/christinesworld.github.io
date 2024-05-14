$(function() {

  var solved = false;

  $('.captcha').click(function() {
    $(this).toggleClass("clicked");
  });

  $('.bottom').click(function() {
    $('.content').css('display', 'none');
    $('.checkmark').css('display', 'inline-block');
    solved = true;
  });

  $('button').click(function() {
    if (solved == false) {
      $('.content').css('display', 'block');
    }
    else {
      window.location.href='html/solved.html'
    }
  });
});
