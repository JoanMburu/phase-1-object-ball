function gameObject(){
   return {home :{
        teamName: "Brooklyn Nets",
        colors:["black","white"],
        players:{
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },
            "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            },
            away: {
                teamName: "Charlotte Hornets",
                colors: ["Turquoise", "Purple"],
                players: {
                    "Jeff Adrien": {
                        number: 4,
                        shoe: 18,
                        points: 10,
                        rebounds: 1,
                        assists: 1,
                        steals: 2,
                        blocks: 7,
                        slamDunks: 2
                    },
                    "Bismak Biyombo": {
                        number: 0,
                        shoe: 16,
                        points: 12,
                        rebounds: 4,
                        assists: 7,
                        steals: 7,
                        blocks: 15,
                        slamDunks: 10
                    },
                    "DeSagna Diop": {
                        number: 2,
                        shoe: 14,
                        points: 24,
                        rebounds: 12,
                        assists: 12,
                        steals: 4,
                        blocks: 5,
                        slamDunks: 5
                    },
                    "Ben Gordon": {
                        number: 8,
                        shoe: 15,
                        points: 33,
                        rebounds: 3,
                        assists: 2,
                        steals: 1,
                        blocks: 1,
                        slamDunks: 0
                    },
                    "Brendan Haywood": {
                        number: 33,
                        shoe: 15,
                        points: 6,
                        rebounds: 12,
                        assists: 12,
                        steals: 22,
                        blocks: 5,
                        slamDunks: 12
                    }
                }
            }
        }
    }
};
}
// number of points scored
function numPointsScored(playerName) {
    const game = gameObject();
    for (let team in game) {
        const players = game[team].players;
        if (playerName in players) {
            return players[playerName].points;
        }
    }
    return null;
}
console.log(numPointsScored("Alan Anderson")); // Output: 22

// shoe size of the player
function shoeSize(playerName) {
    const game = gameObject();
    for (let team in game) {
        const players = game[team].players;
        if (playerName in players) {
            return players[playerName].shoe;
        }
    }
    return null; 
}
console.log(shoeSize("Alan Anderson")); // Output: 16


// team colors
function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
    return null;
}
console.log(teamColors("Brooklyn Nets")); // Output: ["Black", "White"]


// team names
function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}
console.log(teamNames()); // Output: ["Brooklyn Nets", "Charlotte Hornets"]


// player numbers
function playerNumbers(teamName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            const players = game[team].players;
            return Object.values(players).map(player => player.number);
        }
    }
    return null;
}
console.log(playerNumbers("Brooklyn Nets")); // Output: [0, 30, 11, 1, 31]


// Player stats
function playerStats(playerName) {
    const game = gameObject();
    for (let team in game) {
        const players = game[team].players;
        if (playerName in players) {
            return players[playerName];
        }
    }
    return null;
}
console.log(playerStats("Alan Anderson")); // Output: { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 }


// Big shoe Rebound
function bigShoeRebounds() {
    const game = gameObject();
    let maxShoeSize = 0;
    let playerWithMaxShoeSize;
    for (let team in game) {
        const players = game[team].players;
        for (let player in players) {
            const shoeSize = players[player].shoe;
            if (shoeSize > maxShoeSize) {
                maxShoeSize = shoeSize;
                playerWithMaxShoeSize = player;
            }
        }
    }
    return game.home.players[playerWithMaxShoeSize].rebounds || game.away.players[playerWithMaxShoeSize].rebounds;
}
console.log(bigShoeRebounds()); // Output: 12


function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let playerWithMaxPoints;
    for (let team in game) {
        const players = game[team].players;
        for (let player in players) {
            const points = players[player].points;
            if (points > maxPoints) {
                maxPoints = points;
                playerWithMaxPoints = player;
            }
        }
    }
    return playerWithMaxPoints;
}

function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
    for (let team in game) {
        const players = game[team].players;
        for (let player in players) {
            if (team === 'home') {
                homePoints += players[player].points;
            } else {
                awayPoints += players[player].points;
            }
        }
    }
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
    const game = gameObject();
    let longestName = '';
    let playerWithLongestName;
    for (let team in game) {
        const players = game[team].players;
        for (let player in players) {
            if (player.length > longestName.length) {
                longestName = player;
                playerWithLongestName = player;
            }
        }
    }
    return playerWithLongestName;
}

function doesLongNameStealATon() {
    const game = gameObject();
    const longestName = playerWithLongestName();
    let maxSteals = 0;
    for (let team in game) {
        const players = game[team].players;
        for (let player in players) {
            if (player === longestName) {
                maxSteals = players[player].steals;
            }
        }
    }
    for (let team in game) {
        const players = game[team].players;
        for (let player in players) {
            if (players[player].steals > maxSteals) {
                return false;
            }
        }
    }
    return true;
}
console.log("Player with the most points:", mostPointsScored()); // Output: "Ben Gordon"
console.log("Winning team:", winningTeam()); // Output: "Charlotte Hornets"
console.log("Player with the longest name:", playerWithLongestName()); // Output: "Brendan Haywood"
console.log("Does the player with the longest name steal a ton?", doesLongNameStealATon()); // Output: true
