const div = document.getElementsByClassName('todos')[0];
const addBtn = document.getElementsByTagName('button')[0];
let inputField = document.getElementsByTagName('input')[0];

var countToDo = 0
addBtn.addEventListener('click',()=>{
    let text = inputField.value;
    let p = document.createElement('p');
    p.setAttribute("key", countToDo);
    p.textContent = text;
    //p.setAttribute("onclick",'remove(this)')
    //p.addEventListener("click","remove()")
    p.addEventListener("click",function(){remove(this)},false)
    div.appendChild(p)
    countToDo += 1
})
function remove(elem){
    var element =elem
    element.remove();
}