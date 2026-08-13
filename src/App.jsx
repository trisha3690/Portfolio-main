import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { lenis } from './utils/lenis'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layout/MainLayout'
import Loader from "./components/Loader"
import PageNotFound from './pages/PageNotFound'
import CustomCursor from './components/CustomCursor'



gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative">

      <Loader onComplete = {()=> (setIsLoaded(true))} />
         <CustomCursor/>
           <Routes>
            <Route path='/' element={<MainLayout isLoaded={isLoaded}/>}>
        <Route index element={<Home isLoaded={isLoaded}/>}/>
         <Route path='/home' element={<Navigate to="/" replace/>}/>

         
        <Route path="*" element={<PageNotFound startAnimation={isLoaded}/> } />

        
        </Route>

       </Routes>

        
    </div>
  )
}

export default App
