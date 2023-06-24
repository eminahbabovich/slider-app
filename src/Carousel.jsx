import { useEffect, useState } from 'react'
import { shortList, list, longList } from './data'
import { FaQuoteRight } from 'react-icons/fa'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Carousel = () => {
  const [people, setPeople] = useState(longList)
  const [currentPerson, setCurrentPerson] = useState(0)

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const newPerson = oldPerson - 1
      if (newPerson < 0) {
        return people.length - 1
      }
      return newPerson
    })
  }
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const newPerson = oldPerson + 1
      if (newPerson > people.length - 1) {
        return 0
      }
      return newPerson
    })
  }

  useEffect(() => {
    const myInterval = setInterval(() => nextSlide(), 3000)
    return () => {
      clearInterval(myInterval)
    }
  }, [currentPerson])

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? 'visible' : 'hidden',
            }}
            key={id}
          >
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
      <button type="button" className="prev" onClick={prevSlide}>
        <AiOutlineLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <AiOutlineRight />
      </button>
    </section>
  )
}
export default Carousel
