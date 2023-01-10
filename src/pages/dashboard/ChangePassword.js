import DashboardLayout from "../../components/layouts/DashboardLayout"

const ChangePassword = () => {
  return (
      <DashboardLayout title="Change Password">
          <div className="w-full font-poppins px-6">
              <h3 className="text-lg font-medium capitalize mb-4">Change Password</h3>

              <form className="space-y-7">
                  <div>
                      <label className="text-gray-600 mb-2 block">Old Password</label>
                      <input type="text" className="lg:w-96 w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400" required />
                  </div>

                  <div>
                      <label className="text-gray-600 mb-2 block">New Password</label>
                      <input type="text" className="lg:w-96 w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400" required />
                  </div>

                  <div>
                      <label className="text-gray-600 mb-2 block">Confirm Password</label>
                      <input type="text" className="lg:w-96 w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 placeholder-gray-400" required />
                  </div>

                  <button type="submit" className="black-btn">Update</button>
              </form>
          </div>
      </DashboardLayout>
  )
}

export default ChangePassword