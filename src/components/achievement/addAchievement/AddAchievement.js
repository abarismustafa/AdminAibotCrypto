import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import { useParams } from 'react-router-dom';
import { getAchievementById, getAllPackageList, postAchievement, updateAchievement } from '../../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import Loadar from '../../../common/loader/Loader';

function AddAchievement() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Achievement",
        title_2: 'Add Achievement',
        path_2: ``
    };
    const [formData, setFormData] = useState({
        name: "",
        reward: "",
        no_of_match: "",
        plan_id: "",
        isActive: "",
        no_of_days: "",
    });
    const [load, setLoad] = useState(false);
    const [allPackageD, setAllPackageD] = useState();
    const [errors, setErrors] = useState({});
    const params = useParams();
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
        if (!formData.name) {
            errors.name = "Name is required.";
        }
        if (!formData.reward) {
            errors.reward = "Reward is required.";
        }
        if (!formData.no_of_match) {
            errors.no_of_match = "No Of Match is required.";
        }
        if (!formData.no_of_days) {
            errors.no_of_days = "No Of Days is required.";
        }
        if (!formData.plan_id) {
            errors.plan_id = "Package is required.";
        }
        if (!formData.isActive) {
            errors.isActive = "IsActive is required.";
        }

        return errors;
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

    const getByIdData = async (id) => {
        try {
            const res = await getAchievementById(id);
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
                    const res = await updateAchievement(updatePayload);
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
                    const res = await postAchievement(formData);
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
                                <h4 className="heading mb-0 p-2">Add Achievement</h4>
                            </div>
                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                <div className="row mt-2">
                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="name" className="form-label">
                                            Name <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Enter Name"
                                            value={formData?.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && (
                                            <div className="text-danger mt-1">{errors.name}</div>
                                        )}
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="reward" className="form-label">
                                            Reward <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="reward"
                                            className="form-control"
                                            placeholder="Enter reward"
                                            value={formData?.reward}
                                            onChange={handleChange}
                                        />
                                        {errors.reward && (
                                            <div className="text-danger mt-1">{errors.reward}</div>
                                        )}
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="no_of_match" className="form-label">
                                            No Of Match <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="no_of_match"
                                            className="form-control"
                                            placeholder="Enter no_of_match"
                                            value={formData?.no_of_match}
                                            onChange={handleChange}
                                        />
                                        {errors.no_of_match && (
                                            <div className="text-danger mt-1">{errors.no_of_match}</div>
                                        )}
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="no_of_days" className="form-label">
                                            No Of Days <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="date"
                                            name="no_of_days"
                                            className="form-control"
                                            placeholder="Enter No Of Days"
                                            value={formData?.no_of_days}
                                            onChange={handleChange}
                                        />
                                        {errors.no_of_days && (
                                            <div className="text-danger mt-1">{errors.no_of_days}</div>
                                        )}
                                    </div>


                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="plan_id" className="form-label">
                                            Package <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <select className="form-select form-control" aria-label="Default select example" name="plan_id" value={formData?.plan_id}
                                            onChange={handleChange}>
                                            <option selected>Select Package</option>
                                            <option value={"Percent"}>Abc</option>
                                            <option value={"Flat"}>Def</option>
                                            {/* {allPackageD && allPackageD?.map((item, i) => {
                                                        return <option key={i} value={item?._id}>{item?.name}</option>
                                                    })} */}
                                        </select>
                                        {errors.plan_id && (
                                            <div className="text-danger mt-1">{errors.plan_id}</div>
                                        )}
                                    </div>



                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="isActive" className="form-label">
                                            IsActive <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <select className="form-select form-control" aria-label="Default select example" name="isActive" value={formData?.isActive}
                                            onChange={handleChange}>
                                            <option selected>Select IsActive</option>
                                            <option value={"Percent"}>Percent</option>
                                            <option value={"Flat"}>Flat</option>
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

export default AddAchievement