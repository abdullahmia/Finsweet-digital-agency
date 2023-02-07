import React, { useEffect, useState } from 'react';
import { BiCaretRight } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useMakePaymentQuery } from '../../features/payment/paymentApi';
import { useDeleteServiceMutation } from '../../features/service/serviceApi';
import Circle from '../loaders/Circle';


const ServiceCard = ({ service = {}}) => {
    const [triggerPayment, setTriggerPayment] = useState(true);
    const {user} = useSelector((state) => state.auth);
    const { name, description, price, isFeatured, features, _id } = service;


    // delete handler
    const [deleteService] = useDeleteServiceMutation();
    const deleteHandler = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteService(id);
                Swal.fire(
                    'Deleted!',
                    'Service has been deleted.',
                    'success'
                )
            }
        })
    }



    // make payment handler
    const { data: initiatePaymentData, isLoading, isSuccess, isError } = useMakePaymentQuery(_id, { skip: triggerPayment });

    const triggerPaymentHandler = () => {
        setTriggerPayment(false);
    }

    useEffect(() => {
        if (isSuccess) {
            window.location.href = initiatePaymentData?.GatewayPageURL;
        }
        if (isError) {
            setTriggerPayment(true);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    }, [isSuccess, initiatePaymentData, isError])


  return (
      <div class={`w-full p-6 border border-gray-200 rounded-lg shadow ${isFeatured ? 'bg-tintBlue' : 'bg-white'}`}>
          <div className={`p-10 rounded ${isFeatured ? 'bg-tintBlue' : 'bg-gray-100'}`}>
              <h2 className={`font-poppins text-[35px] font-semibold flex items-center gap-4 ${isFeatured ? 'text-gray-100' : 'text-darkBlue'}`}>
                  ${price}
                  <span className="capitalize text-blue-500 text-[14px] font-normal">Per Design</span>
              </h2>

              <div className='mt-3'>
                  <h2 className={`font-poppins text-[20px] font-semibold capitalize ${isFeatured ? 'text-gray-100' : 'text-darkBlue'}`}>{name}</h2>
                  <p className={`font-poppins ${isFeatured ? 'text-gray-100' : 'text-gray-500'}`}>{description}</p>
              </div>

              <div className={`space-y-4 mt-10 -ml-[5px] ${isFeatured ? 'text-gray-300' : 'text-gray-600'} `}>
                {
                    features && features.map((feature, key) => (
                        <p key={key} className='flex items-center gap-2'>
                            <BiCaretRight size={23} className="text-[#97DAAD]" />
                            <span className='font-poppins'>{feature}</span>
                        </p>
                    ))
                }
                  
              </div>

              {
                user?.role === 'admin' && (
                    <div className='space-x-3 mt-5'>
                          <Link to={`/admin/service/edit/${_id}`} className='bg-darkBlue text-white px-8 py-2 rounded'>Edit</Link>
                          <button onClick={() => deleteHandler(_id)} className='bg-red-500 text-white px-8 py-2 rounded'>Delete</button>
                    </div>
                  )
              }

              {
                  user && user?.role !== 'admin' && (<div className='flex items-center justify-center mt-8'>
                      {
                          isFeatured ? <button onClick={triggerPaymentHandler} className='yellow-btn'>
                            {
                                  isLoading ? <Circle /> : 'Get Started'
                            }
                          </button> : <button onClick={triggerPaymentHandler} className='black-btn'>
                                  {
                                      isLoading ? <Circle /> : 'Get Started'
                                  }
                          </button>
                      }
                  </div>)
              }

              

              

          </div>
      </div>
  )
}

export default ServiceCard