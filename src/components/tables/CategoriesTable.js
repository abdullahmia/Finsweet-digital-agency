import moment from 'moment';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import TableLoader from '../loaders/TableLoader';

const CategoriesTable = ({ isLoading, categories, deleteHandlers, setEditing }) => {
    const { deleteCategory, deleteCatLoading } = deleteHandlers || {};

    // delete category handler
    const deleteCategoryHandler = (id) => {
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
                deleteCategory(id);
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
        
    }

    const dispatch = useDispatch();

    // update category feature
    const updateCategoryTrigger = (category) => {
        dispatch(setEditing({name: category.name, id: category._id}));
    }


  return (
      <div class="relative overflow-x-auto">
        {
              isLoading ? <TableLoader /> : <table class="w-full text-sm text-center text-gray-500">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                          <th scope="col" class="px-6 py-3">
                              Name
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Items
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Date
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          categories?.map((category, key) => (
                              <tr className="bg-white hover:bg-gray-50 font-poppins text-darkBlue shadow group">
                                  <td className="p-4 lg:w-64">
                                      {category.name}
                                      <div className='space-x-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible mt-2'>
                                          <button onClick={() => updateCategoryTrigger(category)} className='hover:text-indigo-600 transition'>Edit</button>
                                          <button onClick={() => deleteCategoryHandler(category._id)} className='text-red-500'>
                                              {deleteCatLoading ? 'Deleting...' : 'Delete'}
                                          </button>
                                      </div>
                                  </td>
                                  <td className="py-4 px-6 text-sm">
                                      {category.articles}
                                  </td>
                                  <td className="py-4 px-6">
                                      {moment(category.createdAt).format("MMM Do YY")}
                                  </td>
                              </tr>
                          ))
                      }
                  </tbody>
              </table>
        }
          
      </div>
  )
}

export default CategoriesTable