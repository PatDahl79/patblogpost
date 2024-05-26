import React, { useContext } from 'react'
import myContext from '../context/myContext';
import Banner from '../assets/Anima1.png'

function HeroSection() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
      <section
          style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}>
          {/* Hero Section  */}
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              {/* Main Content  */}
              <main>
                  <div className="text-center">
                      <div className="mb-2">
                          {/* Image  */}
                          <div className="flex justify-center"> <img src={Banner} alt="Banner" /> </div>
                          {/* Text  */}
                          <h1 className=' text-3xl text-white font-bold'>Bloggi</h1>
                      </div>
                      {/* Paragraph  */}
                      <p style={{ color: mode === 'dark' ? 'white' : 'white' }} className="sm:text-3xl mt-5 text-xl font-extralight sm:mx-auto ">
                            Here are some ADHD blogs by Bloggi.
                      </p>
                  </div>
              </main>
          </div>
      </section>
  )
}



export default HeroSection