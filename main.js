let input = document.getElementById("input")
let today = document.getElementById("today")
let after = document.getElementById("after")
let todaylist = document.getElementById("todaylist")
let futurelist = document.getElementById("futurelist")

function addtask(list){
    let inputText = input.value.trim()
    let taskitem = document.createElement("li")
    taskitem.textContent = inputText
    list.appendChild(taskitem)
}

today.addEventListener("click",  function(){
    addtask(todaylist)
})

after.addEventListener("click",  function(){
    addtask(futurelist)
})