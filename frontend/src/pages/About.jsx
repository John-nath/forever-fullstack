import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className=' my-10 flex flex-col md:flex-row gap-16 '>
        <img className='w-full md:max-w-[450px]' src= {assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus incidunt voluptate commodi quasi exercitationem officia inventore perferendis, velit ut! Possimus incidunt repellendus modi tempora doloribus nostrum dicta voluptate ad quo.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos adipisci, reiciendis ratione dolorum error tempora similique sunt ex ducimus quidem ipsam dicta, modi libero, soluta ipsum ullam in eaque quo?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut iusto molestias incidunt, quaerat pariatur illo asperiores magnam ipsam mollitia accusantium, rerum repudiandae aperiam at nulla recusandae totam temporibus cum esse!</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='text-gray-600 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>We meiculiously select and ver tach product to ensute it meets our srtingent quualitu standards</p>
        </div>
        <div className='text-gray-600 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>With our user-friendly interface and hassle free ordering process</p>
        </div>
        <div className='text-gray-600 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p>Our team of dedicated professionals is here to assist you.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About