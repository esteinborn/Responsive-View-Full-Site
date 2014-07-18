var targetWidth = 980,
  deviceWidth = 'device-width',
  viewport = document.querySelector("meta[name='viewport']"),
  rwdButton = document.querySelector('.rwd-display-options'),
  viewMode = document.getElementById('view-mode'),
  localStorage = {
    isResponsive : false
  },
  hasLocalStorage = function() {
    try {
      localStorage.setItem('a', 'a');
      localStorage.removeItem('a');
      return true;
    } catch(e) {
      return false;
    }
  },
  showFullSite = function(){
      viewport.setAttribute('content', 'width=' + targetWidth);

      viewMode.innerHTML = 'Mobile Optimized Site';

      localStorage.isResponsive = false;
  },
  showMobileOptimized = function(){
      localStorage.isResponsive = 'true';
      viewport.setAttribute('content', 'width=' + deviceWidth);
      viewMode.innerHTML = 'Full Site';

  };

// check to see if local storage value is set on page load
localStorage.isResponsive = (localStorage.isResponsive === undefined) ? 'true' : localStorage.isResponsive;

// if the user previously chose to view full site, change the viewport
if(hasLocalStorage){
    if(localStorage.isResponsive == 'false'){
        showFullSite();
    }
}

rwdButton.addEventListener('click', function(){
    if (viewMode.innerHTML === 'Full Site') {
      showFullSite();
    } else {
      showMobileOptimized();
    }
}, false);
