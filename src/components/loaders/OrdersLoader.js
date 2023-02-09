const OrdersLoader = () => {
  return (
    <div className="orders-loader">
        <div className="flex flex-col gap-10">
            {[...Array(5)].map((_, key) => (
                <div key={key} className="flex items-center gap-7">
                    <div className="w-52 h-32 bg-gray-200 rounded animate-pulse"></div>
                    <div className="flex-1 space-y-1">
                        <div className="w-full h-8 bg-gray-200 rounded animate-pulse"></div>
                        <div className="space-y-5">
                            <div className="w-full h-3 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-1/3 h-3 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-2/3 h-3 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OrdersLoader