import moment from "moment";
import { BiTrash } from "react-icons/bi";
import Swal from 'sweetalert2';
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import { useDeleteContactMutation, useGetContactsQuery } from "../../../../features/contact/contactApi";

const Messages = () => {
    const { data: messages, isLoading } = useGetContactsQuery();

    // delete message handler
    const [deleteContact] = useDeleteContactMutation();

    const deleteMessageHandler = (id) => {
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
                deleteContact(id);
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }


  return (
    <DashboardLayout title="Message | Smart Agency">
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
                              Category
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Subject
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Message
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Date
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Action
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                        {
                            isLoading ? <>Loading.....</> : (
                                <>
                                    {
                                        messages?.length > 0 ? (
                                          messages.map((message, key) => (
                                            <tr key={key} className="bg-white border-b hover:bg-gray-50 font-poppins text-darkBlue shadow">
                                                <td className="p-4 w-64 group">
                                                    {message.name}
                                                </td>
                                                <td className="py-4 px-6 text-sm">
                                                    {message.email}
                                                </td>

                                                <td className="py-4 px-6">
                                                    {message.category}
                                                </td>
                                                <td className="py-4 px-6">
                                                     {message.subject}
                                                </td>
                                                <td className="py-4 px-6 whitespace-nowrap">
                                                    {message.message}
                                                </td>
                                                <td className="py-4 px-6 ">
                                                    {moment(message.createdAt).format('MMMM Do YYYY')}
                                                </td>

                                                  <td className="py-4 px-6 ">
                                                      <button onClick={() => deleteMessageHandler(message?._id)} className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition">
                                                          <BiTrash size={20} />
                                                      </button>
                                                  </td>
                                            </tr>
                                          ))
                                        ) : (
                                              <tr className="bg-white border-b hover:bg-gray-50 font-poppins text-darkBlue shadow">
                                                  <td className="py-4 px-6 text-sm">
                                                      We couldn't find any record
                                                  </td>
                                                  <td className="py-4 px-6 text-sm"></td>
                                                  <td className="py-4 px-6 text-sm"></td>
                                                  <td className="py-4 px-6 text-sm"></td>
                                                  <td className="py-4 px-6 text-sm"></td>
                                                  <td className="py-4 px-6 text-sm"></td>
                                                  <td className="py-4 px-6 text-sm"></td>
                                              </tr>
                                        )
                                    }
                                </>
                            )
                        }
                  </tbody>
              </table>
          </div>
    </DashboardLayout>
  )
}

export default Messages