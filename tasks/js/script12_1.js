function getRandomNum(maxVal) {
    return Math.floor(Math.random() * maxVal)
}

function getAndDeleteToDoMessage() {
    if (localStorage.length === 0) {
        return clearInterval(timer)
    } else {
        let randomIndex = getRandomNum(localStorage.length)
        let message = localStorage.getItem(localStorage.key(randomIndex))
        let toDoMessage = confirm(message)
        if (toDoMessage) localStorage.removeItem(localStorage.key(randomIndex))
    }    
}
let toDoList = ['Звонок родителям', 'Купить продукты', 'Забрать документы', 'Выгулять собаку']
for (let i = 0; i < toDoList.length; i++) {
    localStorage.setItem(`task${i}`, toDoList[i])
}
let timer = setInterval(() => {
    getAndDeleteToDoMessage()
}, 2000);
