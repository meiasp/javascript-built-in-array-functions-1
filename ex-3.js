const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

/* function getTodoTopics(todos) {
  return todos.map((result) => result.topic)
} */

const getTodoTopics = (todos) => todos.map((result) => result.topic)

console.log(getTodoTopics(todos));

/* 
	Output:
	[
		'Doing pre-work',
		'Workout',
		'Playing computer games',
		'Relax',
		'Clean the room'
	]
*/
