new Vue({
    el: '#main',
    data: {
        newGame: false,
        addGameScore: false,
        players: 
            [
                {
                    "id": 1,
                    "name": "Massimo",
                    "games": 0,
                    "victories": 0                },
                {
                    "id": 2,
                    "name": "Thomas",
                    "games": 0,
                    "victories": 0,
                },
                {
                    "id": 3,
                    "name": "Fayçal",
                    "games": 0,
                    "victories": 0,
                },
                {
                    "id": 4,
                    "name": "Mihai",
                    "games": 0,
                    "victories": 0,
                },
                {
                    "id": 5,
                    "name": "Mohamed",
                    "games": 0,
                    "victories": 0,
                },
                {
                    "id": 6,
                    "name": "Jean-Denis",
                    "games": 0,
                    "victories": 0,
                }
            ],
        matches: [],
        selected1: "",
        selected2: "",
        score1: 0,
        score2: 0
    },
    methods: {
        addGame() {
            this.newGame = true;
            
            this.matches.unshift({
                text:  this.selected1 + " - " + this.selected2 + " : " + this.score1 + " - " + this.score2
                
            });
            this.checkWin();
        },
        addScore() {
            this.addGameScore = true;            
        },
        percent(v,g) {
            return (g/v)*100;
        },
        checkWin() {
            
            if (this.score1 > this.score2) {
                for (var i = 0; i < this.players.length; i++) {
                var element = this.players[i];
                if(this.selected1 == element.name) {
                    element.games = element.games+1
                    element.victories = element.victories+1
                }
                if(this.selected2 == element.name) {
                    element.games = element.games+1
                }
            }
            } else {
                for (var i = 0; i < this.players.length; i++) {
                var element = this.players[i];
                    if(this.selected2 == element.name) {
                        element.games = element.games+1
                        element.victories = element.victories+1
                    }
                    if(this.selected1 == element.name) {
                    element.games = element.games+1
                }
                }
            }
        }
    }
});

