import AktivitasTerkiniSection from "./sections/AktivitasTerkiniSection"
import GreetingSection from "./sections/GreetingSection"
import HeaderSection from "./sections/HeaderSection"
import QuickActionSection from "./sections/QuickActionSection"
import StatistikLaporanSection from "./sections/StatistikLaporanSection"

const HomepageModule = () => {
    return <div className="w-screen min-h-screen bg-[#EBF8FE] px-4 flex flex-col">
        <HeaderSection/>
        <GreetingSection/>
        <QuickActionSection/>
        <StatistikLaporanSection/>
        <AktivitasTerkiniSection/>     
    </div>
}

export default HomepageModule