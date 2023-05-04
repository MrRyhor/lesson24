const studentsHistoryClub = ['John Johns', 'Sam Pit', 'Rafa Benites', 'Rob Helford', 'Tom Ford', 'Jenny DeVito', 'Natali Portman']
const studentsMathClub = ['Sam Pit', 'Den Huges', 'Rafa Benites', 'Tom Ford', 'Natali Portman', 'Mik Jagger']
const allStudentsList = [...studentsHistoryClub, ...studentsMathClub]
console.log(allStudentsList)
const result = new Map()
let resultCount = 0
for (const student of allStudentsList) {
    let studentCount = result.get(student) || 0
    result.set(student, studentCount + 1)
}
console.log(result)
let qntStudentsWith2Clubs = 0
for (const val of result.values()) {
    if (val === 2)
        qntStudentsWith2Clubs++
}
console.log(qntStudentsWith2Clubs) // кол-во студентов посещающих 2 кружка

const qntOFAllStudentsInClubs = new Set(allStudentsList).size
console.log(qntOFAllStudentsInClubs) // кол-во студентов посещающих хотя бы один кружок

res1.innerText = 'См. консоль'