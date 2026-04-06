import React, { useState } from 'react'
import API_URL from '../config.js';
import axios from 'axios';
import { toast } from "react-toastify";


const Auth = ({ onLogin }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = isLogin ? `${API_URL}/login` : `${API_URL}/signup`
        const payload = isLogin ? { email, password } : { name, email, password }

        try {
            const response = await axios.post(url, payload)
            if (isLogin) {
                localStorage.setItem("token", response.data.token)
                onLogin(response.data.token)
                toast.success("Login successful!");
                //toast.success(response.data.message);
            } else {
                toast.success("Signup successful! You can now log in.");
               // toast.error(response.data.message);
                setIsLogin(true)
            }

        } catch (error) {
            const errorMessage = error.response?.data?.message || "An error occurred. Please try again.";
            toast.error(errorMessage);
            toast.error(error.response.data.message)
        }
    }

    return (
        <div className="auth-container">
            <h2>{isLogin ? "Login" : "Signup"}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input id="name" type='text' value={name} onChange={e => setName(e.target.value)} required />
                    </div>
                )}
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input id="email" type='email' value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
                <button type='submit'>{isLogin ? "Login" : "Signup"}</button>
                <button type='button' onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Create an account' : 'Already have an account?'}
                </button>
            </form>
        </div>
    )
}

export default Auth