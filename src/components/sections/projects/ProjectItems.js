import { BsArrowRight } from 'react-icons/bs';
import { Link } from "react-router-dom";
// import required modules

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Project from './Project';

const ProjectItems = ({items}) => {

    let projectItems = []
    for(let i = 0; i<items; i++) {
        projectItems.push(i);
    }

    return (
        <div className="container py-24 lg:px-0 px-4">
            <div className="items-center justify-between">
                <h2 className='text-[30px] font-poppins text-darkBlue font-[600]'>View our projects</h2>
                <Link className="btn" to="/projects">View More <BsArrowRight /> </Link>
            </div>


            <div className={`mt-10 grid lg:grid-cols-2 grid-cols-1 gap-6`}>
                {
                    projectItems.map((item) => (
                        <Project />
                    ))
                }
            </div>
            
        </div>
    )
}

export default ProjectItems;