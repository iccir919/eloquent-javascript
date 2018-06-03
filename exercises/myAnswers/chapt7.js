var roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall"
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

var roadGraph = buildGraph(roads);

var VillageState = class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map(p => {
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
};

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({ place, address });
  }
  return new VillageState("Post Office", parcels);
};

var mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office"
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let robot1Turns = [];
  let robot2Turns = [];

  for (let i = 0; i < 100; i++) {
    let villageState = VillageState.random(5);
    let result1 = runRobotGiveTurnCount(villageState, robot1, memory1);
    robot1Turns.push(result1);
    let result2 = runRobotGiveTurnCount(villageState, robot2, memory2);
    robot2Turns.push(result2);
  }

  console.log("Result of Robot 1 = ", getAverageOfArray(robot1Turns));
  console.log("Result of Robot 2 = ", getAverageOfArray(robot2Turns));
}

function getAverageOfArray(array) {
  let sum = array.reduce((accum, curr) => {
    return accum + curr;
  });

  return sum / array.length;
}

function runRobotGiveTurnCount(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

// compareRobots(routeRobot, [], goalOrientedRobot, []);

function findShortestRoute(routes) {
  if (routes.length < 2) {
    return routes[0];
  }

  return routes.reduce((accum, curr) => {
    if (accum.length < curr) {
      return curr;
    } else {
      return accum;
    }
  });
}

function findEfficientRoute(graph, from, to, parcels) {
  let routes = [];
  let work = [{ at: from, route: [] }];

  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) {
        routes.push(route.concat(place));
      }
      if (!work.some(w => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
  let shortest = findShortestRoute(routes);

  let pickUpPlaces = parcels.map(p => {
    return p.place;
  });

  let shortRoutes = routes.filter(route => {
    return route.length === shortest.length;
  });
  if (shortRoutes.length > 1) {
    let bestRoute = routes.find(function(route) {
      return route.some(loc => {
        return pickUpPlaces.indexOf(loc) !== -1;
      });
    });
    if (bestRoute) {
      return bestRoute;
    } else {
      return shortest;
    }
  } else {
    return shortest;
  }
}

function efficiencyOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findEfficientRoute(roadGraph, place, parcel.place, parcels);
    } else {
      route = findEfficientRoute(roadGraph, place, parcel.address, parcels);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

compareRobots(efficiencyOrientedRobot, [], goalOrientedRobot, []);

class PGroup {
  constructor(group) {
    this.group = group;
  }

  add(value) {
    let index = this.group.indexOf(value);
    if (index === -1) {
      let newState = this.group.concat(value);
      return new PGroup(newState);
    } else {
      return this;
    }
  }
  has(value) {
    return this.group.indexOf(value) !== -1;
  }
  delete(value) {
    let index = this.group.indexOf(value);
    if (index !== -1) {
      let newState = this.group
        .slice(0, index)
        .concat(this.group.slice(index + 1, this.group.length));
      return new PGroup(newState);
    } else {
      return this;
    }
  }
}

PGroup.empty = new PGroup(new Array());

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
