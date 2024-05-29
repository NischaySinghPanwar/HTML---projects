let output = document.querySelector('#output')
let buttons = document.querySelectorAll('.buttons_of_numbers')

let first_input = ''
let second_input = ''
let opretor = null;


function update_window() {
    output.innerHTML = first_input
}
function button_click(event) {
    let value = event.target.innerText;
    // console.log(value);
    if (value != NaN || value === '.') {
        first_input += value;
        update_window();
    }

    if (value === "x" || value === "+" || value === "_" || value === "÷") {
        if (first_input === '') return;
        if (second_input !== '') {
            calculate();
        }
        opretor = value;
        second_input = first_input;
        first_input = ''
    }
    if (value === '=') {
        calculate();
        update_window()
        second_input = '';
        opretor = null;
    }
    if (value === 'DEL') {
        first_input = first_input.slice(0, -4)
        update_window();
    }
    if (value === 'AC') {
        first_input = ''
        second_input = ''
        opretor = null;
        update_window();
    }
}
function calculate() {
    let result;
    const first = parseFloat(first_input)
    const second = parseFloat(second_input)

    switch (opretor) {
        case '+':
            result = second + first;
            break;
        case 'x':
            result = second * first;
            break;
        case '_':
            result = second_input - first_input;
            break;
        case '÷':
            result = second / first;
            break;
        default:
            return;
    }
    first_input = result.toString()
    opretor = null;
}


buttons.forEach((button) => {
    button.addEventListener('click', button_click)
})


