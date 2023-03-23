
var timer = setInterval(() => {
  fireContentLoadedEvent()
}, 300);

function fireContentLoadedEvent() {
  var c4f = document.querySelector('#c4g-search-enhance')
  if (c4f) {
    var c4gSearch = document.querySelector('#c4g-search-enhance')
    if (c4gSearch) {
      c4gSearch.shadowRoot.querySelector('div > div').style = "width: 701px;"
    }
    var root = document.querySelector('.srp')
    if (root) {
      root.style.setProperty('--rhs-width', '772px');
    }
    clearInterval(timer)
  }
}