
var timer = setInterval(() => {
  fireContentLoadedEvent()
}, 300);

function fireContentLoadedEvent() {
  console.log('sorry wq')
  var c4f = document.querySelector('#c4g-search-enhance')
  if (c4f) {
    var c4gSearch = document.querySelector('#c4g-search-enhance')
    if (c4gSearch) {
      var searchShadowRoot = c4gSearch.shadowRoot
      if (searchShadowRoot && searchShadowRoot.querySelector('div > div')) {
        searchShadowRoot.querySelector('div > div').style = "width: 701px;"
        clearInterval(timer)

        var root = document.querySelector('.srp')
        if (root) {
          root.style.setProperty('--rhs-width', '772px');
        }
      }
    }
  }
}