import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import Layout from "../../components/layouts/Layout";
import ProjectItems from "../../components/sections/projects/ProjectItems";

const Projects = () => {
    return (
        <Layout title="Our Projects | Sweet Agency">
            <section className="py-24 lg:px-0 px-4">
                <div className="container">
                    <div className="lg:w-[600px] w-full mx-auto">
                        <p className="font-poppins text-gray-600 text-center">What we created</p>
                        <h2 className='text-[35px] text-center font-poppins text-darkBlue font-semibold'>Our Pricing Plans</h2>
                        <p className="font-poppins text-gray-600 text-center">When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
                        <div className="flex items-center justify-center gap-5 mt-5">
                            <CiFacebook size={25} />
                            <CiTwitter size={25} />
                            <CiInstagram size={25} />
                            <CiLinkedin size={25} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 lg:px-0 px-4">
                <div className="container">
                    <div className="flex items-center justify-center gap-6">
                        <button className="text-[18px] font-poppins text-tintBlue">All</button>
                        <button className="text-[18px] font-poppins text-darkBlue">UI Design</button>
                        <button className="text-[18px] font-poppins text-darkBlue">Webflow Design</button>
                        <button className="text-[18px] font-poppins text-darkBlue">Fimga Design</button>
                        <button className="text-[18px] font-poppins text-darkBlue">Web Development</button>
                    </div>

                    {/* Projects */}
                    <ProjectItems items={8} />

                </div>
            </section>
        </Layout>
    )
}

export default Projects;