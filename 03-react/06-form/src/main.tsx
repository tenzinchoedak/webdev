import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");


 interface UserForm {
	 firstName: string,
	 lastName: string,
	 age: number,
 }

function App(){

	const [data, setData] = React.useState<UserForm>({
		firstName: "",
		lastName: "",
		age: 0
	});
   
	
  return <>
	<form
	onSubmit={(e) => {
		e.preventDefault;
	  alert(data.firstName + " "+ data.lastName +" "+ " " + data.age)
	}} 
	>
		<label>Firstname</label><br/>
		<input type="text" value={data.firstName} onChange={(e) => {e.persist();
		setData((data) => ({
			...data,firstName: e.target.value
		}))
		}}/><br/>
		<label>Lastname</label><br/>
		<input type="text" value={data.lastName}  onChange={(e) => {e.persist();
		setData((data) => ({
			...data,lastName: e.target.value}))}}/><br/>
		<label>Age</label><br/>
		<input type="number" value={data.age}  onChange={(e) => {{e.persist();
		setData((data) => ({
			...data,age: parseInt(e.target.value)}))}}}/><br/>
		<input type="submit" value="submit"/>
	</form>
</>
}

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

ReactDOM.render(<App />, appDiv);
