import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import portfolioImg from '../../../assets/images/portfolio/portfolio-1.png';

const Project = () => {
    return (
        <div className='space-y-3'>
            <img src={portfolioImg} className="w-full h-[317px]" alt="" />
            <h2 className='text-[32px] text-darkBlue text-[600] font-poppins'>Template 1</h2>
            <p className="font-poppins text-darkBlue">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <Link className="btn font-poppins" to="/project/template">View Portfolio  <BsArrowRight /></Link>
        </div>
    )
}

export default Project;