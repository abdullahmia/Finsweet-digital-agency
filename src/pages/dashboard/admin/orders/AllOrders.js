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
              {
                allOrders?.length === 0 && (
                  <div className="bg-gray-200 py-3 px-3 rounded">
                    <h1 className="">No Order History</h1>
                  </div>
                )
              }
          </div>
    </DashboardLayout>
  )
}

export default AllOrders;