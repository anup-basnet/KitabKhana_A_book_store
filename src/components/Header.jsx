import React, { useState } from 'react'
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md'
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

    const [{user, cartShow, cartItems }, dispatch] = useStateValue()

    const [isMenu, setIsMenu] = useState(false)

    const login = async () => {
        if(!user){
            const {user : {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider)
        dispatch({
            type: actionType.SET_USER,
            user: providerData[0]
        });
        localStorage.setItem('user', JSON.stringify(providerData[0]))
        } else {
            setIsMenu(!isMenu);
        }
    }

    const logout = () => {
        setIsMenu(false);
        localStorage.clear();
        
        dispatch({
            type: actionType.SET_USER,
            user : null,
        });
    }

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow : !cartShow,
        });
    }

    return (
        <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary'>
            {/* { desktop and tablet } */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <Link to={'/'} className="flex items-center gap-2">
                    <img src='src/assets/logo.jpg' className='h-8 object-cover' alt="logo" />
                    <p className='text-headingColor text-xl font-bold'>KitabKhana</p>
                </Link>

                <div className='flex items-center gap-8'>
                    <motion.ul
                        initial={{opacity:0, x: 200}}
                        animate={{opacity:1, x: 0}}
                        exit={{opacity:0, x: 200}}
                        className='flex items-center gap-8 ml-auto'>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transistion-all ease-in-out cursor-pointer'>Home</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transistion-all ease-in-out cursor-pointer'>Genres</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transistion-all ease-in-out cursor-pointer'>About Us</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transistion-all ease-in-out cursor-pointer'>Services</li>
                    </motion.ul>

                    <div className="relative flex items-center justify-center" onClick={showCart}>
                        <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                        {cartItems && cartItems.length > 0 && (
                            <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                                <p className='text-sm text-white font-semibold'>{cartItems.length}</p>
                            </div>
                        )}
                    </div>

                    <div className='relative'>
                        <motion.img 
                            whileTap={{scale:0.6}} 
                            src={user ? user.photoURL : Avatar} 
                            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full' alt="user avatar"
                            onClick={login}
                        />
                        {
                            isMenu && (
                                <motion.div 
                                    initial={{opacity: 0, scale: 0.6}}
                                    animate={{opacity: 1, scale: 1}}
                                    exit={{opacity: 0, scale: 0.6}}

                                    className='w-40 bg-gray-50 shadow-xl rounded-lg absolute top-14 right-0 flex flex-col '>
                            {
                                user && user.email === 'euzaanc97@gmail.com' && (
                                    <Link to={'/createItem'}>
                                    <p className='px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-slate-100 transistion-all duration-100 ease-in-out text-textColor text-base'
                                    onClick={() => setIsMenu(false)}
                                    >
                                        New Item <MdAdd /></p>
                                    </Link>
                                )
                            }
                            
                            <p className='px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-slate-100 transistion-all duration-100 ease-in-out text-textColor text-base'
                            onClick={logout}>Logout <MdLogout /></p>
                        </motion.div>
                            )
                        }
                    </div>

                </div>
            </div>

            {/* mobile */}
            <div className="flex items-center justify-between md:hidden w-full h-full">
                <Link to={'/'} className="flex items-center gap-2">
                    <img src='src/assets/logo.jpg' className='h-8 object-cover' alt="logo" />
                    <p className='text-headingColor text-xl font-bold'>KitabKhana</p>
                </Link>

                <div className="relative flex items-center justify-center ml-auto mr-10" onClick={showCart}>
                        <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                        {cartItems && cartItems.length > 0 && (
                            <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                                <p className='text-sm text-white font-semibold'>{cartItems.length}</p>
                            </div>
                        )}
                    </div>

                <div className='relative'>
                    <motion.img 
                        whileTap={{scale:0.6}} 
                        src={user ? user.photoURL : Avatar} 
                        className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full' alt="user avatar"
                        onClick={login}
                    />
                    {
                        isMenu && (
                            <motion.div 
                                initial={{opacity: 0, scale: 0.6}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0.6}}

                                className='w-40 bg-gray-50 shadow-xl rounded-lg absolute top-14 right-0 flex flex-col'>
                        {
                            user && user.email === 'euzaanc97@gmail.com' && (
                                <Link to={'/createItem'}>
                                <p className='px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-slate-100 transistion-all duration-100 ease-in-out text-textColor text-base'
                                onClick={() => setIsMenu(false)}
                                >
                                    New Item <MdAdd /></p>
                                </Link>
                            )
                        }

                        <ul className='flex flex-col'>
                            <li className='text-base text-textColor hover:text-headingColor duration-100 transistion-all ease-in-out cursor-pointer hover:bg-slate-100  px-4 py-2'
                            onClick={() => setIsMenu(false)}
                            >
                                Home</li>
                            <li className='text-base text-textColor hover:text-headingColor duration-100 transistion-all ease-in-out cursor-pointer hover:bg-slate-100  px-4 py-2'
                            onClick={() => setIsMenu(false)}
                            >
                                Genres</li>
                            <li className='text-base text-textColor hover:text-headingColor duration-100 transistion-all ease-in-out cursor-pointer hover:bg-slate-100  px-4 py-2'
                            onClick={() => setIsMenu(false)}
                            >
                                About Us</li>
                            <li className='text-base text-textColor hover:text-headingColor duration-100 transistion-all ease-in-out cursor-pointer hover:bg-slate-100  px-4 py-2'
                            onClick={() => setIsMenu(false)}
                            >
                                Services</li>
                        </ul>
                        
                        <p className='m-2 p-2 rounded-md shadow-md px-4 py-2 flex items-center gap-2 bg-gray-200 cursor-pointer hover:bg-slate-200 transistion-all duration-100 ease-in-out text-textColor text-base'
                        onClick={logout}>Logout <MdLogout /></p>
                    </motion.div>
                        )
                    }
                </div>

            </div>


        </header>
    )
}

export default Header