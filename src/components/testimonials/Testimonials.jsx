import React from 'react'
import './Testimonials.css'
import AVRT1 from '../../assets/avatar1.jpg'
import AVRT2 from '../../assets/avatar2.jpg'
import AVRT3 from '../../assets/avatar3.jpg'
import AVRT4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data  = [
  {
    avatar: AVRT1,
    name: 'Tina Snow',
    review:'I have had amazing impressions from Hadija. It feels right to have contacted such a person to get your job right and smart. I am appreciative of their services.'
  },

  {
    avatar: AVRT2,
    name: 'Bryan Bridges',
    review:'I have had amazing impressions from Hadija. It feels right to have contacted such a person to get your job right and smart. I am appreciative of their services.'
  },

  {
    avatar: AVRT3,
    name: 'Damon Strickland',
    review:'I have had amazing impressions from Hadija. It feels right to have contacted such a person to get your job right and smart. I am appreciative of their services.'
  },

  {
    avatar: AVRT4,
    name: 'Angelina July',
    review:'I have had amazing impressions from Hadija. It feels right to have contacted such a person to get your job right and smart. I am appreciative of their services.'
  },
]

const Testimonials = () => {
  return (
    <section id='tetimonials' >
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
              <img src={avatar}/>
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials