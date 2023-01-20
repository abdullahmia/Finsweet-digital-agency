import peopleSittingImg from '../assets/images/group-of-people.png';
import clientIcon from '../assets/images/icons/client.png';
import customizeIcon from '../assets/images/icons/customize.png';
import supportIcon from '../assets/images/icons/support.png';
import manInWhiteBoardImg from '../assets/images/man-white-board.png';
import missionImg from '../assets/images/mission.png';
import memberImg1 from '../assets/images/team/member-1.png';
import memberImg2 from '../assets/images/team/member-2.png';
import memberImg3 from '../assets/images/team/member-3.png';
import vissionImg from '../assets/images/vission.png';
import Card from '../components/card/Card';
import TeamCard from '../components/card/TeamCard';
import Layout from '../components/layouts/Layout';

const About = () => {
    return (
        <Layout title="About Us">
        
            
            <section className='container lg:px-0 px-4 py-24'>
                <div className='grid grid-cols-12 items-center gap-10'>
                    <div className='lg:col-span-7 col-span-12 lg:pr-36 pr-0'>
                        <p className='text-[16px] font-semibold font-poppins text-darkBlue'>About</p>
                        <h2 className='text-[38px] font-poppins text-darkBlue'>Our designs solve problems</h2>
                        <p className='text-[14px] font-poppins text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div className='lg:col-span-5 col-span-12'>
                        <img src={peopleSittingImg} className='w-full' alt="" />
                    </div>
                </div>
            </section>


            <section className='container lg:px-0 px-4'>
                <div className='bg-grey px-10 py-24 grid lg:grid-cols-2 grid-cols-1 gap-10'>
                    <div>
                        <p className='text-[16px] font-semibold font-poppins text-darkBlue'>Who we are</p>
                        <h2 className='text-[38px] font-poppins text-darkBlue'>Goal focussed</h2>
                        <p className='text-[14px] font-poppins text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipishdo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div>
                        <p className='text-[16px] font-semibold font-poppins text-darkBlue'>Who we are</p>
                        <h2 className='text-[38px] font-poppins text-darkBlue'>Goal focussed</h2>
                        <p className='text-[14px] font-poppins text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipishdo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <img src={manInWhiteBoardImg} className='w-full' alt="" />
            </section>


            <section className='container lg:px-0 px-4 py-24'>
                <h2 className='text-[35px] text-center font-poppins text-darkBlue font-semibold'>The process we follow</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-16'>
                    <div className='space-y-8'>
                        <div className='flex items-center gap-6'>
                            <div className='h-6 w-6 bg-royalBlue rounded-full'></div>
                            <div className='flex-1 border border-dashed border-royalBlue'></div>
                        </div>
                        <div>
                            <h2 className='text-[22px] font-semibold font-poppins text-darkBlue'>Planning</h2>
                            <p className='text-[16px] text-gray-600 font-poppins'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>
                    </div>

                    <div className='space-y-8'>
                        <div className='flex items-center gap-6'>
                            <div className='h-6 w-6 bg-royalBlue rounded-full'></div>
                            <div className='flex-1 border border-dashed border-royalBlue'></div>
                        </div>
                        <div>
                            <h2 className='text-[22px] font-semibold font-poppins text-darkBlue'>Conception</h2>
                            <p className='text-[16px] text-gray-600 font-poppins'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>
                    </div>

                    <div className='space-y-8'>
                        <div className='flex items-center gap-6'>
                            <div className='h-6 w-6 bg-royalBlue rounded-full'></div>
                            <div className='flex-1 border border-dashed border-royalBlue'></div>
                        </div>
                        <div>
                            <h2 className='text-[22px] font-semibold font-poppins text-darkBlue'>Design</h2>
                            <p className='text-[16px] text-gray-600 font-poppins'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>
                    </div>

                    <div className='space-y-8'>
                        <div className='flex items-center gap-6'>
                            <div className='h-6 w-6 bg-royalBlue rounded-full'></div>
                            <div className='flex-1 border border-dashed border-royalBlue'></div>
                        </div>
                        <div>
                            <h2 className='text-[22px] font-semibold font-poppins text-darkBlue'>Development</h2>
                            <p className='text-[16px] text-gray-600 font-poppins'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className='bg-grey lg:px-0 px-4 py-24'>
                <div className="container">
                    <div className="grid grid-cols-12 gap-28">
                        <div className='lg:col-span-7 col-span-12 space-y-5'>
                            <p className='text-[16px] font-poppins font-semibold text-darkBlue'>Our Mission </p>
                            <h2 className='text-[35px] font-poppins font-semibold text-darkBlue'>Inspire, Innovate, Share</h2>
                            <p className='text-[15px] font-poppins text-darkBlue'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className='lg:col-span-5 col-span-12'>
                            <img src={missionImg} className='w-full' alt="" />
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-28 mt-24">
                        <div className='lg:col-span-5 col-span-12'>
                            <img src={vissionImg} className='w-full' alt="" />
                        </div>
                        <div className='lg:col-span-7 col-span-12 space-y-5'>
                            <p className='text-[16px] font-poppins font-semibold text-darkBlue'>Our Vision</p>
                            <div className='lg:pl-10'>
                                <h2 className='text-[35px] font-poppins font-semibold text-darkBlue'>Laser focus</h2>
                                <p className='text-[15px] font-poppins text-darkBlue'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            {/* working */}
            <section className='container lg:px-0 px-4 py-24'>
                <h2 className='text-[35px] text-center font-poppins text-darkBlue font-semibold'>The benefits of working with us</h2>


                <div className='mt-10 grid lg:grid-cols-3 grid-cols-1 gap-8'>
                    <Card icon={customizeIcon} title="Template Customization" className="bg-gray-100" />
                    <Card icon={clientIcon} title="Uses Client First" className="bg-gray-100" />                    
                    <Card icon={supportIcon} title="24/7 Support" className="bg-gray-100" />
                </div>

            </section>



            {/* Team Member */}
            <section className='bg-grey lg:px-0 px-4 py-24'>
                <div className="container">
                    <h2 className='text-[35px] text-center font-poppins text-darkBlue font-semibold'>Meet our team</h2>

                    <div className='mt-10 grid lg:grid-cols-4 grid-cols-1 gap-8'>
                        <TeamCard image={memberImg1} name="KM Riaz Uddin" title="Manager" />
                        <TeamCard image={memberImg2} name="HB Salman Mia" title="Project Manager" />
                        <TeamCard image={memberImg3} name="Abir Islam" title="Software Engineer" />
                        <TeamCard image={memberImg1} name="Rifat Mia" title="Marketing Expert" />
                    </div>

                </div>
            </section>
        </Layout>
    )
}

export default About;