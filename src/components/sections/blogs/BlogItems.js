import { useState } from "react";
import { useGetArticlesQuery } from "../../../features/article/articleApi";
import BlogsLoader from "../../loaders/BlogsLoader";
import Blog from "./Blog";

const BlogItems = ({ items}) => {
  // pagination state
  const [page, setPage] = useState(1);
  const { data: articles, isLoading } = useGetArticlesQuery();
  const totalPages = articles?.totalPages;


  // pagination page change handler
  const handlePageChange = (page) => {
    setPage(page);
  }

  if (isLoading) return <BlogsLoader items={items} />;

  return (
    <section className="container py-24 lg:px-0 px-4">
      
        <h2 className="text-[30px] font-semibold font-poppins text-darkBlue">Our Blog</h2>

        <div className="mt-10 grid lg:grid-cols-3 grid-cols-1 gap-10">
          {
            articles?.articles?.map((article, key) => (
              <Blog article={article} key={key} />
            ))
          } 
        </div>
      {
        totalPages > 1 && <div className='flex justify-center item-center pt-10'>
          <nav aria-label="Page navigation example">
            <ul class="inline-flex items-center -space-x-px">

              {/* pagination button with total page */}
              {
                Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <li>
                    <button onClick={() => handlePageChange(number)} class={`block px-3 py-2 ml-0 leading-tight text-gray-500  border hover:text-gray-700 ${page === number ? 'bg-blue-600 border-blue-400 text-white' : 'bg-white border-gray-300'}`}>
                      {number}
                    </button>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      }
    </section>
  )
}

export default BlogItems;