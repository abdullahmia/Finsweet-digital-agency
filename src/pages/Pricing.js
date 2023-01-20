import { BiCaretRight } from 'react-icons/bi';
import Layout from "../components/layouts/Layout";
import Faqs from '../components/sections/faqs/Faqs';

const Pricing = () => {
    return (
        <Layout title="Pricing | Sweet Agency">
            <section className="py-24 lg:px-0 px-4">
               <div className="container">
                    <div className="lg:w-[550px] w-full mx-auto">
                        <h2 className='text-[35px] text-center font-poppins text-darkBlue font-semibold'>Our Pricing Plans</h2>
                        <p className="font-poppins text-gray-600">When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
                    </div>


                    {/* Pricing */}
                    <div className='mt-14 grid lg:grid-cols-3 grid-cols-1 gap-5'>
                        {/* Single Price */}
                        <div className="bg-gray-100 p-10 rounded">
                            <h2 className="font-poppins text-darkBlue text-[35px] font-semibold flex items-center gap-4">
                                $299
                                <span className="capitalize text-blue-500 text-[14px] font-normal">Per Design</span>
                            </h2>

                            <div className='mt-3'>
                                <h2 className="font-poppins text-darkBlue text-[20px] font-semibold capitalize">Landing Page </h2>
                                <p className="text-gray-500 font-poppins">When you’re ready to go beyond prototyping in Figma, </p>
                            </div>

                            <div className='text-gray-600 space-y-4 mt-10 -ml-[5px]'>
                                <p className='flex items-center gap-2'>
                                    <BiCaretRight size={23} className="text-[#97DAAD]" />
                                    <span className='font-poppins'>All limited links</span>
                                </p>

                                <p className='flex items-center gap-2'>
                                    <BiCaretRight size={23} className="text-[#97DAAD]" />
                                    <span className='font-poppins'>Own analytics platform</span>
                                </p>


                                <p className='flex items-center gap-2'>
                                    <BiCaretRight size={23} className="text-[#97DAAD]" />
                                    <span className='font-poppins'>Chat support</span>
                                </p>


                                <p className='flex items-center gap-2'>
                                    <BiCaretRight size={23} className="text-[#97DAAD]" />
                                    <span className='font-poppins'>Optimize hashtags</span>
                                </p>


                                <p className='flex items-center gap-2'>
                                    <BiCaretRight size={23} className="text-[#97DAAD]" />
                                    <span className='font-poppins'>Unlimited users</span>
                                </p>
                            </div>

                            <div className='flex items-center justify-center mt-8'>
                                <button className='black-btn'>Get Started</button>
                            </div>

                        </div>


                        <div className="bg-tintBlue p-10 rounded">
                            <h2 className="font-poppins text-gray-100 text-[35px] font-semibold flex items-center gap-4">
                                $299
                                <span className="capitalize text-blue-500 text-[14px] font-normal">Per Design</span>
                            </h2>

                            <div className='mt-3'>
                                <h2 className="font-poppins text-gray-100 text-[20px] font-semibold capitalize">Landing Page </h2>
                                <p className="text-gray-400 font-poppins">When you’re ready to go beyond prototyping in Figma, </p>
                            </div>

                            <div className='text-gray-300 space-y-4 mt-10 -ml-[5px]'>
                                <p className='flex items-center gap-2'>
                                    <BiCaretRight size={23} className="text-[#97DAAD]" />
                                    <span className='font-poppins'>All limited links</span>
                                </p>

                                <p className='flex items-center gap-2'>
                                    <BiCaretRight size={23} className="text-[#97DAAD]" />
                                    <span className='font-poppins'>Own analytics platform</span>
                                </p>


                                <p className='flex items-center gap-2'>
                                    <BiCaretRight size={23} className="text-[#97DAAD]" />
                                    <span className='font-poppins'>Chat support</span>
                                </p>


                                <p className='flex items-center gap-2'>
                                    <BiCaretRight size={23} className="text-[#97DAAD]" />
                                    <span className='font-poppins'>Optimize hashtags</span>
                                </p>


                                <p className='flex items-center gap-2'>
                                    <BiCaretRight size={23} className="text-[#97DAAD]" />
                                    <span className='font-poppins'>Unlimited users</span>
                                </p>
                            </div>

                            <div className='flex items-center justify-center mt-8'>
                                <button className='yellow-btn'>Get Started</button>
                            </div>

                        </div>

                        
                        <div className="bg-gray-100 p-10 rounded">
                            <h2 className="font-poppins text-darkBlue text-[35px] font-semibold flex items-center gap-4">
                                $299
                                <span className="capitalize text-blue-500 text-[14px] font-normal">Per Design</span>
                            </h2>

                            <div className='mt-3'>
                                <h2 className="font-poppins text-darkBlue text-[20px] font-semibold capitalize">Landing Page </h2>
                                <p className="text-gray-500 font-poppins">When you’re ready to go beyond prototyping in Figma, </p>
                            </div>

                            <div className='text-gray-600 space-y-4 mt-10 -ml-[5px]'>
                                <p className='flex items-center gap-2'>
                                    <BiCaretRight size={23} className="text-[#97DAAD]" />
                                    <span className='font-poppins'>All limited links</span>
                                </p>

                                <p className='flex items-center gap-2'>
                                    <BiCaretRight size={23} className="text-[#97DAAD]" />
                                    <span className='font-poppins'>Own analytics platform</span>
                                </p>


                                <p className='flex items-center gap-2'>
                                    <BiCaretRight size={23} className="text-[#97DAAD]" />
                                    <span className='font-poppins'>Chat support</span>
                                </p>


                                <p className='flex items-center gap-2'>
                                    <BiCaretRight size={23} className="text-[#97DAAD]" />
                                    <span className='font-poppins'>Optimize hashtags</span>
                                </p>


                                <p className='flex items-center gap-2'>
                                    <BiCaretRight size={23} className="text-[#97DAAD]" />
                                    <span className='font-poppins'>Unlimited users</span>
                                </p>
                            </div>

                            <div className='flex items-center justify-center mt-8'>
                                <button className='black-btn'>Get Started</button>
                            </div>

                        </div>
                    </div>
               </div>
            </section>

            <Faqs />
        </Layout>
    )
}

export default Pricing;