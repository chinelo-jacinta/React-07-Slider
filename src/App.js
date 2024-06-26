import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setpeople] = useState(data);
  const [index, setIndex] = useState(0);
  const checkNUmber = (num) => {
    if (num > people.length - 1) {
      return 0;
    } else if (num < 0) {
      return people.length - 1;
    } else {
      return num;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(checkNUmber(index + 1));
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, title, name, quote } = person;
          //more stuff coming up
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='test'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}

        <button
          className='prev'
          onClick={() => setIndex(checkNUmber(index - 1))}
        >
          <FiChevronLeft />
        </button>
        <button
          className='next'
          onClick={() => setIndex(checkNUmber(index + 1))}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
