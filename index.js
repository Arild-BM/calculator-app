const root = document.getElementById("root")
let sign = "" // Type of calculation
let a // First number
let b // Second number
let newNumber = true // Make sure to start a new number after "="

// Set color theme
function setColor(color) {
    document.documentElement.className = color
}

// Show calculated number
function display(number) {
    screen.textContent = number.toString()
}

// Do calculation based
function calculate() {
    b = screen.textContent
    newNumber = true
    switch(sign) {
        case "+":
            display(parseFloat(((parseFloat(a) + parseFloat(b)).toFixed(14)).toString()))
          break;
        case "-":
            display(parseFloat(((parseFloat(a) - parseFloat(b)).toFixed(14)).toString()))
          break;
        case "*":
            display(parseFloat(((parseFloat(a) * parseFloat(b)).toFixed(14)).toString()))
          break;
        case "/":
            display(parseFloat(((parseFloat(a) / parseFloat(b)).toFixed(14)).toString()))
          break;
        default:
            display(parseFloat(parseFloat(screen.textContent)))
            sign = ""
      }
}

// Set type of calculation
function calc(func) {
    a = screen.textContent
    sign = func
    newNumber = true
}

// Input numbers. Make sure only one "." and no leading "0"
function number(input) {
    if (newNumber) {
        if (input === "." ) {
            if (!screen.textContent.includes(".")) {
                screen.textContent += input.toString()
            } else screen.textContent = "0."
            newNumber = false
        } else screen.textContent = input.toString()
        if (screen.textContent !== "0") {
            newNumber = false
        }
    } else if (input !== "." || !screen.textContent.includes(".")) {
        screen.textContent += input.toString()
    }
}

// Reset display
function reset() {
    screen.textContent = 0
    sign = ""
    newNumber = true
}

// Delete last digit/sign
function del() {
    screen.textContent = screen.textContent.slice(0, -1)
    if (screen.textContent === "") {
        screen.textContent = 0
        newNumber = true
    }
    if (screen.textContent === "0") {
        newNumber = true
    }

}

// Show calculator
root.innerHTML = 
    `<div class="flex-container">
        <div class="header">
            <h3>calc</h3>
            <div class="toggler">
                <div class="numbers">
                    <h6>1</h6>
                    <h6>2</h6>
                    <h6>3</h6>
                </div>
                <div class="theme">
                    <h6>THEME</h6>
                    <div class="dots">
                        <h5 class = "dark" onclick = "setColor('dark')"></h5>
                        <h5 class = "light" onclick = "setColor('light')"></h5>
                        <h5 class = "pink" onclick = "setColor('pink')"></h5>
                    </div>
                </div>
            </div>
        </div>
        <div id="display" class="item01" >0</div>
        <div class="grid-container">
            <div class="item02 main-keys" onclick = "number(7)" >7</div>
            <div class="item03 main-keys" onclick = "number(8)" >8</div>  
            <div class="item04 main-keys" onclick = "number(9)" >9</div>
            <div class="item05" onclick = "del()">DEL</div>
            <div class="item06 main-keys" onclick = "number(4)" >4</div>
            <div class="item07 main-keys" onclick = "number(5)" >5</div>
            <div class="item08 main-keys" onclick = "number(6)" >6</div>  
            <div class="item09 main-keys" onclick = "calc('+')" >+</div>
            <div class="item10 main-keys" onclick = "number(1)" >1</div>
            <div class="item11 main-keys" onclick = "number(2)" >2</div>
            <div class="item12 main-keys" onclick = "number(3)" >3</div>
            <div class="item13 main-keys" onclick = "calc('-')">-</div>  
            <div class="item14 main-keys" onclick = "number('.')" >.</div>
            <div class="item15 main-keys" onclick = "number(0)" >0</div>
            <div class="item16 main-keys" onclick = "calc('/')">/</div>
            <div class="item17 main-keys" onclick = "calc('*')">x</div>
            <div class="item18" onclick = "reset()">RESET</div>  
            <div class="item19" onclick = "calculate()" >=</div>
        </div>
    </div>`

    const screen = document.getElementById("display")