function saveInputcolor() {
    let inputColor = document.getElementById('inp').value
    localStorage.setItem('color', inputColor)
}
let countChange = 0
function saveInputChange() {
    countChange++
    sessionStorage.setItem('inputColorchange', countChange)
}

window.onload = function () {
    document.getElementById('inp').oninput = saveInputcolor
    document.getElementById('inp').onchange = saveInputChange    
}