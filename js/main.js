function index_init() {
  document.getElementsByClassName
}

function home_to_section_animation(quadrant){
  anime.remove('div.quadrant_1');
  anime.remove('div.quadrant_2');
  anime.remove('div.quadrant_3');
  anime.remove('div.quadrant_4');
  //document.getElementById('JSobject').p.innerHTML = quadrant;
  charge_animation();
  var timeline = anime.timeline();
  timeline.add({
    targets: 'div.quadrant_4',
    translateX: 300,
    duration: 900,
    easing: 'easeOutQuad',
    offset: 0,
  }).add({
    targets: 'div.quadrant_3',
    translateX: 300,
    duration: 900,
    easing: 'linear',
    delay: 50,
    offset: 0,
  }).add({
    targets: 'div.quadrant_1',
    translateX: 300,
    duration: 700,
    easing: 'easeInQuad',
    delay: 10,
    offset: 0,
  }).add({
    targets: 'div.quadrant_2',
    translateX: 300,
    duration: 700,
    easing: 'easeInBack',
    delay: 10,
    offset: 0,
  });

  setTimeout(function() {load_page(quadrant_pages[quadrant])}, 1050);
}
var quadrant_pages = {
  'quadrant_1' : 'bio.html',
  'quadrant_2' : 'test.html',
  'quadrant_3' : 'test.html',
  'quadrant_4' : 'test.html'
};

function load_page(url){
  window.location = url;
  $(":root").load(url);
}





//  ---- bio.html  ----

function bio_init(){
   //40% This is the hieght of page_1
  var i = 0;
  var scale = .4;
  $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop);
        console.log($(window).height());


      if (i == 0) {
        i++;
        document.body.style.overflow = 'hidden';
        document.getElementsByClassName('page_2')[0].id = 'background_final';
        window.scrollBy(0,15);
      }
       else if (scrollTop > $(window).height())
       {
        console.log('done!');
        document.body.style.overflow = 'visible';
      }
      else {
        window.scrollBy(0,15);
        i++;
      }
    }
    );
}
