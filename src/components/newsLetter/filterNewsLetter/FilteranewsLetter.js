import React from 'react'

function FilteranewsLetter() {
    return (
        <div style={{ margin: "14px" }}>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0 p-2">FILTER Newsletter</h4>
                        </div>
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Subject</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Subject Title'
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Message</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Email Message'
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Keywords</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Newsletter Keywords'
                                    />
                                </div>
                                <div className="col-xl-12 text-center mt-3">
                                    <button type="button" className="btn btn-primary mt-3 float-end">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilteranewsLetter