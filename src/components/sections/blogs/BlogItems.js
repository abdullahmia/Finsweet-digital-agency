import Blog from "./Blog";

const BlogItems = ({items}) => {

  let blogItem = [];
  for (let i = 0; i<items; i++) {
    blogItem.push(i);
  }

  return (
    <section className="container py-24 lg:px-0 px-4">
        <h2 className="text-[30px] font-semibold font-poppins text-darkBlue">Our Blog</h2>

        <div className="mt-10 grid lg:grid-cols-3 grid-cols-1 gap-10">
          {
            blogItem.map((blog) => (
              <Blog />
            ))
          } 
            
        </div>
    </section>
  )
}

export default BlogItems;