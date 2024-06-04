export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    students.reduce((total, student) => total.id || total + student.id);
  }
  return 0;
}
