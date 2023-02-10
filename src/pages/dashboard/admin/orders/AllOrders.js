import { useState } from "react";
import PurchasesCard from "../../../../components/card/PurchasesCard";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import OrdersLoader from "../../../../components/loaders/OrdersLoader";
import Pagination from "../../../../components/pagination/Pagination";
import { useGetAllOrdersQuery } from "../../../../features/order/orderApi";

const AllOrders = () => {
  const [page, setPage] = useState(1);
  const { data: allOrders, isLoading } = useGetAllOrdersQuery(page);
  const { orders, totalPages } = allOrders || {};

  // pagination page change handler
  const handlePageChange = (page) => {
    setPage(page);
  }

  // render orders
  const renderOrders = () => {
    if (orders?.length === 0) return <div className="bg-gray-200 py-3 px-3 rounded">
      <h1 className="">No Order History</h1>
    </div>

    return orders?.map((order, key) => (
      <PurchasesCard order={order} key={key} />
    ))
  }

  return (
    <DashboardLayout title="All Orders">
        {isLoading && <OrdersLoader />}
         
          <div className="space-y-5">
              {renderOrders()}

              {/* Pagination */}
              <Pagination handlePageChange={handlePageChange} totalPages={totalPages} page={page} />
          </div>
    </DashboardLayout>
  )
}

export default AllOrders;