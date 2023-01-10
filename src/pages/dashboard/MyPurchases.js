import PurchasesCard from "../../components/card/PurchasesCard";
import DashboardLayout from "../../components/layouts/DashboardLayout";

const MyPurchases = () => {
    return (
        <DashboardLayout title="My Purchases">
            <div className="w-full font-poppins px-6">
                <div className="space-y-5">
                    <PurchasesCard />
                    <PurchasesCard />
                    <PurchasesCard />
                    <PurchasesCard />
                    <PurchasesCard />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default MyPurchases;