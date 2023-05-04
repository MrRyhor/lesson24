
function getAndSaveToDoMessage(toDoList) {
    const randomMessage = Math.floor(Math.random() * toDoList.length)
    let conf = confirm(toDoList[randomMessage])
    if (conf) {
        localStorage.removeItem('toDoMessage')
        toDoList.splice(randomMessage, 1)
        if (toDoList.length === 0){
            alert('Список дел пуст')
            clearInterval(timer)
        } 
    } else
        localStorage.setItem('toDoMessage', toDoList[randomMessage])
                    
    console.log(toDoList)
    return toDoList[randomMessage]
}

let toDoList = ['Звонок родителям', 'Купить продукты', 'Забрать документы', 'Выгулять собаку']
let timer = setInterval(() => {
    getAndSaveToDoMessage(toDoList)
}, 5000);




