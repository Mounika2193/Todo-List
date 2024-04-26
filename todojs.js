const todoList=[];

function rendertodolist(){
    let totalhtml='';
    for(let i=0;i<todoList.length;i++){
        let todo=todoList[i]
        let newhtml=`<div id="box1"><li id="inpsize">${todo}
        <div id="box2">
        <button id="newbtn" onclick="todoList.splice(${i},1);
        rendertodolist();
        ">Delete</button>
        </div>
        </li></div>`;
        totalhtml+=newhtml;
    }
    console.log(totalhtml);
        document.querySelector('.makechange').innerHTML=totalhtml;

    }
function addtodo(){
    let inputele=document.querySelector('.inputs');
    let name=inputele.value;
    //let di=document.querySelector('.dateinput');
    //let duedate=di.value;
    todoList.push(name);
console.log(todoList);
    inputele.value='';

    rendertodolist();
}

