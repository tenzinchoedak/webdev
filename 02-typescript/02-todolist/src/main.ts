
const appMain: Element | null = document.getElementById("app");

if (!(appMain instanceof HTMLDivElement)) {
	throw new Error("No id 'app' found");
}

//state of Application and Initialize Array 

type State = {
  title: string,
  done: boolean,
}[];

let toDo: State = [];

//get input
const getInput = (
  input: HTMLInputElement
): string => {
  const result = input.value;
  return result;
}

//render the Application 

const render = () => {
  appMain.innerHTML = "";
  //add <ul>
  const todoUl = document.createElement("ul");
 //add <li>
 for(const i of toDo) {
  const todoLi = document.createElement("li");
		todoLi.textContent = i.title;
		todoUl.appendChild(todoLi);
    const todoCheck = document.createElement("input");
	  todoCheck.setAttribute("type", "checkbox");
    todoLi.appendChild(todoCheck);
  }
 //add <input>
    const todoInput = document.createElement("input");
    todoInput.setAttribute("type", "text");
    appMain.appendChild(todoInput);
    
//add <button>
  const todoButton = document.createElement("input");
	todoButton.setAttribute("type", "submit");
	todoButton.setAttribute("value", "Add New Task");
  appMain.appendChild(todoButton);
//add <p>
todoButton.addEventListener('click', (event) => {
  event.preventDefault();
  toDo.push({title: getInput(todoInput), done: false});
  render();
});
appMain.appendChild(todoUl);
}
render();