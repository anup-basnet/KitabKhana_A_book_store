import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { MdShoppingBasket } from 'react-icons/md'
import Rupees from '../assets/rupee.png'
import NotFound from '../assets/NotFound.svg';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { useNavigate, Navigate  } from 'react-router-dom';

const RowContainer = ({ flag, data, scrollValue }) => {
    const rowContainer = useRef();
    const navigate = useNavigate();

    const [items, setItems] = useState([]);
    
    const [{ cartItems }, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: actionType.SET_CART_ITEMS,
            cartItems: items,
        })
        localStorage.setItem('cartItems', JSON.stringify(items))
    }

    const showDetails = (item) => {
        localStorage.setItem('bookInfo', JSON.stringify(item))
        navigate('/details')
        console.log(item)
    }

    useEffect(() => {
        addToCart();
    }, [items])


    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue])
    
    return (
        <div 
            ref={rowContainer}
            className={`w-full flex items-center gap-3 scroll-smooth my-12 pl-2 ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-hidden flex-wrap justify-center'}`}>
            
            {data?.length > 0 ?
                data.map(item => (
                <div 
                    key={item.id} 
                    className="w-250 min-w-[250px] md:w-250 h-auto bg-cardOverlay rounded-lg p-2 backdrop-blur-lg mr-4 hover:drop-shadow-lg">
                    <div className="w-full flex items-center justify-center gap-6">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className='w-auto h-[240px] -mt-1 drop-shadow-2xl'
                        >
                            <img 
                                src={item?.imageURL} 
                                alt="book"
                                className='w-full h-full object-contain cursor-pointer'
                                onClick={() => showDetails(item)}
                            />
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.75 }}
                            className="w-8 h-8 rounded-full bg-red-600 hover:shadow-md flex items-center justify-center cursor-pointer "
                            onClick={() => setItems([...cartItems, item])}>
                            <MdShoppingBasket className='text-white ' />
                        </motion.div>
                    </div>

                    <div className="w-full mt-4 gap-1 flex flex-col items-start">
                        <p className='text-textColor text-base md:text-lg'>
                            by: {item?.author} 
                        </p>

                        <div className="flex items-center gap-8">
                            <p className='flex items-center text-lg text-headingColor font-semibold'>
                                price : 
                                <span className='text-sm text-red-500'>
                                    <img src={Rupees} alt="rupees icon" className='w-5' />
                                </span>{item?.price}
                            </p>
                        </div>

                        <p className='text-textColor text-base md:text-lg'>
                            {
                            item?.price > 700 ? '⭐⭐⭐⭐⭐' : '⭐⭐⭐⭐'
                            }
                            
                        </p>
                    </div>
                </div>
            )) : 
            <div className='w-full flex flex-col items-center justify-center'>
                <img src={NotFound} className='h-340' /> 
                <p className='text-xl text-headingColor font-semibold'
                >Book Items Not Available.</p>
            </div>
            }
        </div>
    )
}

export default RowContainer