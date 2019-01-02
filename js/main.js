function tiles_open() {
//  alert("Page is loaded");
    //document.getElementsByClassName('quadrant_1')[0].id = 'init_pos';
    document.getElementsByClassName('tiles')[0].style.display = 'initial';
    anime({
      targets: 'div.quadrant_1',

      translateY: [
        '50%','0%'
      ],
      translateX: [
        '50%','0%'
      ],
      scale: [.05,1],
      duration: 2000,
      elasticity: 0,
    });
    anime({
      targets: 'div.quadrant_2',

      translateY: [
        '50%','0%'
      ],
      translateX: [
        '-50%','0%'
      ],
      scale: [.05,1],
      duration: 2000,
      elasticity: 0,
    });
    anime({
      targets: 'div.quadrant_3',

      translateY: [
        '-50%','0%'
      ],
      translateX: [
        '50%','0%'
      ],
      scale: [.05,1],
      duration: 2000,
      elasticity: 0,
    });
    anime({
      targets: 'div.quadrant_4',

      translateY: [
        '-50%','0%'
      ],
      translateX: [
        '-50%','0%'
      ],
      scale: [.05,1],
      duration: 2000,
      elasticity: 0,

    });
}

function charge_animation() {
  var obj = { loading: '0%' };
  var timeline = anime.timeline();
  timeline.add({
  targets: obj,
  loading: '100%',
  round: 1,
  duration:800,
  easing: 'linear',
  update: function() {
    var el = document.querySelector('#JSobject pre');
    el.innerHTML = JSON.stringify(obj);
  }
  }).add({
    targets: '#JSobject',
    opacity: [1,0],
  });

  return timeline;
}

function index_init(){
    charge_animation();
    setTimeout(tiles_open, 1050); //charge_animation duration + 250ms
    document.getElementsByClassName('quadrant_1')[0].onclick = function(){ home_to_section_animation('quadrant_1')};
    document.getElementsByClassName('quadrant_2')[0].onclick = function(){home_to_section_animation('quadrant_2')};
    document.getElementsByClassName('quadrant_3')[0].onclick = function(){home_to_section_animation('quadrant_3')};
    document.getElementsByClassName('quadrant_4')[0].onclick = function(){home_to_section_animation('quadrant_4')};
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
  i = 0;
  $(window).scroll(function() {
        var scrollTop= $(window).scrollTop();
        console.log(scrollTop);
        console.log($(window).height())

      if (i == 0) {
        i++;
        document.body.style.overflow = 'hidden';
        document.getElementsByClassName('page_2')[0].id = 'background_final';
        window.scrollBy(0,15);
      }
       else if (scrollTop === $(window).height()){
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