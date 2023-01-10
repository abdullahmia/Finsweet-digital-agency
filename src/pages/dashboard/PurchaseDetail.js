import React from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'

const PurchaseDetail = () => {
    return (
        <DashboardLayout title="Purchase Detail">
            <div className="w-full font-poppins px-6">
                <div className="space-y-5">
                    <h3 className="text-sm p-5 text-gray-700 font-roboto mb-4 tracking-wide">
                        Order <span className="bg-yellow-300">#ASDFAS32</span> was placed on <span className="bg-yellow-300">01 March 2021
                        </span> and is currently <span className="bg-indigo-200 px-2 rounded">Confrimed</span>.
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
                                                Full Stack Web Development
                                            </p>
                                        </th>
                                        <td className="py-4 px-6">
                                            $34
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <th scope="row" className="py-4 px-6 font-normal text-gray-900 whitespace-nowrap ">
                                            Payment Method
                                        </th>
                                        <td className="py-4 px-6">
                                            Card
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <th scope="row" className="py-4 px-6 font-normal text-gray-900 whitespace-nowrap">
                                            Total
                                        </th>
                                        <td className="py-4 px-6">
                                            $342
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="p-5">
                                <h2 className="text-gray-700 text-md">Billing address</h2>
                                <div className="mt-4 space-y-1">
                                    <p className="text-gray-500 text-sm">Abir Islam</p>
                                    <p className="text-gray-500 text-sm">Dhanmondi 221</p>
                                    <p className="text-gray-500 text-sm">Dhaka</p>
                                    <p className="text-gray-500 text-sm">342</p>
                                    <p className="text-gray-500 text-sm">Bangladesh</p>
                                    <p className="text-gray-500 text-sm">+454841588145</p>
                                    <p className="text-gray-500 text-sm">someone@gmail.com</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default PurchaseDetail