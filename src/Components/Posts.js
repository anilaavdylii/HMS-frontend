import React from 'react';
import PostCard from './PostCard';
import image1 from '../img/disease1.jpg'; 
import { BiSearchAlt } from "react-icons/bi"

function Posts() {

  return (
    <>
      <div className='cards'>
      <h4>Postime rreth Semundjeve</h4>
       <hr color="#4682B4" />
      <div className='cards__container'>
      <div class="col-md-8">
           
           <div class="input-group mb-3">
  <input type="text" class="form-control input-text" placeholder="Search products...." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <button class="btn btn-outline-warning btn-lg" type="button"><p><BiSearchAlt/></p></button>
  </div>
</div>
           
       </div> 
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

          
        </div>

       
      </div>
    </div>
    </>
  )
}

export default Posts