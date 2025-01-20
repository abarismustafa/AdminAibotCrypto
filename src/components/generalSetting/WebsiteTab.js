import React, { useState } from 'react'
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

function WebsiteTab() {
    const [activeButton, setActiveButton] = useState(null);
    const [activeButton2, setActiveButton2] = useState(null);
    const [activeButton3, setActiveButton3] = useState(null);
    const [activeButton4, setActiveButton4] = useState(null);

    return (
        <>
            <div style={{ margin: "0 14px 14px 14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <h5 className='mb-5'>Options</h5>
                            <form className="tbl-captionn">

                                <div className="row mt-2">



                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Site Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Site Title"
                                        />
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Site URL</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Site URL"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Site Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Newsletter Site Name"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Administrator Alias Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Newsletter Administrator Alias Name"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Site Logo</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            placeholder="Enter Newsletter "
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Site Icon (favicon)</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            placeholder="Enter Newsletter "
                                        />
                                    </div>



                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Logo Style</label>
                                        <div class="button-group">
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton === 'Default' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Default ${activeButton === 'Default' ? 'active' : ''}`}
                                                onClick={() => setActiveButton('Default')}
                                            >
                                                <ImCross /> Default
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton === 'Rounded' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Rounded ${activeButton === 'Rounded' ? 'active' : ''}`}
                                                onClick={() => setActiveButton('Rounded')}
                                            >
                                                <TiTick /> Rounded
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton === 'Circle' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Circle ${activeButton === 'Circle' ? 'active' : ''}`}
                                                onClick={() => setActiveButton('Circle')}
                                            >
                                                <TiTick /> Circle
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton === 'Border' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Border ${activeButton === 'Border' ? 'active' : ''}`}
                                                onClick={() => setActiveButton('Border')}
                                            >
                                                <TiTick /> Border
                                            </button>

                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Site Keywords</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='List of Site Keywords username, separated with comma'></textarea>
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Site Description</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='List of Site Description username, separated with comma'></textarea>
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">From Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter From Name"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">From Email Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter From Email Address"
                                        />
                                    </div>


                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Registration Status</label>
                                        <div class="button-group">
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton2 === 'Disable' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Disable ${activeButton2 === 'Disable' ? 'active' : ''}`}
                                                onClick={() => setActiveButton2('Disable')}
                                            >
                                                <ImCross /> Disable
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton2 === 'Enable' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Enable ${activeButton2 === 'Enable' ? 'active' : ''}`}
                                                onClick={() => setActiveButton2('Enable')}
                                            >
                                                <TiTick /> Enable
                                            </button>

                                        </div>
                                    </div>


                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Display Member Website Directory</label>
                                        <div class="button-group">
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton3 === 'Yes' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Yes ${activeButton3 === 'Yes' ? 'active' : ''}`}
                                                onClick={() => setActiveButton3('Yes')}
                                            >
                                                <TiTick /> Yes
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton3 === 'No' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn No ${activeButton3 === 'No' ? 'active' : ''}`}
                                                onClick={() => setActiveButton3('No')}
                                            >
                                                <ImCross /> No
                                            </button>

                                        </div>
                                    </div>




                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Display Cookie Consent</label>
                                        <div class="button-group">
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton4 === 'Yes' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Yes ${activeButton4 === 'Yes' ? 'active' : ''}`}
                                                onClick={() => setActiveButton4('Yes')}
                                            >
                                                <TiTick /> Yes
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton4 === 'No' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn No ${activeButton4 === 'No' ? 'active' : ''}`}
                                                onClick={() => setActiveButton4('No')}
                                            >
                                                <ImCross /> No
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

export default WebsiteTab