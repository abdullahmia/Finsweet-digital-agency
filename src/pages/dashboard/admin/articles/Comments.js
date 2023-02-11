import moment from 'moment';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../../../components/layouts/DashboardLayout';
import TableLoader from '../../../../components/loaders/TableLoader';
import Pagination from '../../../../components/pagination/Pagination';
import { useGetAllCommentsQuery } from '../../../../features/comment/commentApi';

const Comments = () => {
    // pagination state
    const [page, setPage] = useState(1);

    // pagination page change handler
    const handlePageChange = (page) => {
        setPage(page);
    }


    const { data, isLoading } = useGetAllCommentsQuery(page);

    const {comments, totalPages} = data || {};


    const renderComments = () => {
        if (comments?.lenght === 0) {
            return <tr className="bg-white border-b hover:bg-gray-50 font-poppins text-darkBlue shadow">
                <td className="py-4 px-6 text-sm">
                    We couldn't find any record
                </td>
                <td className="py-4 px-6 text-sm"></td>
                <td className="py-4 px-6 text-sm"></td>
                <td className="py-4 px-6 text-sm"></td>
            </tr>
        }

        return comments?.map((comment, key) => (
            <tr key={key} className="bg-white border-b hover:bg-gray-50 font-poppins text-darkBlue shadow">
                <td className="py-4 px-6 text-sm">
                    <Link to={`/blog/${comment.article.slug}`}>{comment.article.title}</Link>
                </td>
                <td className="py-4 px-6 text-sm">
                    {comment.name}
                </td>
                <td className="py-4 px-6 text-sm">
                    {comment.body}
                </td>
                <td className="py-4 px-6 text-sm">
                    {moment(comment.createdAt).format('DD/MM/YYYY')}
                </td>
            </tr>
        ))
    }

  return (
      <DashboardLayout title="Comments">
          {
              isLoading ? <TableLoader /> : <div class="relative overflow-x-auto">
                  <table class="w-full text-sm text-left text-gray-500">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                          <tr>
                              <th scope="col" class="px-6 py-3">
                                  Article
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Name
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Comment
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Date
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          {renderComments()}
                      </tbody>

                  </table>

                  {/* Pagination */}
                  <Pagination handlePageChange={handlePageChange} totalPages={totalPages} page={page} />
              </div>
          }
      </DashboardLayout>
  )
}

export default Comments;