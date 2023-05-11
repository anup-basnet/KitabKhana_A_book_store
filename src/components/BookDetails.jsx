import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BookDetails = () => {
    const navigate = useNavigate();

    const book = JSON.parse(localStorage.getItem('bookInfo'));
    // console.log(book)

    return (
        <div className='max-w-[80vw] min-h-screen m-auto flex justify-center gap-8 mt-20'>
            {/* left side for book meta  */}
            <div className="w-[40%] flex flex-col items-center gap-4 pl-12">
                <div className='text-xl text-headingColor font-semibold uppercase'>
                    / {book?.genre} /
                </div>
                <div className='h-340 mt-4'>
                    <img src={book?.imageURL}
                        className='w-full h-full object-contain'
                    />
                </div>
                <div className=''>
                    <p>by: {book?.author},</p>
                    <p className='py-2'>price: NPR - {book?.price},</p>
                    <p>{book.price > 700 ? '⭐⭐⭐⭐⭐' : '⭐⭐⭐⭐'}</p>
                </div>
            </div>

            {/* right side for book desc  */}
            <div className="w-[60%] flex flex-col items-center py-8 gap-8">
                <div className='text-xl text-headingColor font-mono underline underline-offset-8'>
                    Overview of the book,
                </div>
                <p>
                    {book?.body}
                </p>
                <motion.button 
                    whileTap={{ scale: 0.8 }}
                    className='bg-cart border-2 border-gray-800 px-4 py-2 rounded-lg shadow-md backdrop-blur-sm hover:bg-slate-600 hover:text-orange-500 hover:rounded-none'
                    onClick={() => navigate('/')}
                    >
                    Go Back
                </motion.button>
    
            </div>
        </div>
    )
}

export default BookDetails