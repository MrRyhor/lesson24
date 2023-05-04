const studentsNames = [13, 12, 13, 14, 12, 10, 13]
const result = new Map()
for (const el of studentsNames) {
    let elCount = result.get(el) || 0
    result.set(el, elCount + 1)       
}
let elMax = Math.max(...studentsNames)
result.set('max', elMax)
console.log(result)
res1.innerText = 'См. консоль'



