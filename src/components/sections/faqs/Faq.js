import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';

const Faq = ({ no, title, open }) => {
    const [isOpen, setIsOpen] = useState(open ? true : false)

    // toggole faq
    const toggoleFaq = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="py-5 px-3 rounded">
            <div className='flex items-center justify-between'>
                <div onClick={toggoleFaq} className='cursor-pointer flex items-start lg:gap-10 gap-4'>
                    <p className='lg:text-[20px] text-md text-royalBlue font-poppins'>{no}</p>
                    <p className='lg:text-[20px] text-md text-darkBlue font-poppins'>{title}</p>
                </div>
                <BiPlus size={20} className={`${isOpen && 'rotate-45'} transition-all`} />
            </div>
            {
                isOpen && <div className='py-5 lg:pl-16'>
                    <p className='lg:text-[18px] text-sm text-darkBlue font-poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            }
            
        </div>
    )
}

export default Faq;