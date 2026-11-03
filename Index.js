class Student {
  constructor(id, name, grades, attendance) {
    this.id = id;
    this.name = name;
    this.grades = grades;
    this.attendance = attendance;
  }
  calculateAverage() {
    return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
  }
  getGrade(avg) {
    if (avg >= 90) return 'A';
    else if (avg >= 80) return 'B';
    else if (avg >= 70) return 'C';
    else if (avg >= 60) return 'D';
    else if (avg >= 50) return 'E';
    else return 'F';
  }
  getFinalStatus() {
    let avg = this.calculateAverage();
    return (avg >= 50 && this.attendance >= 75) ? "ناجح" : "يحتاج مراجعة";
  }
}

const studentsList = [];
studentsList.push(
  new Student(1, "روضة", [42, 45, 46], 80),
  new Student(2, "أحمد", [85, 90, 88], 90),
  new Student(3, "سارة", [40, 48, 44], 78),
  new Student(4, "محمد", [30, 35, 40], 60)
);

const failingStudents = studentsList.filter(s => {
  let a = s.calculateAverage();
  return a >= 40 && a <= 49;
});

const afterGrace = failingStudents.map(s => s.calculateAverage() + 5);
const sum = afterGrace.reduce((a, b) => a + b, 0);
let avgAfterGrace = failingStudents.length > 0 ? sum / failingStudents.length : 0;

console.log("تقرير الطلاب:", studentsList);
console.log("المتعثرون 40-49:", failingStudents);
console.log("المتوسط بعد الرأفة:", avgAfterGrace);
