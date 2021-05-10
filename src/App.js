import './App.css';
import Users from './components/users/Users';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
	return (
		<div>
			<Router>
				<Link to={'/users'}>to users</Link>
				<Link to={'/posts'}>to posts</Link>
				<Link to={'/comments'}>to comments</Link>

				<Switch>
					<Route path={'/users'} render={() => (<Users/>)}/>
					<Route path={'/posts'} render={() => (<Posts/>)}/>
					<Route path={'/comments'} render={() => (<Comments/>)}/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
