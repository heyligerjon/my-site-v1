import React, { useState } from 'react';
import * as Form from '@radix-ui/react-form';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div id='contact' className='container flex flex-col items-center'>
        <h1 id='contact-header' className='section-header gradient-text'>Contact Me</h1>
        <Form.Root id='contact-form' className='FormRoot text-sm w-fit' action='https://api.web3forms.com/submit' method='POST'>
            <input type="hidden" name="access_key" value="fcbdd708-6581-4f6b-abe8-752f86af47cd" />
            <Form.Field className='FormField field' name='name'>
                <div className='label flex'>
                    <Form.Label className='FormLabel' htmlFor="name">Name</Form.Label>
                    <Form.Message className="FormMessage gradient-text-2" match="valueMissing">
                        Name Required
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
                <div className='label flex'>
                    <Form.Label className='FormLabel' htmlFor="email">Email</Form.Label>
                    <Form.Message className="FormMessage gradient-text-2" match="valueMissing">
                        Email Required
                    </Form.Message>
                    <Form.Message className="FormMessage gradient-text-2" match="typeMismatch">
                        Error: Invalid Email
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
                <div className='label flex'>
                    <Form.Label className='FormLabel' htmlFor="message">Message</Form.Label>
                    <Form.Message className="FormMessage gradient-text-2" match="valueMissing">
                        Please enter a message
                    </Form.Message>
                </div>
                    <Form.Control asChild>
                        <textarea
                            id="message"
                            className='h-60'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            placeholder='Hi!'
                        />
                    </Form.Control>
            </Form.Field>

            <div className='flex justify-center my-8'>
                <Form.Submit asChild>
                    <button className='btn-gradient border-dark p-3' type="submit">
                        Submit
                    </button>
                </Form.Submit>
            </div>
        </Form.Root>
        <script src="https://web3forms.com/client/script.js" async defer></script>
    </div>
  );
};