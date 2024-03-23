import PropTypes from 'prop-types'
import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const FeaturedJob = ({job}) => {
  const {id,  logo,job_title, company_name, remote_or_onsite, location, job_type, salary }=job
  return (
    <div className=" space-y-2 bg-base-100 border border-gray-100 shadow-sm py-4 rounded-xl">
      <div className="px-4">
        <img
          src={logo}
          alt={company_name}
          className="w-32"
        />
      </div>
      <div className="space-y-2 pl-4">
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
        <div className="card-actions ">
          <Link to={`/job/${id}`}><button className="btn  bg-gradient-to-r from-[#9873FFFF] to-[#7E90FE] text-base font-medium text-white">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

FeaturedJob.propTypes={
  job:PropTypes.object.isRequired,
}


export default FeaturedJob;
