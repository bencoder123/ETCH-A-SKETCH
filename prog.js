const divContainer = document.getElementById('container')
divContainer.setAttribute('style',	"display:block;		width:960px;	height:960px;	margin:15px auto")

function randomColorGenerator(){
	let hexStr = '0123456789ABCDEF'
	let color= '#'
	for (var i = 0; i < 6; i++) {
		color += hexStr[Math.floor(Math.random()*16)]	
	}
	return color
}

function gridGenerator(size){
	for (var row = 0 ;row < size; row++){
		const grid_row = document.createElement('div')
		grid_row.classList.add(`grid-row`)
		divContainer.appendChild(grid_row)
		for (var i = 0; i < size; i++) {
			const rowDivs = document.createElement('div')
			rowDivs.style.opacity = '1'
			rowDivs.classList.add('box')
			rowDivs.setAttribute('style',	`float:left;	width:${960/size}px;	height:${960/size}px;			
				border:0.1px solid black;	box-sizing: border-box;opacity:1`)
			grid_row.appendChild(rowDivs)
	}
}

const allBoxes = document.querySelectorAll('.box')
allBoxes.forEach(function(box){
	box.addEventListener('mouseover',function(e){
		box.style.backgroundColor = randomColorGenerator() //'black' 
		box.style.opacity -= 0.1
		})
	})
}

gridGenerator(64)
		
const btn = document.querySelector('.btn')

btn.addEventListener('click',function(){
	const size = prompt("enter size of grid (16-64): ")
	if(!size) return
	const grid_row = document.querySelectorAll('.grid-row')
	grid_row.forEach(function(box){
	divContainer.removeChild(box)
	})

	gridGenerator(size)
})
