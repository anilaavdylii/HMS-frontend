import React from 'react';
import Footer from '../Components/Footer';
import PostCard from './PostCard';

function Home() {
  return (
    <>
      <div className='cards'>
      <h2>Rreth Semundjeve</h2>
       <hr color="#4682B4" />
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <PostCard
              src='../img/disease1.jpg'
              name='Semundja 1'
              category='Category2'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  '
              // path='/services'
            />
             <PostCard
              src='../img/disease1.jpg'
              name='Semundja 1'
              category='Category2'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  '
              // path='/services'
            />
             <PostCard
              src='../img/disease1.jpg'
              name='Semundja 1'
              category='Category2'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  '
              // path='/services'
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