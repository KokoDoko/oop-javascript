import { Ball } from "./ball.js"

class Game {

    // private field
    #balls = []

    constructor() {

        let b = 4
        b = "hoi"






        for (var i = 0; i < 15; i++) {
            this.#balls.push(new Ball(this))
        }
        this.gameLoop()        
    }
    
    // private method is not allowed yet
    gameLoop() {
        for (let b of this.#balls) {
            b.update()
        }
        requestAnimationFrame(() => this.gameLoop())
    }

    removeFromArray(ball){
        this.#balls = this.#balls.filter(b => b !== ball)
    }
    
} 

window.addEventListener("load", () => new Game())