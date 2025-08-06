import React from 'react'
import useParams from '../react-router/hooks/useParams';

export default function UserDetails() {
    console.log(useParams());
    return (
        <div>
            <h1>User Details</h1>
            <ul>
                <li><strong>Name:</strong> {useParams().id}</li>
                <li><strong>Email:</strong> johndoe@example.com</li>
                <li><strong>Joined:</strong> January 1, 2024</li>
            </ul>
            {/* Add more detailed user information here */}
        </div>
    );
}
