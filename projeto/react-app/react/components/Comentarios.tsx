import React, { useState } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slick-carousel/slick/slick-theme.css'
import styles from './style.css'

const Comentarios = () => {
  interface Budget {
    name: string
    city: string
    date: number
    image: string
    testimony: string
  }

  const [depoimento, setDepoimento] = useState<Budget[]>([])

  fetch('/api/dataentities/AL/search?_fields=name,city,date,image,testimony')
    .then((response) => response.json())
    .then((data) => setDepoimento(data))

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>

      <Slider {...settings}>
        {depoimento.map((depoimentos, index) => (
          <div key={index} className={styles.blocoComentarios}>
            <img
              src={depoimentos.image}
              alt={depoimentos.name}
              className={styles.images}
            />
            <p>{depoimentos.testimony}</p>
            <p className={styles.name}>{depoimentos.name}</p>
            <p>{depoimentos.city}</p>
            <p>{depoimentos.date}</p>
          </div>
        ))}
      </Slider>
    </>
  )
}

export default Comentarios
