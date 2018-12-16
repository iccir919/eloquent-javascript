/*
It’s hard to objectively compare robots by just letting them solve a few scenarios. Maybe one robot just happened to get easier tasks or the kind of tasks that it is good at, whereas the other didn’t.

Write a function compareRobots that takes two robots (and their starting memory). It should generate 100 tasks and let each of the robots solve each of these tasks. When done, it should output the average number of steps each robot took per task.

For the sake of fairness, make sure you give each task to both robots, rather than generating different tasks per robot.
*/

function getTurnCount(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let robot1TurnsPerTask = [];
  let robot2TurnsPerTask = [];

  for (let i = 0; i < 100; i++) {
    let task = VillageState.random(1);
    robot1TurnsPerTask.push(getTurnCount(task, robot1, memory1));
    robot2TurnsPerTask.push(getTurnCount(task, robot2, memory2));
  }
  function findAverage(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total / array.length;
  }

  let robot1Average = findAverage(robot1TurnsPerTask);
  let robot2Average = findAverage(robot2TurnsPerTask);
  console.log("Robot 1 averages turns per task: ", robot1Average);
  console.log("Robot 2 averages turns per task: ", robot2Average);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
