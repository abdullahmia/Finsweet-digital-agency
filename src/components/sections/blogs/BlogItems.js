import { useState } from "react";
import { useGetArticlesQuery } from "../../../features/article/articleApi";
import BlogsLoader from "../../loaders/BlogsLoader";
import Pagination from "../../pagination/Pagination";
import Blog from "./Blog";

const BlogItems = ({ items}) => {
  // pagination state
  const [page, setPage] = useState(1);
  const { data: articles, isLoading } = useGetArticlesQuery(page);
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

        <Pagination totalPages={totalPages} handlePageChange={handlePageChange} page={page} />

    </section>
  )
}

export default BlogItems;