// selecting dom element
const textInput = document.querySelector("#inputPart");
const textOutput = document.querySelector("#showOutput");
const btn = document.querySelector("#submitInput");

// adding event listener to button
btn.addEventListener("click", fetchHandler);

// selecting loading div
const loader = document.querySelector("#loading");

// selecting form div


// showing loading
 function displayLoading(){
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 10000);


}

// hiding loading 
function hideLoading () {
    loader.classList.remove("display");
}

// hiding loading 
function hideForm () {
    const formDiv = document.querySelector("#input");
   
        formDiv.style.display = "none";
   
}



var url = "https://api.coindesk.com/v1/bpi/currentprice.json"

function fetchHandler(event) {
    hideForm()
    displayLoading()
    var input = textInput.value;
    var finalURL = buildURL(input);

    fetch(finalURL)
        .then(response => response.json())
        .then(json =>  {
            
            console.log(json)
            hideLoading()
            
           textOutput.innerText = json.time.updated;
          
        })
       
}


function buildURL (inputData) {
    return `${url}?text=${inputData}`;
}