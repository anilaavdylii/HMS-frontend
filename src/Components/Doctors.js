import React from 'react';
import DoctorCard from './DoctorCard';
import doc1 from '../img/doctor1.png'; 
import doc2 from '../img/doctor2.png';
import team from '../img/meet-team.png';

function Doctors() {
  return (
    <>

      <div className='cards'>
      <h4>Our professional team</h4>
       
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items2'>
            <DoctorCard
              src={doc1}
              name='Filan Fisteku'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  '
              // path='/'
            />
             <DoctorCard
              src={doc2}
              name='Filan Fisteku'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  '
              // path='/'
            />
             <DoctorCard
              src={doc1}
              name='Filan Fisteku'
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

export default Doctors