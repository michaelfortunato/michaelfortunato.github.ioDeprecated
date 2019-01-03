
function index_init() {
    setTimeout(show_tiles, 1200);
    document.getElementsByClassName('quadrant_1')[0].onclick = function(){ load_page('quadrant_1')};
    document.getElementsByClassName('quadrant_1')[0].onclick = function(){ load_page('quadrant_1')};
    document.getElementsByClassName('quadrant_1')[0].onclick = function(){ load_page('quadrant_1')};
    document.getElementsByClassName('quadrant_1')[0].onclick = function(){ load_page('quadrant_1')};
}

var quadrant_pages = {
  'quadrant_1' : 'bio.html',
  'quadrant_2' : 'test.html',
  'quadrant_3' : 'test.html',
  'quadrant_4' : 'test.html'
};

function load_page(url){
  quadrant_pages[url]
  window.location =  quadrant_pages[url];
  $(":root").load(  quadrant_pages[url]);
}


function show_tiles(){
  document.getElementsByClassName('hidden')[0].id = 'show';
  document.getElementsByClassName('hidden')[1].id = 'show';
  document.getElementsByClassName('hidden')[2].id = 'show';
  document.getElementsByClassName('hidden')[3].id = 'show';
}




//  ---- bio.html  ----

function bio_init(){
   //40% This is the hieght of page_1
  var i = 0;
  $(window).scroll(function() {scrollDown()});
  document.getElementById('top_button').onclick = function() {
      window.scrollBy(0, -1);
      $(window).off();
      i = 0;
      $setTimeout((window).scroll(function() {scrollDown()}), 0);
  };
  var scrollDown = function() {
        var scrollTop = $(window).scrollTop();
        if (i == 0) {
          console.log('yes')
          document.body.style.overflow = 'hidden';
          document.getElementsByClassName('page_2')[0].id = 'background_final';
          window.scrollBy(0,15);
          i++;
        }
        else if (scrollTop > $(window).height())
        {
          console.log('done!');
          document.getElementsByClassName('nav_button')[0].id = 'nav_button_show';
          document.getElementById('verticle_pink').className = 'l3bio_down';
          document.getElementById('horizontal_pink').className = 'l4bio_top';
          setTimeout(function() {document.body.style.overflow = 'visible';}, 3000);
        }
        else {
          window.scrollBy(0,15);
          i++;
        }
  };
}
