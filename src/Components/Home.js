import React from 'react';
import Footer from '../Components/Footer';
import PostCard from './PostCard';

function Home() {
  return (
    <>
    <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Ne kujdesemi per shendetin tuaj!</div>
        <a className="btn btn-outline-primary btn-xl text-uppercase js-scroll-trigger" href="/register">Krijo llogari</a>
      </div>
    </div>
  </header> 

      <div className='cards'>
      <h4>Rreth Semundjeve</h4>
       <hr color="#4682B4" />
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <PostCard
              src='../img/disease1.jpg'
              name='Semundja 1'
              category='Category2'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  '
              // path='/'
            />
             <PostCard
              src='../img/disease1.jpg'
              name='Semundja 1'
              category='Category2'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  '
              // path='/'
            />
             <PostCard
              src='../img/disease1.jpg'
              name='Semundja 1'
              category='Category2'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  '
              // path='/'
            />           
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home