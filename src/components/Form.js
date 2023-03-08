import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Check for valid email format
    const re = /\S+@\S+\.\S+/;
    setEmailError(!re.test(e.target.value));
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleBlur = (e) => {
    // Check if input field is empty
    if (e.target.value === '') {
      alert(`${e.target.name} is required`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if email is valid before submitting form
    if (emailError) {
      alert('Please enter a valid email address');
      return;
    }
    // Send form data to server
    // ...
    alert('Form submitted successfully');
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" value={name} onChange={handleNameChange} onBlur={handleBlur} />
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={handleEmailChange} onBlur={handleBlur} />
        {emailError && <p className="error">Please enter a valid email address</p>}
        <label>Subject</label>
        <input type="text" name="subject" value={subject} onChange={handleSubjectChange} onBlur={handleBlur} />
        <label>Message</label>
        <textarea rows="6" name="message" value={message} onChange={handleMessageChange} onBlur={handleBlur} />
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
