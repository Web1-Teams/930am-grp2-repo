import React, { useState } from "react";
import "./CreateAccount.css";
import s from "../images/signup.jpg";

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        termsChecked: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === 'checkbox' ? checked : value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [id]: '', 
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            alert('Account created successfully!');
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = () => {
        const { firstName, lastName, email, phone, password, confirmPassword, termsChecked } = formData;
        const newErrors = {};

        if (!firstName.trim()) {
            newErrors.firstName = "First Name is required.";
        }
        if (!lastName.trim()) {
            newErrors.lastName = "Last Name is required.";
        }
        if (!validateEmail(email)) {
            newErrors.email = "Invalid email address.";
        }
        if (!phone.trim()) {
            newErrors.phone = "Phone Number is required.";
        }
        if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }
        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }
        if (!termsChecked) {
            newErrors.termsChecked = "You must agree to the Terms & Conditions.";
        }

        return newErrors;
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div id="create-account-body">
            <div id="create-account-image">
                <img src={s} alt="Signup" />
            </div>

            <div id="create-account-container">
                <h2 id="create-account-title">Create Account</h2>
                
                <form onSubmit={handleSubmit} id="create-account-form">
                    <label htmlFor="firstName" className="create-account-label">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        className="create-account-input"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                    />

                    <label htmlFor="lastName" className="create-account-label">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        className="create-account-input"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                    />

                    <label htmlFor="email" className="create-account-label">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        className="create-account-input"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />

                    <label htmlFor="phone" className="create-account-label">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        className="create-account-input"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                    />

                    <label htmlFor="password" className="create-account-label">Password</label>
                    <input
                        type="password" 
                        id="password"
                        className="create-account-input"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />

                    <label htmlFor="confirmPassword" className="create-account-label">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="create-account-input"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Re-enter your password"
                    />

                    <div id="create-account-checkbox">
                        <label>
                            <input
                                type="checkbox"
                                id="termsChecked"
                                className="create-account-input"
                                checked={formData.termsChecked}
                                onChange={handleChange}
                            />{' '}
                            I agree to the <a href="#"id="create-account-checkbox-anchor">Terms & Conditions</a>
                        </label>
                    </div>

                    <button type="submit"id="create-account-button">Create Account</button>

                
                    {Object.keys(errors).length > 0 && (
                        <div id="create-account-error-message">
                            <h4>Please fix the following errors:</h4>
                            <ul>
                                {Object.entries(errors).map(([field, error]) => (
                                    <li key={field}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;
