import moment from "moment";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import { useGetContactsQuery } from "../../../../features/contact/contactApi";

const Messages = () => {
    const { data: messages, isLoading } = useGetContactsQuery();
    console.log(messages);
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