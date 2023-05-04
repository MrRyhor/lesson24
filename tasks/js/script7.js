
const visitorsList = [
    {
        login: 'Den23'
    },
    {
        login: 'GinKan'
    },
    {
        login: 'Den23'
    },
    {
        login: 'bulba'
    },
    {
        login: 'GinKan'
    },
    {
        login: 'rambo1987'
    },
    {
        login: 'GinKan'
    },
    {
        login: 'rambo1987'
    },
]
const result = new Map()
const loginsList = visitorsList.map(visitor => visitor.login)
for (const visitor of loginsList) {
    let visitorCount = result.get(visitor) || 0
    result.set(visitor, visitorCount + 1)
}
console.log(result)
res1.innerText = 'См. консоль'


