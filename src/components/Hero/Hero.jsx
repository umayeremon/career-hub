const Hero = () => {
  return (
      <div className="flex flex-col lg:gap-[380px]  items-center lg:flex-row-reverse">
        <div>
        <img
          src={`https://i.ibb.co/NpBMp07/user.jpg`}
          className="max-w-xs rounded-lg"
        />
        </div>
      <div >
          <h1 className="text-3xl lg:text-5xl font-bold lg:w-[570px]">One Step Closer To Your Dream Job</h1>
          <p className="py-6 text-sm lg:text-base lg:w-[570px]">
          Explore thousands of job opportunities with all the information you need. Its your future.  Come find it. Manage all your job application from start to finish.
          </p>
          <button className="btn bg-gradient-to-r from-[#9873FFFF] to-[#7E90FE] text-base font-medium text-white">Get Started</button>     
      </div>
    </div>
  );
};

export default Hero;
