import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiLockAlt } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import Layout from "../../components/layouts/Layout";
import Circle from '../../components/loaders/Circle';
import { useLoginUserMutation } from '../../features/auth/authApi';

const Login = () => {
    const [error, setError] = useState('');
    const {register, handleSubmit, reset} = useForm();

    const navigate = useNavigate();

    // handle user
    const [loginUser, {isLoading, isSuccess, data, isError, error: responseError}] = useLoginUserMutation();
    const handleLogin = (data) => {
        loginUser(data);
    }

    useEffect(() => {
        setError('');
        if (isError) {
            setError(responseError.data?.message);
        }
        if (isSuccess) {
            reset();
            navigate('/account');
        }
    }, [isError, responseError, isSuccess, data, navigate, reset])

    return (
        <Layout title="Login | Sweet Agency">
            <section className="py-24 lg:px-0 px-4">
                <div className="container">
                    <div className="lg:w-[500px] w-full mx-auto p-8 border rounded">
                        <div className="text-center font-poppins">
                            <p className="uppercase text-blue-500">sign up</p>
                            <h2 className='text-[30px] text-darkBlue font-semibold capitalize'>Welcome back!</h2>
                        </div>
                        <div className='flex gap-7 mt-6'>
                            <button className="flex items-center justify-center gap-2 border py-2 w-full rounded">
                                <FcGoogle size={20} />
                                <span className="font-poppins">Google</span>
                            </button>
                            <button className="flex items-center justify-center gap-2 border py-2 w-full rounded">
                                <BsFacebook size={20} className="text-blue-500" />
                                <span className="font-poppins">Facebook</span>
                            </button>
                        </div>

                        <div className="relative mt-10 h-px bg-gray-300">
                            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                                <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                                    Or
                                </span>
                            </div>
                        </div>

                        

                        <form className='mt-6' onSubmit={handleSubmit(handleLogin)}>
                            {error && <p className='font-poppins text-center text-xs font-semibold text-red-700'>{error}</p>}
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                    </div>
                                    <input type="email" {...register('email')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full pl-10 p-2.5 " placeholder="name@email.com" />
                                </div>
                            </div>


                            <div>
                                <div className='flex items-center justify-between mb-2'>
                                    <label className="text-sm font-medium text-gray-900">Password</label>
                                    <Link to='/forgot-password' className='text-blue-500 text-sm font-medium'>Forgot your password?</Link>
                                </div>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <BiLockAlt className='text-gray-500' size={20}/>
                                    </div>
                                    <input type="password" {...register('password')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full pl-10 p-2.5 " placeholder="**********" />
                                </div>
                            </div>

                            <button className='black-btn w-full' disabled={isLoading}>
                                {
                                    isLoading ? <Circle /> : 'Register'
                                }
                            </button>
                        </form>

                        <div className='flex items-center justify-center gap-2 font-poppins mt-7'>
                            <p>Don't have an account?</p>
                            <Link to='/register' className='text-blue-500'>Register</Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Login