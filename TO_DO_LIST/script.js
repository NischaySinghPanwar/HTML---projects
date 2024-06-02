let button = document.getElementById("button");
function create_a_div() {
  let new_div = document.createElement("div");
  let text = document.getElementById("text");
  new_div.innerHTML = `  
<div class="child">
    <div class="list_box">
        <input type="checkbox" />
        <div class="task_text">${text.value}</div>
</div>
</div>
`;
  document.getElementById("main").appendChild(new_div);
  new_div.value = "";
}

button.addEventListener("click", create_a_div);
