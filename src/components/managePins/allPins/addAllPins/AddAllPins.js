import React, { useState } from 'react';
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';

function AddAllPinsComp() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Pin",
        title_2: 'Add Pin',
        path_2: ``
    };


    const [formData, setFormData] = useState({
        amount: "",
        totalPins: "",
        package_name: "",
        currency: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: "",
        });
    };

    const validate = () => {
        const errors = {};
        if (!formData.amount) {
            errors.amount = "Amount is required.";
        } else if (formData.amount <= 0) {
            errors.amount = "Amount must be greater than zero.";
        }
        if (!formData.totalPins) {
            errors.totalPins = "Total number of pins is required.";
        } else if (formData.totalPins <= 0) {
            errors.totalPins = "Total number of pins must be greater than zero.";
        }
        if (!formData.package_name) {
            errors.package_name = "Package Name is required.";
        }
        if (!formData.currency) {
            errors.currency = "Currency is required.";
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Form Submitted Successfully:", formData);
            // Add your submission logic here
        }
    };


    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />

            {/* <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Add New Pin</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row mt-2">

                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Amount</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Amount"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label for="exampleFormControlInput1" class="form-label">Total Number of Pin</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Total Number of Pin"
                                        />
                                    </div>

                                    <div className="col-xl-12 text-center mt-4">
                                        <button type="button" className="btn btn-primary float-end me-0">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}


            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Add New Pin</h4>
                            </div>
                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                <div className="row mt-2">
                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="amount" className="form-label">
                                            Amount <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="amount"
                                            className="form-control"
                                            placeholder="Enter Amount"
                                            value={formData?.amount}
                                            onChange={handleChange}
                                        />
                                        {errors.amount && (
                                            <div className="text-danger mt-1">{errors.amount}</div>
                                        )}
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="totalPins" className="form-label">
                                            Total Number of Pin <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="totalPins"
                                            className="form-control"
                                            placeholder="Enter Total Number of Pin"
                                            value={formData?.totalPins}
                                            onChange={handleChange}
                                        />
                                        {errors.totalPins && (
                                            <div className="text-danger mt-1">{errors.totalPins}</div>
                                        )}
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="package_name" className="form-label">
                                            Package Name <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <select className="form-select form-control" aria-label="Default select example" name="package_name" value={formData?.package_name}
                                            onChange={handleChange}>
                                            <option selected>Select Package Name</option>
                                            <option value={"Percent"}>Abc</option>
                                            <option value={"Flat"}>Def</option>
                                        </select>
                                        {errors.package_name && (
                                            <div className="text-danger mt-1">{errors.package_name}</div>
                                        )}
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="currency" className="form-label">
                                            Currency <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="currency"
                                            className="form-control"
                                            placeholder="Enter Currency"
                                            value={formData?.currency}
                                            onChange={handleChange}
                                        />
                                        {errors.currency && (
                                            <div className="text-danger mt-1">{errors.currency}</div>
                                        )}
                                    </div>
                                    <div className="col-xl-12 text-center mt-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary float-end me-0"
                                        >
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

export default AddAllPinsComp