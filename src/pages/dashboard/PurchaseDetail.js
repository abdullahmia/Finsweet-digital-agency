import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import EditOrder from '../../components/orders/EditOrder';
import { useGetSingleOrderQuery } from '../../features/order/orderApi';

const PurchaseDetail = () => {
    const [error, setError] = useState('');
    const { orderId } = useParams();

    const { user: currentUser } = useSelector(state => state.auth);
    
    const { data: order, isLoading, isError, error: errorResponse } = useGetSingleOrderQuery(orderId);

    const { transactionId, status, createdAt, service, user } = order?.order || {};
    const { card_issuer } = order?.payment || {};
    const { firstName, lastName, email } = user || {};

    const { name, price } = service || {};
    
    useEffect(() => {
        setError('');
        if (isError) {
            setError(errorResponse.data.message);
        }
    }, [isError, errorResponse])


    return (
        <DashboardLayout title={transactionId ? transactionId.toUpperCase() : 'Loading...'}>
            {
                isError && error && <div className="bg-red-200 p-5 rounded text-red-500 text-sm font-semibold">{error}</div>
            }
            {
                isLoading ? (<div>
                    loading
                </div>) : (
                    order && <>
                        {currentUser.role === 'admin' && <EditOrder order={order} />}
                        <div className="w-full font-poppins px-6">
                            <div className="space-y-5">
                                <h3 className="text-sm p-5 text-gray-700 font-roboto mb-4 tracking-wide">
                                    Order <span className="bg-yellow-300">#{transactionId.toUpperCase()}</span> was placed on <span className="bg-yellow-300"> {moment(createdAt).format("MMM Do YY")}
                                    </span> and is currently <span className={`px-2 rounded ${status === 'pending' ? 'bg-red-200' : status === 'in progress' ? 'bg-green-200' : 'bg-indigo-200'}`}>{status}</span>.
                                </h3>

                                <div>
                                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                                        <table className="w-full text-sm text-left text-gray-500">
                                            <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
                                                Order Details

                                            </caption>
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="py-3 px-6">
                                                        Product name
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Total
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-white border-b">
                                                    <th scope="row" className="py-4 px-6 font-normal text-gray-900 whitespace-nowrap">
                                                        <p className="text-primary">
                                                            {name}
                                                        </p>
                                                    </th>
                                                    <td className="py-4 px-6">
                                                        ${price}
                                                    </td>
                                                </tr>
                                                <tr className="bg-white border-b">
                                                    <th scope="row" className="py-4 px-6 font-normal text-gray-900 whitespace-nowrap ">
                                                        Payment Method
                                                    </th>
                                                    <td className="py-4 px-6">
                                                        {card_issuer && card_issuer.toUpperCase()}
                                                    </td>
                                                </tr>
                                                <tr className="bg-white border-b">
                                                    <th scope="row" className="py-4 px-6 font-normal text-gray-900 whitespace-nowrap">
                                                        Total
                                                    </th>
                                                    <td className="py-4 px-6">
                                                        ${price}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className="p-5">
                                            <h2 className="text-gray-700 text-md">Billing address</h2>
                                            <div className="mt-4 space-y-1">
                                                <p className="text-gray-500 text-sm">{firstName} {lastName}</p>
                                                <p className="text-gray-500 text-sm">Dhanmondi 221</p>
                                                <p className="text-gray-500 text-sm">Dhaka</p>
                                                <p className="text-gray-500 text-sm">342</p>
                                                <p className="text-gray-500 text-sm">Bangladesh</p>
                                                <p className="text-gray-500 text-sm">+454841588145</p>
                                                <p className="text-gray-500 text-sm">{email}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    
                    </>
                )
            }
            
        </DashboardLayout>
    )
}

export default PurchaseDetail