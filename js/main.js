
function index_init() {
    setTimeout(show_tiles, 1000);
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
