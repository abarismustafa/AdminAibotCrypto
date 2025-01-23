import React, { useEffect, useState } from 'react'
import aibotLogo from "../../../assets/images/logo/profile.jpg"
import ExportPdf from '../../../common/exportPdf/ExportPdf';
import { afterLogingetCompanyInfo, getMemberIdCardDataById } from '../../../api/login/Login';
import { baseUrlImage } from '../../../baseUrl';
import { useParams } from 'react-router-dom';
const WelcomeLetter = () => {
    const [state, setState] = useState(null);
    const [welcomeData, setWelcomeData] = useState(null);

    const params = useParams();

    const userProfileData = async () => {
        try {
            const res = await afterLogingetCompanyInfo()
            setState(res?.data)
        } catch (error) {
            alert(error?.message)
        }
    };
    const getWelcomeLetterData = async () => {
        try {
            const res = await getMemberIdCardDataById(params?.id)
            setWelcomeData(res?.data)
        } catch (error) {
            alert(error?.message)
        }
    };

    useEffect(() => {
        userProfileData()
        getWelcomeLetterData()
    }, []);


    console.log('welcomeData----', welcomeData)


    return (
        <div className="mx-xl-5 mx-lg-3 mx-sm-2 my-5 exppdf">
            <div className="d-flex justify-content-center align-items-center">
                {state?.logo ? (
                    <img
                        src={`${baseUrlImage}${state?.logo}`}
                        alt="profile image"
                        className="mb-3 rounded-circle img-fluid"

                    />
                ) : (
                    <img
                        src={aibotLogo}
                        alt="profile not found"
                        className="mb-3 rounded-circle img-fluid"
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                )}
            </div>

            <header className="text-center mb-4">

                <h1 className="fw-bold">Welcome Letter</h1>
            </header>

            <main>
                <div className='card'>
                    <p>{welcomeData?.onBoardDate}</p>
                    {state?.name ? <p><strong>My Dear Mr. {welcomeData?.name},</strong></p> : <p><strong>""</strong></p>}
                    <p>
                        Congratulations! You have successfully registered with {state?.name ? <strong>{state?.name}</strong> : <strong>""</strong>}.
                        Welcome to  {state?.name ? <strong>{`${state?.name} India Family`}</strong> : <strong>""</strong>} , a team of stout-hearted professionals! You are joining a
                        revolution in the Era of Wellness as a Member who would utilize {state?.name ? <strong>{state?.name}</strong> : <strong>""</strong>}'s unique
                        Organic and Natural Products for their own good health and financial prosperity. Your Member ID is {welcomeData?.refer_id}.
                    </p>
                    <p>
                        <strong>What will you achieve?</strong>
                    </p>
                    <ul>
                        <li>4.5% to 20% discount on (PVs) the entire range of high-quality products.</li>
                        <li>
                            You can order products online to be delivered to your home! You can either pay online through
                            Credit/Debit Card.
                        </li>
                        <li>You get gifts by doing certain business points (BPs). As a new Member, you get gifts as part of the Welcome Program.</li>
                        <li>
                            And as an exciting Member, you get gifts when you share the  {state?.name ? <strong>{state?.name}</strong> : <strong>""</strong>} opportunity with others
                            and recruit others in your team.
                        </li>
                        <li>You have an opportunity to avail Sales Action Promotions/Discount Offers.</li>
                        <li>
                            You decide when and how much you want to work. The only investment needed to build your own business
                            with  {state?.name ? <strong>{state?.name}</strong> : <strong>""</strong>} is some 10–20 catalogs.
                        </li>
                        <li>
                            Being a  {state?.name ? <strong>{state?.name}</strong> : <strong>""</strong>} Member is a lot of fun. You will have the opportunity to meet new people and
                            enjoy beauty events and exciting activities.
                        </li>
                        <li>You can build your career in  {state?.name ? <strong>{state?.name}</strong> : <strong>""</strong>} as a Manager, Director, or higher.</li>
                        <li>You can travel around the world with  {state?.name ? <strong>{state?.name}</strong> : <strong>""</strong>}.</li>
                        <li>
                            Unlimited time and life income: You can build your income unlimited and lifetime depending on your
                            passion and efforts.
                        </li>
                    </ul>
                    <p>
                        We are proud to welcome you into our {state?.name ? <strong>{state?.name}</strong> : <strong>""</strong>} – A Dream to Become Healthier, Smarter, and Prosper in exponential ways!
                        WE STOP AT NOTHING!
                    </p>
                    <p className="mt-4">Yours sincerely,</p>
                </div>
            </main>

            <footer className="mt-5">
                <div className='card'>
                    <div >
                        <div className="d-flex justify-content-center align-items-center">
                            {state?.logo ? (
                                <img
                                    src={`${baseUrlImage}${state?.logo}`}
                                    alt="profile image"
                                    className="mb-3 rounded-circle img-fluid"

                                />
                            ) : (
                                <img
                                    src={aibotLogo}
                                    alt="profile not found"
                                    className="mb-3 rounded-circle img-fluid"
                                    style={{ width: '100px', height: '100px', }}
                                />
                            )}
                        </div>
                        <p className="fw-bold"> {state?.name ? <strong>{state?.name}</strong> : <strong>""</strong>}</p>
                        <p>For  {state?.name ? <strong>{state?.name}</strong> : <strong>""</strong>}.</p>
                        <p>Place: __________</p>
                        <p>Applicant Signature: __________</p>
                    </div>
                    <div className="text-end mt-4">

                        <ExportPdf />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default WelcomeLetter;
