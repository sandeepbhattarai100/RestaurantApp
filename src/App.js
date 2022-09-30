import React from 'react'
import {Route,Routes} from 'react-router-dom'
import {Header,MainContainer,CreateContainer} from './components'
import {AnimatePresence} from 'framer-motion'
 

const app = () => {
  return (
  <AnimatePresence>
      <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header/>
        <main className='w-full p-8 mt-24'>
            <Routes>
                <Route path='/' element={<MainContainer/>}/>
                <Route path='/createItem' element={<CreateContainer/>}/>
            </Routes>
        </main>
    </div>
  </AnimatePresence>
  )
}

export default app;