import * as React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

interface User {
  avatar_url: string;
  bio: string;
  location: string;
	created_at: string;
	html_url: string;
	followers: number;
	public_repos: number
}

export default function User() {
	const params = useParams<{ username: string }>();
	const [user, setUser] = React.useState<User | null>(null);
	const [errorMessage, setErrorMessage] = React.useState("");

	React.useEffect(() => {
    fetch(`https://api.github.com/users/${params.username}`).then((response) => {
      if (response.status !== 200) {
        response.json().then((data) => setErrorMessage(data.message));
      } else {
        response.json().then(setUser);
      }
    });
  }, []);

  if (errorMessage) {
    return (
      <>
        <Link to="/">Back Home</Link>
        <p>{`Error: ${errorMessage}`}</p>
      </>
    );
  }
  if (user === null) {
    return (
      <>
        <Link to="/">Back Home</Link>
        <p>Loading...</p>
      </>
    );
  }
const { bio, avatar_url,location,created_at,followers,public_repos,html_url} = user;

	return <>
	<article>
        <img src={avatar_url} alt="profile-image" />
				<a href={html_url} target="_blank">
				<h1>{params.username}</h1></a>
				<p>followers:{followers}</p>
				<p>public_repos: {public_repos}</p>
          <p>{bio}</p>
					<p>Created :{created_at}</p>
          <p>{location}</p>
      </article>
	<Link to="/">Back Home</Link>
	</>
}
