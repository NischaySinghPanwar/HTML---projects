const random_number = Math.floor(Math.random() * 100+1);
console.log(random_number);
let submit = document.getElementById("button");
let attempts = 10;

function win() {
  let win_div = document.createElement("div");
  win_div.id='section_2'
  win_div.innerHTML = ` 
                        <div class="win">
                            <div id="win_2"> <span> u have guessed <br>the wright number</span> </div>
                        </div>
                        `;
document.body.appendChild(win_div)
}
let attempts_text = document.getElementById('attempts')
function check() {
let value = document.getElementById("input").value;
value = parseInt(value)
if(value ===''){
    alert('please enter a valid number')
}else{
    if(isNaN(value)||value >100||value<1){
        alert('Please guess a number which lie inside the range of 1-100')
    }
    else{
        if (value.innerHTML == random_number){
            win();  
        }
        else{
            attempts--;
            attempts_text.innerHTML = attempts
            if(attempts !=0){
                alert(`Wrong guess . now u only have ${attempts} remaining`)
            }
            else{
                alert('No attempts are remainn')
            }
        }
    }
}
}


submit.addEventListener("click", check);