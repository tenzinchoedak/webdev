import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}


interface ImageSearch {
	id: number;
	webformatURL: string;
}

const App = (): JSX.Element => {
	const [image, SetImage] = useState<ImageSearch[] | null>(null);
	const [keys, setKeys] = useState("");
	const [info] = useState("");
	const aipKey = "22075551-4fc5479137d70b93f6424a4f9";
	const url = new URL("https://pixabay.com/api/");

	url.searchParams.append("key", aipKey);
	url.searchParams.append("q", keys);
	url.searchParams.append("per_page", "10");
	url.searchParams.append("image_type", "photo");

	const fetchImage = async () => {
		const response = await fetch(url.toString());
		const json = await response.json();
		const photos = json.hits;
		SetImage(photos)
	};
	return (
		<main>
			<div className="image-card">
				<input type="text" value={keys} onChange={(e) => {
					setKeys(e.target.value);
				}}/>
				<button
					onClick={() => {
						fetchImage();
					}}
				>
					Search Image
				</button>
			</div>
			{image=== null
          ? info
          : image.map((photo) => {
              const { id, webformatURL } = photo;
              return (
                <li key={id}>
                  <img src={webformatURL} alt={keys} />
                </li>
              );
            })}
		</main>
	);
};

ReactDOM.render(<App />, appDiv);
