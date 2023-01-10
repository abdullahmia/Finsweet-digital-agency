import blogDetailImg from '../../assets/images/blog-detail.png';
import Layout from "../../components/layouts/Layout";

const BlogDetail = () => {
  return (
      <Layout title="Blog Slug | Sweet Agency">
          <section className="py-24 lg:px-0 px-4">
              <div className="container">
                  <div className="lg:w-[700px] w-full mx-auto">
                      <h2 className='text-[35px] text-center font-poppins text-darkBlue font-semibold'>A UX Case Study on Creating a Studious Environment for Students</h2>
                      <p className="font-poppins text-gray-600 text-center">Andrew Jonson Posted on 27th January 2021</p>
                  </div>

                  <div className='mt-10'>
                      <img src={blogDetailImg} className="w-full" alt="" />
                  </div>


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


                      <div className='mt-10'>
                          <img src={blogDetailImg} className="w-full" alt="" />
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

                  </div>

                  
              </div>
          </section>
      </Layout>
  )
}

export default BlogDetail