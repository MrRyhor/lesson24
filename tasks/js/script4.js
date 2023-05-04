const userNum = prompt('Введите любое большое число (пример: 3412678934590)')
const result = userNum.replace(/(\d{3}\B)/g, '$& ')
res1.innerText = result