import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import Loadar from '../../../common/loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { getAllPackageList, getLevelById, postLevel, updateLevel } from '../../../api/login/Login';

function AddLevel() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Level",
        title_2: 'Add Level',
        path_2: ``
    };
    const [load, setLoad] = useState(false);
    const [allPackageD, setAllPackageD] = useState();
    const [formData, setFormData] = useState({
        Level: "",
        Reward: "",
        No_of_match: "",
        plan_id: "",
        isActive: "",
    });
    const params = useParams();
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
        if (!formData.Level) {
            errors.Level = "Level is required.";
        }
        if (!formData.Reward) {
            errors.Reward = "Reward is required.";
        }
        if (!formData.No_of_match) {
            errors.No_of_match = "No_of_match is required.";
        }
        if (!formData.plan_id) {
            errors.plan_id = "Package is required.";
        }
        if (!formData.isActive) {
            errors.isActive = "IsActive is required.";
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

    const getByIdData = async (id) => {
        try {
            const res = await getLevelById(id);
            setFormData(res?.data);
        } catch (error) {

        }
    };
    useEffect(() => {
        if (params?.id) {
            getByIdData(params?.id)
        }
    }, [params?.id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setLoad(true)
            if (params?.id) {
                const updatePayload = { id: params?.id, data: formData }
                try {
                    const res = await updateLevel(updatePayload);
                    if (res?.statusCode == '200') {
                        setLoad(false)
                        toastSuccessMessage("Updated Succesfully")
                    } else {
                        toastErrorMessage("Not Updated")
                    }
                } catch (error) {
                    toastErrorMessage("Not Added")
                }
            } else {
                try {
                    const res = await postLevel(formData);
                    if (res?.statusCode == '200') {
                        setLoad(false)
                        toastSuccessMessage("Added Succesfully")
                    } else {
                        toastErrorMessage("Not Added")
                    }
                } catch (error) {
                    toastErrorMessage("Not Added")
                }
            }
            setLoad(false)
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
                                <h4 className="heading mb-0 p-2">{params?.id ? "Update" : "Add"} Level</h4>
                            </div>
                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                <div className="row mt-2">
                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="plan_id" className="form-label">
                                            Choose Package <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <select className="form-select form-control" aria-label="Default select example" name="plan_id" value={formData?.plan_id}
                                            onChange={handleChange}>
                                            <option selected>Select Package</option>
                                            {/* <option value={"Percent"}>Abc</option>
                                            <option value={"Flat"}>Def</option> */}
                                            {allPackageD && allPackageD?.map((item, i) => {
                                                return <option key={i} value={item?._id}>{item?.name}</option>
                                            })}
                                        </select>
                                        {errors.plan_id && (
                                            <div className="text-danger mt-1">{errors.plan_id}</div>
                                        )}
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="Level" className="form-label">
                                            Level <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="Level"
                                            className="form-control"
                                            placeholder="Enter Level"
                                            value={formData?.Level}
                                            onChange={handleChange}
                                        />
                                        {errors.Level && (
                                            <div className="text-danger mt-1">{errors.Level}</div>
                                        )}
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="Reward" className="form-label">
                                            Income Amount <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="Reward"
                                            className="form-control"
                                            placeholder="Enter Income Amount"
                                            value={formData?.Reward}
                                            onChange={handleChange}
                                        />
                                        {errors.Reward && (
                                            <div className="text-danger mt-1">{errors.Reward}</div>
                                        )}
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="No_of_match" className="form-label">
                                            Direct Members/Referral Required <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="No_of_match"
                                            className="form-control"
                                            placeholder="Enter Direct Members/Referral Required"
                                            value={formData?.No_of_match}
                                            onChange={handleChange}
                                        />
                                        {errors.No_of_match && (
                                            <div className="text-danger mt-1">{errors.No_of_match}</div>
                                        )}
                                    </div>


                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="isActive" className="form-label">
                                            IsActive <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <select className="form-select form-control" aria-label="Default select example" name="isActive" value={formData?.isActive}
                                            onChange={handleChange}>
                                            <option selected>Select IsActive</option>
                                            <option value={true}>True</option>
                                            <option value={false}>False</option>
                                        </select>
                                        {errors.isActive && (
                                            <div className="text-danger mt-1">{errors.isActive}</div>
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

export default AddLevel