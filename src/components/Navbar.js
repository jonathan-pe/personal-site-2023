import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'phosphor-react'

const MotionLink = motion(Link)

const Navbar = () => {
  return (
    <nav className='homeButton flex justify-start items-center my-4 mx-10'>
      <MotionLink
        to='/'
        className='flex justify-center items-center text-emerald-500 hover:bg-emerald-900/25 hover:text-emerald-500 transition-all py-1 px-2 rounded'
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.05 },
        }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, x: -250 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.1 } }}
      >
        <ArrowLeft className='mr-2' />
        <span>Home</span>
      </MotionLink>
    </nav>
  )
}

export default Navbar
