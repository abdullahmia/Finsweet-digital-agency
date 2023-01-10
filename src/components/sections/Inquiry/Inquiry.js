import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import inquiryImg from '../../../assets/images/inquiry.png';

const Inquiry = () => {
    return (
        <div className="container">
            <div style={{ backgroundImage: `url(${inquiryImg})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', backgroundPosition: "left" }} className="grid lg:grid-cols-2 grid-cols-1">
                <div className='bg-[#1C1E53] opacity-70 lg:p-20 p-7'>
                    <h2 className='text-[30px] font-poppins text-gray-50'>Building stellar websites for early startups</h2>
                    <p className='text-[14px] font-poppins text-gray-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    
                </div>
                <div className='bg-[#1C1E53] lg:p-20 p-7 space-y-8'>
                    <form className='space-y-5'>
                        <h2 className='text-[30px] text-white font-poppins'>Send inquiry</h2>
                        <p className='text-[16px] text-white font-poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <div className='space-y-5'>
                            <input type="text" placeholder='Your Name' className="w-full font-poppins text-grey rounded border border-gray-700 py-3 px-3 bg-transparent focus:outline-none" required />
                            <input type="email" placeholder='Your Email' className="w-full font-poppins text-grey rounded border border-gray-700 py-3 px-3 bg-transparent focus:outline-none" required />
                            <input type="text" placeholder='Paste your figma design' className="w-full font-poppins text-grey rounded border border-gray-700 py-3 px-3 bg-transparent focus:outline-none" />
                        </div>

                        <button className='yellow-btn w-full'>Send an Inquiry</button>

                    </form>
                    <div className='flex justify-center'>
                        <Link to="/contact" className='btn text-grey'>Get in touch with us  <BsArrowRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inquiry