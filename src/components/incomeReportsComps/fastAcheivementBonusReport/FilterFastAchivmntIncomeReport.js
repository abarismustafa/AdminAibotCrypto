import React, { useState } from 'react'
import Loadar from '../../../common/loader/Loader';

function FilterFastAchivmntIncomeReport() {
    const [load, setLoad] = useState(false);
    const [formData, setFormData] = useState({
        start_date: "",
        end_date: "",
        member_code: "",
        refer_code: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = () => {
        // getFIlteredData(formData)
        // try {
        //     const res = await getFilteredFundTransferReportData(filterPayload);
        //     getFIlteredData(res?.data)
        //     console.log('filterRes----', res?.data)
        // } catch (error) {

        // }
        // console.log('formData---', formData)
    };

    return (
        <>
            <div style={{ margin: "14px" }}>
                {load && <Loadar />}
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">FILTER All Fast Achievement Income Report</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-3">
                                        <label for="exampleFormControlInput1" class="form-label">Start Date</label>
                                        <input
                                            type="date"
                                            name='start_date'
                                            value={formData?.start_date}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder='Enter Start Date'
                                        />
                                    </div>
                                    <div className="col-xl-3">
                                        <label for="exampleFormControlInput1" class="form-label">End Date</label>
                                        <input
                                            type="date"
                                            name='end_date'
                                            value={formData?.end_date}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder='Enter End Date'
                                        />
                                    </div>
                                    <div className="col-xl-3">
                                        <label for="exampleFormControlInput1" class="form-label">Member Code</label>
                                        <input
                                            type="text"
                                            name='member_code'
                                            value={formData?.member_code}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder='Enter Member Code'
                                        />
                                    </div>
                                    <div className="col-xl-3">
                                        <label for="exampleFormControlInput1" class="form-label">Refer Code</label>
                                        <input
                                            type="text"
                                            name='refer_code'
                                            value={formData?.refer_code}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder='Enter Refer Code'
                                        />
                                    </div>
                                    <div className="col-xl-12 text-center">
                                        <button type="button" onClick={handleSubmit} className="btn btn-primary mt-1 me-0 float-end">
                                            Search
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

export default FilterFastAchivmntIncomeReport