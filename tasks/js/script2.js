
const str = '0504546626' //+380-50-45-466-26
const result = str.replace(/\b(\d)(\d{2})(\d{2})(\d{3})(\d{2})/, '+38$1-$2-$3-$4-$5')
res1.innerText = result
