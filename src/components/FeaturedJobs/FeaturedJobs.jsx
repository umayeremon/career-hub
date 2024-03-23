import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  const [showJobs, setShowJobs] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#1A1919]">Featured Jobs</h1>
        <p className="text-sm text-[#757575] font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 my-8 ">
        {jobs.slice(0, showJobs).map((job, idx) => (
          <FeaturedJob key={idx} job={job}></FeaturedJob>
        ))}
      </div>
      <div className={showJobs===jobs.length ? 'hidden': ''}>
        <button
          onClick={() => setShowJobs(jobs.length)}
          className="btn bg-gradient-to-r from-[#9873FFFF] to-[#7E90FE] text-base font-medium text-white flex mx-auto mb-8"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
