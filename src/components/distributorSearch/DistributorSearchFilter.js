import React from 'react'

function DistributorSearchFilter() {
    return (
        <div style={{ margin: "14px" }}>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0 p-2">Filter All Distributor</h4>
                        </div>
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="col-xl-3">
                                    <label for="exampleFormControlInput1" class="form-label">Login ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Login ID'
                                    />
                                </div>
                                <div className="col-xl-3">
                                    <label for="exampleFormControlInput1" class="form-label">Sponsor Dist ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Sponsor Dist ID'
                                    />
                                </div>
                                <div className="col-xl-3">
                                    <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter First Name'
                                    />
                                </div>
                                <div className="col-xl-3">
                                    <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Last Name'
                                    />
                                </div>
                                <div className="col-xl-3">
                                    <label for="exampleFormControlInput1" class="form-label">Mobile</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder='Enter Mobile'
                                    />
                                </div>
                                <div className="col-xl-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Email'
                                    />
                                </div>
                                <div className="col-xl-3">
                                    <label htmlFor="income_type" className="form-label">
                                        Kit Code
                                    </label>
                                    <select className="form-select form-control" aria-label="Default select example">
                                        <option selected>Select Kit Code</option>
                                        <option value={"ABC"}>ABC</option>
                                        <option value={"DEF"}>DEF</option>
                                    </select>
                                </div>
                                <div className="col-xl-3">
                                    <label for="exampleFormControlInput1" class="form-label">Direct Member</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Direct Member'
                                    />
                                </div>
                                <div className="col-xl-3">
                                    <label for="exampleFormControlInput1" class="form-label">From Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder='Enter From Date'
                                    />
                                </div>
                                <div className="col-xl-3">
                                    <label for="exampleFormControlInput1" class="form-label">To Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder='Enter To Date'
                                    />
                                </div>
                                <div className="col-xl-3 mt-4">
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                                            <label className="form-check-label" htmlFor="defaultCheck1">
                                                Show Prod Av.Voucher IDs
                                            </label>
                                        </div>
                                    </div>
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

export default DistributorSearchFilter