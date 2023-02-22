import React from 'react';
import Delivery from '../assets/delivery.png';
import HeroBg from '../assets/heroBg.png';
import BookShelf from '../assets/book-shelf.jpg';


const HomeContainer = () => {
    return (
        <section id='home' className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
            <div className="py-2 flex-1 flex flex-col items-start md:items-start justify-center gap-6">
                <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
                    <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
                    <div className='w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl'>
                        <img src={Delivery} alt="delivery" className='w-full h-full object-contain'/>
                    </div>
                </div>

                <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span></p>

                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium cupiditate explicabo consectetur minima repudiandae corrupti, porro aperiam ullam recusandae. Dolores veniam iure, aut tempore optio asperiores laborum aliquid quibusdam cumque at consectetur.
                </p>

                <div className="flex items-center justify-between gap-3">
                    <button 
                    type='button' 
                    className='bg-gradient-to-br from-orange-400 to-orange-500 w-50 md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-200'
                    >
                        Order Now
                    </button>

                    <button 
                    type='button' 
                    className='bg-gradient-to-br from-orange-400 to-orange-500 w-50 md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-200'
                    >
                        Explore
                    </button>
                </div>
            </div>

            <div className="py-1 flex-1 flex items-center lg:mr-3">
                <img 
                    src={BookShelf} 
                    alt="book-shelf" 
                    className='ml-auto object-cover h-420 w-full lg:w-600 lg:h-680 rounded-lg'
                />
            </div>
        </section>
    )
}

export default HomeContainer