function gradeScore(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}
function summarizeStudent(students) {
  return students.map((student) => {
    const grade = gradeScore(student.score);
    return `${student.name} scored ${student.score} — Grade: ${grade}`;
  });
}
const students = [
  { name: "Amara", score: 88 },
  { name: "John", score: 72 },
];

console.log(summarizeStudent(students));
