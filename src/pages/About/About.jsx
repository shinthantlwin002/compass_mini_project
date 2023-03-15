import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
      <div className='d-flex flex-column align-items-center gap-4 mx-5 my-3'>
        <h1 className='fw-bold'>About Us</h1>
        <p> Welcome to our fashion website, where we are passionate about helping you express your unique style through the latest fashion trends. Our team of fashion experts scours the globe to bring you the most stylish and high-quality clothing, accessories, and footwear. Whether you're looking for a chic outfit for a night out, comfortable loungewear for a lazy Sunday, or the perfect accessories to complete your look, we have you covered. Our goal is to provide you with a seamless and enjoyable shopping experience, with easy navigation, secure payment options, and exceptional customer service. So, come and explore our website and discover the latest trends that will inspire you to create your own personal style statement.</p>
        <div className="row mb-5">
          <div className="col">
            <img className='aboutImg' src='https://static.zara.net/photos///contents/mkt/spots/aw22-studio-collection-maintenance/subhome-xmedia-worldwide//w/1366/IMAGE-landscape-9a6c6bc2-7385-4321-a2ee-2ece12d0ba8d-default_0.jpg?ts=1664802617794'  />
          </div>
          <div className="col-8">
            <h4 className='fw-semibold mb-4'>Our aim is to provide fashion enthusiasts with up-to-date information and inspiration on the latest trends, styles, and products in the industry</h4>
            <p>Starting a fashion brand is a challenging yet rewarding journey. It requires creativity, passion, and a strong business acumen. It all began with an idea - a vision to create clothing that was both fashionable and sustainable. I researched and studied the market, taking note of the latest trends and styles. With a clear understanding of my target audience and the brand message, I created a business plan that included financial projections, marketing strategies, and production timelines. I sourced high-quality fabrics, worked with talented designers, and collaborated with manufacturers to create prototypes. After several iterations, I finally launched my fashion brand. It was a dream come true to see people wearing and enjoying my designs. Though the journey has been challenging, I am proud of what I have achieved and am excited to see where the future takes my brand.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-8 text-end">
            <h4 className='fw-semibold mb-4'>Our Story</h4>
            <p>At our fashion website, we are passionate about showcasing the beauty and creativity of the fashion industry. Our story began with a group of fashion enthusiasts who shared a vision of creating a platform where people could find the latest trends, explore different styles, and connect with like-minded individuals. Through our website, we aim to inspire and empower people to express themselves through fashion, whether it be through bold statements or subtle accents. We believe that fashion is a powerful form of self-expression, and we are dedicated to providing our audience with the tools and resources they need to unleash their unique sense of style. Join us on this exciting journey as we celebrate the diversity and creativity of the fashion world!</p>
          </div>
          <div className="col-4">
            <img src="https://static.zara.net/photos///contents/mkt/spots/aw22-studio-collection-maintenance/subhome-xmedia-worldwide//w/1366/IMAGE-landscape-9a6c6bc2-7385-4321-a2ee-2ece12d0ba8d-default_0.jpg?ts=1664802617794" className="aboutImg2"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
