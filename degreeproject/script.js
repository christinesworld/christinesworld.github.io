$(function() {

//STORING THE INDEX ENTRIES
class entry {
  constructor(number, name, desc){
    this.number = number;
    this.name = name;
    this.desc = desc;
  }
}

const entries = []; //stores all the index entries

const entryName = [ //array of ALL NAMES
  "Hatsune Miku",
  "Crypton Future Media",
  "Vocaloid",
];

const entryDesc = [ //array of ALL DESCRIPTIONS
  "The most popular Vocaloid character. She is marketed as a 16-year-old virtual idol and is often known for her iconic long blue twintails. She is also known by her code-name “CV01.”",
  "Crypton Future Media, INC. is a music technology company based in Sapporo (Japan), and the official licensor of Hatsune Miku.",
  "Vocaloid is a singing voice synthesizer software product developed by Yamaha Coporation and released in 2004. Each Vocaloid voice bank is represented by an avatar, also referred to as a Vocaloid.",
];

//assigns names + descs into 'entries' array
for (let i = 0; i < entryName.length; i++){
  entries[i] = new entry(i+1, entryName[i], entryDesc[i]);
}
//end


//GETTING INDEX ENTRIES ONTO THE SIDEBAR FROM THE MAIN TEXT
$('.term').click(function(){
  var classList = $(this).attr('class').split(/\s+/);
  var classNum = classList[1];
  var entryPos = classList[1] - 1;
  console.log(classList);

  $('.sidebarLeft').append(
    '<div class="sidebarEntry">'+
    '<div class="entryNum">'+entries[entryPos].number+'</div>'+
    '<div class="entryName">'+entries[entryPos].name+'</div>'+
    '<div class="entryX">'+'×'+'</div>'+
    '<div class="entryDesc">'+entries[entryPos].desc+'</div>'+
    '</div>'
  );
});
//end


//ENTRY DESC EXPAND + DELETE FUNCTIONS
$('.sidebarLeft').on('click', '.sidebarEntry', function(){
  $(this).find('.entryDesc').slideToggle();
  console.log('click');
});

$('.sidebarLeft').on('click', '.sidebarEntry .entryX', function(){
  $(this).parent().remove();
});
//how the fuck did this work holy shit i feel like a god among men
//end




//////////////////////////////// LANDING NAV ////////////////////////////////

// .position().top --> distance of element from top of page (static num)
// .scrollTop() --> pos of top of element from viewport (increases as u scroll)


// $('.landingContent').scrollTop() --> essentially the doc scrollY within the landing, which is an overflow parent element that is itself fixed on the page

//NAV PART APPEARING
// $('.landingNav').addClass('hideDisplay');
function navAppear (){
  var vh = window.innerHeight;

  if ( ( $('.landingContent').scrollTop() ) > ( $('.landingText').height() + 0.4*vh ) ){
    $('.landingNav').removeClass('hideDisplay');
  } else {
    $('.landingNav').addClass('hideDisplay');
  }
}
setInterval(navAppear, 1);


//BODY PART HOVER APPEARING
// $('.hoverZone').addClass('hideOpacity');
// $('.hoverZone').hover(function(){
//   console.log('hovering');
//   $(this).toggleClass('unhideOpacity');
// });


// NAV LABEL HOVER APPEARING (SORRY THIS IS REALLY FUCKED UP)

const navLabels = ['.head', '.body', '.armLeft', '.armRight', '.footer'];

for (let i = 0; i < navLabels.length; i++){

  $(navLabels[i]).hover(function(){
    var hama = '.hoverZone' + navLabels[i];
    var hama2 = '.nav' + navLabels[i];

    $(hama).toggleClass('unhideOpacity');
    $(hama2).toggleClass('unhideOpacity');
    $(hama2).toggleClass('highlightedText');
  });

};

// $('.head').hover(function(){
//   $('.hoverZone.head').toggleClass('unhideOpacity');
//   $('.nav.head').toggleClass('highlightedText');
// });
//
// $('.body').hover(function(){
//   $('.hoverZone.body').toggleClass('unhideOpacity');
//   $('.nav.body').toggleClass('highlightedText');
// });
//
// $('.armLeft').hover(function(){
//   $('.hoverZone.armLeft').toggleClass('unhideOpacity');
//   $('.nav.armLeft').toggleClass('highlightedText');
// });
//
// $('.armRight').hover(function(){
//   $('.hoverZone.armRight').toggleClass('unhideOpacity');
//   $('.nav.armRight').toggleClass('highlightedText');
// });
//
// $('.footer').hover(function(){
//   $('.hoverZone.footer').toggleClass('unhideOpacity');
//   $('.nav.footer').toggleClass('highlightedText');
// });


// CENTERING HOVERS AROUND THE VIDEO
function centerNav () {
  console.log('running');
  $('.navBoxes').css({left:
    ($('.imgBg > .nav').position().left )
    + "px"});
};
centerNav(); //run once on intial page load
$(window).resize(centerNav); //run when window resizes
// setInterval (centerNav, 1);



// CLICK NAV TO SHOW PAGES
var counter = 0;
$('.armLeft').click(function(){
  if (counter == 0) {
    counter ++;

    $('.landing').addClass('hideDisplay');
    window.scrollTo(0, 0);

    var vid = $('.imgBg > .armLeft');
    vid [0].play();
    vid [0].currentTime = 0;


    setTimeout( // bc the video reset glitches and u see the last frame for a sec
      function () {
        $('.imgBg > .nav').addClass('hideDisplay');
        $('.imgBg > .armLeft').removeClass('hideDisplay');
      }, 0100
    );

    setTimeout(
      function() {
        $('.pages').removeClass('hideDisplay');
        $('.page.armLeft').removeClass('hideDisplay');
      }, 2200
    );
  };
});


//////////////////////////////// BUTTONS ////////////////////////////////


$('.mute').click(function(){
  if( $('video').prop('muted') ) {
    $("video").prop('muted', false);
    $('.mute').text('mute all');
  } else {
    $("video").prop('muted', true);
    $('.mute').text('unmute all');
  }
});

$('.home').click(function(){
  counter = 0;
  location.reload(true);
})

var playCounter = 0;
$('.play').click(function(){
  if (playCounter == 0) {
    $('.play').text('⏸');
    $('.entryDesc').slideUp();
    playCounter++;
  }
  else {
    $('.play').text('⏵');
    playCounter = 0;
  }
})

//////////////////////////////// PAGES ////////////////////////////////

function scrollbarPos (){
  var scrollBodyY = $('.page').scrollTop();
  // console.log("scrollBodyY: " + scrollBodyY);

  //scroll bar
  var bodyHeight = $('.page') [0].scrollHeight;
  var imgScrollPos = scrollBodyY * window.innerHeight / bodyHeight;
  var scrollPercent = scrollBodyY / (bodyHeight - window.innerHeight);

  $('.scroll').css({top: 15 + (scrollBodyY * window.innerHeight / (bodyHeight - window.innerHeight)) - (scrollPercent * 80) + 'px'});
};

setInterval (scrollbarPos, 1);


});
