import moment from 'moment';

const CategoriesTable = ({ categories, deleteHandlers }) => {
    const { deleteArticleCategory, deleteCatLoading } = deleteHandlers;

    // delete category handler
    const deleteCategoryHandler = (slug) => {
        deleteArticleCategory(slug);
    }

  return (
      <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-center text-gray-500">
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
                                    <button className='hover:text-indigo-600 transition'>Edit</button>
                                    <button onClick={() => deleteCategoryHandler(category.slug)} className='text-red-500'>
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
      </div>
  )
}

export default CategoriesTable