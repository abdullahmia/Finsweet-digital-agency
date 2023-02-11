import moment from "moment";
import { useEffect } from "react";
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDeleteArticleMutation } from "../../features/article/articleApi";

const ArticleRow = ({ key, article = {}, currentPage }) => {
    const {title, categories, author, createdAt, slug} = article;

    // delete article handler
    const [deleteArticle, {isLoading, isError, isSuccess}] = useDeleteArticleMutation();
    useEffect(() => {
        if (isSuccess) {
            toast.success('Article has been deleted!');
        }
        if (isError) {
            toast.error('Article has been deleted!');
        }
    }, [isSuccess, isError])

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteArticle({ slug, currentPage });
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
        
    }

    

  return (
      <tr key={key} className="bg-white border-b hover:bg-gray-50 font-poppins text-darkBlue shadow">
          <td className="p-4 w-64 group">
              {title}
              <div className='space-x-3 mt-2'>
                  <Link to={`/admin/article/edit/${slug}`} className='hover:text-indigo-600 transition'>Edit</Link>
                  <button onClick={handleDelete} className='text-red-500'>{isLoading ? 'Trashing...' : 'Trash'}</button>
                  <Link to="/blog/blogid" className='hover:text-green-600 transition'>View</Link>
              </div>
          </td>
          <td className="py-4 px-6 text-sm">
              {categories.map((category, i) => (
                  <p key={i}>{category.name}</p>
              ))}
          </td>

          <td className="py-4 px-6">
              {author.firstName} {author.lastName}
          </td>
          <td className="py-4 px-6">
              {moment(createdAt).format('MMMM Do YYYY')}
          </td>
      </tr>
  )
}

export default ArticleRow