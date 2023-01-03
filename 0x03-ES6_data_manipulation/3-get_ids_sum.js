export default function getStudentIdsSum(students) {
  return students.reduce((Total, currentValue) => Total + currentValue.id, 0);
}
