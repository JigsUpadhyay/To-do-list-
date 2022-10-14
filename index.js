let newTaskAdd =document.getElementById("newTaskAdd");
let AddTaskBtn =document.getElementById("AddTaskBtn");


AddTaskBtn.addEventListener("click",function(){
    newTaskAddVal = newTaskAdd.value
    let webtask = localStorage.getItem("localtask");
    if(webtask == null){
       task_recodes == [];
    }
    else{
        task_recodes = JSON.parse(webtask); 
    }
    task_recodes.push(newTaskAddVal);
    localStorage.setItem("localtask",JSON.stringify(task_recodes));
})
