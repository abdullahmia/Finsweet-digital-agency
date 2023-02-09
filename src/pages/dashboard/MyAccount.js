import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { useSelector } from "react-redux";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import Circle from '../../components/loaders/Circle';
import AddressFormLoader from "../../components/loaders/forms/AddressFormLoader";
import { useGetUserQuery, useUpdateUserMutation } from "../../features/auth/authApi";


const MyAccount = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const {user} = useSelector(state => state.auth);
    const { data: userData, isLoading, isSuccess: fetchUserSuccess } = useGetUserQuery(user?._id);
    useEffect(() => {
        if (fetchUserSuccess) {
            const { firstName, lastName, email, birthday, gender, phone } = userData;
            setFirstName(firstName ? firstName : '');
            setLastName(lastName ? lastName : '');
            setBirthday(birthday ? birthday : '');
            setGender(gender ? gender : '');
            setPhone(phone ? phone : '');
            setEmail(email);
        }
    }, [fetchUserSuccess, userData])

    // update handler
    const [updateUser, {isLoading: updateUserLoding, isSuccess: updateUserSuccess, data: updatedUser}] = useUpdateUserMutation();
    const updateUserHandler = (e) => {
        e.preventDefault();

        updateUser({userId: user._id, body: {firstName, lastName, birthday, gender, phone}})
    }

    useEffect(() => {
        if (updateUserSuccess) {
            toast.success('Profile updated')
        }
    }, [updateUserSuccess, updatedUser])


    
    return (
        <DashboardLayout title="My Account">
            <div className="w-full font-poppins px-6 pt-6 pb-14 shadow rounded bg-white">
                <h3 className="text-lg font-medium capitalize mb-4">Manage Address</h3>
                

                {
                    isLoading ? <AddressFormLoader /> : <form className="space-y-7" onSubmit={updateUserHandler}>
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
                            <div>
                                <label className="text-gray-600 mb-2 block">First Name</label>
                                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input" required />
                            </div>
                            <div>
                                <label className="text-gray-600 mb-2 block">Last Name</label>
                                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input" required />
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
                            <div>
                                <label className="text-gray-600 mb-2 block">Birthday</label>
                                <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} className="input" required />
                            </div>
                            <div>
                                <label className="text-gray-600 mb-2 block">Gender</label>
                                <select className="input" value={gender} onChange={(e) => setGender(e.target.value)}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
                            <div>
                                <label className="text-gray-600 mb-2 block">Email</label>
                                <input type="email" value={email} className="input" required disabled />
                            </div>
                            <div>
                                <label className="text-gray-600 mb-2 block">Phone Number</label>
                                <input type="number" className="input" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>

                        <button type="submit" className="black-btn" disabled={updateUserLoding}>
                            {
                                updateUserLoding ? <Circle /> : 'Save Changes'
                            }
                        </button>
                    </form>
                }

                
            </div>
        </DashboardLayout>
    )
}

export default MyAccount;