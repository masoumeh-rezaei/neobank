import Header from "@/components/Header";
import AccountList from "@/components/AccountList";
import ActionButtons from "@/components/ActionButtons";
import QuickServices from "@/components/QuickServices";
import PromoBanner from "@/components/Banner";
import FooterNav from "@/components/Footer";



export default function HomePage() {
    return (
        <main className=" bg-gray-50">
            <Header/>
            <div className="px-4 pb-20 max-w-6xl mx-auto mt-15! pt-3">
                <AccountList />
                <ActionButtons/>
                <PromoBanner/>
                <QuickServices/>

            </div>
            <FooterNav/>
        </main>
    );
}
