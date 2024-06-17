import React, { useState } from 'react';
import './App.css';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      alert('Please fill out the Username field.');
      return;
    }

    if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    if (phone.length !== 10) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    const dobDate = new Date(dob);
    const currentDate = new Date();
    if (dobDate > currentDate) {
      alert('Invalid Date of Birth. Date of Birth cannot be in the future.');
      return;
    }


    setIsOpen(false);

    setUsername('');
    setEmail('');
    setDob('');
    setPhone('');
  };

  const handleClickOutside = (e) => {
    if (e.target.className === 'modal') {
      setIsOpen(false);
    }
  };






  
  return (
    <div className="App">

      <div className='openformdiv'>

        <h1>User Form</h1>

      <button className='openform' onClick={() => setIsOpen(true)}>Open Form</button>

      </div>



      {isOpen && (
        <div className="modal" onClick={handleClickOutside}>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  id="dob"
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default App;
