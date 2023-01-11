import corporateImg from '../../../assets/images/corporate.png';
import DashboardLayout from "../../../components/layouts/DashboardLayout";

const Dashboard = () => {
    return (
        <DashboardLayout title="Dashboard | Smart Agency">
            <div className="px-7 py-4 shadow rounded flex items-center justify-between flex-wrap lg:gap-0 gap-5">
                <div className='lg:order-first order-last lg:w-[70%] w-full font-poppins space-y-2 lg:pr-32 pr-0'>
                    <h2 className='text-xl text-darkBlue'>Hey Danial! Welcome to the Dashboard</h2>
                    <p className='text-sm'>There are many variations of passages of Lorem Ipsum available, ut the majority have suffered passages of Lorem Ipsum available alteration in some form</p>
                    <button className='bg-darkBlue border border-darkBlue text-white px-6 py-2 rounded hover:bg-transparent hover:text-darkBlue transition text-sm'>Learn More</button>
                </div>
                <div className='lg:w-[30%] w-full flex items-center lg:justify-end justify-center'>
                    <img src={corporateImg} className="w-full" alt="" />
                </div>
            </div>


            <div>

            </div>
        </DashboardLayout>
    )
}

export default Dashboard;