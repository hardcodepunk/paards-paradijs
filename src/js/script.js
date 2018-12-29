var toggleNav = document.querySelector('.js-menu-toggle');
toggleNav.onclick = function() {
  document.querySelector('.body').classList.toggle('open-menu');
};

var toggleFullview = document.getElementsByClassName('js-full-view');
for (var i=0; i < toggleFullview.length; i++) {
  toggleFullview[i].onclick = function() {
    var fullViewOverlay = document.getElementById(this.getAttribute('data-number'));
    var lazyLoadImg = fullViewOverlay.querySelector('.js-lazy-load');
    fullViewOverlay.classList.add('active');
    lazyLoadImg.style.backgroundImage = "url('" + lazyLoadImg.getAttribute('data-src') + "')";
    console.log(fullViewOverlay);
    console.log(lazyLoadImg);
  };
};
