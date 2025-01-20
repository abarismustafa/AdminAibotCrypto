import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Loadar from '../../common/loader/Loader';
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
import { getAllPackageList } from '../../api/login/Login';

function DownloadData() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Download Data",
        title_2: 'Download Data',
        path_2: ``
    };
    const [load, setLoad] = useState(false);
    const [allPackageD, setAllPackageD] = useState();
    const [formData, setFormData] = useState({
        report_type: "",
        UserID: "",
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
        if (!formData.report_type) {
            errors.report_type = "Report Type is required.";
        }
        if (!formData.UserID) {
            errors.UserID = "UserID is required.";
        }

        return errors;
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

    const getAllPackage = async () => {
        try {
            const res = await getAllPackageList();
            setAllPackageD(res?.data)
            console.log('allPackage--', res?.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        getAllPackage()
    }, []);



    const handleSubmit = async (e) => {
        e.preventDefault();
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
                                <h4 className="heading mb-0 p-2">Download Data</h4>
                            </div>
                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                <div className="row mt-2">

                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="report_type" className="form-label">
                                            Report Type <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <select className="form-select form-control" aria-label="Default select example" name="report_type" value={formData?.report_type}
                                            onChange={handleChange}>
                                            <option selected>Select Report Type</option>
                                            <option value={"Percent"}>Abc</option>
                                            <option value={"Flat"}>Def</option>
                                            {/* {allPackageD && allPackageD?.map((item, i) => {
                                                        return <option key={i} value={item?._id}>{item?.name}</option>
                                                    })} */}
                                        </select>
                                        {errors.report_type && (
                                            <div className="text-danger mt-1">{errors.report_type}</div>
                                        )}
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="UserID" className="form-label">
                                            UserID <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="UserID"
                                            className="form-control"
                                            placeholder="Enter UserID"
                                            value={formData?.UserID}
                                            onChange={handleChange}
                                        />
                                        {errors.UserID && (
                                            <div className="text-danger mt-1">{errors.UserID}</div>
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

export default DownloadData