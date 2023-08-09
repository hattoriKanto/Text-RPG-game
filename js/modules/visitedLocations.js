
const visitedLocations = {

    castle: {

        courtyard: {

            barracks: {

                isVisited: false

            },

            stables: {

                isVisited: false

            },

            deadBody: {

                isVisited: false

            }

        },

        barracks: {
            
            barracksInsideFirstFloor: {

                isVisited: false

            },

            armoryRoom: {

                isVisited: false

            },

            armoryTable: {

                isVisited: false

            },

            armoryBlood: {

                isVisited: false

            },

            kitchenRoom: {

                isVisited: false

            },

            barracksInsideSecondFloor: {

                isVisited: false

            },

            legionnaireRooms: {

                isVisited: false

            },

            officerRoom: {

                isVisited: false

            },

            officerDeadBody: {

                isVisited: false

            },

            officerTable: {

                isVisited: false

            }

        },

        stables: {

            stablesDoor: {

                isVisited: false

            },

            stablesWalls: {

                isVisited: false

            },

            stablesFloor: {

                isVisited: false

            },

            stablesWindow: {

                isVisited: false

            },

            stablesInside: {

                isVisited: false

            },

            stablesPile: {

                isVisited: false

            },

            stablesRight: {

                isVisited: false

            },

            stablesLeft: {

                isVisited: false

            }

        },

        donjon: {

            corridorLeft: {

                isVisited: false,

                alchemistRoom: {

                    isVisited: false,
    
                    alchemistDeadBody: {
    
                        isVisited: false
    
                    },
    
                    alchemistTable: {
    
                        isVisited: false
    
                    },
    
                    alchemistWorkplace: {
    
                        isVisited: false
    
                    }
    
                },

                warehouseDoor: {

                    isVisited: false

                },

                dungeonDoor: {

                    isVisited: false

                }

            },

            corridorRight: {

                isVisited: false

            },

        }

    },

    village: {},

    rift: {}

};

export { visitedLocations };