export class Ball {
    
    // private fields
    #div
    #game
    
    #x = 0
    #y = 0
    #speedX = 0
    #speedY = 0
    
    constructor(g) {
        this.#game = g
        this.#div = document.createElement("ball")
        document.body.appendChild(this.#div)

        this.#x = (Math.random() * (window.innerWidth/2)) + (window.innerWidth/4)
        this.#y = (Math.random() * (window.innerHeight/2)) + (window.innerHeight/4)
        
        this.#speedX = Math.round(Math.random() * 10) - 5
        this.#speedY = Math.round(Math.random() * 8) - 4

        this.#div.addEventListener("mousedown", () => this.removeBall())
    }

    removeBall(){
        this.#game.removeFromArray(this)
        this.#div.remove()
    }
    
    update() {
        this.#x += this.#speedX
        this.#y += this.#speedY
        
        if( this.#y + 40 > window.innerHeight || this.#y < 0) { 
            this.#speedY *= -1
        }
        
        if (this.#x + 40 > window.innerWidth || this.#x < 0 ) { 
            this.#speedX *= -1
        } 
                        
        this.#div.style.transform = `translate(${this.#x}px, ${this.#y}px)` 
    }
}