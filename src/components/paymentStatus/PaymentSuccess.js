import Lottie from 'react-lottie';
import { Link } from "react-router-dom";
import inProgressData from '../../assets/lotties/in-progress.json';


const PaymentSuccess = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: inProgressData,
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
          <h2 className='text-[30px] font-poppins font-semibold mb-6'>YOUR ORDER IN-PROGRESS</h2>
          <Link to="/account/history" className='bg-darkBlue text-white px-10 py-2 rounded-lg uppercase font-poppins'>My Order </Link>
      </div>
  )
}

export default PaymentSuccess