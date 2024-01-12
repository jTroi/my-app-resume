import React, { useState } from 'react';
import styleSignInn from './sign-in.module.css'

const SignIn = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('An email was submitted: ', email);
    console.log('A password was submitted: ', password);
    setEmail('');
    setPassword('')
 };

 return (
    <div>
      <div className={styleSignInn.form}>
        <h2>Hello</h2>
        <form onSubmit={handleSubmit}>
          <section>
            <label className={styleSignInn.label}>
              Email:
            <input className={styleSignInn.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </section>
          <section>
            <label className={styleSignInn.label}>
            Password:
            <input className={styleSignInn.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
          </section>
          <button type="submit" className={styleSignInn.btn} onClick={handleSubmit}>Sign In</button>
        </form>
      </div>
    </div>
 );
};

export default SignIn;
