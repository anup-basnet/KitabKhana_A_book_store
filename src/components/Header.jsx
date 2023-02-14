import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Avatar from '/src/assets/avatar.png'
import { useStateValue } from '../context/StateProvider';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase.config';
import { actionType } from '../context/reducer'

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user}, dispatch] = useStateValue()

    const login = async () => {
        const {user : {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider)
        dispatch({
            type: actionType.SET_USER,
            user: providerData[0]
        })
    }

    return (
        <header className='fixed z-50 w-screen  p-6 px-16'>
            {/* { desktop and tablet } */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <Link to={'/'} className="flex items-center gap-2">
                    <img src='src/assets/logo.jpg' className='h-8 object-cover' alt="logo" />
                    <p className='text-headingColor text-xl font-bold'>KitabKhana</p>
                </Link>

                <div className='flex items-center gap-8'>
                    <ul className='flex items-center gap-8 ml-auto'>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transistion-all ease-in-out cursor-pointer'>Home</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transistion-all ease-in-out cursor-pointer'>Genres</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transistion-all ease-in-out cursor-pointer'>About Us</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transistion-all ease-in-out cursor-pointer'>Services</li>
                    </ul>

                    <div className="relative flex items-center justify-center">
                        <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                        <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className='text-sm text-white font-semibold'>2</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <motion.img 
                            whileTap={{scale:0.6}} 
                            src={user ? user.photoURL : Avatar} 
                            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full' alt="user avatar"
                            onClick={login}
                        />
                    </div>

                </div>
            </div>

            {/* mobile */}
            <div className="flex md:hidden w-full h-full">
                Header
            </div>


        </header>
    )
}

export default Header