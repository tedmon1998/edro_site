window.onresize = resize
const main = document.getElementById('main')
const mainContent = document.getElementById('mainContent')
const mainContentFirst = document.getElementById('mainContentFirst')
const mainContentFirstText = document.getElementById('mainContentFirstText')

window.onload = resize()
function resize() {
    const width = document.body.offsetWidth
    // const width = window.screen.width
    if (width <= 1000) {
        mainContentFirstText.remove()
        mainContent.appendChild(mainContentFirstText)
    }
    else {
        // mobile.remove()
        // main.insertBefore(desctop, main.firstChild)
        mainContentFirst.insertBefore(mainContentFirstText, mainContentFirst.firstChild)
    }
}

const data_up = document.querySelectorAll('div[data-aos="fade-up-left"]')
const data_down = document.querySelectorAll('div[data-aos="fade-down-left"]')

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)) {
    data_up.forEach(el => el.dataset.aos = 'fade-up')
    data_down.forEach(el => el.dataset.aos = 'fade-down')
} else {
    data_up.forEach(el => el.dataset.aos = 'fade-up-left')
    data_down.forEach(el => el.dataset.aos = 'fade-down-left')
}