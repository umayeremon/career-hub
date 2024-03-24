import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJobs } from "../../Utitlity/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [displayJobs, setDisplayJobs] = useState([]);
  const [filter, setFilter]=useState([])

  useEffect(() => {
    const storedJobsId = getAppliedJobs();
    if (jobs.length > 0) {
      const appliedJobs = [];
      for (const id of storedJobsId) {
        const job = jobs.find((job) => job.id === id);
        appliedJobs.push(job);
      }
      setDisplayJobs(appliedJobs);
      setFilter(appliedJobs)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobs]);

  const handleFilter= filter=>{
    if(filter==='all'){
      setFilter(displayJobs)
    }
    else if(filter === 'remote'){
      const remoteJob=displayJobs.filter(job=>job.remote_or_onsite==='Remote');
      setFilter(remoteJob)
    }
    else if(filter=== 'onsite'){
      const onsiteJob=displayJobs.filter(job=>job.remote_or_onsite==='Onsite');
      setFilter(onsiteJob)
    }
  }

  return (
    <div className=" min-h-[calc(100vh-288px)]">
      <div className="bg-gradient-to-r from-[#9873FF0D] to-[#7E90FE0D] h-36 flex items-center justify-center rounded-xl">
        <h2 className="text-2xl text-[#1A1919] font-bold">Applied Jobs</h2>
      </div>
      <div className="text-right mr-4 mt-2">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn btn-outline m-1">
           Filter
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24"
          >
            <li onClick={()=>handleFilter('all')}><a>All</a></li>
            <li onClick={()=>handleFilter('remote')}><a>Remote</a></li>
            <li onClick={()=>handleFilter('onsite')}><a>Onsite</a></li>
          </ul>
        </div>
      </div>
      <div className="my-8">
        {filter.map((job, idx) => (
          <AppliedJob key={idx} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
