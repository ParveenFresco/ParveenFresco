var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    "--74916-5",
    "2---6-3-9",
    "56---7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7-8-2",
    "67-83--41",
    "81--45-63"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]
console.log("Sol",solution)

// var boardEasy = [
//     "84-93---2",
//     "3-96258-7",
//     "75-18-9-3",
//     "28-71-69-",
//     "4-38--27-",
//     "9712--",
//     "9-4-7---2",
//     "67-83----",
//     "81--45---"
// ]

// var solutionEasy = [
//     "387491625",
//     "241568379",
//     "569327418",
//     "758619234",
//     "123784596",
//     "496253187",
//     "934176852",
//     "675832941",
//     "812945763"
// ]

window.onload = function() {
    setGame();
}

function setGame() {
    // Digits 1-9
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);  // this target number and get number div element
        // console.log("numberr===<<>>>>",number)
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }
    

    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
          
           
            tile.id = r.toString() + "-" + c.toString();


            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }



            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }



            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }


            console.log("tile--->>>",tile)
            tile.addEventListener("click", selectTile);

            tile.classList.add("tile");

            document.getElementById("board").append(tile);
        }
    }
}


function selectNumber(){
       // remove class if not selected
    if (numSelected != null) {
        // console.log("numselected if inside-->",numSelected)
        numSelected.classList.remove("number-selected");
    }
     
     ////// if selected than add class "number-selected"
    numSelected = this; // we get number div here with the help of "this"
    // console.log("numSelected--->>>>",numSelected)

    // console.log("this-->",numSelected.classList)

    numSelected.classList.add("number-selected");
}


function selectTile() {

    if (numSelected) {
        console.log("numSelected--->=>=>",numSelected)
        if (this.innerText != "") {
            return;
        }

        // "0-0" "0-1" .. "3-1"
         console.log("this.id->",this.id)
         // we have id="8-2" just suppose
         let coords = this.id.split("-"); //["0", "0"]
         
         // After split id will be ['8','2'] split return the array and now you have id in array with index 0 and 1 
         // and you will get id with index number 0 and 1 
        //  console.log("after split==>",coords)
         // we use parseInt to convert string into number
        let r = parseInt(coords[0]);
        // console.log("r", r);
        let c = parseInt(coords[1]);
        // console.log("c", c);

        // console.log("solutionRandC//",solution[r][c])
        // console.log("numSelected.id//",numSelected.id)


        // if solution array value and numberSelected value will be equal than selected value printed..
        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
            console.log("print=>this",this)
        }               
        else {
            errors = errors+1;
            document.getElementById("errors").innerText = "Error - " + errors;
            
        }
    }
}

function showSolve(){
         
    for(var r=0;r<9;r++){
        for(var c=0;c<9;c++){
           
         var sol= document.getElementById(`${r}-${c}`).innerText = solution[r][c];;
        //  console.log("sol",sol)

        }
    }

}



  