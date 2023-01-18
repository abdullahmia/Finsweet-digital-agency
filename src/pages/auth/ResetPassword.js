import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { BiLockAlt } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layouts/Layout";
import Circle from "../../components/loaders/Circle";
import { useResetPasswordMutation } from "../../features/auth/authApi";

const ResetPassword = () => {
    const [error, setError] = useState('');
    const { userId, token } = useParams();
    let { exp } = jwt_decode(token);
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        // check the jwt is valid or not
        if (exp < Date.now() / 1000) {
            navigate('/forgot-password');
        }
    }, [userId, token, exp, navigate])


    // handle reset password
    const [resetPassword, {isLoading, isSuccess, data, isError, error: responseError}] = useResetPasswordMutation();
    const handleResetPassword = async (data) => {
        const { password, confirmPassword } = data;
        console.log(data);

        if (password !== confirmPassword) {
            setError('Password does not match');
            return;
        } else {
            resetPassword({userId, token, body: data});
        }
    }

    useEffect(() => {
        setError("");
        if (isError) {
            setError(responseError.data?.message);
        } 
        if (isSuccess) {
            toast.success(data?.message);
            reset();
            navigate('/login');
        }
    }, [isError, responseError, isSuccess, data, navigate, reset])


    return (
        <Layout title="Register | Sweet Agency">
            <section className="py-24 lg:px-0 px-4">
                <div className="container">
                    <div className="lg:w-[500px] w-full mx-auto p-8 border rounded">
                        <div className="text-center font-poppins">
                            <p className="uppercase text-blue-500">Recover</p>
                            <h2 className='text-[30px] text-darkBlue font-semibold capitalize'>Reset your password!</h2>
                        </div>

                        <form className='mt-6' onSubmit={handleSubmit(handleResetPassword)}>
                            {error && <p className='font-poppins text-center text-xs font-semibold text-red-700'>{error}</p>}
                            <div>
                                <div className='flex items-center justify-between mb-2'>
                                    <label className="text-sm font-medium text-gray-900">Password</label>
                                </div>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <BiLockAlt className='text-gray-500' size={20} />
                                    </div>
                                    <input type="text" {...register('password')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full pl-10 p-2.5 " placeholder="New Password" required />
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
                                    <input type="text" {...register('confirmPassword')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full pl-10 p-2.5 " placeholder="Confrim Password" required />
                                </div>
                            </div>

                            <button className='black-btn w-full' disabled={isLoading}>
                                {
                                    isLoading ? <Circle /> : 'Reset Password'
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ResetPassword;