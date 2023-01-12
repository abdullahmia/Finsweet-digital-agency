
const CategoriesTable = () => {
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
                  <tr className="bg-white border-b hover:bg-gray-50 font-poppins text-darkBlue shadow">
                      <td className="p-4 lg:w-32 group">
                          Technology
                          <div className='space-x-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible mt-2'>
                              <button className='hover:text-indigo-600 transition'>Edit</button>
                              <button className='text-red-500'>Trash</button>
                          </div>
                      </td>
                      <td className="py-4 px-6 text-sm">
                          10
                      </td>
                      <td className="py-4 px-6">
                          01 March 2021
                      </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50 font-poppins text-darkBlue shadow">
                      <td className="p-4 group">
                          Technology
                          <div className='space-x-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible mt-2'>
                              <button className='hover:text-indigo-600 transition'>Edit</button>
                              <button className='text-red-500'>Trash</button>
                          </div>
                      </td>
                      <td className="py-4 px-6 text-sm">
                          10
                      </td>
                      <td className="py-4 px-6">
                          01 March 2021
                      </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50 font-poppins text-darkBlue shadow">
                      <td className="p-4 lg:w-32 group">
                          Technology
                          <div className='space-x-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible mt-2'>
                              <button className='hover:text-indigo-600 transition'>Edit</button>
                              <button className='text-red-500'>Trash</button>
                          </div>
                      </td>
                      <td className="py-4 px-6 text-sm">
                          10
                      </td>
                      <td className="py-4 px-6">
                          01 March 2021
                      </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50 font-poppins text-darkBlue shadow">
                      <td className="p-4 lg:w-32 group">
                          Technology
                          <div className='space-x-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible mt-2'>
                              <button className='hover:text-indigo-600 transition'>Edit</button>
                              <button className='text-red-500'>Trash</button>
                          </div>
                      </td>
                      <td className="py-4 px-6 text-sm">
                          10
                      </td>
                      <td className="py-4 px-6">
                          01 March 2021
                      </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50 font-poppins text-darkBlue shadow">
                      <td className="p-4 lg:w-32 group">
                          Technology
                          <div className='space-x-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible mt-2'>
                              <button className='hover:text-indigo-600 transition'>Edit</button>
                              <button className='text-red-500'>Trash</button>
                          </div>
                      </td>
                      <td className="py-4 px-6 text-sm">
                          10
                      </td>
                      <td className="py-4 px-6">
                          01 March 2021
                      </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50 font-poppins text-darkBlue shadow">
                      <td className="p-4 lg:w-32 group">
                          Technology
                          <div className='space-x-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible mt-2'>
                              <button className='hover:text-indigo-600 transition'>Edit</button>
                              <button className='text-red-500'>Trash</button>
                          </div>
                      </td>
                      <td className="py-4 px-6 text-sm">
                          10
                      </td>
                      <td className="py-4 px-6">
                          01 March 2021
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  )
}

export default CategoriesTable