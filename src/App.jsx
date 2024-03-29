import { useEffect } from 'react';
import './index.css'

import Header from './components/Header'
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CreateContainer from './components/CreateContainer'
import MainContainer from './components/MainContainer'
import BookDetails from './components/BookDetails';

import { useStateValue } from './context/StateProvider';
import { getAllBookItems } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';

function App() {
  const [{ bookItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllBookItems().then(data => {
      dispatch({
        type : actionType.SET_BOOK_ITEMS,
        bookItems: data,
      })
    });
  }

  useEffect(() => {
    fetchData();
  }, [])
  

  return (
    <AnimatePresence wait>
      <div className='w-screen h-auto flex flex-col bg-primary '>
        <Header />
        <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer />} />
            <Route path='/createItem' element={<CreateContainer />} />
            <Route path='/details' element={<BookDetails />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App
