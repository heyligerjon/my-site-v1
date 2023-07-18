import React, { useState } from 'react';
import * as Form from '@radix-ui/react-form';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div id='contact' className='contact-container'>
        <h1 id='contact-header' className='section-header gradient-text'>Contact</h1>
        <Form.Root id='contact-form' className='FormRoot contact-form' action='https://api.web3forms.com/submit' method='POST'>
            <input type="hidden" name="access_key" value="fcbdd708-6581-4f6b-abe8-752f86af47cd" />
            <Form.Field className='FormField field' name='name'>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <Form.Label className='FormLabel' htmlFor="name">Name</Form.Label>
                    <Form.Message className="FormMessage gradient" match="valueMissing">
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
                        placeholder='J. Isaacs'
                    />
                </Form.Control>
            </Form.Field>

            <Form.Field className='FormField field' name='email'>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <Form.Label className='FormLabel' htmlFor="email">Email</Form.Label>
                    <Form.Message className="FormMessage gradient" match="valueMissing">
                        Please enter your email
                    </Form.Message>
                    <Form.Message className="FormMessage gradient" match="typeMismatch">
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
                            placeholder='j@crate.digital'
                        />
                    </Form.Control>
            </Form.Field>

            <Form.Field className='FormField field' name='message'>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <Form.Label className='FormLabel' htmlFor="message">Message</Form.Label>
                    <Form.Message className="FormMessage gradient" match="valueMissing">
                        Please enter a message
                    </Form.Message>
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
            </Form.Field>

            <div className='submit-div'>
                <Form.Submit asChild>
                    <button className='submit-btn btn-gradient' type="submit">
                        Submit
                    </button>
                </Form.Submit>
            </div>
        </Form.Root>
        <script src="https://web3forms.com/client/script.js" async defer></script>
    </div>
  );
};