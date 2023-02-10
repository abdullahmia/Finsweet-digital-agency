import { Link } from 'react-router-dom';
import ServiceCard from '../../../../components/card/ServiceCard';
import DashboardLayout from '../../../../components/layouts/DashboardLayout';
import ServiceLoader from '../../../../components/loaders/ServiceLoader';
import { useGetServicesQuery } from '../../../../features/service/serviceApi';

const Services = () => {
  const { data: services, isLoading } = useGetServicesQuery();
  return (
    <DashboardLayout title="Services | Smart Agency">
          <div className='shadow-lg px-6 py-4 font-poppins flex items-center justify-between flex-wrap bg-white'>
              <div>
                  <h2 className='text-xl '>Services</h2>
              </div>
              <div>
                  <Link to="/admin/service/new" className='bg-indigo-500 border border-indigo-500 text-white px-6 py-2 rounded hover:bg-transparent hover:text-indigo-500 transition text-sm'>Add Service</Link>
              </div>
          </div>

        {
        isLoading ? <ServiceLoader col={2} /> : services && services.length === 0 ? <div className=''>
            <div className='flex items-center justify-center mt-5'>
              <h2 className='text-2xl font-poppins text-gray-500'>No Services Found</h2>
            </div>
        </div> : (
            <>
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 mt-7'>
                {
                  services && services.map((service, key) => (
                    <ServiceCard key={key} service={service} />
                  ))
                }
              </div>
            </>
          )
        }
    </DashboardLayout>
  )
}

export default Services;