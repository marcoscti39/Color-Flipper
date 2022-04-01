const button = document.querySelector(".btn-change")

button.addEventListener("click", changeColor)

function changeColor(){
    let colorGenerator = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

    let newColor = "#"

    for(let i=0; i < 6; i++){
        let choseColor = Math.floor(Math.random()*16)

        newColor += colorGenerator[choseColor]
    }
    document.querySelector(".change-color").textContent = newColor
    document.querySelector(".change-color").style.color = "rgb(38, 178, 243)"

    document.querySelector("body").style.backgroundColor = newColor
}