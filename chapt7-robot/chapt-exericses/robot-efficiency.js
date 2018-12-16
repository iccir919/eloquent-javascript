/*
Can you write a robot that finishes the delivery task faster than goalOrientedRobot? If you observe that robot’s behavior, what obviously stupid things does it do? How could those be improved?

If you solved the previous exercise, you might want to use your compareRobots function to verify whether you improved the robot.
*/
function parcelOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let routes = [];
    for (let parcel of parcels) {
      if (parcel.place != place) {
        routes.push(findRoute(roadGraph, place, parcel.place));
      } else {
        routes.push(findRoute(roadGraph, place, parcel.address));
      }
    }
    routes.sort((a, b) => a.length - b.length);
    route = routes[0];
  }
  return { direction: route[0], memory: route.slice(1) };
}
