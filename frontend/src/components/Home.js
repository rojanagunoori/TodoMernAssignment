import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ token }) => {
    return (
        <div className="home-container" style={{ alignItems: "center", textAlign: "center", padding: "20px" }}>
            <h2>Welcome to the Todo App</h2>
            {token ? (
                <>
                    <p>You are logged in!</p>
                    <Link to="/tasks">
                        Go to Your Tasks
                    </Link>
                </>
            ) : (
                <>
                <p>Please log in or sign up to manage your tasks.</p>
                <Link to="/login">Go to Login/Signup</Link>
                </>
            )}
        </div>
    );
};

export default Home;

