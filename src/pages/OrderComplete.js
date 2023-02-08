import { useLocation } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import PaymentCanceled from '../components/paymentStatus/PaymentCanceled';
import PaymentFailed from '../components/paymentStatus/PaymentFailed';
import PaymentSuccess from '../components/paymentStatus/PaymentSuccess';

const OrderComplete = () => {
    const location = useLocation();
    const status = location.search.split('=')[1]
    return (
        <Layout title="Order Complete">
            {status === 'success' && <PaymentSuccess />}
            {status === 'failed' && <PaymentFailed />}
            {status === 'cancel' && <PaymentCanceled />}
        </Layout>
    )
}


export default OrderComplete;