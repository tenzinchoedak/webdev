import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

interface TodoItem {
	title: string;
	done: boolean;
	created: number
}




/*/


const sortTodos = () => 
	state.todos.sort((a,b) => a.title.localeCompare(b.title));

	const filteredTodos = () => {
		switch(state.filter) {
			case "All":
				return state.todos;
			case "Done":
				return state.todos.filter((it) => it.done);
			case "To do":
				return state.todos.filter((it) => !it.done);
			default:
				throw new Error("Unexpected filter.");
		}
	};
/*/


function App(){

 const saveLocal = localStorage.getItem("todos");
 const initialTodos = saveLocal === null ? [] : JSON.parse(saveLocal);

 const [todos, setTodos] = React.useState<TodoItem[]
 >(initialTodos);

const [newTodo, setNewTodo] = React.useState("");
const [filtered, setFiltered] = React.useState("all");

React.useEffect(()=>{
	localStorage.setItem("todos", JSON.stringify(todos));
},[todos]);

const filteredTodos = () => {
	switch(filtered) {
		case "all":
			return todos;
		case "completed":
			return todos.filter((it) => it.done);
		case "uncompleted":
			return todos.filter((it) => !it.done);
		default:
			throw new Error("Unexpected filter.");
	}
};

  return (
    <div className="App">
      <header>
        <h1>What's the plan for today?</h1>
      </header>
			<form onSubmit={(e) => {
				e.preventDefault();
				setTodos([
					...todos,{title: newTodo.toString(), done: false, created: Date.now()}
				]); setNewTodo("");

				}}>
				<input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
				<button type="submit"><i className="fas fa-plus-square"></i></button>
				<select value={filtered}	onChange={(e) => {setFiltered(e.target.value); 
				}}>
					<option value="all">All</option>
					<option value="completed">Done</option>
					<option value="uncompleted">To do</option>
				</select>
			</form>
			<ul>
				{filteredTodos().map((todo) => (
					<li key={todo.created} className={`todo-item ${todo.done ? "completed" : "" }`} >{todo.title}
					<button onClick={() => {
					 setTodos(todos.map((item) => {
						if(item.created === todo.created) {
							return {
								...item,done: true
							};
						}
						return item;
				 }));
					}} ><i className="fas fa-check"></i></button>
					<button onClick={() => {setTodos(todos.filter((el) => el.created !== todo.created));}}><i className="fas fa-trash"></i></button>
					</li>
				))}
			</ul>
    </div>
  );
}


ReactDOM.render(<App />, appDiv);
