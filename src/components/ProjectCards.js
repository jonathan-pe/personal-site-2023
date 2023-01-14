import { motion } from "framer-motion"
import handleCardOnMouseMove from "../helpers/handleCardOnMouseMove"

const ProjectCards = ({ projects }) => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center w-full"
      initial={{ opacity: 0, x: -250 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.1, delay: 0.8 } }}
    >
      <div className="flex w-full justify-between items-center min-h-[20rem]">
        <div className="flex w-full justify-center items-center gap-6 flex-wrap">
          {projects.map((project) => {
            return (
              <motion.div
                className="card h-80 max-w-[28rem] border border-neutral-800 bg-stone-900 hover:text-emerald-500 transition-all rounded-lg flex justify-center items-center relative cursor-pointer"
                onMouseMove={handleCardOnMouseMove}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.05 },
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.1, delay: 0.3 } }}
                // transition={{ delay: 0.05 }}
              >
                <div className="card-content w-[calc(100%-2px)] h-[calc(100%-2px)] bg-stone-900 z-[2] rounded-[inherit] relative flex flex-col justify-center items-start px-12 py-8">
                  <span className="text-5xl font-bold mb-8">{project.projectName}</span>
                  <span className="text-l mb-1">{project.description}</span>
                  {/* <ul className="mt-8 list-none">
                    {project.notableTechUsed.map((tech) => (
                      <li key={tech} className="tech">
                        {tech}
                      </li>
                    ))}
                  </ul> */}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCards
