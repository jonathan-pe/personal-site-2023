import { ArrowLeft } from 'phosphor-react'
import { motion } from 'framer-motion'

import resume from '../data/resume.json'
import { Link } from 'react-router-dom'
import JobDetailsCarousel from '../components/JobDetailsCarousel'
import ProjectCards from '../components/ProjectCards'

const MotionLink = motion(Link)

const Engineering = () => {
  // const [viewMode, setViewMode] = useState("CAROUSEL") // CAROUSEL || LIST
  const workExp = resume.jobs
  const projects = resume.sideProjects

  return (
    <div id='engineeringPage' className='flex flex-col mx-10 min-h-screen w-full'>
      <nav className='homeButton flex justify-start items-center mt-6 mb-10'>
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
      {workExp.length > 0 && (
        <div className='flex flex-col justify-center items-center sm:mx-[6%] mt-10 mb-10 mx-8'>
          <motion.span
            className='text-4xl font-bold self-start mb-20'
            initial={{ opacity: 0, x: -250 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.1, delay: 0.2 } }}
          >
            Working Experience
          </motion.span>
          <JobDetailsCarousel workExp={workExp} />
        </div>
      )}
      {projects.length > 0 && (
        <div className='flex flex-col justify-center items-center sm:mx-[6%] mt-10 mb-36 mx-8'>
          <motion.span
            className='text-4xl font-bold self-start mb-20'
            initial={{ opacity: 0, x: -250 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.1, delay: 0.6 } }}
          >
            Side Projects
          </motion.span>
          <ProjectCards projects={projects} />
        </div>
      )}
    </div>
  )
}

export default Engineering
