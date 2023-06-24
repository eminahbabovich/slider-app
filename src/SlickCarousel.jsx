import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'
import { list } from './data'
import { FaQuoteRight } from 'react-icons/fa'
import { useState } from 'react'

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  }

  const [people, setPeople] = useState(list)
  return (
    <section className="slick-container">
      <Slider {...settings}>
        {people.map((person) => {
          const { id, image, name, title, quote } = person
          return (
            <article key={id}>
              <img src={image} alt={name} className="person-img" />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <div className="icon">
                <FaQuoteRight />
              </div>
            </article>
          )
        })}
      </Slider>
    </section>
  )
}
export default SlickCarousel
