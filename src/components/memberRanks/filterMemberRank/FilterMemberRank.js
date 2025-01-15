import React from 'react'

function FilterMemberRank() {
    return (
        <div style={{ margin: "14px" }}>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0 p-2">FILTER User Rank</h4>
                        </div>
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Level</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Level'
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Title'
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Keywords</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Keywords'
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

export default FilterMemberRank