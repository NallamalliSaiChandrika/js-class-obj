const div = document.getElementsByClassName('todos')[0];
const addBtn = document.getElementsByTagName('button')[0];
let inputField = document.getElementsByTagName('input')[0];

var countToDo = 0
addBtn.addEventListener('click',()=>{
    let text = inputField.value;
    let vari = document.createElement('p');
    vari.setAttribute("key", countToDo);
    vari.textContent = text;
    vari.addEventListener("click",function(){remove(this)},false)
    div.appendChild(vari)
    countToDo += 1
})
function remove(elem){
    var element =elem
    element.remove();
}