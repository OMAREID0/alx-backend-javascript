export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    students.reduce((total, student) => total + student.id, 0);
  }
  return 0;
}
