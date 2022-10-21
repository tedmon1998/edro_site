const lotty__player = document.querySelector('.lotty__player')
lotty__player.onclick = () => scrollToPosition(BioScan)

const BioScan = document.getElementById('BioScan')
const EasyDiabetes = document.getElementById('EasyDiabetes')
const about = document.getElementById('about')
const contacts = document.getElementById('contacts')

function getElementPosition(block) {
    console.log(`block.getBoundingClientRect().top ${block.getBoundingClientRect().top}`);
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
    scrollTo(0, position);
}