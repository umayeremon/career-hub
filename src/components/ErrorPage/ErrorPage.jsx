import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div>
      <p>Oppps!!!!!!!!!!!!</p>
      <Link className="btn bg-gradient-to-r from-[#9873FFFF] to-[#7E90FE] text-base font-medium text-white" to='/'><button>Home</button></Link>
    </div>
  );
};

export default ErrorPage;