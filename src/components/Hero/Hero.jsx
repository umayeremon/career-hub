const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:gap-[300px] justify-between lg:flex-row-reverse">
        <img
          src="/src/assets/images/user.png"
          className="max-w-sm rounded-lg"
        />
      <div >
          <h1 className="text-3xl lg:text-5xl font-bold lg:w-[570px]">One Step Closer To Your Dream Job</h1>
          <p className="py-6 text-sm lg:text-base lg:w-[570px]">
          Explore thousands of job opportunities with all the information you need. Its your future.  Come find it. Manage all your job application from start to finish.
          </p>
          <button className="btn bg-gradient-to-r from-[#9873FFFF] to-[#7E90FE] text-base font-medium text-white">Get Started</button>     
      </div>
      </div>
    </div>
  );
};

export default Hero;
