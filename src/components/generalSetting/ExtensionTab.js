import React, { useState } from 'react'
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

function ExtensionTab() {
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
                                        <label for="exampleFormControlInput1" class="form-label">Peppy.link - URL Shortener, QR Code, Bio Page <span style={{ color: 'red' }}>(Recommended)</span> </label>
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
                                        <label for="exampleFormControlInput1" class="form-label">hCaptcha</label>
                                        <div class="button-group">
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton3 === 'Disable' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Disable ${activeButton3 === 'Disable' ? 'active' : ''}`}
                                                onClick={() => setActiveButton3('Disable')}
                                            >

                                                <ImCross /> Disable
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton3 === 'Enable' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Enable ${activeButton3 === 'Enable' ? 'active' : ''}`}
                                                onClick={() => setActiveButton3('Enable')}
                                            >
                                                <TiTick /> Enable
                                            </button>

                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Google reCaptcha</label>
                                        <div class="button-group">
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton4 === 'Disable' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Disable ${activeButton4 === 'Disable' ? 'active' : ''}`}
                                                onClick={() => setActiveButton4('Disable')}
                                            >

                                                <ImCross /> Disable
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton4 === 'Enable' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Enable ${activeButton4 === 'Enable' ? 'active' : ''}`}
                                                onClick={() => setActiveButton4('Enable')}
                                            >
                                                <TiTick /> Enable
                                            </button>

                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Google Analytics</label>
                                        <div class="button-group">
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton === 'Disable' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Disable ${activeButton === 'Disable' ? 'active' : ''}`}
                                                onClick={() => setActiveButton('Disable')}
                                            >

                                                <ImCross /> Disable
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton === 'Enable' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn Enable ${activeButton === 'Enable' ? 'active' : ''}`}
                                                onClick={() => setActiveButton('Enable')}
                                            >
                                                <TiTick /> Enable
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

export default ExtensionTab