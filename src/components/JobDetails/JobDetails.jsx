import { Link, useLoaderData, useParams } from "react-router-dom";
import { CiDollar, CiPhone } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { RiKeyboardBoxLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setAppliedJobs } from "../../Utitlity/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const currentId = parseInt(id);
  const job = jobs.find((job) => job.id === currentId);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;

  const handleApplyJob=()=>{
    setAppliedJobs(currentId)

    toast.success('Congratulations! Your application submitted successfully', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
      })
  }
  return (
    <div className="min-h-[calc(100vh-288px)]">
      <div className="bg-gradient-to-r from-[#9873FF0D] to-[#7E90FE0D] h-36 flex items-center justify-center rounded-xl">
        <h2 className="text-2xl text-[#1A1919] font-bold">Job Details</h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8 mt-16 " >
        <div className="col-span-3 space-y-4">
          <p>
            <span className="font-bold">Job Description:</span>{" "}
            {job_description}
          </p>
          <p>
            <span className="font-bold">Job Responsibility:</span>{" "}
            {job_responsibility}
          </p>
          <p>
            <span className="font-bold">Educational Requirements:</span> <br />
            {educational_requirements}
          </p>
          <p>
            <span className="font-bold">Experiences:</span>
            <br /> {experiences}
          </p>
        </div>
        <div className="col-span-1 space-y-2">
          <div className=" bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] rounded-xl">
            <div className="p-4">
              <h2 className="font-bold text-xl">Job Details</h2>
              <hr className="my-2" />
              <div className="flex gap-2 items-center">
                <p className="text-[#9873FF] text-2xl">
                  <CiDollar />
                </p>
                <p className="text-sm">
                  <span className="font-bold text-base">Salary:</span>
                  {salary} (Per Month)
                </p>
              </div>
              <div className="flex gap-2 items-center my-2">
                <p className="text-[#9873FF] text-2xl">
                  <RiKeyboardBoxLine />
                </p>
                <p className="text-sm">
                  <span className="font-bold text-base">Job Title:</span>
                  {job_title}
                </p>
              </div>

              <div className="mt-8">
                <h2 className="font-bold text-xl">Contact Information</h2>
                <hr className="my-2" />
                <div className="flex gap-2 items-center">
                  <p className="text-[#9873FF] text-2xl">
                    <CiPhone />
                  </p>
                  <p className="text-sm">
                    <span className="font-bold text-base">Phone:</span>
                    {contact_information.phone}
                  </p>
                </div>
                <div className="flex gap-2 items-center my-2">
                  <p className="text-[#9873FF] text-2xl">
                  <MdOutlineMail />
                  </p>
                  <p className="text-sm">
                    <span className="font-bold text-base">Email:</span>
                    {contact_information.email}
                  </p>
                </div>
                <div className="flex gap-2  my-2">
                  <p className="text-[#9873FF] text-2xl">
                  <IoLocationOutline />
                  </p>
                  <p className="text-sm">
                    <span className="font-bold text-base">Address:</span>
                    {contact_information.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link>
              <button onClick={handleApplyJob} className="btn bg-gradient-to-r from-[#9873FFFF] to-[#7E90FE] text-base font-medium text-white w-full">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default JobDetails;
