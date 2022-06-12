import React from 'react'

function DoctorCard(props) {
  return (
    <>
      <li className='cards__item2'>
        <div className='cards__item__link2' to={props.path}>
          <h5 className='cards__item__text2'>{props.name}</h5>
          <figure className='cards__item__pic-wrap2'>
            <img
              className='cards__item__img2'
              alt='Post-image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info2'>
            <p className='cards__item__text2'>{props.specialism}</p>
          </div>

          <div className='cards__item__button2'>
          <a className="btn btn-outline-info btn-xl text-uppercase js-scroll-trigger"
           href="/addAppointment"
          >Cakto nje termin</a>
          </div>

        </div>
      </li>
    </>
  )
}

export default DoctorCard