import PurchasesCard from "../../../../components/card/PurchasesCard";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import { useGetAllOrdersQuery } from "../../../../features/order/orderApi";

const AllOrders = () => {
    const { data: allOrders, isLoading } = useGetAllOrdersQuery()
  return (
    <DashboardLayout title="All Orders">
        {isLoading && 'Loading'}
          <div className="space-y-5">
              {
                  allOrders && allOrders.map((order) => (
                      <PurchasesCard key={order._id} order={order} />
                  ))
              }
          </div>
    </DashboardLayout>
  )
}

export default AllOrders;