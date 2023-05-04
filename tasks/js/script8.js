const studentsList = [
    {
        name: 'John Johns',
        course: 2,
        faculty: 'building'
    },
    {
        name: 'Kim Weeds',
        course: 2,
        faculty: 'building'
    },
    {
        name: 'Sam Ramirez',
        course: 2,
        faculty: 'sport'
    },
    {
        name: 'Samantha Reeb',
        course: 3,
        faculty: 'it'
    },
    {
        name: 'Howard Stern',
        course: 3,
        faculty: 'it'
    },
    {
        name: 'Leroy Begins',
        course: 1,
        faculty: 'building'
    },
    {
        name: 'Arthur Doyle',
        course: 1,
        faculty: 'language'
    },
]
const facultyList = studentsList.map(student => student.faculty)
const qntOfFaculties = new Set (facultyList).size
console.log(qntOfFaculties)

const courseList = studentsList.map(student => student.course)
const result = new Map()
for (const course of courseList) {
    let courseCount = result.get(course) || 0
    result.set(course, courseCount + 1)
}
console.log(result)
res1.innerText = 'См. консоль'

