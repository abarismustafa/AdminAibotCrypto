import React from 'react'

function LifeRewardFilter() {
    return (
        <div style={{ margin: "14px" }}>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0 p-2">FILTER All Life Reward</h4>
                        </div>
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="col-xl-3">
                                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Name'
                                    />
                                </div>

                                <div className="col-xl-3">
                                    <label for="exampleFormControlInput1" class="form-label">Reward</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Reward'
                                    />
                                </div>
                                <div className="col-xl-3">
                                    <label htmlFor="plan_id" className="form-label">
                                        Package
                                    </label>
                                    <select className="form-select form-control" aria-label="Default select example" name="plan_id">
                                        <option selected>Select Package</option>
                                        <option value={"Percent"}>Abc</option>
                                        <option value={"Flat"}>Def</option>
                                    </select>
                                </div>
                                <div className="col-xl-3">
                                    <label htmlFor="income_type" className="form-label">
                                        isActive
                                    </label>
                                    <select className="form-select form-control" aria-label="Default select example">
                                        <option selected>Select isActive</option>
                                        <option value={"True"}>True</option>
                                        <option value={"False"}>False</option>
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

export default LifeRewardFilter