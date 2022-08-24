import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container' // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
          <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Bee Santos</h5>
            <small className='client__review'>
              Very easy to understand, and user friendly
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar Two" />
          </div>
          <h5 className='client__name'>Kweku Nkansah</h5>
            <small className='client__review'>
              You're doing great!
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar Three" />
          </div>
          <h5 className='client__name'>Nana Randy</h5>
            <small className='client__review'>
              Which way! Ahotor 2.0
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar Four" />
          </div>
          <h5 className='client__name'>Maame Blade</h5>
            <small className='client__review'>
              For life is for life!!
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials