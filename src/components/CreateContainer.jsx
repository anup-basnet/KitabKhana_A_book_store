import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { IoBookSharp, IoPerson } from 'react-icons/io5';
import { MdCloudUpload, MdDelete, MdAttachMoney, MdDescription } from 'react-icons/md';

import Loader from './Loader';
import data from '../utils/data';
import { categories } from '../utils/data';

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
  // const [rating, setRating] = useState(3);
  const [body, setBody] = useState("");
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState("Oops!!");
  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = () => {

  }

  const deleteImage = () => {

  }

  const saveDetails = () => {

  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
        {
          fields && (
            <motion.p
              initial={{opacity:0 }}
              animate={{opacity:1 }}
              exit={{opacity:0 }}

              className={`w-full motion.-2 rounded-lg text-center text-lg ${alertStatus === "danger" ? 'bg-red-400 text-red-800' : 'bg-emerald-400 text-emerald-800'}`}>
              {msg}
            </motion.p>
          )
        }
        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
          <IoBookSharp className='text-xl text-gray-700' />
          <input 
            type="text" 
            name="title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="The title of the Book"
            required
            className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
          />
        </div>

        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
          <IoPerson className='text-xl text-gray-700' />
          <input 
            type="text" 
            name="author" 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Written by"
            required
            className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
          />
        </div>

        <div className="w-full">
          <select 
            onChange={(e) => setGenre(e.target.value)}
            className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
          >
            <option 
              value="other"
              className='bg-white'
            >Select Genre</option>
            {
              categories && categories.map(item => (
                <option 
                  key={item.id}
                  className="text-base border-0 outline-none capitalize bg-white text-headingColor"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))
            }
          </select>
        </div>

        <div className="group flex flex-col items-center justify-center border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg">
            {isLoading ? (
                <Loader />
                ) : (
                  <>
                    {!imageAsset ? (
                      <>
                        <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                            <MdCloudUpload className='text-gray-500 text-3xl hover:text-gray-700' />
                            <p className='text-gray-500 hover:text-gray-700 capitalize'>
                              Click here to upload book cover
                            </p>
                          </div>
                          <input type="file" name="uploadimage" accept='image/*' onChange={uploadImage} className='w-0 h-0' />
                        </label>
                      </>
                    ) : (
                      <>
                        <div className="relative h-full">
                          <img src={imageAsset} alt="uploaded image" className='w-full h-full object-cover' />
                          <button className='absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-100 transition-all ease-in-out'
                          onClick={deleteImage}>
                            <MdDelete className='text-white' />
                          </button>
                        </div>
                      </>
                    )}
                  </>
            )}
        </div>

        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
          <MdAttachMoney className='text-xl text-gray-700' />
          <input 
            type="text" 
            name="price" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            required
            className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
          />
        </div>

        <div className="w-full py-2 border-b border-gray-300 flex flex-col items-center justify-center gap-2">
          {/* <MdDescription className='text-xl text-gray-700' /> */}
          <textarea 
            rows={10}
            cols={30}
            name="body" 
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Overview of the book"
            required
            className='w-full h-full text-lg bg-transparent outline-none border border-gray-500 rounded-md p-2 placeholder:text-gray-400 text-textColor'
          />
        </div>

        <div className="flex items-center w-full">
          <button 
            type="submit"
            className='ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white '
            onClick={saveDetails}
          >Save</button>
        </div>
      </div>
    </div>
  )
}

export default CreateContainer