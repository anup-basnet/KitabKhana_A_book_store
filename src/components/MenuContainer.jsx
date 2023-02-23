import React, { useEffect, useState } from 'react'
import { IoBookSharp } from 'react-icons/io5'
import { categories } from '../utils/data';
import { motion } from 'framer-motion';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';

const MenuContainer = () => {
    const [filter, setFilter] = useState('fiction');

    const [{ bookItems}, dispatch] = useStateValue();
    

    return (
        <section id='menu' className='w-full my-6'>
            <div className="w-full flex flex-col items-center justify-center">
                <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-full before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out mr-auto">
                    Our Hot Picks
                </p>

                <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
                    {
                        categories && categories.map( genre => (
                            <motion.div
                                whileTap={{ scale: 0.75 }}
                                key={genre.id}
                                className={`group ${filter === genre.urlParamName ? 'bg-cartNumBg' : 'bg-white'} w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg mt-2`}
                                onClick={() => setFilter(genre.urlParamName)}>
                                <div className={`w-10 h-10 rounded-full shadow-lg ${filter === genre.urlParamName ? 'bg-white' : 'bg-cartNumBg'} group-hover:bg-card flex items-center justify-center`}>
                                    <IoBookSharp
                                        className={`${filter === genre.urlParamName ? 'text-textColor' : 'text-white'} group-hover:text-textColor text-lg`}
                                    />
                                </div>
                                <p className={`text-sm ${filter === genre.urlParamName ? 'text-white' : 'text-textColor'}  group-hover:text-white`}>{genre.name}</p>
                            </motion.div>
                        ))
                    }
                </div>

                    <div className='w-full'>
                        <RowContainer flag={false} data={bookItems?.filter(n => n.genre === filter)} />
                    </div>
            </div>
        </section>
    )
}

export default MenuContainer