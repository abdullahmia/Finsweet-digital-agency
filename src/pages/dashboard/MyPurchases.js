import PurchasesCard from "../../components/card/PurchasesCard";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useGetUserOrdersQuery } from "../../features/order/orderApi";

const MyPurchases = () => {
    const { data: orderHistory, isLoading } = useGetUserOrdersQuery();
    return (
        <DashboardLayout title="My Purchases">
            <div className="w-full font-poppins px-6">
                {
                    isLoading ? (<>Loading....</>) : (
                        <div className="space-y-5">
                            {
                                orderHistory && orderHistory.map((order) => (
                                    <PurchasesCard key={order._id} order={order} />
                                ))
                            }
                        </div>
                    )
                }
                
            </div>
        </DashboardLayout>
    )
}

export default MyPurchases;