import { BsArrowRight } from 'react-icons/bs';
import { CiPaperplane } from "react-icons/ci";
import { Link } from "react-router-dom";
import heroImg from '../assets/images/hero.svg';
import icon1 from '../assets/images/icons/1.png';
import icon2 from '../assets/images/icons/2.png';
import icon3 from '../assets/images/icons/3.png';
import icon4 from '../assets/images/icons/4.png';
import clientIcon from '../assets/images/icons/client.png';
import customizeIcon from '../assets/images/icons/customize.png';
import handIcon from '../assets/images/icons/hand.png';
import supportIcon from '../assets/images/icons/support.png';
import tickIcon from '../assets/images/icons/tick.png';
import timmerIcon from '../assets/images/icons/timmer.png';
import Card from '../components/card/Card';
import Layout from "../components/layouts/Layout";
import BlogItems from '../components/sections/blogs/BlogItems';
import Faqs from '../components/sections/faqs/Faqs';
import Inquiry from '../components/sections/Inquiry/Inquiry';

const Home = () => {
  return (
    <Layout title="Sweet Agency">
      {/* Hero Sections */}
      <section className="bg-tintBlue lg:py-48 py-14">
        <div className="container grid lg:grid-cols-2 grid-cols-1 gap-40 items-center lg:px-0 px-4">
          <div className="text-gray-100 space-y-6">
            <h2 className="lg:text-[50px] text-[34px] font-poppins leading-none">Building stellar websites for early startups</h2>
            <p className="font-poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div className="flex items-center gap-8">
              <Link to="/project" className="yellow-btn">View our work</Link>
              <Link to="/pricing" className="btn">View pricing <CiPaperplane /></Link>
            </div>
          </div>
          <div>
            <img src={heroImg} alt="Hero" className="w-full" />
          </div>
        </div>
      </section>

      {/* How We Works */}
      <section className="lg:py-24 py-14 bg-[#F4F6FC] lg:px-0 px-4">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="pr-12 lg:pb-0 pb-10 lg:col-span-5 col-span-12 font-poppins">
              <h2 className="text-[40px] font-semibold text-darkBlue">How we work</h2>
              <p className="text-[16px] text-darkBlue ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <Link className="btn text-[18px] font-poppins text-royalBlue" to="/contact">Get in touch with us <BsArrowRight /></Link>
            </div>
            <div className="pt-0 lg:p-10 p-0 lg:col-span-7 col-span-12">
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                <div className='space-y-3'>
                  <img src={icon1} alt="" />
                  <h2 className='text-[30px] text-darkBlue font-poppins'>Strategy</h2>
                  <p className='font-poppins text-darkBlue'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                </div>
                <div className='space-y-3'>
                  <img src={icon2} alt="" />
                  <h2 className='text-[30px] text-darkBlue font-poppins'>Wireframing</h2>
                  <p className='font-poppins text-darkBlue'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                </div>
                <div className='space-y-3'>
                  <img src={icon3} alt="" />
                  <h2 className='text-[30px] text-darkBlue font-poppins'>Design</h2>
                  <p className='font-poppins text-darkBlue'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                </div>
                <div className='space-y-3'>
                  <img src={icon4} alt="" />
                  <h2 className='text-[30px] text-darkBlue font-poppins'>Development</h2>
                  <p className='font-poppins text-darkBlue'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Proejcts */}
      {/* <ProjectItems items={2} /> */}


      {/* Features */}
      <section className='bg-grey lg:py-24 py-14 lg:px-0 px-4'>
        <div className="container">
          <div className='lg:w-[800px] w-full mx-auto lg:text-center text-left'>
            <p className='text-[16px] font-poppins text-darkBlue'>Features</p>
            <h2 className="text-[30px] font-poppins text-darkBlue">Design that solves problems, one product at a time</h2>
          </div>

          {/* Services */}
          <div className='mt-10 grid lg:grid-cols-3 grid-cols-1 gap-8'>
            <Card icon={clientIcon} title="Uses Client First" className="bg-white" />
            <Card icon={tickIcon} title="Two Free Revision Round" className="bg-white" />
            <Card icon={customizeIcon} title="Template Customization" className="bg-white" />
            <Card icon={supportIcon} title="24/7 Support" className="bg-white" />
            <Card icon={timmerIcon} title="Quick Delivery" className="bg-white" />
            <Card icon={handIcon} title="Hands-on approach" className="bg-white" />            
          </div>
          
        </div>
      </section>


      {/* Faq */}
      <Faqs />

      {/* Inquiry */}
      <Inquiry />

      {/* Blogs */}
      <BlogItems items={3} />
    </Layout>
  )
}

export default Home