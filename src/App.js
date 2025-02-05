import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";

import "./assets/css/style.css";
// import "./components/upgrade-member/member.css"
import "react-toastify/dist/ReactToastify.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
// import "./assets/css/style.css";
import "./common/CustomInputField/index.module.scss";
import "./assets/css/project.css"

import { getMenusdata, sendNotification } from "./api/login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setIsLogin } from "./slice/auth";
import { getToken2 } from "./utils/localStorage";
import { getToken } from 'firebase/messaging';
import { messaging } from "./firebase/fireBase";
import LoginPage from "./pages/login";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import LoginPasswordReset from "./pages/paswordResetPages";
import PrivateRoute from "./privateRote/PrivateRoute";
import DasBoardRight from "./pages/dasBoardRight/DasBoardRight";
import DashboardLeadPage from "./pages/Dashboard-Lead/Index";
import PageNotFound from "./common/pageNotFound/PageNotFound";
import InvesmentPage from "./pages/aIInvestment/invesment";
import InvesmentAdd from "./components/aIInvestment/invesment/invesmentAdd/InvesmentAdd";
import DurationPage from "./pages/aIInvestment/duration";
import DurationAdd from "./components/aIInvestment/duration/durationAdd/DurationAdd";
import EcomercePage from "./pages/ecommerce/categories";
import CategoriesAdd from "./components/ecommerce/categories/categoriesAdd/CategoriesAdd";

import ForexAccount from "./components/masters/forex/ForexAccount";
import ForexAdd from "./components/masters/forex/masterform/ForexAdd";
import ForexPlans from "./components/masters/plans/ForexPlans";
import PlansAdd from "./components/masters/plans/masterform/PlansAdd";
import DurationPlans from "./components/masters/duration/DurationPlans";
import DurationAdds from "./components/masters/duration/masterform/DurationAdds";
import InvestmentsPlans from "./components/masters/investment/InvestmentsPlans";
import SignalPage from "./components/masters/signal/Signal";
import SignalsAdd from "./components/masters/signal/masterform/SignalsAdd";
import DashboardAiBoatPage from "./pages/aidashbord/Index";
import LevelIncome from "./components/masters/levelincome/LevelIncome";
import HouseLevel from "./components/masters/houselevel/HouseLevel";
import PayoutStatment from "./components/masters/statement/PayoutStatment";
import MemberDetailsForm from "./components/masters/epins/GenerateEpin";
import RequestedEpinPage from "./components/masters/RequestedEpin/RequestedEpinPage";
import AddMemberRankPage from "./pages/memberRanks/addmemberRank";
import AddnewLetterPage from "./pages/newsletter/addnewLetterPage";
import ListNewsletterPage from "./pages/newsletter/listNewsletterPage";
import ListMemberRankPage from "./pages/memberRanks/listMemberrank";
import GeneralSetting from "./pages/generalSetting";
import ListAllPins from "./pages/managePins/allPins/listAllPins";
import AddAllPins from "./pages/managePins/allPins/addAllPins";
import AddlevelPage from "./pages/level/addLevelPage";
import ListLevelPage from "./pages/level/listLevelPage";
import AddPackagePage from "./pages/package/addPackagePage";
import ListPackagePage from "./pages/package/listPackagePage";
import AddLifeRewardPage from "./pages/lifeReward/addLifeRewardPage";
import ListLifeRewardPage from "./pages/lifeReward/listLifeRewardPage";
import AddAchievementPage from "./pages/achievement/addAchievementPage";
import ListAchievementPage from "./pages/achievement/listAchievementPage";
import CustomerActivateDeavtivatePage from "./pages/customer/activateDeactivatePage";
// import DistributorSearchPage from "./pages/distributorSearchPage";
import ProductWiseReportPage from "./pages/reports/productWiseReportPage";
import DirectReferralsPage from "./pages/directReferralsPage";
import DownloadDataPage from "./pages/downloadDataPage";

import LanguagePage from "./pages/language";
import FormLanguage from "./components/language/formLanguage.js/FormLanguage";
import CurrencyPage from "./pages/currency";
import CurrencyForm from "./components/currency/CurrencyForm";
import DistributerPage from "./pages/distributer";

