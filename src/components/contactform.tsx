import React, { useState } from 'react';

interface ContactFormProps {
  onSubmit: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // try {
    //   // Make an API call to submit the contact form data
    //   await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       name,
    //       email,
    //       message,
    //     }),
    //   });
    //   onSubmit(); // Callback function to handle successful form submission
    // } catch (err) {
    //   setError('Failed to submit form. Please try again later.'); // Set error state for error handling
    // } finally {
    //   setIsLoading(false);
    // }
    // }
  };

  return (
    <div id='contact' className='contact-container'>
        <h1 id='contact-header' className='section-header'>Contact</h1>
        <form id='contact-form' className='contact-form' onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            {error && <p>{error}</p>}
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    </div>
  );
};

export default ContactForm;