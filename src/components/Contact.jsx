import React, { useState, useEffect } from "react";
import "./contact.css";
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";
const Contact = () => {
	var [contactObj, setContactObj] = useState({});
	var [currentId, setCurrentId] = useState("");
	useEffect(() => {
		firebaseDb.child("contacts").on("value", (snapshot) => {
			if (snapshot.val() != null) {
				setContactObj({ ...snapshot.val() });
			}
		});
	}, []);
	const addOrEdit = (obj) => {
		if (currentId === "") {
			firebaseDb.child("contacts").push(obj, (err) => {
				if (err) console.log(err);
				else setCurrentId("");
			});
		} else {
			firebaseDb.child(`contacts/${currentId}`).set(obj, (err) => {
				if (err) console.log(err);
				else setCurrentId("");
			});
		}
	};
	const onDelete = (id) => {
		if (window.confirm("Are you sure")) {
			firebaseDb.child(`contacts/${id}`).remove((err) => {
				if (err) console.log(err);
				else setCurrentId("");
			});
		}
	};

	return (
		<>
			<div className='main_container'>
				<ContactForm {...{ addOrEdit, currentId, contactObj }} />

				<div className='weight_list'>
					<table className='customTable'>
						<thead>
							<tr>
								<th>Name</th>
								<th>Weight</th>
								<th>Edit</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{Object.keys(contactObj).map((id) => {
								return (
									<tr key={id}>
										<td>{contactObj[id].fullName}</td>
										<td>{contactObj[id].weight}</td>
										<td>
											<i
												onClick={() => setCurrentId(id)}
												className='edit-btn fas fa-edit'></i>
										</td>
										<td>
											<i
												onClick={() => onDelete(id)}
												className='delete-btn fas fa-trash'></i>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Contact;
