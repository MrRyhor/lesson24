let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
const result = new Map()
for (const temp of temperatures) {
    let tempCount = result.get(temp) || 0
    result.set(temp, tempCount + 1)
}
console.log(result) //кол-во вхождений температур

const ceilTemperatures = temperatures.map(temp => Math.ceil(temp))
const qntOfDiffTemperatures = new Set(ceilTemperatures).size
console.log(qntOfDiffTemperatures) //кол-во разных температур
res1.innerText = 'См. консоль'






