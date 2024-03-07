import React from 'react'
import { motion } from 'framer-motion'

import resume from '../data/resume.json'
import JobDetailsCarousel from './components/JobDetailsCarousel'
import ProjectCards from './components/ProjectCards'
import Navbar from '../components/Navbar'

const Engineering = () => {
  const workExp = resume.jobs
  const projects = resume.sideProjects

  return (
    <div id='engineeringPage' className='min-h-screen w-full'>
      <Navbar />

      <div className='flex flex-col gap-20 md:gap-5'>
        {workExp.length > 0 && (
          <div
            className='flex flex-col justify-center items-center sm:mx-[6%] mx-8'
            style={{ minHeight: 'calc(100vh - 140px)' }}
          >
            <motion.span
              className='text-4xl font-bold self-start mb-5 md:mb-10'
              initial={{ opacity: 0, x: -250 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.1, delay: 0.2 } }}
            >
              Working Experience
            </motion.span>
            <JobDetailsCarousel workExp={workExp} />
          </div>
        )}
        {projects.length > 0 && (
          <div
            className='flex flex-col justify-center items-center sm:mx-[6%] mx-8'
            style={{ minHeight: 'calc(100vh - 140px)' }}
          >
            <motion.span
              className='text-4xl font-bold self-start mb-5 md:mb-10'
              initial={{ opacity: 0, x: -250 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.1, delay: 0.6 } }}
            >
              Side Projects
            </motion.span>

            <ProjectCards projects={projects} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Engineering
