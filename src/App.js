import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";

import "./assets/css/style.css";
// import "./components/upgrade-member/member.css"
import "react-toastify/dist/ReactToastify.css";

import 'bootstrap/dist/css/bootstrap.min.css';
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

  const [mnualData, setManualData] = useState()
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
              <Route path={`lead_dashboard`} element={<DashboardLeadPage />} />
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


              <Route path="*" element={<PageNotFound />} />
            </Route>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
