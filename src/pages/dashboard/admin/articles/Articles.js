import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../../../components/layouts/DashboardLayout';
import TableLoader from '../../../../components/loaders/TableLoader';
import ArticleRow from '../../../../components/tableKits/ArticleRow';
import { useGetArticlesQuery } from '../../../../features/article/articleApi';

const Articles = () => {
    const [title, setTitle] = useState('');

    // pagination state
    const [page, setPage] = useState(1);
    
    // get all articles
    const { data: articles, isLoading } = useGetArticlesQuery(page);
    const totalPages = articles?.totalPages;


    // pagination page change handler
    const handlePageChange = (page) => {
        setPage(page);
    }


    // handle the search
    const articleFilter = useSelector(state => state.filters);
    useEffect(() => {
        setTitle(articleFilter?.article?.title);
    }, [articleFilter]);

    // decide what to render based on search filter with articles
    const renderArticles = () => {
        if (articles?.articles?.length === 0 ) {
            return <tr className="bg-white border-b hover:bg-gray-50 font-poppins text-darkBlue shadow">
                <td className="py-4 px-6 text-sm">
                    We couldn't find any record
                </td>
                <td className="py-4 px-6 text-sm"></td>
                <td className="py-4 px-6 text-sm"></td>
                <td className="py-4 px-6 text-sm"></td>
            </tr>
        }
        if (title) {
            return articles?.articles?.filter(article => article.title.toLowerCase().includes(title.toLowerCase()))?.map((article, key) => (
                <ArticleRow key={key} article={article} currentPage={page} />
            ) )
        } else {
            return articles?.articles?.map((article, key) => (
                <ArticleRow key={key} article={article} currentPage={page} />
            ) )
        }
    }

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
                <div>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Search here...' className='input w-full' />
                </div>
            </div>


            {/* Tables */}
            {
                isLoading ? <TableLoader /> : <div class="relative overflow-x-auto">
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
                            </tr>
                        </thead>
                        <tbody>
                            {renderArticles()}
                        </tbody>

                    </table>
                </div>
            }
            
           

            {/* Pagination */}

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

            

        </DashboardLayout>
    )
}

export default Articles