import { BiLockAlt } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Layout from "../../components/layouts/Layout";

const Register = () => {
    return (
        <Layout title="Register | Sweet Agency">
            <section className="py-24 lg:px-0 px-4">
                <div className="container">
                    <div className="lg:w-[500px] w-full mx-auto p-8 border rounded">
                        <div className="text-center font-poppins">
                            <p className="uppercase text-blue-500">Register</p>
                            <h2 className='text-[30px] text-darkBlue font-semibold capitalize'>Register an account!</h2>
                        </div>

                        <form className='mt-6'>
                            <div className='flex items-center gap-6'>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                                    <div className="relative mb-6">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <BsFillPersonFill className='text-gray-500' size={20} />
                                        </div>
                                        <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full pl-10 p-2.5 " placeholder="First Name" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                                    <div className="relative mb-6">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <BsFillPersonFill className='text-gray-500' size={20} />
                                        </div>
                                        <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full pl-10 p-2.5 " placeholder="Last Name" />
                                    </div>
                                </div>
                            </div>


                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                    </div>
                                    <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full pl-10 p-2.5 " placeholder="name@email.com" />
                                </div>
                            </div>


                            <div>
                                <div className='flex items-center justify-between mb-2'>
                                    <label className="text-sm font-medium text-gray-900">Password</label>
                                </div>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <BiLockAlt className='text-gray-500' size={20} />
                                    </div>
                                    <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full pl-10 p-2.5 " placeholder="**********" />
                                </div>
                            </div>

                            <button className='black-btn w-full'>Login</button>
                        </form>

                        <div className='flex items-center justify-center gap-2 font-poppins mt-7'>
                            <p>Already have an account?</p>
                            <Link to='/login' className='text-blue-500'>Login</Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Register;