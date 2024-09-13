import React from 'react'
import Title from './Title'
import {services} from '../data'


const Services = () => {
  return (
    <section className="section services" id="services">
    <Title title='OUR' subTitle='SERVICES' />
   
    <div className="section-center services-center">
      

         {
            services.map((ser) => {
              return (
                <article className="service" key={ser.id}>
                    <span className="service-icon"><i className={ser.icon}></i></span>
                    <div className="service-info">
                      <h4 className="service-title">{ser.title}</h4>
                      <p className="service-text">
                        {ser.text}
                      </p>
                    </div>
                </article>

              )
            })
         }
 

 
    </div>
  </section>
  )
}

export default Services