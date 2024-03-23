import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Hero from "../Hero/Hero";


const Home = () => {
  return (
    <div className="space-y-8">
    <Hero/>
    <CategoryList/>
    <FeaturedJobs/>
    </div>
  );
};

export default Home;