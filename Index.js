class Student {
  constructor(id, name, grades, attendance) {
    this.id = id;
    this.name = name;
    this.grades = grades;
    this.attendance = attendance;
  }
  calculateAverage() {
    const total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.grades.length;
  }
  getGradeLabel() {
    const avg = this.calculateAverage();
    if (avg >= 90) return 'A';
    if (avg >= 80) return 'B';
    if (avg >= 70) return 'C';
    if (avg >= 60) return 'D';
    if (avg >= 50) return 'E';
    else return 'F';
  }
  getFinalStatus() {
    const avg = this.calculateAverage();
    if (avg >= 50 && this.attendance >= 75) {
      return 'ناجح';
    } else {
      return 'يحتاج مراجعة';
    }
  }
}
const studentsList = [
  new Student(101, 'أحمد محمود', [85, 90, 88], 95),
  new Student(102, 'سارة علي', [45, 42, 48], 80),
  new Student(103, 'محمد', [40, 44, 41], 78),
  new Student(104, 'نورهان', [95, 92, 98], 100)
];
console.log("=== تقرير الطلاب ===");
studentsList.forEach(s => {
  console.log(`${s.name} | متوسط: ${s.calculateAverage().toFixed(2)} | تقدير: ${s.getGradeLabel()} | نتيجة: ${s.getFinalStatus()}`);
});
const struggling = studentsList.filter(s => {
  const avg = s.calculateAverage();
  return avg >= 40 && avg <= 49;
});
const afterMercy = struggling.map(s => s.calculateAverage() + 5);
const totalAfterMercy = afterMercy.reduce((acc, curr) => acc + curr, 0);
const mercyAverage = afterMercy.length > 0 ? totalAfterMercy / afterMercy.length : 0;
console.log("\n=== لجنة الرأفة ===");
console.log("المتعثرون:", struggling.map(s => s.name));
console.log("بعد اضافة 5 درجات:", afterMercy);
console.log(`المتوسط بعد الرأفة: ${mercyAverage.toFixed(2)}`);
