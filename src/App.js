import "./App.css";
import Contact from "./components/Contact";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/weight'>
						<h1 className='main_heading'>Weight management </h1>
						<Contact />
					</Route>
					<Route path='/'>
						<Login />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
