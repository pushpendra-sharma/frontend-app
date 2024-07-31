import React from 'react';
import './Home.css';
import { Question } from '../../components';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  return (
    <main className='main-container'>
      <header className='main-header-item'></header>
      <Link to='/quiz'>Give quiz</Link>
    </main>
  );
};

export default Home;
