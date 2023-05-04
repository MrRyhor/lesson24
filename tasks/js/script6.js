const bookList = [
    {
        title: 'Heat',
        year: 1991,
        author: 'Stanley Kin'
    },
    {
        title: 'Rambo',
        year: 1982,
        author: 'Sylwester Stalone'
    },
    {
        title: 'Roots',
        year: 1995,
        author: 'Max Cavalera'
    },
    {
        title: 'Blood, sweat and tears',
        year: 2020,
        author: 'Pete Koller'
    },
    {
        title: 'Arise',
        year: 1991,
        author: 'Max Cavalera'
    },
    {
        title: 'Rocky',
        year: 1976,
        author: 'Sylwester Stalone'
    },
    {
        title: 'Chaos A.D.',
        year: 1993,
        author: 'Max Cavalera'
    }
]

const result = new Map()
let authorList = bookList.map(book => book.author)
console.log(authorList)
for (const author of authorList) {
    let authorCount = result.get(author) || 0
    result.set(author, authorCount + 1)
}
console.log(result)
res1.innerText = 'См. консоль'


