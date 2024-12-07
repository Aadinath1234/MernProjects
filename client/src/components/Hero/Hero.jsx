import React from 'react';
import MountainPng from '../../assets/moon-surface-hd.png';


const Hero = () => {
    return (
        <div className='bg-black/20 h-full'>
            <div className='h-full flex justify-center items-center  p-4'>
                <div className='container grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div className='text-white space-y-4 lg:pr-36'>
                        <h1
                            data-aos="fade-up" className='text-5xl font-bold'
                        >

                            FUN ZONE
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="300">
                            Welcome to FunZone, your ultimate destination for endless entertainment! Here, you can enjoy a wide variety of movie clips from different categories, all for free. 
                            hrillers, heartwarming romantic comedies, or mind-bending 
                            sci-fi adventures, we have something for everyone. Our
                             easy-to-navigate platform allows you to explore movie
                              clips from your favorite genres, and best of all, 
                              you don’t need to sign up or pay a subscription fee!
                               Simply browse through a selection of the latest and
                                greatest clips, and let the fun begin.
                        </p>

                        <button data-aos="fade-up" data-aos-delay="500" className='bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200'>
                            LEARN MORE
                        </button>
                    </div>
                    <div></div>
                </div>
            </div>
            {/* <img src={MountainPng} alt="" className='absolute right-0 bottom-0 w-full brightness-50 z-10' /> */}
            <div className='absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px] '>

            </div>
        </div>
    )
}

export default Hero; 



