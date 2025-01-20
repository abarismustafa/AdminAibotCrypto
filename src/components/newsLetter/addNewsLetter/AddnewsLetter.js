import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import { BsThermometerLow } from "react-icons/bs";
import { LuSend } from "react-icons/lu";
import { FaCalendarMinus } from "react-icons/fa6";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function AddnewsLetter() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Newsletter",
        title_2: 'Add Newsletter',
        path_2: ``
    };
    const [activeButton, setActiveButton] = useState(null);
    const [text, setText] = useState('');

    const handleChange = (value) => {
        setText(value);
    };

    console.log('text---', text)
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />

            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Add New Newsletter</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row mt-2">

                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Sender Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Sender Name"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Sender Email</label>
                                        <input
                                            disabled
                                            type="text"
                                            className="form-control"
                                            placeholder="seoabaris@gmail.com"
                                        />
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Subject</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Newsletter Subject"
                                        />
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Message (Plain Text)</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='Newsletter content in plain text'></textarea>
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <div>
                                            <label for="exampleFormControlInput1" class="form-label">Message (HTML)</label>
                                            <ReactQuill
                                                value={text}
                                                onChange={handleChange}
                                                placeholder="Start typing..."
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Recipient Program</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Recipient Program"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Recipient Availability</label>
                                        <select className="form-select form-control" aria-label="Default select example">
                                            <option selected>Select Recipient Availability</option>
                                            <option value={"All Registered Members"}>All Registered Members</option>
                                            <option value={"Registered Members With Membership Active"}>Registered Members With Membership Active</option>
                                            <option value={"Registered Members With Membership Inactive"}>Registered Members With Membership Inactive</option>
                                        </select>
                                    </div>


                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Priority</label>
                                        <div class="button-group">
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton === 'low' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn low ${activeButton === 'low' ? 'active' : ''}`}
                                                onClick={() => setActiveButton('low')}
                                            >
                                                <BsThermometerLow /> Low
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton === 'normal' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn normal ${activeButton === 'normal' ? 'active' : ''}`}
                                                onClick={() => setActiveButton('normal')}
                                            >
                                                <BsThermometerLow /> Normal
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton === 'high' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn high ${activeButton === 'high' ? 'active' : ''}`}
                                                onClick={() => setActiveButton('high')}
                                            >
                                                <BsThermometerLow /> High
                                            </button>


                                        </div>
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Status</label>
                                        <div class="button-group">
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton === 'draft' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn draft ${activeButton === 'draft' ? 'active' : ''}`}
                                                onClick={() => setActiveButton('draft')}
                                            >
                                                <FaCalendarMinus /> Draft
                                            </button>
                                            <button
                                                type="button"
                                                style={{
                                                    border: '1px solid black',
                                                    backgroundColor: activeButton === 'send now' ? '#5881C7' : 'transparent'
                                                }}
                                                className={`btn send now ${activeButton === 'send now' ? 'active' : ''}`}
                                                onClick={() => setActiveButton('send now')}
                                            >
                                                <LuSend /> Send Now
                                            </button>

                                        </div>
                                    </div>



                                    <div className="col-lg-12 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Note (Admin Only)</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Newsletter description or keywords, available for admin only'></textarea>
                                    </div>



                                    <div className="col-xl-12 text-center mt-4">
                                        <button type="button" className="btn btn-primary float-end me-0">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddnewsLetter