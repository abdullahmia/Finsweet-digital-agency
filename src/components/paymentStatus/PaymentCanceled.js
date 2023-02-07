import Lottie from 'react-lottie';
import { Link } from "react-router-dom";
import canceledData from '../../assets/lotties/transaction-canceled.json';


const PaymentCanceled = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: canceledData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className="w-full text-center lg:py-32 py-20">
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
            <h2 className='text-[30px] font-poppins font-semibold mb-6'>YOUR ORDER HAS BEEN CANCELED</h2>
            <Link to="/pricing" className='bg-darkBlue text-white px-10 py-2 rounded-lg uppercase font-poppins'> Services </Link>
        </div>
    )
}

export default PaymentCanceled