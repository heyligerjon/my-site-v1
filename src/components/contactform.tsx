import React, { useState } from 'react';
import * as Form from '@radix-ui/react-form';

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
        <Form.Root id='contact-form' className='FormRoot contact-form' onSubmit={handleSubmit}>
            <Form.Field className='FormField field' name='name'>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <Form.Label className='FormLabel' htmlFor="name">Name</Form.Label>
                    <Form.Message className="FormMessage" match="valueMissing">
                        Please enter your name
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Form.Control>
            </Form.Field>

            <Form.Field className='FormField field' name='email'>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <Form.Label className='FormLabel' htmlFor="email">Email</Form.Label>
                    <Form.Message className="FormMessage" match="valueMissing">
                        Please enter your email
                    </Form.Message>
                    <Form.Message className="FormMessage" match="typeMismatch">
                        Please provide a valid email
                    </Form.Message>
                </div>
                    <Form.Control asChild>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Control>
            </Form.Field>

            <Form.Field className='FormField field' name='message'>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <Form.Label className='FormLabel' htmlFor="message">Message</Form.Label>
                </div>
                    <Form.Control asChild>
                        <textarea
                            id="message"
                            value={message}
                            style={{height: '150px'}}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            placeholder='Hi!'
                        />
                    </Form.Control>
                    <Form.Message className="FormMessage" match="valueMissing">
                        Please enter a message
                    </Form.Message>
            </Form.Field>
            {error && <p>{error}</p>}

            <div className='submit-div'>
                <Form.Submit asChild>
                    <button className='submit-btn' type="submit" disabled={isLoading}>
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </button>
                </Form.Submit>
            </div>
        </Form.Root>
    </div>
  );
};

export default ContactForm;