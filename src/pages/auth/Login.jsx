import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import { useDispatch } from 'react-redux';
import { login } from '../../services';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userCredentials = {
    email: email,
    password: password,
  };

  const loginHandler = async e => {
    e.preventDefault();
    const data = await login(userCredentials);

    localStorage.setItem('localUserId', data.data.userId);
    localStorage.setItem('token', data.data.token);
    navigate('/');
  };

  const testLoginHandler = e => {
    e.preventDefault();

    dispatch(
      login({
        email: 'kevin@gmail.com',
        password: 'kevin@123',
      })
    )
      .then(() => {
        navigate('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <div className='container-login'>
        <section className='login-desc'>
          <h2>Login</h2>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </section>
        <section className='login-form'>
          <input
            className='input-form'
            type='email'
            placeholder='Enter Email'
            onChange={e => setEmail(e.target.value)}
            value={email}
          ></input>
          <input
            className='input-form'
            type='password'
            placeholder='Enter Password'
            onChange={e => setPassword(e.target.value)}
            value={password}
          ></input>
          <span className='forgot-password'>Forgot?</span>
          <p className='terms'>
            By continuing, you agree to Flipkart's <span>Terms of Use</span> and
            <span> Privacy Policy.</span>
          </p>
          <button className='btn-login' onClick={loginHandler}>
            Login
          </button>
          <button className='btn-login' onClick={testLoginHandler}>
            Test Login
          </button>
          <Link className='signup' to='/signup'>
            New to Flipkart? Create an account
          </Link>
        </section>
      </div>
    </>
  );
};
export default Login;
