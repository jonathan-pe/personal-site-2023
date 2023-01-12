import { useState } from "react"
import { Circle, ArrowLeft, FileCode, CaretLeft, CaretRight } from "phosphor-react"
import { motion } from "framer-motion"

import resume from "../data/resume.json"
import { Link } from "react-router-dom"
import JobDetails from "../components/JobDetails"
// import usePrevious from "../hooks/usePrevious"

const MotionLink = motion(Link)

const Engineering = () => {
  // const [viewMode, setViewMode] = useState("CAROUSEL") // CAROUSEL || LIST
  const workExp = resume.jobs
  const [carouselPage, setCarouselPage] = useState(0)

  // const previousPage = usePrevious(carouselPage)

  const carouselBackward = () => {
    carouselPage > 0 ? setCarouselPage(carouselPage - 1) : setCarouselPage(workExp.length - 1)
  }

  const carouselForward = () => {
    carouselPage < workExp.length - 1 ? setCarouselPage(carouselPage + 1) : setCarouselPage(0)
  }

  return (
    <div id="engineeringPage" className="flex flex-col mx-10 min-h-screen w-full">
      <nav className="homeButton flex justify-start items-center mt-6">
        <MotionLink
          to="/"
          className="flex justify-center items-center text-emerald-500 hover:bg-emerald-900/25 hover:text-emerald-500 transition-all py-1 px-2 rounded"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.05 },
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, x: -250 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.1 } }}
        >
          <ArrowLeft className="mr-2" />
          <span>Home</span>
        </MotionLink>
      </nav>
      {workExp.length > 0 && (
        <div id="workingExperience" className="flex flex-col justify-center items-center sm:mx-[6%] mt-20">
          <motion.span
            id="workExpHeader"
            className="workExpHeader text-4xl font-bold self-start mb-20"
            initial={{ opacity: 0, x: -250 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.1, delay: 0.2 } }}
          >
            Working Experience
          </motion.span>
          <motion.div
            id="workExpCarousel"
            className="workExpCarousel flex flex-col justify-center items-center w-full"
            initial={{ opacity: 0, x: -250 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.1, delay: 0.4 } }}
          >
            <div id="carousel" className="flex w-full justify-between items-center min-h-[20rem]">
              <button onClick={carouselBackward}>
                <CaretLeft />
              </button>
              <JobDetails job={workExp[carouselPage]} />
              <button onClick={carouselForward}>
                <CaretRight />
              </button>
            </div>
            <div id="carouselControl" className="flex gap-4 pt-10">
              {workExp.map((job, i) => (
                <button key={job.companyName} onClick={() => setCarouselPage(i)}>
                  {carouselPage === i ? <FileCode /> : <Circle size={14} />}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Engineering
