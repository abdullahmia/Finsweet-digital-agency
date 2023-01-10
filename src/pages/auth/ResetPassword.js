import { BiLockAlt } from "react-icons/bi";
import Layout from "../../components/layouts/Layout";

const ResetPassword = () => {
    return (
        <Layout title="Register | Sweet Agency">
            <section className="py-24 lg:px-0 px-4">
                <div className="container">
                    <div className="lg:w-[500px] w-full mx-auto p-8 border rounded">
                        <div className="text-center font-poppins">
                            <p className="uppercase text-blue-500">Recover</p>
                            <h2 className='text-[30px] text-darkBlue font-semibold capitalize'>Reset your password!</h2>
                        </div>

                        <form className='mt-6'>
                            <div>
                                <div className='flex items-center justify-between mb-2'>
                                    <label className="text-sm font-medium text-gray-900">Password</label>
                                </div>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <BiLockAlt className='text-gray-500' size={20} />
                                    </div>
                                    <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full pl-10 p-2.5 " placeholder="New Password" />
                                </div>
                            </div>

                            <div>
                                <div className='flex items-center justify-between mb-2'>
                                    <label className="text-sm font-medium text-gray-900">Confrim Password</label>
                                </div>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <BiLockAlt className='text-gray-500' size={20} />
                                    </div>
                                    <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full pl-10 p-2.5 " placeholder="Confrim Password" />
                                </div>
                            </div>

                            <button className='black-btn w-full'>Reset Password</button>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ResetPassword;