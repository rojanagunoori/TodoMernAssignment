import React, { useEffect, useState } from 'react'
import API_URL from '../config.js';
import axios from 'axios';
import { toast } from "react-toastify";

const Profile = ({ token, onLogout }) => {
    console.log(token)
    const [user, setUser] = useState({ name: '', email: '' });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`${API_URL}/profile`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(response.data);
            } catch (error) {
              
                if (error.response) {
                    toast.error(error.response.data.message || "Failed to fetch profile!");
                } else {
                    toast.error("Network error!");
                }
            }
        };
        if (token) {
            fetchProfile();
        }
    }, [token]);
    

    const handleUpdate=async(e)=>{
        e.preventDefault();
        await axios.put(`${API_URL}/updateprofile`,user,{
            headers:{Authorization:`Bearer ${token}`}
        })
        toast.success("Profile Updated successful!");
        setIsEditing(false)
    }

    const handleDelete=async()=>{
        await axios.delete(`${API_URL}/deleteprofile`,{
            headers:{Authorization:`Bearer ${token}`}
        })
        toast.success("Profile deleted successful!");
        onLogout();
    }
    return (
        <div>
            <h2>Profile</h2>
            {isEditing ? (
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input id='name' type='text' value={user.name}
                            onChange={(e => setUser({ ...user, name: e.target.value }))} />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input id='email' type='email' value={user.email}
                            onChange={(e => setUser({ ...user, email: e.target.value }))} />
                    </div>
                    <button type='submit'>Update Profile</button>
                    <button type='button' onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <div>
                    <p><strong>Name: </strong>{user.name}</p>
                    <p><strong>Email: </strong>{user.email}</p>
                    <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                    <button onClick={handleDelete}>Delete Profile</button>
                </div>

            )}
        </div>
    )
}

export default Profile