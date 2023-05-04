
function getAndSaveToDoMessage(toDoList) {    
    const randomMessage = Math.floor(Math.random() * toDoList.length)
    localStorage.setItem('toDoMessage', toDoList[randomMessage])
    let conf = confirm(toDoList[randomMessage])
    if (conf)
        localStorage.removeItem('toDoMessage')
    return toDoList[randomMessage]  
}


const toDoList = ['Звонок родителям', 'Купить продукты', 'Забрать документы', 'Выгулять собаку']
let timer = setInterval(() => {
    getAndSaveToDoMessage(toDoList)
}, 10000);

setTimeout(() => {
    clearInterval(timer)
}, 50000);


