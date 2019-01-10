
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
   $(document).ready(function(){
    $('.sidenav').sidenav();
  });
  var i = 0;
  scroll_up = false;
  $(window).scroll(function() {scrollDown()});
  document.getElementsByClassName('top_button')[0].onclick = function() {
      document.getElementsByClassName('top_button')[0].classList.toggle('rotate');
      //document.getElementsByClassName('top_button')[0].classList.remove('rotate');
      if (!scroll_up) {
        scroll_up = true;
        i = 0;
        window.scrollBy(0,-15)
    }
      else if(scroll_up){
        scroll_up = false;
        i = 0;
        window.scrollBy(0,15)
      }
};
  var scrollDown = function() {
    var scrollTop = $(window).scrollTop();
    if (!scroll_up){
        if (i == 0) {
          console.log('yes')
          document.body.style.overflow = 'hidden';
          document.body.id = 'background_final';
          window.scrollBy(0,15);
          i++;
        }
        else if (scrollTop > $(window).height())
        {
          console.log('done!');
          document.getElementsByClassName('nav_button')[0].id = 'button_show';
          document.getElementsByClassName('top_button')[0].id = 'button_show';
          document.getElementById('verticle_pink').className = 'l3bio_down';
          document.getElementById('horizontal_pink').className = 'l4bio_top';
          setTimeout(function() {document.body.style.overflow = 'visible';}, 2500);
        }
        else {
          window.scrollBy(0,15);
          i++;
        }
    }
    else {
      if (scrollTop == 0){
          document.getElementsByClassName('nav_button')[0].removeAttribute('id');
          document.getElementById('verticle_pink').removeAttribute('class');
          document.getElementById('horizontal_pink').removeAttribute('class');
          //document.getElementsByClassName('page_2')[0].removeAttribute('id');
      }
      else {
        window.scrollBy(0,-15);
      }
    }
  };
}
