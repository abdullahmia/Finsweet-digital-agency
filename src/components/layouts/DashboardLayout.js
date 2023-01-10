import Sidebar from '../dashboard/Sidebar';
import Layout from './Layout';


const DashboardLayout = ({ children, title }) => {
  return (
    <>

      <Layout title={title}>
        <div className="container lg:grid grid-cols-12 items-start gap-6 py-10 pb-16">
          {/* <!-- sidebar --> */}
          <Sidebar />
          {/* <!-- sidebar end --> */}

          {/* <!-- account content --> */}
          <div className="col-span-9 mt-6 lg:mt-0 shadow pt-6 pb-12 rounded">
            {children}
          </div>
          {/* <!-- account content end --> */}
        </div>
      </Layout>
    </>
  )
}

export default DashboardLayout