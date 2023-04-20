import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState([]);
  const[number,setNumber] =useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', name, email,number);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        phoneno:
        <input type="number" value={number} onChange={(event)=>setNumber(event.target.value)}></input>
      </label>
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
