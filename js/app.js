 // Initialize Firebase
  let config = {
    apiKey: "AIzaSyA4mT1IJsoskG_Mo0iq0DpW7sbD5y9hwKY",
    authDomain: "pingpong-bb33b.firebaseapp.com",
    databaseURL: "https://pingpong-bb33b.firebaseio.com",
    projectId: "pingpong-bb33b",
    storageBucket: "pingpong-bb33b.appspot.com",
    messagingSenderId: "275559528670"
  };
  let app = firebase.initializeApp(config)
    let db = app.database()
    let playersRef = db.ref('players')
    let matchesRef = db.ref('matches')

new Vue({
    el: '#main',
    data: {
        newGame: false,
        addGameScore: false,
        selected1: "",
        selected2: "",
        score1: 0,
        score2: 0,
      //  matches: [],
        // players: 
        //     [
        //         {
        //             "id": 1,
        //             "name": "Massimo",
        //             "games": 0,
        //             "victories": 0                },
        //         {
        //             "id": 2,
        //             "name": "Thomas",
        //             "games": 0,
        //             "victories": 0,
        //         },
        //         {
        //             "id": 3,
        //             "name": "Fayçal",
        //             "games": 0,
        //             "victories": 0,
        //         },
        //         {
        //             "id": 4,
        //             "name": "Mihai",
        //             "games": 0,
        //             "victories": 0,
        //         },
        //         {
        //             "id": 5,
        //             "name": "Mohamed",
        //             "games": 0,
        //             "victories": 0,
        //         },
        //         {
        //             "id": 6,
        //             "name": "Jean-Denis",
        //             "games": 0,
        //             "victories": 0,
        //         }
        //     ],
    },
    // firebase binding
  // https://github.com/vuejs/vuefire
  firebase: {
    players: playersRef,
    matches: matchesRef
  },
    methods: {
        addGame() {
            this.newGame = true;

            if (confirm('Tu es sur ?')) {
                    this.checkWin();
                    matchesRef.push({
                        text:  this.selected1 + " - " + this.selected2 + " : " + this.score1 + " - " + this.score2
                        
                    });
                    this.resetGame();
                } 
            return true;
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
                  //  this.updateItem(element)
                  console.log(element)
                }
                if(this.selected2 == element.name) {
                    element.games = element.games+1    
                  //  this.updateItem(element)                                    
                }
                    console.log(element)
                
            }
                // delete element['.key']
                // playersRef.update(element)
            
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
                    console.log(element)
                }
            }
        },
        resetGame() {
            this.newGame = false;
            this.addGameScore = false;
            this.selected1 = "";
            this.selected2 = "";
            this.score1 = "";
            this.score2 = "";
        },
        removeGame() {

        }
    }
});

