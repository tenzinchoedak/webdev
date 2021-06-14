import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

/**
 * Convert a string to an integer.
 * 
 * Returns 0 if the string can not be converted.
 */
const toInt = (
	value: string
): number => {
	const result = parseInt(value);
	return isNaN(result) ? 0 : result;
};

const App = (): JSX.Element => {
	const [a, setA] = React.useState("");
	const [b, setB] = React.useState("");

  const conversionF = (e:React.ChangeEvent<HTMLInputElement>) => {
		setA(e.target.value);
		const celsius = toInt(e.target.value) *1.8 + 32;
		setB(celsius.toString());
	}
  
	const conversionC = (e:React.ChangeEvent<HTMLInputElement>) => {
		setB(e.target.value);
		const fahrenheit = toInt(e.target.value)  - 32 / 1.8;
		setA(fahrenheit.toString());
	}
	return (
		<main>
			<input
				type="number"
				value={a}
				placeholder="C°"
				onChange={(e) => conversionF(e)}
			/>
			{" = "}
			<input
				type="number"
				value={b}
				placeholder="F°"
				onChange={(e) => conversionC(e)}
			/>
		</main>
	);
};

ReactDOM.render(<App />, appDiv);
