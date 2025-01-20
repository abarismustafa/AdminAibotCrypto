import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import DashLead from "../../components/Dashboard-Lead/DashLead"
import IncomeDashboard from "./Cards"

function DashboardAiBoatPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Dashboard",
        path_1: "/",
    }
    return <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
        <div className="container" >
            <h3 className="bg-dark px-4 py-3 text-white text-decoration-none rounded" >
                 DASHBOARD
            </h3>
            <IncomeDashboard />
        </div>
    </>
}
export default DashboardAiBoatPage