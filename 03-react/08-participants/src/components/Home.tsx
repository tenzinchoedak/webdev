import * as React from "react";
import { Link } from "react-router-dom";


interface Participant {
	id: number;
	login: string;
	avatar_url: string
}

export default function Home() {
	const [users, setUsers] =  React.useState<Participant[] | null>(null); 
 
	React.useEffect(() => {
		fetch(
			'https://api.github.com/repos/Powercoders-Switzerland/2021-1-web-dev/contributors'
		)
			.then((response) => response.json())
			.then(setUsers);
	}, []);

	return <><ul>
		    {users === null ? (
          <p>loading</p>
        ) : (
          users.map((participant) => {
            const { id, login, avatar_url } = participant;
            return (
              <li key={id}>
                <Link to={`/User/${login}`}>
                  <img src={avatar_url}/>
									<h2>{login}</h2>
                </Link>
              </li>
            );
          })
        )}
		</ul></>;
}
