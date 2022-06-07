import React from 'react'

function PostCard(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' to={props.path}>
          <h5 className='cards__item__text'>{props.name}</h5>
          <figure className='cards__item__pic-wrap' data-category={props.category}>
            <img
              className='cards__item__img'
              alt='Post-image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <p className='cards__item__text'>{props.text}</p>
          </div>

          <div className='cards__item__button'>
          <a className="btn btn-outline-info btn-xl text-uppercase js-scroll-trigger"
        //    href="/"
          >Lexo me shume</a>
          </div>

        </div>
      </li>
    </>
  )
}

export default PostCard