const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

//array.reduce(acc,curr){},0);

function getAverageStudentScore(students) {
  const sumScore = students.reduce(function (acc,curr){
    return acc+curr.score;
  },0);
  return sumScore / students.length;
}

//0 + 80
//80+90
//170 +85
//255 + 95 = 350 / length

console.log(getAverageStudentScore(students)); // Output: 87.5
