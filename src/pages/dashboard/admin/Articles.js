import { Link } from 'react-router-dom';
import DashboardLayout from '../../../components/layouts/DashboardLayout';

const Articles = () => {
    return (
        <DashboardLayout title="Articles">
            {/* Page Header */}
            <div className='shadow-lg px-6 py-4 font-poppins flex items-center justify-between flex-wrap bg-white'>
                <div>
                    <h2 className='text-xl '>Articles</h2>
                </div>
                <div>
                    <Link to="/admin/article/new" className='bg-indigo-500 border border-indigo-500 text-white px-6 py-2 rounded hover:bg-transparent hover:text-indigo-500 transition text-sm'>Add Article</Link>
                </div>
            </div>

            {/* Filter */}
            <div className='shadow px-6 py-2 mt-8'>
                <form className='flex items-center justify-between'>
                    <div>
                        <input type="text" placeholder='Search here...' className='input' />
                    </div>
                    <div>
                        <select className='input'>
                            <option value="Programming">-- Select Category --</option>
                            <option value="Programming">Programming</option>
                            <option value="Programming">Development</option>
                            <option value="Programming">Marketing</option>
                            <option value="Programming">UI/UX</option>
                        </select>
                    </div>
                    <div>
                        <select className='input'>
                            <option value="Programming">-- Select Status ---</option>
                            <option value="Programming">Published</option>
                            <option value="Programming">Draft</option>
                        </select>
                    </div>
                    <div className='space-x-5'>
                        <button type='submit' className='bg-darkBlue border border-darkBlue text-white px-6 py-2 rounded hover:bg-transparent hover:text-darkBlue transition text-sm'>Apply Filter</button>
                        <button type='button' className='bg-indigo-500 border border-indigo-500 text-white px-6 py-2 rounded hover:bg-transparent hover:text-indigo-500 transition text-sm'>Reset</button>
                    </div>
                </form>
            </div>


            {/* Tables */}

            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Categories
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Author
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b hover:bg-gray-50 font-poppins text-darkBlue shadow">
                            <td className="p-4 w-64 group">
                                How Filecoin is Up in a Week Could Take Care
                                <div className='space-x-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible mt-2'>
                                    <Link to="/admin/article/edit/blogid" className='hover:text-indigo-600 transition'>Edit</Link>
                                    <button className='text-red-500'>Trash</button>
                                    <Link to="/blog/blogid" className='hover:text-green-600 transition'>View</Link>
                                </div>
                            </td>
                            <td className="py-4 px-6 text-sm">
                                Computer, Development
                            </td>

                            <td className="py-4 px-6">
                                Abir Islam
                            </td>
                            <td className="py-4 px-6">
                                01 March 2021
                            </td>
                            <td className="py-4 px-6">
                                Published
                            </td>
                        </tr>

                       
                    </tbody>
                </table>
            </div>

            <div className='flex justify-center item-center pt-10'>
                <nav aria-label="Page navigation example">
                    <ul class="inline-flex items-center -space-x-px">
                        <li>
                            <button class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
                                <span class="sr-only">Previous</span>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            </button>
                        </li>
                        <li>
                            <button class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</button>
                        </li>
                        <li>
                            <button class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</button>
                        </li>
                        <li>
                            <button aria-current="page" class="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100">3</button>
                        </li>
                        <li>
                            <button class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</button>
                        </li>
                        <li>
                            <button class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</button>
                        </li>
                        <li>
                            <button class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
                                <span class="sr-only">Next</span>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

        </DashboardLayout>
    )
}

export default Articles