import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Loadar from '../../../common/loader/Loader';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';

function ActivateDeactivateCustomer() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Customer",
        title_2: 'Activate/Deactivate',
        path_2: ``
    };
    const [load, setLoad] = useState(false);
    const [formData, setFormData] = useState({
        user_name: "",
    });
    const [formData1, setFormData1] = useState({
        Remark: "",
    });
    const [errors, setErrors] = useState({});
    const [errors1, setErrors1] = useState({});
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
    const handleChange1 = (e) => {
        const { name, value } = e.target;
        setFormData1({
            ...formData1,
            [name]: value,
        });
        setErrors1({
            ...errors1,
            [name]: "",
        });
    };
    const validate = () => {
        const errors = {};
        if (!formData.user_name) {
            errors.user_name = "Dist.ID/User Name is required.";
        }
        return errors;
    };
    const validate1 = () => {
        const errors1 = {};
        if (!formData1.Remark) {
            errors1.Remark = "Remark is required.";
        }

        return errors1;
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, {
            position: "top-right",
        });
    };
    const toastErrorMessage = (message) => {
        toast.error(`${message}`, {
            position: "top-right",
        });
    };

    const handleSubmit = async () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // setLoad(true)
            // if (params?.id) {
            //     const updatePayload = { id: params?.id, data: formData }
            //     try {
            //         const res = await updateLevel(updatePayload);
            //         if (res?.statusCode == '200') {
            //             setLoad(false)
            //             toastSuccessMessage("Updated Succesfully")
            //         } else {
            //             toastErrorMessage("Not Updated")
            //         }
            //     } catch (error) {
            //         toastErrorMessage("Not Added")
            //     }
            // } else {
            //     try {
            //         const res = await postLevel(formData);
            //         if (res?.statusCode == '200') {
            //             setLoad(false)
            //             toastSuccessMessage("Added Succesfully")
            //         } else {
            //             toastErrorMessage("Not Added")
            //         }
            //     } catch (error) {
            //         toastErrorMessage("Not Added")
            //     }
            // }
            // setLoad(false)
        }
    };
    const handleSubmit1 = async () => {
        const validationErrors = validate1();
        if (Object.keys(validationErrors).length > 0) {
            setErrors1(validationErrors);
        } else {
            // setLoad(true)
            // if (params?.id) {
            //     const updatePayload = { id: params?.id, data: formData }
            //     try {
            //         const res = await updateLevel(updatePayload);
            //         if (res?.statusCode == '200') {
            //             setLoad(false)
            //             toastSuccessMessage("Updated Succesfully")
            //         } else {
            //             toastErrorMessage("Not Updated")
            //         }
            //     } catch (error) {
            //         toastErrorMessage("Not Added")
            //     }
            // } else {
            //     try {
            //         const res = await postLevel(formData);
            //         if (res?.statusCode == '200') {
            //             setLoad(false)
            //             toastSuccessMessage("Added Succesfully")
            //         } else {
            //             toastErrorMessage("Not Added")
            //         }
            //     } catch (error) {
            //         toastErrorMessage("Not Added")
            //     }
            // }
            // setLoad(false)
        }
    };


    return (
        <>
            <ToastContainer />
            {load && <Loadar />}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />

            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Customer Activate/Deactivate</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row mt-2">
                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="user_name" className="form-label">
                                            Enter Dist.ID/User Name
                                            <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="user_name"
                                            className="form-control"
                                            placeholder="Enter Enter Dist.ID/User Name"
                                            value={formData?.user_name}
                                            onChange={handleChange}
                                        />
                                        {errors.user_name && (
                                            <div className="text-danger mt-1">{errors.user_name}</div>
                                        )}
                                    </div>

                                    <div className="col-xl-12 text-center mt-3 mb-3">
                                        <button
                                            type="button"
                                            onClick={handleSubmit}
                                            className="btn btn-primary float-start me-0"
                                        >
                                            Show Details
                                        </button>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-xl-12 text-center mt-4">
                                        <p style={{ fontSize: '14px', fontWeight: '700', marginRight: '302px' }}>User Name : <span style={{ fontSize: '14px', fontWeight: '700', marginLeft: '12px', color: 'darkcyan' }}>VA1084</span></p>
                                    </div>
                                    <div className="col-xl-12 text-center">
                                        <p style={{ fontSize: '14px', fontWeight: '700', marginRight: '255px' }}>Name : <span style={{ fontSize: '14px', fontWeight: '700', marginLeft: '12px', color: 'darkcyan' }}>Ankit Roy</span></p>
                                    </div>
                                    <div className="col-xl-4 d-flex text-center"></div>
                                    <div className="col-xl-6 d-flex text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <label htmlFor="Remark" className="form-label" style={{ fontSize: '14px', fontWeight: '700' }}>
                                            Remark : <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <textarea className="form-control ms-2" id="exampleFormControlTextarea1" rows="2"
                                            name='Remark'
                                            value={formData1?.Remark}
                                            onChange={handleChange1}
                                        ></textarea>
                                        {errors1.Remark && (
                                            <div className="text-danger mt-1">{errors1.Remark}</div>
                                        )}
                                    </div>
                                    <div className="col-xl-2 d-flex text-center"></div>
                                    <div className="col-xl-12 text-center mt-4">
                                        <p style={{ fontSize: '14px', fontWeight: '700', marginRight: '120px' }}>Status : <span style={{ color: 'green', fontSize: '14px', fontWeight: '700', marginLeft: '12px' }}>Member Currently Activate!!.</span></p>
                                    </div>

                                    <div className="col-xl-12 text-center mt-4 mb-2">
                                        <button
                                            type="button"
                                            onClick={handleSubmit1}
                                            className="btn btn-primary me-0"
                                        >
                                            De-Activate
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger me-0"
                                        >
                                            Cancel
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

export default ActivateDeactivateCustomer