import React, { useState } from 'react'
import { HiMiniUsers } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaUserAltSlash } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa";
import { GiUbisoftSun } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";

function Membertab() {
    const [activeButton, setActiveButton] = useState(null);
    const [activeButton2, setActiveButton2] = useState(null);
    const [activeButton3, setActiveButton3] = useState(null);
    const [activeButton4, setActiveButton4] = useState(null);
    const [activeButton5, setActiveButton5] = useState(null);
    const [activeButton6, setActiveButton6] = useState(null);
    const [activeButton7, setActiveButton7] = useState(null);

    return (
        <>
            <div style={{ margin: "0 14px 14px 14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <h5 className='mb-5'>Options</h5>
                            <form className="tbl-captionn">

                                <div className="row mt-2">

                                    <div className="col-lg-4 mb-4">
                                        <div className="profile-card">
                                            <div className="profile-image">
                                                <img
                                                    style={{
                                                        width: "100px",
                                                        height: "100px",
                                                        borderRadius: "50%",
                                                        objectFit: "cover",
                                                        border: "2px dotted gray",
                                                    }}
                                                    src="https://luxeway.in/assets/image/mbr_defaultimage.jpg"
                                                    alt="Profile"
                                                />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-lg-8 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Default Member Picture</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            placeholder=""
                                        />
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Max Picture Width (px)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Max Picture Width"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Max Picture Height (px)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Max Picture Height"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Max Member Site Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Newsletter Max Member Site Title"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Max Member Site Description</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Newsletter Max Member Site Description"
                                        />
                                    </div>

                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Payplan Registration Option</label>
                                        <div class="button-group">
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton === 'Manual by Member' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Manual by Member ${activeButton === 'Manual by Member' ? 'active' : ''}`}
                                                onClick={() => setActiveButton('Manual by Member')}
                                            >
                                                <FaUser /> Manual by Member
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton === 'Automatically by System' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Automatically by System ${activeButton === 'Automatically by System' ? 'active' : ''}`}
                                                onClick={() => setActiveButton('Automatically by System')}
                                            >
                                                <IoMdSettings /> Automatically by System
                                            </button>

                                        </div>
                                    </div>


                                    <div className="col-lg-12 mb-4 mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Allow Member to Register Their Referrals
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                Allow Duplicate Email to Register
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                Allow Enter Sponsor Manually on the Registration form
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Visitor Referrer</label>
                                        <div class="button-group">
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton2 === 'Optional' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Optional ${activeButton2 === 'Optional' ? 'active' : ''}`}
                                                onClick={() => setActiveButton2('Optional')}
                                            >
                                                <FaUserAltSlash /> Optional
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton2 === 'Mandatory' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Mandatory ${activeButton2 === 'Mandatory' ? 'active' : ''}`}
                                                onClick={() => setActiveButton2('Mandatory')}
                                            >
                                                <HiMiniUsers /> Mandatory
                                            </button>

                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-4 mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Enable Random Referrer
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Default Referrer</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder='List of default referrer username, separated with comma'></textarea>
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Reserved Username (separated with comma)</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='Reserved Username'></textarea>
                                    </div>

                                    <div className="col-lg-12 mb-4 mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Convert Username to Lowercase During Registration Process
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                Disable Referral Link
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Referral Link Landing Page</label>
                                        <div class="button-group">
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton3 === 'Home Page Default' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Home Page Default ${activeButton3 === 'Home Page Default' ? 'active' : ''}`}
                                                onClick={() => setActiveButton3('Home Page Default')}
                                            >
                                                <FaHouseUser /> Home Page (Default)
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton3 === 'Registration Page' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Registration Page ${activeButton3 === 'Registration Page' ? 'active' : ''}`}
                                                onClick={() => setActiveButton3('Registration Page')}
                                            >
                                                <FaUserPen /> Registration Page
                                            </button>

                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-4 mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Disable Withdrawal
                                            </label>
                                        </div>
                                    </div>


                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Minimum withdrawal</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Minimum withdrawal"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Maximum withdrawal</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Maximum withdrawal"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Withdrawal Fee (fixed or percentage)</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Withdrawal Fee (fixed or percentage)"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Withdrawal Max Fee (cap amount)</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Withdrawal Max Fee (cap amount)"
                                        />
                                    </div>

                                    <div className="col-lg-12 mb-4 mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Enable Advance Account Renewal by Member
                                            </label>
                                        </div>
                                    </div>


                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Member Removal Option</label>
                                        <div class="button-group">
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton4 === 'Member Data Only' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Member Data Only ${activeButton4 === 'Member Data Only' ? 'active' : ''}`}
                                                onClick={() => setActiveButton4('Member Data Only')}
                                            >
                                                <FaUser /> Member Data Only
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton4 === 'Members And Its Transaction History' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Members And Its Transaction History ${activeButton4 === 'Members And Its Transaction History' ? 'active' : ''}`}
                                                onClick={() => setActiveButton4('Members And Its Transaction History')}
                                            >
                                                <IoMdSettings /> Members And Its Transaction History
                                            </button>

                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Member Rank Option</label>
                                        <div class="button-group">
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton5 === 'Keep It The Same' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Keep It The Same ${activeButton5 === 'Keep It The Same' ? 'active' : ''}`}
                                                onClick={() => setActiveButton5('Keep It The Same')}
                                            >
                                                <GiUbisoftSun /> Keep It The Same
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton5 === 'Get Ranked Dynamically' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Get Ranked Dynamically ${activeButton5 === 'Get Ranked Dynamically' ? 'active' : ''}`}
                                                onClick={() => setActiveButton5('Get Ranked Dynamically')}
                                            >
                                                <IoMdSettings /> Get Ranked Dynamically
                                            </button>

                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Double Opt-in Registration</label>
                                        <div class="button-group">
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton7 === 'Keep It The Same' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Keep It The Same ${activeButton7 === 'Keep It The Same' ? 'active' : ''}`}
                                                onClick={() => setActiveButton7('Keep It The Same')}
                                            >
                                                <GiUbisoftSun /> Keep It The Same
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton7 === 'Get Ranked Dynamically' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Get Ranked Dynamically ${activeButton7 === 'Get Ranked Dynamically' ? 'active' : ''}`}
                                                onClick={() => setActiveButton7('Get Ranked Dynamically')}
                                            >
                                                <IoMdSettings /> Get Ranked Dynamically
                                            </button>

                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Rank Status</label>
                                        <div class="button-group">
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton6 === 'enable' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn enable ${activeButton6 === 'enable' ? 'active' : ''}`}
                                                onClick={() => setActiveButton6('enable')}
                                            >
                                                <TiTick /> Enable
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton6 === 'disable' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn disable ${activeButton6 === 'disable' ? 'active' : ''}`}
                                                onClick={() => setActiveButton6('disable')}
                                            >
                                                <ImCross /> Disable
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton6 === 'enable (auto-confirm for a paid account)' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn enable (auto-confirm for a paid account) ${activeButton6 === 'enable (auto-confirm for a paid account)' ? 'active' : ''}`}
                                                onClick={() => setActiveButton6('enable (auto-confirm for a paid account)')}
                                            >
                                                <TiTick /> Enable (auto-confirm for a paid account)
                                            </button>


                                        </div>
                                    </div>







                                    <div className="col-xl-12 text-center mt-4">
                                        <button type="button" className="btn btn-primary float-end me-0">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div >
                </div >
            </div >
        </>
    )
}

export default Membertab