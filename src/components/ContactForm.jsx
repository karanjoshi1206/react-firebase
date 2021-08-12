import React, { useState, useEffect } from "react";
import "./contact.css";
const ContactForm = (props) => {
	const initialValue = {
		fullName: "",
		weight: 0,
		time: "",
	};
	const [values, setValues] = useState(initialValue);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
			time: new Date().toLocaleTimeString(),
		});
	};
	useEffect(() => {
		if (props.currentId === "") {
			setValues({ ...initialValue });
		} else {
			setValues({ ...props.contactObj[props.currentId] });
		}
	}, [props.currentId, props.contactObj]);
	const handleFormSubmit = (e) => {
		e.preventDefault();
		props.addOrEdit(values);
	};
	return (
		<>
			<div className='form_container'>
				<form className='weight_form' onSubmit={handleFormSubmit}>
					<label htmlFor='fullName'>Enter your Name</label>
					<input
						autoComplete='off'
						onChange={handleInputChange}
						type='text'
						value={values.fullName}
						name='fullName'
						id='fullName'
					/>
					<label htmlFor='weight'>Enter your weight</label>
					<input
						autoComplete='off'
						onChange={handleInputChange}
						type='number'
						value={values.weight}
						name='weight'
						id='weight'
					/>

					<button className='submit_btn'>
						{props.currentId === "" ? "Submit" : "update"}{" "}
					</button>
				</form>
			</div>
		</>
	);
};

export default ContactForm;
