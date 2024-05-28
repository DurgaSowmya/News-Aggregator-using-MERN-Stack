import axios from 'axios';
import React, { useState } from 'react'

const EmailRestAPI = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'varshini_789';
    const templateId = 'template_htron7m';
    const publicKey = 'n7AuW6u79qcTfrUwf';

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'News',
        message: message,
      }
    };

    // Send the email using EmailJS
    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  }
 

  return (
    <div>
        <center><h1>Contact Me!</h1></center>
      <form onSubmit={handleSubmit} className='emailForm'>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        >
        </textarea>
        <button type="submit">Send Email</button>
      </form>
    </div>
  )
}

export default EmailRestAPI