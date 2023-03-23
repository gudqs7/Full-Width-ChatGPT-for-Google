
var timer = setInterval(() => {
  fireContentLoadedEvent()
}, 300);

function fireContentLoadedEvent () {
    console.log('fireContentLoadedEvent wq')

    var c4f = document.querySelector('#c4g-search-enhance')
    if (c4f) {
      console.log('c4f wq')
        document.querySelector('#c4g-search-enhance').shadowRoot.querySelector('div > div').style="width: 701px;"
        
        var root = document.querySelector('.srp')
        root.style.setProperty('--rhs-width', '772px');

        clearInterval(timer)
    }

}