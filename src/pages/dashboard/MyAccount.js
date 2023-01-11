import DashboardLayout from "../../components/layouts/DashboardLayout";


const MyAccount = () => {
    return (
        <DashboardLayout title="My Account">
            <div className="w-full font-poppins px-6 pt-6 pb-14 shadow rounded">
                <h3 className="text-lg font-medium capitalize mb-4">Manage Address</h3>
                
                <form className="space-y-7">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
                        <div>
                            <label className="text-gray-600 mb-2 block">First Name</label>
                            <input type="text" className="input" required />
                        </div>
                        <div>
                            <label className="text-gray-600 mb-2 block">Last Name</label>
                            <input type="text" className="input" required />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
                        <div>
                            <label className="text-gray-600 mb-2 block">Birthday</label>
                            <input type="date" className="input" required />
                        </div>
                        <div>
                            <label className="text-gray-600 mb-2 block">Gender</label>
                            <select className="input">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
                        <div>
                            <label className="text-gray-600 mb-2 block">Email</label>
                            <input type="email" className="input" required />
                        </div>
                        <div>
                            <label className="text-gray-600 mb-2 block">Phone Number</label>
                            <input type="number" className="input" required />
                        </div>
                    </div>

                    <button type="submit" className="black-btn">Save Changes</button>
                </form>
            </div>
        </DashboardLayout>
    )
}

export default MyAccount;