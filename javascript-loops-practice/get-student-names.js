/* exported getStudentNames */
function getStudentNames(students) {
  var justNames = [];
  var i = students.length;
  while (i > 0) {
    justNames.unshift(students[i - 1].name);
    i--;
  }
  return justNames;
}
