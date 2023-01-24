import moment from 'moment';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Image from '../../custom/Image';

const Blog = ({ article = {}}) => {
  return (
    <div className='space-y-4'>
      <Image src={article.image} className="w-full h-52 object-contain" alt="" />
      <div className='space-y-2'>
        <p className='text-[15px] text-darkBlue font-poppins'>{moment(article.createdAt).format("MMM Do YY")}</p>
        <Link to={`/blog/${article.slug}`} className='text-[20px] text-darkBlue font-poppins'>{article.title}</Link>
        <p className='text-gray-500 text-[14px] font-poppins'>{article.shortDescription.slice(0, 100)}</p>
        <Link to={`/blog/${article.slug}`} className='btn hover:text-gray-700 transition'>Read More <BsArrowRight /></Link>
      </div>
    </div>
  )
}

export default Blog