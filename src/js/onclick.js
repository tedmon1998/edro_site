const lotty__player = document.querySelector('.lotty__player')
lotty__player.onclick = () => scrollToPosition(BioScan)

const BioScan = document.getElementById('BioScan')
const EasyDiabetes = document.getElementById('EasyDiabetes')
const Development = document.getElementById('Development')
const contacts = document.getElementById('contacts')
const logo = document.getElementById('logo')
const logo_mobile = document.getElementById('logo_mobile')

logo.onclick = () => scrollToPosition(main)

logo_mobile.onclick = () => scrollToPosition(main)


function getElementPosition(block) {
    return block.getBoundingClientRect().top + window.pageYOffset
}
// const easyDiabetesPosition = getElementPosition(EasyDiabetes)

let offset = 15
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)) {
    offset = document.body.offsetHeight * 10 / 100
}
function scrollToPosition(elementName) {
    const position = getElementPosition(elementName) - offset;
    console.log(position);
    scrollTo(0, position);
}