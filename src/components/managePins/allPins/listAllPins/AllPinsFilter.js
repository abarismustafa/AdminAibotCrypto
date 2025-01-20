import React from 'react'

function AllPinsFilter() {
    return (
        <div style={{ margin: "14px" }}>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0 p-2">FILTER All Pins</h4>
                        </div>
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="col-xl-2">
                                    <label for="exampleFormControlInput1" class="form-label">From Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder='Enter Date'
                                    />
                                </div>
                                <div className="col-xl-2">
                                    <label for="exampleFormControlInput1" class="form-label">To Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder='Enter Date'
                                    />
                                </div>
                                <div className="col-xl-2">
                                    <label for="exampleFormControlInput1" class="form-label">User|Admin</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter User|Admin'
                                    />
                                </div>
                                <div className="col-xl-2">
                                    <label for="exampleFormControlInput1" class="form-label">Pin</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Pin'
                                    />
                                </div>
                                <div className="col-xl-2">
                                    <label for="exampleFormControlInput1" class="form-label">Status</label>
                                    <select className="form-select form-control" aria-label="Default select example">
                                        <option selected>Select Status</option>
                                        <option value={"Used"}>Used</option>
                                        <option value={"Unused"}>Unused</option>
                                    </select>
                                </div>
                                <div className="col-xl-2">
                                    <label for="exampleFormControlInput1" class="form-label">Keywords</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Keywords'
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

export default AllPinsFilter