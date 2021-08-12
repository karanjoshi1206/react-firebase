import React, { useState } from "react";
import "./login.css";
import { auth } from "../firebase";
import { useHistory } from "react-router";
const Login = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const login = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/weight");
			})
			.catch((e) => alert(e.message));
	};
	const register = (e) => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/weight");
			})
			.catch((e) => alert(e.message));
	};
	return (
		<div className='login'>
			<div className='loginContainer'>
				<h1>Sign In</h1>
				<form>
					<label htmlFor='email'>Email</label>
					<input
						autoComplete='off'
						id='email'
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label htmlFor='password'>Password</label>
					<input
						autoComplete='off'
						id='password'
						type='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className='submit-btn' onClick={login} type='submit'>
						Sign In
					</button>
					<button className='submit-btn' onClick={register}>
						Create your Account
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
