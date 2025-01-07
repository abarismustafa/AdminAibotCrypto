import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";



const DurationAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Invesments",
        title_2: 'Create AI Investment Duration',
        path_2: ``
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Create AI Investment Duration</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Duration</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter The Duration Number"
                                        // value={filterInitial?.start_date}
                                        // name="start_date"
                                        // onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Time Frame</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Time Frame</option>
                                            <option value={1}>Hour</option>
                                            <option value={2}>Day</option>
                                            <option value={3}>Weak</option>
                                            <option value={3}>Month</option>
                                        </select>

                                    </div>
                                    <div className="col-xl-12 text-center mt-4">
                                        <button type="button" className="btn btn-primary mt-3">
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

export default DurationAdd