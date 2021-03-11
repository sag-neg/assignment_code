import React, { useState } from 'react';
import '../AddUser.css';

export default function LoginForm(props) {
	const [data, setdata] = useState({});

	const nameEl = React.useRef(null);
	const emailEl = React.useRef(null);
	const phoneEl = React.useRef(null);
	const addressEl = React.useRef(null);

	const handleSubmit = e => {
		e.preventDefault();
		let formData = {
			name: nameEl.current.value,
			email: emailEl.current.value,
			phone: phoneEl.current.value,
			address: addressEl.current.value,

		}
		setdata(formData);
		// console.log(data);
	};
	return (

		<div>
			<h3> User data </h3>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="name" ref={nameEl} />
				<input type="email" placeholder="email" ref={emailEl} />
				<input type="number" placeholder="phone" ref={phoneEl} />
				<input type="text" placeholder="address" ref={addressEl} />
				<button type="submit" className="myButton">Submit Form</button>
			</form>
			<div>
				<table>
					<tr>
						<td data-label="Name">{JSON.stringify(data.name)}</td>
						<td data-label="Email">{JSON.stringify(data.email)}</td>
						<td data-label="Phone">{JSON.stringify(data.phone)}</td>
						<td data-label="Address">{JSON.stringify(data.address)}</td>
					</tr></table>
			</div>
		</div>

	)
}