class Student {
  constructor(id, name, grades, attendance) {
    this.id = id;
    this.name = name;
    this.grades = grades;
    this.attendance = attendance;
  }
  calculateAverage() {
    const total = this.grades.reduce((sum, g) => sum + g, 0);
    return total / this.grades.length;
  }
  getGradeLabel() {
    const avg = this.calculateAverage();
    if (avg >= 90) return 'A';
    if (avg >= 80) return 'B';
    if (avg >= 70) return 'C';
    if (avg >= 60) return 'D';
    if (avg >= 50) return 'E';
    return 'F';
  }
  getFinalStatus() {
    const avg = this.calculateAverage();
    if (avg >= 50 && this.attendance >= 75) return 'ناجح';
    else return 'يحتاج مراجعة';
  }
}
const studentsList = [
  new Student(101, 'أحمد محمود', [85, 90, 88], 90),
  new Student(102, 'سارة علي', [45, 42, 48], 80),
  new Student(103, 'عمر خالد', [40, 41, 44], 70),
  new Student(104, 'مريم يوسف', [60, 65, 70], 85)
];
const strugglingStudents = studentsList.filter(s => s.calculateAverage() >= 40 && s.calculateAverage() <= 49);
const boostedAverages = strugglingStudents.map(s => s.calculateAverage() + 5);
const totalBoostedAverages = boostedAverages.reduce((sum, avg) => sum + avg, 0);
const averageStrugglingScore = strugglingStudents.length > 0 ? totalBoostedAverages / strugglingStudents.length : 0;
console.log("تقرير الطلاب:");
studentsList.forEach(s => console.log(`${s.name} | ${s.calculateAverage().toFixed(2)} | ${s.getGradeLabel()} | ${s.getFinalStatus()}`));
console.log("المتوسط بعد الرأفة:", averageStrugglingScore.toFixed(2));
