$(function() {

function help() {
  var bodyHeight = $(document).height();
  var imgScrollPos = scrollY * window.innerHeight / bodyHeight;
  var scrollPercent = scrollY / (bodyHeight - window.innerHeight);

  $('.scroll').css({top: 40 + (scrollY * window.innerHeight / (bodyHeight - window.innerHeight)) - (scrollPercent * 80) + 'px'});


  /*
  function elementView(elem) {
    return (
      ( $(elem).offset().top + 100 ) > $(window).scrollTop()
      && $(window).scrollTop() > ( $(elem).offset().top - window.innerHeight )
    );
  };
  console.log(
    ($('.imgContainer').offset().top + 100) + " > " + $(window).scrollTop() + " > " + ( $('.imgContainer').offset().top - window.innerHeight )
  );
  */



  //img
  $('.imgContainer').each(function(){

    $(this).children('img, video').css({top: (window.innerHeight / 2 -  $(this).children('img, video').height() / 2) + "px"});

    $(this).children('img, video').css({left: (window.innerWidth / 2 -  $(this).children('img, video').width() / 2) + "px"});

    if (
      ( $(this).offset().top - 200) > $(window).scrollTop()
      && $(window).scrollTop() > ( $(this).offset().top - window.innerHeight - 200 )
      ){

      //console.log('based');
      $(this).children('img, .imgCaption, video').css({display: 'inline-block'});

    } else {
      $(this).children('img, .imgCaption, video').css({display: 'none'});
    }
  });

  //static sidebar width
  $('.sidebar.left').width($('.nav.left').width() + "px");

  //$('.sidebar.left').css({'height': $('.nav.left').height() });
  $('.nav.right').css({'min-width': $('.sidebar.right div').width() });


  //video stuff
  var video = $('video');
  $('video').trigger('pause');

  $('video').each(function(){
    if (
      ( $(this).offset().top) > $(window).scrollTop()
      && $(window).scrollTop() > ( $(this).offset().top - window.innerHeight )
      ){
      console.log("based");
      $(this).trigger('play');
    } else {
      $(this).trigger('pause');
      //video [0].currentTime = 0;
    }
  });

  //console.log(( $('video').offset().top) + ">" + $(window).scrollTop() + ">" + ( $('video').offset().top - window.innerHeight ))

};

help();
setInterval(help, 1);



//video stuff

$('.mute').click(function(){
  if( $('video').prop('muted') ) {
    $("video").prop('muted', false);
    console.log('click');
  } else {
    $("video").prop('muted', true);
  }
});


$('.restart').click(function(){
  var video = $(this).parent().siblings('video');
  console.log('restartclick');

  video [0].currentTime = 0;
});


$('.glossaryDef').hide();
$('.glossaryTerm, .glossaryTermIcon').click(function(){
  $(this).next('.glossaryDef').slideToggle('medium');
  $(this).next('.glossaryDef').parent().toggleClass('glossaryDefPad');
});

});


/*
var hamaEvent = jQuery.Event('hamaEvent');
*/

/*
//custom event
$('.imgContainer').on('appearEvent', function(event) {
  $(this).next('.imgAppear').css({display: 'inline-block'});
});


var inView =
  ( $('.imgContainer').offset().top + 1000 ) > $(window).scrollTop()
  && $(window).scrollTop() > ( $('.imgContainer').offset().top - window.innerHeight )
;


if (inView) {
  console.log('based');
  $('.imgContainer').trigger('appearEvent');
}
*/

/*
$(window).scroll(function(){

  if (elementInView($('.imgContainer'))){
    console.log('based');
    $(this).next('.imgAppear').css({display: 'inline-block'});
  } else {
    $(this).next('.imgAppear').css({display: 'none'});
  }

});
*/
