

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
      duration: 3000,

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
      duration: 3000,

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
      duration: 3000,

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
      duration: 3000,

    });
}

function name_animation() {
  //http://tobiasahlin.com/moving-letters/#8
  anime.timeline({loop: false})
.add({
      targets: 'div.name_container',
      translateY: [
        '50%','50%'
      ],
      translateX: {
          value: ['0%','50%'],

      },
      duration: 2000,
      rotate:{ value: [8,0],
        delay: 1500,
        duration: 1000,
      },
  }).add({
      targets: 'div.F',
      translateY: [
        '100%','50%'
      ],
      translateX: [
        '100%','50%'
      ],
  });
}


var obj = { Loading: '0%' };

var JSobject = anime({
  targets: obj,
  Loading: '100%',
  round: 1,
  easing: 'linear',
  update: function() {
    var el = document.querySelector('#JSobject pre');
    el.innerHTML = JSON.stringify(obj);
  },
  duration: 1000,
});


function init(){
  //name_animation();
  //tiles_open();
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
