import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiLockAlt } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import Layout from "../../components/layouts/Layout";
import Circle from '../../components/loaders/Circle';
import { useRegisterUserMutation } from '../../features/auth/authApi';

const Register = () => {
    const [error, setError] = useState('');
    const {register, handleSubmit, reset} = useForm();

    const navigate = useNavigate();

    // handle register
    const [registerUser, { isLoading, isSuccess, data, isError, error: responseError }] = useRegisterUserMutation();

    const handleRegister = (data) => {
        setError('');

        if (!data.firstName || !data.lastName || !data.email || !data.password) {
            setError('Please fill all the fields');
            return;
        }

        registerUser(data);
        reset();
    }

    useEffect(() => {
        setError('');
        if (isError) {
            setError(responseError?.data.message);
        }

        if (isSuccess) {
            toast.success(data?.message);
            navigate('/login');

        }

    }, [isError, responseError, isSuccess, data, navigate])

    return (
        <Layout title="Register | Sweet Agency">
            <section className="py-24 lg:px-0 px-4">
                <div className="container">
                    <div className="lg:w-[500px] w-full mx-auto p-8 border rounded">
                        <div className="text-center font-poppins">
                            <p className="uppercase text-blue-500">Register</p>
                            <h2 className='text-[30px] text-darkBlue font-semibold capitalize'>Register an account!</h2>
                        </div>

                        {error && <p className='font-poppins text-center text-xs font-semibold text-red-700'>{error}</p>}

                        <form className='mt-6' onSubmit={handleSubmit(handleRegister)}>
                            <div className='flex items-center gap-6'>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                                    <div className="relative mb-6">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <BsFillPersonFill className='text-gray-500' size={20} />
                                        </div>
                                        <input type="text" {...register('firstName')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full pl-10 p-2.5 " placeholder="First Name" required />
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                                    <div className="relative mb-6">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <BsFillPersonFill className='text-gray-500' size={20} />
                                        </div>
                                        <input type="text" {...register('lastName')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full pl-10 p-2.5 " placeholder="Last Name" required />
                                    </div>
                                </div>
                            </div>


                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                    </div>
                                    <input type="email" {...register('email')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full pl-10 p-2.5 " placeholder="name@email.com" required />
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
                                    <input type="password" {...register('password')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full pl-10 p-2.5 " placeholder="**********" required />
                                </div>
                            </div>

                            <button className='black-btn w-full' disabled={isLoading}>
                                {
                                    isLoading ? <Circle /> : 'Register'
                                }
                            </button>
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