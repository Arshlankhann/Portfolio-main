import React from 'react'
import './services.css'
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
  {
    id: 1,
    image: Image1,
    title: "Front-End Development",
    description:
      "UI/UX Design Implementation: Converting design mockups (e.g., Figma, Sketch) into responsive web pages.Interactive Web Pages: Using frameworks like React, Angular, or Vue.js to create dynamic user interfaces.",
  },
  {
    id: 2,
    image: Image2,
    title: "Back-End Development",
    description:
      "Server-Side Logic: Writing code to manage database operations, authentication, and business logic. API Development: Creating RESTful or GraphQL APIs for client-server communication.",
  },
  {
    id: 3,
    image: Image3,
    title: "Full-Stack Development",
    description:
      "Complete Web Application Development: Building projects from scratch (e.g., e-commerce platforms, social media apps, dashboards). Integration of Front-End and Back-End: Seamlessly connecting the user interface with the server-side logic.",
  },
];


const Services = () => {
  return (
    <section className="services container section" id='services'>
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({id , image , title, description}) =>{
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services