import CompanyMasters from "./pages/companyMasters";
import CompanyFormMaster from "./components/topNavigationComp/masters/companyMaster/companyFormMaster/CompanyFormMaster";
import CompanyTypeMasters from "./pages/companyTypeMaster";
import CompanyTypeMasterForm from "./components/topNavigationComp/masters/companyTypeMaster/companyTypeMasterForm/CompanyTypeMasterForm";
import DownlineTeamPage from "./pages/downlineTeamPage";
import LeftMemberPage from "./pages/leftMemberPage";
import RightMemberPage from "./pages/rightMemberPage";
import MainWalletReportPage from "./pages/reports/mainWalletReportPage";
import DistributorSearchPage from "./pages/distributorSearchPage";
import CreateUserDistributerPage from "./pages/distributer/createUserDistributer/CreateUserDistributer";
import LeadDetail from "./pages/lead-detail/LeadDetail";

import WelcomeLetter from "./components/vedaantaurved/userPanel/UserPanel";
import GetIdCard from "./components/vedaantaurved/getIdCard/GetIdCard";
import Bainarytree from "./pages/vedantayurveda/bainaryTree";
import PackagePurchaseReportPage from "./pages/reports/packagePurchaseReportPage";
import FundTransferReportPage from "./pages/reports/fundTransferReportPage";
import LevelIncomeReportPage from "./pages/incomeReportsPages/levelIncomeReportPage";
import ReferralIncomeReportPage from "./pages/incomeReportsPages/referralIncomePage";
import RankRewardIncomePage from "./pages/incomeReportsPages/rankRewardIncomePage";
import FastAcheivementBonusReportPage from "./pages/incomeReportsPages/fastAchievementBonusReportPage";
import MatchingBonusReportPage from "./pages/incomeReportsPages/matchingBonusReportPage";
import SocietyIncomeReportPage from "./pages/incomeReportsPages/societyIncomeReportPage";
import TradingProfitIncomeReportPage from "./pages/incomeReportsPages/tradingProfitIncomeReportPage";
import EarningCycleBonusReportPage from "./pages/incomeReportsPages/earningCycleBonusReportPage";



