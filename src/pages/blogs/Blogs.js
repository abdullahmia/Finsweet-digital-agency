import Layout from "../../components/layouts/Layout";
import BlogItems from "../../components/sections/blogs/BlogItems";

const Blogs = () => {
  return (
      <Layout title="Blogs | Sweet Agency">
          <section className="py-24 lg:px-0 px-4">
              <div className="container">
                  <div className="lg:w-[600px] w-full mx-auto">
                      <h2 className='text-[35px] text-center font-poppins text-darkBlue font-semibold'>A UX Case Study on Creating a Studious Environment for Students</h2>
                      <p className="font-poppins text-gray-600 text-center">Andrew Jonson Posted on 27th January 2021</p>
                      
                  </div>

                  <div>
                    <BlogItems items={12} />
                  </div>
              </div>
          </section>
        </Layout>
  )
}

export default Blogs;