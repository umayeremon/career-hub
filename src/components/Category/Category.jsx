import PropTypes from 'prop-types'

const Category = ({category}) => {
  const {logo, category_name, availability}=category
  return (
    <div className='flex items-center gap-4 bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] p-4 rounded-xl'>
      <img src={logo} alt=""  className='w-20 bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] p-4 rounded-xl'/>
      <div className='text-left'>
      <h1 className='font-bold text-base'>{category_name}</h1>
      <h2 className='text-sm'>{availability}</h2>
      </div>
    </div>
  );
};

Category.propTypes={
  category: PropTypes.object
}

export default Category;