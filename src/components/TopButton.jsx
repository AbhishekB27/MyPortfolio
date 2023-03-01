import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const TopButton = () => {
    const [showButton, setShowButton] = useState(true)
    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
    
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])
    const handleScroll = () => {
        if(window.pageYOffset > 300){
            setShowButton(false)
        }else{
            setShowButton(true)
        }
    }
    const top = () => {
        console.log(window.pageYOffset)
        window.scrollTo({top:0,behavior:'smooth'})
    }
  return (
    <div className={`w-fit ${showButton ? 'hidden' : 'fixed'} bottom-0 right-0 text-right px-5 py-2`}> <motion.button whileTap={{scale:0.8}} className='text-center w-[3rem] h-[3rem] text-lg bg-white rounded-full text-yellow-400' onClick={top}> <i class="fa-solid fa-arrow-up"></i> </motion.button></div>
  )
}

export default TopButton