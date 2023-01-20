import { Link } from 'react-router-dom';
import notFoundImg from '../assets/images/404.png';
import Layout from "../components/layouts/Layout";

const NotFound = () => {
    return (
        <Layout title="Page not found">
            <div className="w-full text-center lg:py-32 py-20">
                <img src={notFoundImg} className="lg:w-[600px] w-full mx-auto" alt="" />
                <h2 className='text-[30px] font-poppins font-semibold mb-6'>THE PAGE YOU'VE REQUESTED IS NOT AVAILABLE</h2>
                <Link to="/" className='black-btn uppercase font-poppins'>back to home</Link>
            </div>
        </Layout>
    )
}

export default NotFound;