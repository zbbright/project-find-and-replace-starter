let rows = document.querySelectorAll(".row")
let searchSubmit = document.querySelector("#submit-search")
let searchInputElement = document.querySelector("#search-input")
let replaceInputElement = document.querySelector("#replace-input")

searchSubmit.addEventListener("click", function (){
    let searchInputValue = searchInputElement.value
    let replaceInputValue = replaceInputElement.value
    for(let i = 0; i < rows.length; i++){
        let currentRow = rows[i]
        let cells = currentRow.querySelectorAll(".cell")
        // for(let j = 0; j < cells.length; j++){
        //     let currentCell = cells[j]
        //     if(currentCell.innerHTML === searchInputValue){
        //         currentCell.innerHTML = replaceInputValue
        //         return
        //     }
        // }
    }
    
})



