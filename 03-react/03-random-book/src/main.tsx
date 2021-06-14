import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

const books: string[] = [
  "Anna Karenina",
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "One Hundred Years of Solitude",
  "A Passage to India",
  "Invisible Man",
  "Don Quixote",
  "Beloved",
  "Mrs. Dalloway",
  "Things Fall Apart",
  "Jane Eyre",
  "The Color Purple",
];

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

const App = () => {
	const [book, randomBook] = React.useState(books[0]);

	const getRandomBook = () => {
		const number = Math.floor(Math.random() * books.length);
		 randomBook(books[number]);
	};
 
	return (
		<main>
			<p>{book}</p>
			<button onClick={getRandomBook}>
				Randombook
			</button>
		</main>
	);
};

ReactDOM.render(<App />, appDiv);
