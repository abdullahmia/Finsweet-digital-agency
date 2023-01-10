import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import blogImg from '../../../assets/images/blog.png';

const Blog = () => {
  return (
    <div className='space-y-4'>
      <img src={blogImg} className="w-full" alt="" />
      <div className='space-y-2'>
        <p className='text-[15px] text-darkBlue font-poppins'>19 Jan 2022</p>
        <Link to="/blog/kire-kemonahcot" className='text-[20px] text-darkBlue font-poppins'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</Link>
        <p className='text-gray-500 text-[14px] font-poppins'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
        <Link to="/blog/kire-kemonahcot" className='btn hover:text-gray-700 transition'>Read More <BsArrowRight /></Link>
      </div>
    </div>
  )
}

export default Blog