import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import DashboardLayout from "../../components/layouts/DashboardLayout";
import Circle from '../../components/loaders/Circle';
import { useChangePasswordMutation } from '../../features/auth/authApi';

const ChangePassword = () => {
    const [error, setError] = useState('');
    const {register, handleSubmit, reset} = useForm();

    // handle chnage password
    const [changePassword, {isLoading, isSuccess, data, isError, error: responseError}] = useChangePasswordMutation();
    const changePasswordHandler = (data) => {
        changePassword(data);
    }

    useEffect(() => {
        setError('');
        if (isError) {
            setError(responseError.data?.message);
        } 
        if (isSuccess) {
            reset();
            toast.success(data?.message);
        }
    }, [isError, responseError, isSuccess, data, reset]);


  return (
      <DashboardLayout title="Change Password">
          <div className="w-full font-poppins px-6 pt-6 pb-14 shadow rounded bg-white">
              <h3 className="text-lg font-medium capitalize mb-4">Change Password</h3>

              <form className="space-y-7" onSubmit={handleSubmit(changePasswordHandler)}>
                  {error && <p className='font-poppins text-xs font-semibold text-red-700'>{error}</p>}
                  <div>
                      <label className="text-gray-600 mb-2 block">Old Password</label>
                      <input type="text" {...register('oldPassword')} className="lg:w-96 w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400" required />
                  </div>

                  <div>
                      <label className="text-gray-600 mb-2 block">New Password</label>
                      <input type="text" {...register('newPassword')} className="lg:w-96 w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400" required />
                  </div>

                  <div>
                      <label className="text-gray-600 mb-2 block">Confirm Password</label>
                      <input type="text" {...register('confirmPassword')} className="lg:w-96 w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400" required />
                  </div>



                  <button type="submit" className="black-btn" disabled={isLoading}>{
                      isLoading ? <Circle /> : 'Change Password'
                  }</button>
              </form>
          </div>
      </DashboardLayout>
  )
}

export default ChangePassword