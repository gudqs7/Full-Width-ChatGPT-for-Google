var afterWidth = 700

var timer = setInterval(() => {
    fireContentLoadedEvent()
}, 300);

function fireContentLoadedEvent() {
    console.log('sorry wq')
    var c4gSearch = document.querySelector('#c4g-search-enhance')
    if (c4gSearch) {
        var searchShadowRoot = c4gSearch.shadowRoot
        if (searchShadowRoot && searchShadowRoot.querySelector('div > div')) {
            searchShadowRoot.querySelector('div > div').style = "width: " + afterWidth + "px;"
            clearInterval(timer)

            var root = document.querySelector('.srp')
            if (root) {
                root.style.setProperty('--rhs-width', (afterWidth + 20) + 'px');
            }

            var style = document.createElement('style');
            style.innerHTML = '.promotion-3PDMAb {visibility: hidden!important;}';
            searchShadowRoot.appendChild(style);
        }
    }
}
