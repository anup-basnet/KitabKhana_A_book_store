import React, { useState, useEffect, useRef } from 'react'
import HomeContainer from './HomeContainer'
import { motion } from 'framer-motion'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import RowContainer from './RowContainer'
import MenuContainer from './MenuContainer'
import { useStateValue } from '../context/StateProvider'

const MainContainer = () => {
  const [{bookItems}, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);


  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer />

      <section className="w-full my-12">
        <div className='w-full flex items-center justify-between'>
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-full before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out">
            Fiction
          </p>

          <div className="hidden md:flex items-center gap-3">
            <motion.div 
              whileTap={{ scale: 0.75 }}
              className='w-8 h-8 rounded-lg bg-orange-200 hover:bg-orange-500 flex items-center justify-center cursor-pointer hover:shadow-lg'
              onClick={() => setScrollValue(-200)}>
                <MdChevronLeft className='text-lg text-white' />
              </motion.div>
            <motion.div 
              whileTap={{ scale: 0.75 }}
              className='w-8 h-8 rounded-lg bg-orange-200 hover:bg-orange-500 flex items-center justify-center cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg'
              onClick={() => setScrollValue(200)}>
                <MdChevronRight className='text-lg text-white' />
              </motion.div>
          </div>
        </div>

        <RowContainer 
          scrollValue={scrollValue}
          flag={true} 
          data={bookItems?.filter(n => n.genre === 'fiction')} />
      </section>

      <section className="w-full">
        <div className='w-full flex items-center justify-between'>
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-full before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out">
            Classics
          </p>

          <div className="hidden md:flex items-center gap-3">
            <motion.div 
              whileTap={{ scale: 0.75 }}
              className='w-8 h-8 rounded-lg bg-orange-200 hover:bg-orange-500 flex items-center justify-center cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg'
              onClick={() => setScrollValue(-200)}>
                <MdChevronLeft className='text-lg text-white' />
              </motion.div>
            <motion.div 
              whileTap={{ scale: 0.75 }}
              className='w-8 h-8 rounded-lg bg-orange-200 hover:bg-orange-500 flex items-center justify-center cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg'
              onClick={() => setScrollValue(200)}>
                <MdChevronRight className='text-lg text-white' />
              </motion.div>
          </div>
        </div>

        <RowContainer 
          scrollValue={scrollValue}
          flag={true} 
          data={bookItems?.filter(n => n.genre === 'classics')} />
      </section>

      <section className="w-full my-6">
        <MenuContainer />
      </section>

    </div>
  )
}

export default MainContainer