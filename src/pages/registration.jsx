import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate =useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/login');
    };
    return (
        <div onSubmit={handleRegister} style={styles.container}>
            <h2>Registration </h2>
            <form >
                <input type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    style={styles.input}
                />


                <input

                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    style={styles.input}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    style={styles.input}
                />

                <button type='submit' style={styles.button}>Register</button>



            </form>

        </div>
    )
}
const styles = {
    container: {
        maxWidth: '350px',
        margin: '100px auto',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#f4f4f4',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
}

export default Register