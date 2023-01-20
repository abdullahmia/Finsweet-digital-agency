import { useSelector } from 'react-redux';
import corporateImg from '../../../assets/images/corporate.png';
import DashboardLayout from "../../../components/layouts/DashboardLayout";

const Dashboard = () => {
    const {user} = useSelector(state => state.auth);
    return (
        <DashboardLayout title="Dashboard | Smart Agency">
            <div className='bg-white'>
                <div className="px-7 py-4 shadow rounded flex items-center justify-between flex-wrap lg:gap-0 gap-5">
                    <div className='lg:order-first order-last lg:w-[70%] w-full font-poppins space-y-2 lg:pr-32 pr-0'>
                        <h2 className='text-xl text-darkBlue'>Hey {user.firstName}! Welcome to the Dashboard</h2>
                        <p className='text-sm'>There are many variations of passages of Lorem Ipsum available, ut the majority have suffered passages of Lorem Ipsum available alteration in some form</p>
                        <button className='black-sm-btn'>Learn More</button>
                    </div>
                    <div className='lg:w-[30%] w-full flex items-center lg:justify-end justify-center'>
                        <img src={corporateImg} className="w-full" alt="" />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Dashboard;