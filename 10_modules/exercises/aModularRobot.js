/*
    These are the bindings that the project from Chapter 7 creates:

    roads
    buildGraph
    roadGraph
    VillageState
    runRobot
    randomPick
    randomRobot
    mailRoute
    routeRobot
    findRoute
    goalOrientedRobot
    
    If you were to write that project as a modular program, what modules 
    would you create? Which module would depend on which other module, and what 
    would their interfaces look like?

        I would create graph module that would include the roads, buildGraph function, 
        and road value. 

        Also, I would create a robots module that would include all of the different 
        types of robots that were created (randomRobot, routeRobot, goalOrientedRobot). 
        Since the goalOrientedRobot depends on the findRoute function, it would be 
        included into this module too.
        
        Lastly, I would create an enviornment module that would include the 
        VillageState constructor and the runRobot function. This module would depend on 
        the graph module and the robots module. It would also include the mailRoute
        that the robots routeRobot would take as an argument. 

    Which pieces are likely to be available prewritten on NPM? Would you prefer 
    to use an NPM package or write them yourself?

        The buildGraph, randomPick, and findRoute are probably already prewritten on NPM.
        Since these probably have their own interface, I would in prefer to write
        these functions myself.
*/

