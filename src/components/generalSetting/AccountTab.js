import React from 'react'

function AccountTab() {

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
                                        <label for="exampleFormControlInput1" class="form-label">
                                            Admin Picture</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            placeholder=""
                                        />
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Admin Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Admin Username"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Admin Password</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Max Admin Password"
                                        />
                                    </div>
                                    <div className="col-lg-12 mb-4 mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Confirm Password Change
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">License Key</label>
                                        <input
                                            disabled
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter License Key"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">MLMScript.net Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter MLMScript.net Username"
                                        />
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Default Download Folder</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Default Download Folder"
                                        />
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Short Date Format</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Short Date Format"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Long Date Format</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Long Date Format"
                                        />
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Max Displayed Items on Page</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Max Displayed Items on Page"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Max Cookie Availability</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Max Cookie Availability"
                                        />
                                    </div>

                                    <div className="col-lg-12 mb-4 mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Enable SMTP
                                            </label>
                                        </div>
                                        <small>Configuring SMTP as a mail transfer agent is quite challenging. After SMTP configured and enabled, use this Test Sending feature to test the settings and see the result.</small>
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Host</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Host"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Port</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Port"
                                        />
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Username"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Password"
                                        />
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

export default AccountTab