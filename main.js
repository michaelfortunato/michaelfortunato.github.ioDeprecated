

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
  duration:1000,
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
function init(){
    charge_animation();
    setTimeout(tiles_open, 1250);
    setTimeout(home_to_section_animation, 3000);

}

function home_to_section_animation(){
  anime.remove('div.quadrant_1');
  anime.remove('div.quadrant_2');
  anime.remove('div.quadrant_3');
  anime.remove('div.quadrant_4');
  var timeline = anime.timeline();
  timeline.add({
    targets: 'div.quadrant_3',
    translateX: 300,
    duration: 700,
    easing: 'easeOutQuad',
    offset: 0,
  }).add({
    targets: 'div.quadrant_4',
    translateX: 300,
    duration: 700,
    easing: 'linear',
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
  return timeline;
}


//}
//function open_animation(){
//    center_cards();
//}
//function center_cards(){
//  for (let i=1; i<5:++i) {
//    getElementsByClassName('quadrant_'+i)
//  }
//}
