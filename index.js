let input = document.getElementById("inputfield");
let button = document.querySelectorAll("button");

let string = "";
let arr = Array.from(button);
arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            // replace X and ÷ with * and  because i written x and divide in button js dont recognise it. 
            // so usinh g commad it replace multiple time to actual method/
            string = string.replace(/X/g, "*").replace(/÷/g, "/");
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            let operators = ["+", "-", "X", "÷", "%"];
            let lastChar = string[string.length - 1];

            if (operators.includes(e.target.innerHTML) && operators.includes(lastChar)) {
                // prevent duplicate operators
            } else {
                string += e.target.innerHTML;
                input.value = string;
            }
        }
    });
});
