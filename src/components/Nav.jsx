import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  const userId = localStorage.getItem('localUserId');
  console.log(':::userid', userId);
  const navigate = useNavigate();

  return (
    <>
      <nav className='navigation nav-container'>
        <div className='nav-brand'>
          <Link className='link' to='/'>
            Quiz
          </Link>
        </div>
        {userId ? (
          <div className='nav-item'>Hi, {'Hello Bot'.split(' ')[0]}</div>
        ) : (
          <div className='nav-item'>
            <Link className='link btn-login' to='/login'>
              Login
            </Link>
          </div>
        )}
        {userId && (
          <div className='nav-item'>
            <Link
              className='link btn-login'
              to='/'
              onClick={() => {
                localStorage.clear();
                navigate('/');
              }}
            >
              SignOut
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
