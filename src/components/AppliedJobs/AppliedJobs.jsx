import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJobs } from "../../Utitlity/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs=useLoaderData();

  const [display, setDisplay]=useState([])

  useEffect(()=>{
    const storedJobsId=getAppliedJobs();
    if(jobs.length>0){
      const appliedJobs=[];
      for(const id of storedJobsId){
        const job=jobs.find(job=> job.id===id);
        appliedJobs.push(job)
      }
      setDisplay(appliedJobs)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className=" min-h-[calc(100vh-288px)]">
      <div className="bg-gradient-to-r from-[#9873FF0D] to-[#7E90FE0D] h-36 flex items-center justify-center rounded-xl">
        <h2 className="text-2xl text-[#1A1919] font-bold">Applied Jobs</h2>
      </div>

      <div className="my-8">
        {
          display.map((job, idx)=><AppliedJob key={idx} job={job}></AppliedJob>)
        }
      </div>
    </div>
  );
};

export default AppliedJobs;
