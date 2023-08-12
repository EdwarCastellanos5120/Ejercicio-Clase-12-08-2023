let add = document.querySelector("#add");
let substract = document.querySelector("#substract");

//console.log(add,substract + ' is working');

add.addEventListener("click", function() {
    let output = document.querySelector("#output");
    let result = parseInt(output.innerText) + 1;
    if(result > 10) {
        alert("Maximo Alcanzado")
        result = 0;
        output.innerText = result;
        
    }
    else {
        output.innerText = result;
    }

    
});


substract.addEventListener("click", function() {
    let output = document.querySelector("#output");
    let result = parseInt(output.innerText) - 1;
    output.innerText = result;
    if(result < 0) {
        alert("Minimo Alcanzado")
        result = 0;
        output.innerText = result;
        
    }
    else {
        output.innerText = result;
    }
});
