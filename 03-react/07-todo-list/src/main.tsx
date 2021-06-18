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

interface State {
	todos: TodoItem[];
	filter: string;
}
const initialState: State = {
	todos: [
		{
			title: "Learn HTML",
			done: true,
			created: 1
		},
	],
	filter: "All",
};

const storedState = localStorage.getItem("state");
let state: State = storedState
        ? JSON.parse(storedState)
				: initialState;

const saveState = () => 
   localStorage.setItem("state", JSON.stringify(state));

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

function App(){
 const [todos, setTodos] = React.useState<TodoItem[]
 >([{
	title: "Add your todo list!",
	done: false,
	created: 1
 }]);

const [newTodos, setNewTodos] = React.useState("");
const [filtered, setFiltered] = React.useState("");



  return (
    <div className="App">
      <header>
        <h1>What's the plan for today?</h1>
      </header>
			<form onSubmit={(e) => {
				e.preventDefault();
				setTodos([
					...todos,{title: newTodos.toString(), done: false, created: Date.now()}
				]); setNewTodos("");

				}}>
				<input type="text" value={newTodos} onChange={(e) => setNewTodos(e.target.value)}/>
				<button type="submit"><i className="fas fa-plus-square"></i></button>
				<select value={filtered}	onChange={(e) => {setFiltered(e.target.value);
				}}>
					<option value="all">All</option>
					<option value="completed">Done</option>
					<option value="uncompleted">To do</option>
				</select>
			</form>
			<ul>
				{todos.map((todo,index) => (
					<li key={index} className={`todo-item ${todo.done ? "completed" : "" }`} >{todo.title}
					<button onClick={() => {todo.done = true;
					 setTodos(todos.map((item) => {
						if(item.created === todo.created) {
							return {
								...item
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
