$(function() {

function help() {

  //scroll bar
  var bodyHeight = $(document).height();
  var imgScrollPos = scrollY * window.innerHeight / bodyHeight;
  var scrollPercent = scrollY / (bodyHeight - window.innerHeight);

  $('.scroll').css({top: 40 + (scrollY * window.innerHeight / (bodyHeight - window.innerHeight)) - (scrollPercent * 80) + 'px'});


  //img appearing
  $('.imgContainer').each(function(){

    //img positioning
    $(this).children('img, video').css({top: (window.innerHeight / 2 -  $(this).children('img, video').height() / 2) + "px"});

    $(this).children('img, video').css({left: (window.innerWidth / 2 -  $(this).children('img, video').width() / 2) + "px"});

    //img appearing
    if (
      ( $(this).offset().top - 200) > $(window).scrollTop()
      && $(window).scrollTop() > ( $(this).offset().top - window.innerHeight - 100 )
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

  //scroll nav text
  $('h2').each(function(){
    const thisH2 = $(this);
    const nextH2 = $(this).nextUntil('h2').last().next();
    const thisH2Text = $(this).text();
    const nextH2Text = $(this).nextUntil('h2').last().next().text();

    console.log(scrollY > (thisH2.offset().top - window.innerHeight)
      &&  scrollY < (nextH2.offset().top - window.innerHeight));
    //console.log('---BREAK---');

    if ( scrollY > (thisH2.offset().top - window.innerHeight/2)
      &&  scrollY < (nextH2.offset().top - window.innerHeight/2)
      ){
      console.log($('.scrollText').text(thisH2));
      $('.scrollText').text(thisH2Text);
      $('.scrollText').css({top: "-" + ($('.scrollText').height() / 2) + "px"});
    } else {
      //$('.scrollText').text(nextH2Text);
      //video [0].currentTime = 0;
    }
    //console.log($('.scrollText').height());
  });

};

help();
setInterval(help, 1);



//video control buttons stuff
$('.mute').click(function(){
  if( $('video').prop('muted') ) {
    $("video").prop('muted', false);
    console.log('click');
    $('.mute').text('mute all');
  } else {
    $("video").prop('muted', true);
    $('.mute').text('unmute all');
  }
});

$('.restart').click(function(){
  var video = $(this).parent().siblings('video');
  console.log('restartclick');

  video [0].currentTime = 0;
});



//dropdown menu
$('.glossaryDef').hide();
$('.glossaryTerm, .glossaryTermIcon').click(function(){
  $(this).next('.glossaryDef').slideToggle('medium');
  $(this).next('.glossaryDef').parent().toggleClass('glossaryDefPad');
});









});

//store each h2 in a variable until nxt h2
// when scrollY meets h2, store that h2 into string. scrollText = string

/*
//scroll text changing
$('h2').each(function(){
  $('.scrollText').text($(this).text());
});
*/


/*
$('h2').each(function(){
  const thisH2 = $(this);
  const nextH2 = $(this).nextUntil('h2').last().next();
  const thisH2Text = $(this).text();
  const nextH2Text = $(this).nextUntil('h2').last().next().text();

  console.log(scrollY > (thisH2.offset().top - window.innerHeight)
    &&  scrollY < (nextH2.offset().top - window.innerHeight));

  if ( scrollY > (thisH2.offset().top - window.innerHeight/2)
    &&  scrollY < (nextH2.offset().top - window.innerHeight/2)
    ){
    console.log($('.scrollText').text(thisH2));
    $('.scrollText').text(thisH2Text);
  } else {
    //$('.scrollText').text(nextH2Text);
    //video [0].currentTime = 0;
  }
});
*/




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
