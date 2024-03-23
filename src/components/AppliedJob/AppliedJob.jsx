import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const {id, logo, job_title, company_name,remote_or_onsite,job_type, salary,location  }=job
  console.log(job)
  return (
    <div className="card card-side bg-base-100 shadow-md mb-4 flex justify-between">
     <div className="card card-side ">
     <div className="flex items-center justify-center p-4 bg-[#F4F4F4] m-4 rounded-xl">
        <img
          src={logo}
          alt={job_title}
          className="w-32"
        />
      </div>
      <div className="card-body">
      <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex flex-row gap-2">
          <h2 className="border-2 border-gradient-to-r from-[#9873FFFF] to-[#7E90FE] text-sm font-medium p-2 rounded-md text-[#9873FF]">{remote_or_onsite}</h2>
          <h2 className="border-2 border-gradient-to-r from-[#9873FFFF] to-[#7E90FE] text-sm font-medium p-2 rounded-md text-[#9873FF]">{job_type}</h2>
        </div>
        <div className="flex flex-row gap-8">
          <div className="flex flex-row items-center gap-2">
            <p><IoLocationOutline /></p>
            <p>{location}</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <p><CiDollar /></p>
            <p>Salary: {salary}</p>
          </div>  
        </div>
        
    </div>
     </div>
       <div className="flex items-center pr-4">
          <Link to={`/job/${id}`}><button className="btn  bg-gradient-to-r from-[#9873FFFF] to-[#7E90FE] text-base font-medium text-white">View Details</button></Link>
        </div>
    </div>
  );
};

AppliedJob.propTypes = {
  job: PropTypes.object.isRequired,
};

export default AppliedJob;


