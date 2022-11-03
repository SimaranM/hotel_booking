import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./AccountDetails.css";

const AccountDetails=(data)=>{

    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3200/users/:id";
			const { data: res } = await axios.put(url, data);
			navigate("/");
			console.log(res);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    return(
        <div>
            <section className="account-details">
                  <div className="account-details-container">
                    <h2>Account Details</h2>
                    <form className="form-container" onSubmit={handleSubmit}>
                    <input
								type="text"
								placeholder="First Name"
								name="firstName"
								onChange={handleChange}
								value={data.firstName}
								required
								className="input"
							/>
                     <input
								type="text"
								placeholder="Last Name"
								name="LastName"
								onChange={handleChange}
								value={data.firstName}
							    required
								className="input"
							/>
                            <input
								type="email"
								placeholder="Email"
								name="email"
								onChange={handleChange}
								value={data.email}
								required
								className="input"
							/>
                            <input
								type="password"
								placeholder="Password"
								name="password"
								onChange={handleChange}
								value={data.password}
								required
								className="input"
							/>
                            <button type="submit" className="green_btn">
								Update
							</button>

                    </form>
                   
                  </div>
                      
             </section>

        </div>
    )
}
export default AccountDetails;