const strList = ['2321', '4567', '12341', '657', '4543', '78957', '101', '34', '44']
const res = strList.filter(str => /\b(\d)(\d*?)\1\b/.test(str))
res1.innerText = `[${res}]`
console.log(res)
