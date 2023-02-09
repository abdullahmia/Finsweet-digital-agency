import PurchasesCard from "../../components/card/PurchasesCard";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import OrdersLoader from '../../components/loaders/OrdersLoader';
import { useGetUserOrdersQuery } from "../../features/order/orderApi";

const MyPurchases = () => {
    const { data: orderHistory, isLoading } = useGetUserOrdersQuery();
    return (
        <DashboardLayout title="My Purchases">
            <div className="w-full font-poppins px-6">
                {
                    isLoading ? (<OrdersLoader />) : (
                        <div className="space-y-5">
                            {
                                orderHistory && orderHistory.map((order) => (
                                    <PurchasesCard key={order._id} order={order} />
                                ))
                            }
                            {
                                // if there is no order history
                                orderHistory?.length === 0 && (
                                    <div className="bg-gray-200 py-3 px-3 rounded">
                                        <h1 className="">No Order History</h1>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
                
            </div>
        </DashboardLayout>
    )
}

export default MyPurchases;