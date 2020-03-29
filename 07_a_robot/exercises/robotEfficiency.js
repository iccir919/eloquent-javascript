/*
    Can you write a robot that finishes the delivery task faster than goalOrientedRobot? 
    If you observe that robot’s behavior, what obviously stupid things does it do? 
    How could those be improved?

    If you solved the previous exercise, you might want to use your compareRobots 
    function to verify whether you improved the robot.
*/

let memory = [];

function yourRobot({place, parcels}, route) {
    if (route.length === 0) {
      let pickups = parcels
          .filter(parcel => parcel.place !== place)
          .map((parcel) => findRoute(roadGraph, place, parcel.place));
      let dropoffs = parcels
          .filter(parcel => parcel.place === place)
          .map((parcel) => findRoute(roadGraph, place, parcel.address));
      
      let shortestPickupRoute, shortestDropoffRoute;
      if (pickups.length) {
          shortestPickupRoute = pickups.reduce((accum, cur) => accum.length > cur.length ? cur : accum);
      }
      if (dropoffs.length) {
          shortestDropoffRoute = dropoffs.reduce((accum, cur) => accum.length > cur.length ? cur : accum);
      }
      
      if (shortestPickupRoute && shortestDropoffRoute) {
          route = shortestPickupRoute.length <= shortestDropoffRoute.length ? shortestPickupRoute : shortestDropoffRoute;
      } else if (!shortestPickupRoute) {
          route = shortestDropoffRoute;
      } else {
          route = shortestPickupRoute;
      }
    }
    return {direction: route[0], memory: route.slice(1)};
  }


runRobotAnimation(VillageState.random(), yourRobot, memory);