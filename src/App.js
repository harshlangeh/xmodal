
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.className === 'modal') {
        closeModal();
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: '' });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email. Please check your email address.';
    if (formData.phone.length !== 10 || isNaN(formData.phone)) newErrors.phone = alert('Invalid phone number. Please enter a 10-digit phone number.');
    if (new Date(formData.dob) > new Date()) newErrors.dob = alert('Invalid date of birth. Please enter a valid date of birth.');
    console.log(formData)
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully');
      closeModal();
      setFormData({ username: '', email: '', dob: '', phone: '' });
    }
  };

  return (
    <div className="App">
      <div><h1>User Details Modal</h1></div>
      <button style={{borderRadius:'5px',background:'#007bff',color:'white',border:'none'}} onClick={openModal}>Open Form</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <h1>Fill Details</h1>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                {errors.username && <p className="error">{errors.username}</p>}
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
                {errors.dob && <p className="error">{errors.dob}</p>}
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



















// import React, { useState } from 'react';
// import './App.css'; // Ensure you have this CSS file for styling

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     dob: '',
//     phone: ''
//   });
//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const validate = () => {
//     const newErrors = {};
    
//     if (!formData.username) {
//       newErrors.username = 'Username is required';
//       alert(newErrors.username);
//     }
//     if (formData.username) {
//       if (!formData.email) {
//         newErrors.email = 'Email is required';
//         alert(newErrors.email);
//       }
//       if (formData.email) {
//         if (!formData.email.includes('@')) {
//           newErrors.email = 'Invalid email. Please check your email address.';
//           alert(newErrors.email);
//         }
//       }
//       if (!formData.phone) {
//         newErrors.phone = 'Phone number is required';
//         alert(newErrors.phone);
//       }
//       if (formData.phone) {
//         if (!/^\d{10}$/.test(formData.phone)) {
//           newErrors.phone = 'Invalid phone number. Please enter a 10-digit phone number.';
//           alert(newErrors.phone);
//         }
//       }
//       if (!formData.dob) {
//         newErrors.dob = 'Date of birth is required';
//         alert(newErrors.dob);
//       }
//       if (formData.dob) {
//         if (new Date(formData.dob) > new Date()) {
//           newErrors.dob = 'Invalid date of birth. Please enter a past date.';
//           alert(newErrors.dob);
//         }
//       }
//     }

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setErrors({});
//       setIsModalOpen(false);
//       setFormData({
//         username: '',
//         email: '',
//         dob: '',
//         phone: ''
//       });
//     }
//   };

//   return (
//     <div className="App">
//       <button onClick={() => setIsModalOpen(true)}>Open Form</button>
//       {isModalOpen && (
//         <div className="modal" onClick={() => setIsModalOpen(false)}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label>Username</label>
//                 <input
//                   type="text"
//                   id="username"
//                   value={formData.username}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div>
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div>
//                 <label>Date of Birth</label>
//                 <input
//                   type="date"
//                   id="dob"
//                   value={formData.dob}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div>
//                 <label>Phone Number</label>
//                 <input
//                   type="text"
//                   id="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <button type="submit" className="submit-button">Submit</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;











// import React, { useState } from 'react';
// import './App.css';

// function App() {

//   const [isOpen, setIsOpen] = useState(false);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [dob, setDob] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!username) {
//       alert('Please fill out the Username field.');
//       return;
//     }

//     if (!email.includes('@')) {
//       alert('Invalid email. Please check your email address.');
//       return;
//     }

//     if (phone.length !== 10) {
//       alert('Invalid phone number. Please enter a 10-digit phone number.');
//       return;
//     }

//     const dobDate = new Date(dob);
//     const currentDate = new Date();
//     if (dobDate > currentDate) {
//       alert('Invalid Date of Birth. Date of Birth cannot be in the future.');
//       return;
//     }


//     setIsOpen(false);

//     setUsername('');
//     setEmail('');
//     setDob('');
//     setPhone('');
//   };

//   const handleClickOutside = (e) => {
//     if (e.target.className === 'modal') {
//       setIsOpen(false);
//     }
//   };






  
//   return (
//     <div className="App">

//       <div className='openformdiv'>

//         <h1>User Form</h1>

//       <button className='openform' onClick={() => setIsOpen(true)}>Open Form</button>

//       </div>



//       {isOpen && (
//         <div className="modal" onClick={handleClickOutside}>
//           <div className="modal-content">
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="username">Username:</label>
//                 <input
//                   id="username"
//                   type="text"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email">Email:</label>
//                 <input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="dob">Date of Birth:</label>
//                 <input
//                   id="dob"
//                   type="date"
//                   value={dob}
//                   onChange={(e) => setDob(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="phone">Phone Number:</label>
//                 <input
//                   id="phone"
//                   type="tel"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//               </div>
//               <button type="submit" className="submit-button">Submit</button>
//             </form>
//           </div>
//         </div>
//       )}
      
//     </div>
//   );
// }

// export default App;
