import { useState } from "react"
import { Circle, FileCode, CaretLeft, CaretRight } from "phosphor-react"
import { AnimatePresence, motion, wrap } from "framer-motion"

const JobDetailsCarousel = ({ workExp }) => {
  const [carouselPage, setCarouselPage] = useState(0)
  const jobIndex = wrap(0, workExp.length, carouselPage)

  const paginate = (newDirection) => {
    setCarouselPage(carouselPage + newDirection)
  }

  return (
    <motion.div
      className="flex flex-col justify-center items-center w-full"
      initial={{ opacity: 0, x: -250 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.1, delay: 0.4 } }}
    >
      <div className="flex w-full justify-between items-center min-h-[20rem]">
        <button
          onClick={() => {
            paginate(-1)
          }}
        >
          <CaretLeft />
        </button>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            className="flex flex-col px-14"
            key={carouselPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
          >
            <span className="text-5xl font-bold mb-1">{workExp[jobIndex].companyName}</span>
            <span className="text-xl mb-1">{workExp[jobIndex].role}</span>
            <div className="text-neutral-400">
              <span>{workExp[jobIndex].startDate}</span>
              <span className="mx-2">-</span>
              <span>{workExp[jobIndex].endDate}</span>
            </div>

            <ul className="mt-8 list-disc">
              {workExp[jobIndex].accomplishments.map((accomplishment) => (
                <li key={accomplishment} className="accomplishment">
                  {accomplishment}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => {
            paginate(1)
          }}
        >
          <CaretRight />
        </button>
      </div>
      <div className="flex gap-4 pt-10">
        {workExp.map((job, i) => (
          <button key={job.companyName} onClick={() => setCarouselPage(i)}>
            {jobIndex === i ? <FileCode /> : <Circle size={14} />}
          </button>
        ))}
      </div>
    </motion.div>
  )
}

export default JobDetailsCarousel
