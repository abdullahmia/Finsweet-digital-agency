import projectImg from '../../assets/images/portfolio/portfolio-3.png';
import Layout from "../../components/layouts/Layout";


const ProjectCase = () => {
    return (
        <Layout title="Project Title">
            <section className="py-24 lg:px-0 px-4">
                <div className="container">
                    <div className="font-poppins">
                        <h5 className="text-[22px] text-darkBlue">Web design and development</h5>
                        <h2 className='text-[35px] text-darkBlue font-semibold'>Finsweet Design case studies</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                    </div>

                    <div className='mt-10'>
                        <img src={projectImg} className="w-full lg:h-[600px]" alt="" />
                    </div>

                    <div className='flex justify-between items-start flex-wrap mt-8'>
                        <div className='font-poppins py-6'>
                            <p className='text-gray-600'>Client</p>
                            <h5 className="text-[22px] text-darkBlue">facebook.com</h5>
                        </div>
                        <div className='font-poppins py-6'>
                            <p className='text-gray-600'>Service</p>
                            <h5 className="text-[22px] text-darkBlue">Product Design</h5>
                        </div>
                        <div className='font-poppins py-6'>
                            <p className='text-gray-600'>Deliverable</p>
                            <h5 className="text-[22px] text-darkBlue">UI Screen, UX Flow & Prototype</h5>
                        </div>
                    </div>
                    <hr />

                    {/* Project Descriptions */}
                    <div className='lg:px-36 mt-6 space-y-8'>
                        <div className='font-poppins space-y-3'>
                            <h2 className='text-[31px] text-darkBlue font-semibold'>About the project</h2>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>
                        <div className='font-poppins space-y-3'>
                            <h2 className='text-[31px] text-darkBlue font-semibold'>What we did?</h2>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>

                        {/* Keywords */}
                        <div className='mt-10 border-t border-b border-gray-200 py-6'>
                            <div className='font-poppins flex items-center gap-7'>
                                <h5 className='text-[18px] text-blue-700'>Keywords</h5>
                                <p className='text-gray-700'>Design</p>
                                <p className='text-gray-700'>UI/UX</p>
                                <p className='text-gray-700'>Fireframing</p>
                                <p className='text-gray-700'>Brading</p>
                                <p className='text-gray-700'>Programming</p>
                            </div>
                        </div>


                        <div className="mt-10 lg:w-[550px] w-full text-center mx-auto space-y-4">
                            <h2 className='text-[30px] font-poppins text-darkBlue font-semibold'>Let's build something great together</h2>
                            <p className="font-poppins text-gray-600">When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your</p>
                            <button className='yellow-btn'>Contact Us</button>
                        </div>
                    </div>

                    

                </div>
            </section>
        </Layout>
    )
}

export default ProjectCase;