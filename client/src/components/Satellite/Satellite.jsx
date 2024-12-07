import React from 'react';
import satelitImg from '../../assets/Kill.jpg';


const Satelite = () => {
  return (
    <>
      <section className='bg-black text-white py-20'>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-1-2 border-b-2 border-1-sky-800 border-b-sky-800">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className='text-sky-800 uppercase'
              >
                Kill
              </p>

              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className='uppercase text-5xl'
              >
             KILL
              </h1>

              <p
                data-aos="fade-up" data-aos-delay="700"
              >
                A gripping Bollywood action thriller filled with suspense and intense drama. 
                A tale of revenge, betrayal, and redemption that keeps you on the edge.
                 </p>


              <button
                data-aos="fade-up"
                data-aos-daily='900'
                className='bg-blue-400 text-white hover:bg-blue-500 px-4 py-1
                          rounded-md duration-200'
              >
                view All
              </button>


            </div>

            <div
              data-aos="zoom-in"
            >
              <img src={satelitImg} alt=""
                className='w-full sm:w-[80%] mx-auto max-h-[550px] object-cover'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default Satelite; 