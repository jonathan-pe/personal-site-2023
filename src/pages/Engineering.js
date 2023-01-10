import { useEffect, useState } from "react"
import anime from "animejs"
import { Circle, ArrowLeft, FileCode, CaretLeft, CaretRight } from "phosphor-react"

import resume from "../data/resume.json"
import { Link } from "react-router-dom"

const Engineering = () => {
  const [viewMode, setViewMode] = useState("CAROUSEL") // CAROUSEL || LIST
  const [workExp, setWorkExp] = useState([])
  const [carouselPage, setCarouselPage] = useState(0)

  useEffect(() => {
    setWorkExp(resume.jobs)
  }, [resume])

  const carouselBackward = () => {
    carouselPage > 0 ? setCarouselPage(carouselPage - 1) : setCarouselPage(workExp.length - 1)
  }

  const carouselForward = () => {
    carouselPage < workExp.length - 1 ? setCarouselPage(carouselPage + 1) : setCarouselPage(0)
  }

  return (
    <div id="engineeringPage" className="flex flex-col mx-10 min-h-screen w-full">
      <nav className="flex justify-start items-center mt-6">
        <Link
          to="/"
          className="flex justify-center items-center text-emerald-500 hover:bg-emerald-900/25 hover:text-emerald-500 transition-all py-1 px-2 rounded"
        >
          <ArrowLeft className="mr-2" />
          <span>Home</span>
        </Link>
      </nav>
      {workExp.length > 0 && (
        <div id="workingExperience" className="flex flex-col justify-center items-center sm:mx-[6%] mt-20">
          <span className="text-4xl font-bold self-start mb-20">Working Experience</span>
          <div id="workExpCarousel" className="flex flex-col justify-center items-center w-full">
            <div id="carousel" className="flex w-full justify-between items-center">
              <button onClick={carouselBackward}>
                <CaretLeft />
              </button>
              <div id="carouselContent">{workExp[carouselPage].companyName}</div>
              <button onClick={carouselForward}>
                <CaretRight />
              </button>
            </div>
            <div id="carouselControl" className="flex gap-4 pt-10">
              {workExp.map((job, i) => (
                <button onClick={() => setCarouselPage(i)}>
                  {carouselPage === i ? <FileCode /> : <Circle size={14} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Engineering
