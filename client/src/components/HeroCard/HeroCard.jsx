import React from 'react';

import wave from '../../assets/wave Gif.gif';
import { FaReact } from "react-icons/fa";

import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import CyberCrime from '../../assets/Pushpa.jpg';
import SC from '../../assets/Salaar.jpg';
import Women from '../../assets/Interstellar.png';
import Children from '../../assets/children.jpg';
import State from '../../assets/state.jpg'; 
import Economic from '../../assets/Economic.jpg';


const ServiceData = [
    {
        title: "Pushpaa",
        content: "Mai Jhukega nahii salaa  ",
        description: "Pushpa 2: The Rule, continues the gripping saga of power.",
        // icon: <FaReact className='text-7xl' />
        img: CyberCrime,
        aosDelay: "300",
    },
    {
        title: "SALAAR",
        content: "Dekh le bhai achhi hai  ",
        description: "Salaar is an action-packed thriller about a fearless man seeking revenge . ",
        img: SC,
        aosDelay: "700",

    }, {
        title: "Interstellar",
        content: "A gripping sci-fi journey through space and time to save humanity.",
        description: "An epic tale of space exploration, time dilation, and human survival.",
        img: Women, 
        aosDelay: "700",
        
    }
];


const HeroCard = () => {
    return (
        <>
            <section className="bg-black">
                <div className="container">
                    <div className='min-h-[400px]'>
                        <div>
                            <div className='grid grid-cols-1 sm:grid-cols-3  gap-6 relative z-10 '>
                                {ServiceData.map((data, index) => {
                                    return (
                                        <div
                                            data-aos="fade-up"
                                            data-aos-delay={data.aosDelay}
                                            className='min-h-[180px] mt-4 flex flex-col justify-center items-center rounded-xl gap-2 bg-black backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto '
                                        >
                                           <img src={data.img} alt={data.title} className='text-7xl' />
                                            <h1>{data.title}</h1>
                                            <p>{data.content}</p>
                                            <p className='text-sm'>
                                                {data.description}

                                            </p>

                                        </div>
                                    )
                                })}
                            </div>
                            <img src={wave} alt=""
                                className='h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]'
                            />





                        </div>





                    </div>



                </div>










            </section>









        </>








    )








}


export default HeroCard;