
function solve() {
    let btnAdd = document.querySelector(".add");
    let inputTitle = document.querySelector(".task-title");
    let inputDescription = document.querySelector(".task-description");

    btnAdd.addEventListener("click",addTask);

    function addTask() {
        if(inputTitle.value!=="" && inputDescription.value!==""){
            let ul =document.querySelector(".toDo");
            let li = document.createElement("li");
            let h3 = document.createElement("h3");
             h3.textContent = inputTitle.value;

            let p = document.createElement("p");
            p.textContent = inputDescription.value;

            let btn = document.createElement("button");
            btn.type="button";



            btn.textContent="Move To In Progress";

            li.appendChild(h3);
            li.appendChild(p);
            li.appendChild(btn);
            ul.appendChild(li);

            inputTitle.value="";
            inputDescription.value="";
            btn.addEventListener("click" ,move);
            function move(e){
                console.log("aaa")
                let btn = e.currentTarget;
                if(btn.textContent==="Move To In Progress"){
                    let ul = document.querySelector(".inProgress");
                    btn.textContent="Move To Code Review";
                    ul.appendChild(li);

                }else if(btn.textContent==="Move To Code Review"){
                    let ul = document.querySelector(".codeReview");
                    btn.textContent="Move To Done";
                    ul.appendChild(li);
                }else  if(btn.textContent==="Move To Done"){
                    let ul = document.querySelector(".done");
                    btn.textContent="Done";
                    ul.appendChild(li);
                }else  if(btn.textContent==="Done"){
                    let p = document.querySelector(".comment");



                    setTimeout(()=> {
                        p.style.display="block"


                    },300);

                    setTimeout(()=> {
                        p.style.display="none"


                    },2000);





                    li.remove();
                }


            }
        }


    }



}
solve()