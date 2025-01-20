import React from 'react'

function ProductWiseReportFilter() {
    return (
        <div style={{ margin: "14px" }}>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0 p-2">Filter All Product Wise Report</h4>
                        </div>
                        <form className="tbl-captionn">
                            <div className="row">
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


                                <div className="col-xl-3">
                                    <label htmlFor="income_type" className="form-label">
                                        Product
                                    </label>
                                    <select className="form-select form-control" aria-label="Default select example">
                                        <option selected>Select Product</option>
                                        <option value={"ABC"}>ABC</option>
                                        <option value={"DEF"}>DEF</option>
                                    </select>
                                </div>
                                <div className="col-xl-3">
                                    <label htmlFor="income_type" className="form-label">
                                        Branch
                                    </label>
                                    <select className="form-select form-control" aria-label="Default select example">
                                        <option selected>Select Branch</option>
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

export default ProductWiseReportFilter