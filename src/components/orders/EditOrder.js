import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useUpdateOrderMutation } from '../../features/order/orderApi';
import Circle from '../loaders/Circle';

const EditOrder = ({order}) => {
    const { status: orderStatus, _id } = order?.order || {};
    const [status, setStatus] = useState(orderStatus);


    // update order handler
    const [updateOrder, {isLoading, isSuccess, data, isError}] = useUpdateOrderMutation();
    const updateOrderHandler = (e) => {
        e.preventDefault();
        updateOrder({id: _id, body: {status}});
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success(data?.message);
        }

        if (isError) {
            toast.error('Something went wrong');
        }

    }, [isSuccess, data, isError])


  return (
      <div className='w-full font-poppins px-6 bg-white py-4'>
        <form onSubmit={updateOrderHandler} className='flex items-center justify-between flex-wrap'>
            <h2 className='text-xl'>Update Order</h2>
            <div className='flex items-center gap-3'>
                <div className='flex-1'>
                    <select value={status} onChange={(e) => setStatus(e.target.value)} className='border bg-white py-3 px-8 text-darkBlue rounded focus:outline-none'>
                        <option value="pending">Pending</option>
                          <option value="in progress">In Progress</option>
                          <option value="completed">Completed</option>
                    </select>
                </div>
                  <button className='bg-darkBlue text-white px-6 py-3 rounded hover:bg-indigo-600 transition'>{isLoading ? <Circle /> : 'Update'}</button>
            </div>
        </form>
      </div>
  )
}

export default EditOrder;