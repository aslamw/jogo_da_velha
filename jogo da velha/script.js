




class Game{
	constructor(){
		
		this.state_jogador = true
		this.jogador1 = []
		this.jogador2 = []
		
		this.box1 = document.getElementById("box1")
		this.box2 = document.getElementById("box2")
		this.box3 = document.getElementById("box3")
		this.box4 = document.getElementById("box4")
		this.box5 = document.getElementById("box5")
		this.box6 = document.getElementById("box6")
		this.box7 = document.getElementById("box7")
		this.box8 = document.getElementById("box8")
		this.box9 = document.getElementById("box9")
		
		this.button = document.getElementById("reset")
		
	}
	
	
	type_gamer(index,box){
		if(this.jogador){
			this.state_jogador = false
			this.jogador1.push(index)
			box.classList.add("jogador1")
		}
		else{
			this.state_jogador = true
			this.jogador2.push(index)
			box.classList.add("jogador2")
		}
	}
	
	this.box1.addEventListener("click", () => {
		this.type_gamer(1,this.box1)
		
		console.log(this.jogador,this.jogador1)
		
	})
	
	
}