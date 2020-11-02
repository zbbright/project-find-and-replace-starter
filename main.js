const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell");
}


// YOUR CODE GOES HERE
const cellElements = []

for(let rowIndex = 0; rowIndex < rowElements.length; rowIndex++){
    cellElements.push(getCellElements(rowElements[rowIndex]));
}

inputString = ""
replacementString = ""

replaceAllButton.addEventListener('click', function(){
    inputString = findInput.value;
    replacementString = replaceInput.value;

    for(let rowIndex = 0; rowIndex < cellElements.length; rowIndex++){  
        for(let columnIndex = 0; columnIndex < cellElements[rowIndex].length; columnIndex++){
            if(cellElements[rowIndex][columnIndex].innerText.includes(inputString) === true){
                cellElements[rowIndex][columnIndex].innerHTML = cellElements[rowIndex][columnIndex].innerHTML.replace(inputString, replacementString);
            }
        }
    }
})