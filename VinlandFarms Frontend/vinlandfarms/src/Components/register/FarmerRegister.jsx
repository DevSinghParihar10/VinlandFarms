import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function FarmerRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [age, setAge] = useState(0);
  const [accountNumber, setAccountNumber] = useState('');
  const history = useHistory();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      password,
      gender,
      location,
      age,
      accountNumber,
      
    };

    try {
        // Send formData to the API for farmer registration
        
        const response = await axios.post('http://localhost:5006/public/registerFarmer', formData);
  
        // Handle the response as needed, e.g., show a success message or redirect to a login page
        console.log('Registration successful:', response.data);
        alert("Registration succcessfull... Check your email for confirmation\nRedirecting to login page");
        history.push('/login');
      } catch (error) {
        // Handle registration error, e.g., display an error message or handle server-side validation errors
        console.error('Registration failed:', error);
      }
    };

  return (
    <div>
      <h2>Farmer Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        </div>
        <div>
          <label>Account Number:</label>
          <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default FarmerRegistration;