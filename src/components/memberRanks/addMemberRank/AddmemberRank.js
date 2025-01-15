import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import { IoReload } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function AddmemberRank() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "User Rank",
        title_2: 'User Rank',
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
                                <h4 className="heading mb-0 p-2">Add New User Ranking</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row mt-2">

                                    <div className='col-lg-4 col-md-4 col-sm-12'>
                                        <div className="card">
                                            <div className="card-body p-0">

                                                <div className="col-xl-12 mb-4">
                                                    <label for="exampleFormControlInput1" class="form-label">Rank Level</label>
                                                    <select className="form-select form-control" aria-label="Default select example">
                                                        <option selected>Select Rank Level</option>
                                                        <option value={1}>Active</option>
                                                        <option value={2}>In Active</option>
                                                    </select>
                                                </div>

                                                <div className="col-xl-12">
                                                    <button className='btn btn-success float-end me-0' type='button'><IoReload /> Load</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-lg-8 col-md-8 col-sm-12'>
                                        <div className="card">
                                            <div className="card-body p-0">
                                                <h5 className='mb-5'>Options</h5>

                                                <div className="col-lg-12 mb-4">
                                                    <label for="exampleFormControlInput1" class="form-label">Rank Title</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Rank Title"
                                                    />
                                                </div>
                                                <div className="col-lg-12 mb-4">
                                                    <div>
                                                        <label for="exampleFormControlInput1" class="form-label">Description</label>
                                                        <ReactQuill
                                                            value={text}
                                                            onChange={handleChange}
                                                            placeholder="Start typing..."
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 mb-4">
                                                    <label for="exampleFormControlInput1" class="form-label">Rank Logo</label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-lg-12 mb-4">
                                                    <label for="exampleFormControlInput1" class="form-label">Genealogy Node Color</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Genealogy Node Color"
                                                    />
                                                </div>

                                                <div className="col-lg-12 mb-4">
                                                    <label for="exampleFormControlInput1" class="form-label">Rank Rule: Min. Personal Referrals</label>
                                                    <div className="rule-container" style={{ display: 'flex', alignItems: 'center' }}>
                                                        <select className="form-select form-control">
                                                            <option value="disable">disable</option>
                                                            <option value="OR">OR</option>
                                                            <option value="AND" selected>AND</option>
                                                        </select>
                                                        <input type="number" className="form-control" placeholder='0' />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 mb-4">
                                                    <label for="exampleFormControlInput1" class="form-label">Rank Rule: Min. Total Referrals</label>
                                                    <div className="rule-container" style={{ display: 'flex', alignItems: 'center' }}>
                                                        <select className="form-select form-control">
                                                            <option value="disable">disable</option>
                                                            <option value="OR">OR</option>
                                                            <option value="AND" selected>AND</option>
                                                        </select>
                                                        <input type="number" className="form-control" placeholder='0' />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 mb-4">
                                                    <label for="exampleFormControlInput1" class="form-label">Rank Reward</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder='One time bonus or reward when achieve this rank'></textarea>
                                                </div>
                                                <div className="col-lg-12 mb-4">
                                                    <label for="exampleFormControlInput1" class="form-label">Adjustment - Personal Referral Commission</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder='Modified personel referral commission list on this rank'></textarea>
                                                </div>
                                                <div className="col-lg-12 mb-4">
                                                    <label for="exampleFormControlInput1" class="form-label">Adjustment - Initial Level Commission</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder='Modified intial referral commission list on this rank'></textarea>
                                                </div>
                                                <div className="col-lg-12 mb-4">
                                                    <label for="exampleFormControlInput1" class="form-label">Adjustment - Renewal Level Commission</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder='Modified renewal referral commission list on this rank'></textarea>
                                                </div>
                                                <div className="col-lg-12 mb-4">
                                                    <label for="exampleFormControlInput1" class="form-label">Note (displayed by Administrator only)</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Administration note about this rank'></textarea>
                                                </div>

                                                <div className="col-lg-12 mb-4">
                                                    <label for="exampleFormControlInput1" class="form-label">Rank Status</label>
                                                    <div class="button-group">
                                                        <button
                                                            type="button"
                                                            style={{
                                                                border: '1px solid black',
                                                                backgroundColor: activeButton === 'enable' ? '#5881C7' : 'transparent'
                                                            }}
                                                            className={`btn enable ${activeButton === 'enable' ? 'active' : ''}`}
                                                            onClick={() => setActiveButton('enable')}
                                                        >
                                                            <TiTick /> Enable
                                                        </button>
                                                        <button
                                                            type="button"
                                                            style={{
                                                                border: '1px solid black',
                                                                backgroundColor: activeButton === 'disable' ? '#5881C7' : 'transparent'
                                                            }}
                                                            className={`btn disable ${activeButton === 'disable' ? 'active' : ''}`}
                                                            onClick={() => setActiveButton('disable')}
                                                        >
                                                            <ImCross /> Disable
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddmemberRank