import { Link } from "react-router-dom";

const PurchasesCard = () => {
    return (
        <div className="font-poppins space-y-5 p-5 shadow rounded bg-white">
            <div className="flex justify-between gap-8">
                <h3 className="w-1/2 text-[22px] text-darkBlue">Full Stack Web Development</h3>
                <div className="w-1/2 flex justify-end items-center">
                    <Link to="/account/history/orderid" className="border border-blue-600 text-blue-600 px-5 py-2 rounded hover:bg-blue-500 hover:text-white transition">View Order</Link>
                </div>
                
            </div>
            <div className="flex justify-between flex-wrap gap-8">
                <div className="text-center space-y-2">
                    <h3 className="font-semibold text-md">Order Number</h3>
                    <p>23E34RT3</p>
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-semibold text-md">Purchased</h3>
                    <p>01 March 2021</p>
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-semibold text-md">Total</h3>
                    <p>$451</p>
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-semibold text-md">Status</h3>
                    <p>Deliverd</p>
                </div>

            </div>

        </div>
    )
}

export default PurchasesCard;