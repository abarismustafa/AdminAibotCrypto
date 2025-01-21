import React from 'react'

function DownlineTeamFIlter() {
    return (
        <div style={{ margin: "14px" }}>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0 p-2">Filter Downline Team</h4>
                        </div>
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <label htmlFor="isActive" className="form-label">
                                        Type
                                    </label>
                                    <select className="form-select form-control" aria-label="Default select example">
                                        <option selected>Select Type</option>
                                        <option value={"ABC"}>ABC</option>
                                        <option value={"DEF"}>DEF</option>
                                    </select>
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

export default DownlineTeamFIlter