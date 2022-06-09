import React from 'react';
import Footer from '../Components/Footer';
import PostCard from './PostCard';
import image1 from '../img/disease1.jpg'; 


function Home() {
  return (
    <>
    <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Ne kujdesemi per shendetin tuaj!</div>
        <a className="btn btn btn-outline-info btn-xl text-uppercase js-scroll-trigger" href="/doctors">Takohuni me mjekët tanë</a>
      </div>
    </div>
  </header> 

      <div className='cards'>
      <h4>Postime rreth Semundjeve</h4>
       <hr color="#4682B4" />
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <PostCard
              src={image1}
              name='Semundja 1'
              category='Category2'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  '
              // path='/'
            />
             <PostCard
              src={image1}
              name='Semundja 1'
              category='Category2'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  '
              // path='/'
            />
             <PostCard
              src={image1}
              name='Semundja 1'
              category='Category2'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  '
              // path='/'
            />           
          </ul>

          <div className='button-posts'>
          <a className="btn btn btn-outline-info btn-xl text-uppercase js-scroll-trigger"
           href="/posts" 
          >Lexo te gjitha semundjet</a>
          </div>
        </div>

       
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home