import AddSubModule from "./pages/RolePermission/subModule/addSubModule/AddSubModule";
import MainSubListModule from "./pages/RolePermission/subModule/mailSubListModule/MainSubListModule";
import AddRole from "./pages/RolePermission/addRole/AddRole";
import ListMainRole from "./pages/RolePermission/addRole/listmainRole/ListMainRole";
import FormSubSubModule from "./pages/RolePermission/subSubModule/formSubSubModule/FormSubSubModule";
import MainSubSubModule from "./pages/RolePermission/subSubModule/mainSubSubModule/MainSubSubModule";
import AddMainModulePage from "./pages/RolePermission/addMainModule/AddMainModule";
import MainListModule from "./pages/RolePermission/addMainModule/mailListModule/MailLisyModule";
import RoleMasterPage from "./pages/topNavigationPages/Master/roleMaster";
import AddRoleMaster from "./components/topNavigationComp/masters/roleMaster/addRoleMaster/AddRoleMaster";
import ReferralCommissionReportPage from "./pages/reports/referralComissionReportPage";
import BinaryComissionReportPage from "./pages/reports/binaryComssionReportPage";
import InvestmentReportPage from "./pages/reports/investmentReportPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [navigateState, setNavigateState] = useState(null);
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // console.log(getToken());
    // requestPermissions()
    if (getToken2()) {
      dispatch(setIsLogin({ isLogin: true }));
      navigate(location?.pathname);
    }

  }, []);

  useEffect(() => {
    setIsAuthenticated(isLogin);


  }, [isLogin]);





  const [tokenNoti, setokenNoti] = useState(null);

  const sendNotification2 = async (token) => {
    try {
      let result = await sendNotification({ type: 'Browser', token: token });

    } catch (error) {

    }
  };

  async function requestPermissions() {


    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        getToken(messaging, { vapidKey: 'BPmnN4enu6SLX6ASW7dctK6Q0j3GnTUhL5ZRi16I6RDqGav4khN2JIHmdKcL4eTqwRBu-PWmaUa1G-Oaor7AcF4' }).then((currentToken) => {
          if (currentToken) {
            console.log('Got FCM device token:', currentToken);
            setokenNoti(currentToken)
            if (isLogin) {
              sendNotification2(currentToken)

            }
            // Send the token to your server or display it on the UI
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });
      }
    })
  }
  // console.log(window.localStorage.getItem('dashRout') == null);

  const [mnualData, setManualData] = useState();



  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Navigate to={"/loginPage"} />} />  */}
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<Navigate to={"/loginPage"} />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<LoginPasswordReset />} />
            <Route path="*" element={<Navigate to="/loginPage" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to={`${window.localStorage.getItem('dashRout')}`} />} />
            {/* <Route path="/" element={<Navigate to={`/admin`} />} /> */}
            <Route
              path=""
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              {/* <Route path={`${location?.pathname}`} element={<DasBoardRight />} /> */}
              <Route path={`contest_dashboard`} element={<DasBoardRight />} />
              {/* <Route path={`lead_dashboard`} element={<DashboardLeadPage />} /> */}
              <Route path={`lead_dashboard`} element={<DashboardAiBoatPage />} />
              <Route path='investment' element={<InvesmentPage />} />
              <Route path='investment-analysis' element={<InvesmentAdd />} />
              <Route path='duration' element={<DurationPage />} />
              <Route path='duration-add' element={<DurationAdd />} />
              <Route path='ecommerce/category' element={<EcomercePage />} />
              <Route path='ecommerce/category/add' element={<CategoriesAdd />} />
              {/* forex junaid */}
              <Route path="ext/forex/account" element={<ForexAccount />} />
              <Route path="add-ext/forex/account" element={<ForexAdd />} />
              <Route path="edit-ext/forex/account/:id" element={<ForexAdd />} />

              <Route path="ext/forex/plan" element={<ForexPlans />} />
              <Route path="add-ext/forex/plan" element={<PlansAdd />} />
              <Route path="edit-ext/forex/plan/:id" element={<PlansAdd />} />

              <Route path="ext/forex/duration" element={<DurationPlans />} />
              <Route path="add-ext/forex/duration" element={<DurationAdds />} />
              <Route path="edit-ext/forex/duration/:id" element={<DurationAdds />} />

              <Route path="ext/forex/investment" element={<InvestmentsPlans />} />

              <Route path="ext/forex/signal" element={<SignalPage />} />
              <Route path="add-ext/forex/signal" element={<SignalsAdd />} />
              <Route path="edit-ext/forex/signal/:id" element={<SignalsAdd />} />

              <Route path="aibot/level-income" element={<LevelIncome />} />
              <Route path="aibot/house-level-income" element={<HouseLevel />} />
              <Route path="aibot/payoutstatment" element={<PayoutStatment />} />
              <Route path="aibot/generateEpin" element={<MemberDetailsForm />} />
              <Route path="aibot/RequestedEpin" element={<RequestedEpinPage />} />

              {/* ===================MOIN Route Start======================= */}
              <Route path="user-rank/create" element={<AddMemberRankPage />} />
              <Route path="user-rank/list" element={<ListMemberRankPage />} />
              <Route path="newsletter/create" element={<AddnewLetterPage />} />
              <Route path="newsletter/list" element={<ListNewsletterPage />} />
              <Route path="general-setting" element={<GeneralSetting />} />
              <Route path="all-pins/list" element={<ListAllPins />} />
              <Route path="all-pins/create" element={<AddAllPins />} />

              <Route path="level/list" element={<ListLevelPage />} />
              <Route path="level/create" element={<AddlevelPage />} />
              <Route path="level/edit/:id" element={<AddlevelPage />} />
              <Route path="package/create" element={<AddPackagePage />} />
              <Route path="package/list" element={<ListPackagePage />} />
              <Route path="package/edit/:id" element={<AddPackagePage />} />
              <Route path="lifeReward/create" element={<AddLifeRewardPage />} />
              <Route path="lifeReward/edit/:id" element={<AddLifeRewardPage />} />
              <Route path="lifeReward/list" element={<ListLifeRewardPage />} />
              <Route path="achievement/create" element={<AddAchievementPage />} />
              <Route path="achievement/edit/:id" element={<AddAchievementPage />} />
              <Route path="achievement/list" element={<ListAchievementPage />} />


              <Route path="cutomer/activate/deactivate" element={<CustomerActivateDeavtivatePage />} />
              <Route path="distributor/search" element={<DistributorSearchPage />} />
              <Route path="product-wise/report" element={<ProductWiseReportPage />} />
              <Route path="direct-referrals" element={<DirectReferralsPage />} />
              <Route path="download/data" element={<DownloadDataPage />} />
              <Route path="downline-team" element={<DownlineTeamPage />} />
              <Route path="left-member" element={<LeftMemberPage />} />
              <Route path="right-member" element={<RightMemberPage />} />
              <Route path="main-wallet/report" element={<MainWalletReportPage />} />

              <Route path="language" element={<LanguagePage />} />
              <Route path="add-language" element={<FormLanguage />} />
              <Route path="update_language/:id" element={<FormLanguage />} />
              <Route path="currency" element={<CurrencyPage />} />
              <Route path="add-currency" element={<CurrencyForm />} />
              <Route path="update-currency/:id" element={<CurrencyForm />} />
              <Route
                path="/company-master"
                element={<CompanyMasters />}
              />
              <Route
                path="/create_company-master"
                element={<CompanyFormMaster />}
              />
              <Route
                path="/update-company-master/:id"
                element={<CompanyFormMaster />}
              />
              <Route
                path="/company-type-master"
                element={<CompanyTypeMasters />}
              />
              <Route
                path="/create_company-type-master"
                element={<CompanyTypeMasterForm />}
              />
              <Route
                path="/update_company-type-master/:id"
                element={<CompanyTypeMasterForm />}
              />

              <Route
                path="member-list/:id/:name"
                element={<DistributerPage />}
              />

              <Route
                path="/admin/create-user/:id"
                element={<CreateUserDistributerPage />}
              />
              <Route
                path="/admin/detail-lead/:id"
                element={<LeadDetail />}
              />

              {/* ===================MOIN Route End========================= */}

              <Route path="aibot/User-Panel/Member/welcomeletter/:id" element={<WelcomeLetter />} />
              <Route path="aibot/User-Panel/Member/getIDcard/:id" element={<GetIdCard />} />
              <Route path="aibot/User-Panel/Member/binarytree" element={<Bainarytree />} />
              <Route path="package-purchase/report" element={<PackagePurchaseReportPage />} />
              <Route path="fund-transfer/report" element={<FundTransferReportPage />} />

              <Route path="referral-income/report" element={<ReferralIncomeReportPage />} />
              <Route path="level-income/report" element={<LevelIncomeReportPage />} />
              <Route path="rankReward-income/report" element={<RankRewardIncomePage />} />
              <Route path="fastAchievement-income/report" element={<FastAcheivementBonusReportPage />} />
              <Route path="matchingBonus-income/report" element={<MatchingBonusReportPage />} />
              <Route path="society-income/report" element={<SocietyIncomeReportPage />} />
              <Route path="tradingProfit-income/report" element={<TradingProfitIncomeReportPage />} />
              <Route path="earningCycleBonus-income/report" element={<EarningCycleBonusReportPage />} />


              <Route path="referral-commission/report" element={<ReferralCommissionReportPage />} />
              <Route path="binary-commission/report" element={<BinaryComissionReportPage />} />
              <Route path="investment/report" element={<InvestmentReportPage />} />









              <Route
                path="/add-sub-module"
                element={<AddSubModule />}
              />

              <Route
                path="/update-sub-module/:id"
                element={<AddSubModule />}
              />
              <Route
                path="/list-sub-module"
                element={<MainSubListModule />}
              />

              <Route
                path="/add-role"
                element={<AddRole />}
              />
              <Route
                path="/list-role"
                element={<ListMainRole />}
              />
              <Route
                path="/update-role/:id"
                element={<AddRole />}
              />

              <Route
                path="/add-sub-sub-module"
                element={<FormSubSubModule />}
              />
              <Route
                path="/update-sub-sub-module/:id"
                element={<FormSubSubModule />}
              />
              <Route
                path="/list-sub-sub-module"
                element={<MainSubSubModule />}
              />
              <Route
                path="/add-main-module"
                element={<AddMainModulePage />}
              />
              <Route
                path="/update-main-module/:id"
                element={<AddMainModulePage />}
              />
              <Route
                path="/listMainModule"
                element={<MainListModule />}
              />
              <Route path="role-master" element={<RoleMasterPage />} />
              <Route path="add-role-master" element={<AddRoleMaster />} />
              <Route
                path="update-role-master/:id"
                element={<AddRoleMaster />}
              />

              <Route path="*" element={<PageNotFound />} />
            </Route>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
