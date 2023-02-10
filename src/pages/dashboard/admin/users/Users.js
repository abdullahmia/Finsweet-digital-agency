import moment from 'moment';
import { useState } from 'react';
import DashboardLayout from '../../../../components/layouts/DashboardLayout';
import TableLoader from '../../../../components/loaders/TableLoader';
import Pagination from '../../../../components/pagination/Pagination';
import { useGetAllUsersQuery } from '../../../../features/auth/authApi';

const Users = () => {
    const [page, setPage] = useState(1);

    // handle pagination
    // pagination page change handler
    const handlePageChange = (page) => {
        setPage(page);
    }

    const { data: usersResponse, isLoading } = useGetAllUsersQuery(page);
    const { users, totalPages } = usersResponse || {};
    console.log(users);

    // render users
    const renderUsers = () => {
        if (users?.length === 0) {
            return <tr className="bg-white border-b hover:bg-gray-50 font-poppins text-darkBlue shadow">
                <td className="py-4 px-6 text-sm">
                    We couldn't find any record
                </td>
                <td className="py-4 px-6 text-sm"></td>
                <td className="py-4 px-6 text-sm"></td>
                <td className="py-4 px-6 text-sm"></td>
            </tr>
        }
        return users?.map((user, key) => (
            <tr key={key} className="bg-white border-b hover:bg-gray-50 font-poppins text-darkBlue shadow">
                <td className="py-4 px-6 text-sm">
                    {user.firstName} {user.firstName}
                </td>
                <td className="py-4 px-6 text-sm">
                    {user.email}
                </td>
                <td className="py-4 px-6 text-sm">
                    {user.role}
                </td>
                <td className="py-4 px-6 text-sm">
                    {/* {user.createdAt} */}
                    {moment(user.createdAt).format("MMM Do YY")}
                </td>
            </tr>
        ))
    }

  return (
      <DashboardLayout title="Users">
        {
            isLoading ? <TableLoader /> : <>
                  <div class="relative overflow-x-auto">
                      <table class="w-full text-sm text-left text-gray-500">
                          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                              <tr>
                                  <th scope="col" class="px-6 py-3">
                                      Name
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                      Email
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                      Type
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                      Date
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                              {renderUsers()}
                          </tbody>
                      </table>
                  </div>

                  {/* pagination */}
                  <Pagination totalPages={totalPages} handlePageChange={handlePageChange} page={page} />
            </>
        }
          
      </DashboardLayout>
  )
}

export default Users