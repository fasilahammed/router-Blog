import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  
     const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '300px',
    margin: '100px auto',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    padding: '10px',
    fontSize: '16px'
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px'
  }
};

export default Login;
