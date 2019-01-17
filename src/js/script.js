var toggleNav = document.querySelector('.js-menu-toggle');
toggleNav.onclick = function() {
  document.querySelector('.body').classList.toggle('open-menu');
};

var toggleFullview = document.getElementsByClassName('js-full-view');
for (var i=0; i < toggleFullview.length; i++) {
  toggleFullview[i].onclick = function() {
    var fullViewOverlay = document.getElementById(this.getAttribute('data-number'));
    var lazyLoadImg = fullViewOverlay.querySelector('.js-lazy-load');
    var fullViewBackButton = fullViewOverlay.querySelector('.js-back');
    fullViewOverlay.classList.add('active');
    document.querySelector('.body').classList.add('overlay-active');
    lazyLoadImg.style.backgroundImage = "url('" + lazyLoadImg.getAttribute('data-src') + "')";
    fullViewBackButton.onclick = function() {
      fullViewOverlay.classList.remove('active');
      document.querySelector('.body').classList.remove('overlay-active');
    }
  };
};

window.addEventListener('load', function() {
  var lazyLoadImgs = document.getElementsByClassName('js-lazy-load-onload');
  for (var i=0; i < lazyLoadImgs.length; i++) {
    var lazyLoadImg = lazyLoadImgs[i];
    lazyLoadImg.style.backgroundImage = "url('" + lazyLoadImg.getAttribute('data-src') + "')";
  };
});
