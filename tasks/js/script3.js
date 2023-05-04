const str = 'Я народився 2001, а в школі пішов 2007' // Я народився 2001р., а в школі пішов 2007р.
const result = str.replace(/(\d{4})\b/g, '$1р.')
res1.innerText = result

