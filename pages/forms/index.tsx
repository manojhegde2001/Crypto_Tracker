import { constants } from 'buffer';
import React, { useState } from 'react';
import { Mutation, useMutation } from 'react-query';

function Form() {
    const [inputField, setInputField] = useState({
        name: '',
        email: '',
        phoneno: '',
    });

    const inputHandler = (e:any) => {
        setInputField({
            ...inputField,
            [e.target.name]: e.target.value
        });
    };

    const formSubmit = (e:any) => {
        e.preventDefault(); 
        console.log(inputField);
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
            <form action="submit.php" method="post" onSubmit={formSubmit}>
                <label htmlFor="name" className="block mb-2">Name:</label>
                <input type="text" id="name" name="name" required onChange={inputHandler} value={inputField.name} className="w-full px-3 py-2 border rounded " /><br /><br />
                <label htmlFor="email" className="block mb-2">Email:</label>
                <input type="email" id="email" name="email" required onChange={inputHandler} value={inputField.email} className="w-full px-3 py-2 border rounded " /><br /><br />
                <label htmlFor="phone" className="block mb-2">Phone Number:</label>
                <input type="tel" id="phone" name="phoneno" required onChange={inputHandler} value={inputField.phoneno} className="w-full px-3 py-2 border rounded " /><br /><br />
                <button type="submit" className="w-full bg-black text-white font-semibold py-2 px-4 rounded">Submit</button>
            </form>
        </div>
    );
}

export default Form;
