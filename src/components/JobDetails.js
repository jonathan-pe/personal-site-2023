const JobDetails = ({ job }) => {
  return (
    <div id="jobDetails" className="flex flex-col px-14">
      <span className="text-5xl font-bold mb-1">{job.companyName}</span>
      <span className="text-xl mb-1">{job.role}</span>
      <div className="text-neutral-400">
        <span>{job.startDate}</span>
        <span className="mx-2">-</span>
        <span>{job.endDate}</span>
      </div>

      <ul className="mt-8 list-disc">
        {job.accomplishments.map((accomplishment) => (
          <li key={accomplishment} className="accomplishment">
            {accomplishment}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JobDetails
