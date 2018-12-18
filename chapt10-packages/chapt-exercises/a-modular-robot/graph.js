/*
Accepts an array of two-element arrays, returns graph object
*/

function buildGraph(array) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of array) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

exports.buildGraph = buildGraph;
