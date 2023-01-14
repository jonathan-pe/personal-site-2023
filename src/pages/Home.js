import { useState } from 'react'
import { Code, GameController, MusicNotes } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import handleCardOnMouseMove from '../helpers/handleCardOnMouseMove'

import mePhoto from '../images/me.jpg'

const MotionLink = motion(Link)

const Home = () => {
  const [showEngineeringText, setShowEngineeringText] = useState(false)
  const [showGamingText, setShowGamingText] = useState(false)
  const [showMusicText, setShowMusicText] = useState(false)

  return (
    <div className='flex justify-center items-center min-h-screen w-full'>
      <div
        id='cards'
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl w-[calc(100%-1.25rem)] gap-4 items-center justify-center mx-0'
      >
        {/* top row */}
        <LayoutGroup>
          <motion.div
            id='photoCard'
            className='h-72 border border-neutral-800 bg-stone-900 rounded-lg flex justify-center items-center relative'
            initial={{ opacity: 0, x: -250 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.15 } }}
          >
            <div className='w-[calc(100%-2px)] h-[calc(100%-2px)] bg-stone-900 z-[2] rounded-[inherit] relative flex flex-col justify-center items-center'>
              <img
                alt='me on a boat with SF in the background'
                className='object-cover w-full h-full block m-auto rounded-[inherit]'
                src={mePhoto}
              />
            </div>
          </motion.div>
          <motion.div
            id='infoCard'
            className='h-72 border border-neutral-800 bg-stone-900 rounded-lg flex justify-center items-center relative lg:col-span-2'
            initial={{ opacity: 0, x: -250 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.15, delay: 0.1 } }}
          >
            <div className='w-[calc(100%-2px)] h-[calc(100%-2px)] bg-stone-900 z-[2] rounded-[inherit] relative flex flex-col justify-center items-center'>
              <div className='flex flex-col justify-center items-start w-full h-full p-10'>
                <span className='text-6xl font-bold'>Jonathan Pe</span>
                <span className='font-medium'>always learning.</span>
              </div>
            </div>
          </motion.div>
          {/* bottom row */}
          <MotionLink
            id='engineeringCard'
            to='/engineering'
            className='card h-72 border border-neutral-800 bg-stone-900 hover:text-emerald-500 transition-all rounded-lg flex justify-center items-center relative cursor-pointer'
            onMouseMove={handleCardOnMouseMove}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.05 },
            }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setShowEngineeringText(true)}
            onHoverEnd={() => setShowEngineeringText(false)}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.1, delay: 0.2 } }}
          >
            <div className='card-content w-[calc(100%-2px)] h-[calc(100%-2px)] bg-stone-900 z-[2] rounded-[inherit] relative flex flex-col justify-center items-center'>
              <Code size={64} />
              <AnimatePresence>
                {showEngineeringText && <span className='text-2xl mt-2'>Engineering</span>}
              </AnimatePresence>
            </div>
          </MotionLink>
          <MotionLink
            id='gamingCard'
            to='/gaming'
            className='card h-72 border border-neutral-800 bg-stone-900 hover:text-emerald-500 transition-all rounded-lg flex justify-center items-center relative cursor-pointer'
            onMouseMove={handleCardOnMouseMove}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.05 },
            }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setShowGamingText(true)}
            onHoverEnd={() => setShowGamingText(false)}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.1, delay: 0.3 } }}
            // transition={{ delay: 0.05 }}
          >
            <div className='card-content w-[calc(100%-2px)] h-[calc(100%-2px)] bg-stone-900 z-[2] rounded-[inherit] relative flex flex-col justify-center items-center'>
              <GameController size={64} />
              {showGamingText && <span className='text-2xl mt-2'>Gaming</span>}
            </div>
          </MotionLink>
          <MotionLink
            id='musicCard'
            to='/music'
            className='card h-72 border border-neutral-800 bg-stone-900 hover:text-emerald-500 transition-all rounded-lg flex justify-center items-center relative cursor-pointer'
            onMouseMove={handleCardOnMouseMove}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.05 },
            }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setShowMusicText(true)}
            onHoverEnd={() => setShowMusicText(false)}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.1, delay: 0.4 } }}
            // transition={{ delay: 0.1 }}
          >
            <div className='card-content w-[calc(100%-2px)] h-[calc(100%-2px)] bg-stone-900 z-[2] rounded-[inherit] relative flex flex-col justify-center items-center'>
              <MusicNotes size={64} />
              {showMusicText && <span className='text-2xl mt-2'>Music</span>}
            </div>
          </MotionLink>
        </LayoutGroup>
      </div>
    </div>
  )
}

export default Home
