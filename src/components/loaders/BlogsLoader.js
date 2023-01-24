const BlogsLoader = ({items}) => {
  return (
    <section className="container py-24 lg:px-0 px-4">
      <div className="animate-pulse h-8 w-60 bg-gray-200 rounded"></div>

      <div className="mt-10 grid lg:grid-cols-3 grid-cols-1 gap-10">
        {[...Array(items)].map((_, key) => (
          <div key={key} className="space-y-2">
            <div className="w-full h-52 bg-gray-200 rounded animate-pulse"></div>
            <div className="animate-pulse h-4 w-28 bg-gray-200 rounded"></div>
            <div className="w-full h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="space-y-1">
              <div className="w-full h-3 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-1/3 h-3 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-2/3 h-3 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BlogsLoader;