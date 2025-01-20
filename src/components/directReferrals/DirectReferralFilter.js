import React from 'react'

function DirectReferralFilter() {
    return (
        <div style={{ margin: "14px" }}>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0 p-2">Filter Distributor</h4>
                        </div>
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="col-xl-6">
                                    <label for="exampleFormControlInput1" class="form-label">Enter User Name/Dist ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Enter User Name/Dist ID'
                                    />
                                </div>

                                <div className="col-xl-12 text-center">
                                    <button type="button" className="btn btn-primary mt-1 me-0 float-end">
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

export default DirectReferralFilter