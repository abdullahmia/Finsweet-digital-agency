
const ServiceLoader = ({col}) => {
  return (
    // 3 service skeleton loaders
    <div className={`grid lg:grid-cols-${col ? col : '3'} grid-cols-1 gap-4`}>
        {[...Array(3)].map((_, key) => (
            <div key={key} className="w-full border rounded bg-white p-5 space-y-4">
                <div className="w-36 h-10 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-56 h-6 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-full h-16 bg-gray-200 rounded animate-pulse"></div>
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="w-full h-5 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="w-full h-5 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="w-full h-5 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="w-full h-5 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="w-full h-5 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="w-full h-5 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ServiceLoader