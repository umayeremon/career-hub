import { useEffect, useState } from "react";
import Category from "../Category/Category";


const CategoryList = () => {
  const [categories, setCategories]=useState([]);
  useEffect(()=>{
    fetch('/categories.json')
    .then(res=>res.json())
    .then(data=>setCategories(data))
  },[])
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-[#1A1919]">Job Category List</h1>
      <p className="text-sm text-[#757575] font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>

      <div className="grid grid-cols-2 md:grid-cols-4 my-8 gap-4">
        {
          categories.map((category, idx)=><Category key={idx} category={category}></Category>)
        }
      </div>
    </div>
  );
};

export default CategoryList;