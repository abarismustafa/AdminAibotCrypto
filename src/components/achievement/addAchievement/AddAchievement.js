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
        // reward: "",
        no_of_match: "",
        plan_id: "",
        isActive: "",
        no_of_days: "",


        payment_per: "",
        fase_achievement_income: "",
        duration_type: "",
        duration: "",
        earn_up_to: "",
        direct_referal_member: "",
        direct_member: "",




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
        // if (!formData.reward) {
        //     errors.reward = "Reward is required.";
        // }
        if (!formData.no_of_match) {
            errors.no_of_match = "Bot Matching is required.";
        }
        if (!formData.no_of_days) {
            errors.no_of_days = "No Of Days is required.";
        }
        if (!formData.plan_id) {
            errors.plan_id = "Package is required.";
        }
        if (!formData.payment_per) {
            errors.payment_per = "Payment Per is required.";
        }
        if (!formData.direct_member) {
            errors.direct_member = "Direct Members/Referrals is required.";
        }
        if (!formData.fase_achievement_income) {
            errors.fase_achievement_income = "Fast Achievement Bonous Income is required.";
        }
        if (!formData.earn_up_to) {
            errors.earn_up_to = "Earn Upto is required.";
        }
        if (!formData.direct_referal_member) {
            errors.direct_referal_member = "Minimum Direct/Referral Members  is required.";
        }
        if (!formData.isActive) {
            errors.isActive = "IsActive is required.";
        }
        if (!formData.duration) {
            errors.duration = "Duration is required.";
        }
        if (!formData.duration_type) {
            errors.duration_type = "Duration Type is required.";
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
                                        <label htmlFor="plan_id" className="form-label">
                                            Choose Package <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <select className="form-select form-control" aria-label="Default select example" name="plan_id" value={formData?.plan_id}
                                            onChange={handleChange}>
                                            <option selected>Select Package</option>
                                            {allPackageD && allPackageD?.map((item, i) => {
                                                return <option key={i} value={item?._id}>{item?.name}</option>
                                            })}
                                        </select>
                                        {errors.plan_id && (
                                            <div className="text-danger mt-1">{errors.plan_id}</div>
                                        )}
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="direct_member" className="form-label">
                                            Direct Members/Referrals Of Required <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="direct_member"
                                            className="form-control"
                                            placeholder="Enter Direct Members/Referrals Of Required"
                                            value={formData?.direct_member}
                                            onChange={handleChange}
                                        />
                                        {errors.direct_member && (
                                            <div className="text-danger mt-1">{errors.direct_member}</div>
                                        )}
                                    </div>

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
                                        <label htmlFor="payment_per" className="form-label">
                                            Payment Per (Daily/Weekly/Monthly) <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <select className="form-select form-control" aria-label="Default select example" name="payment_per" value={formData?.payment_per}
                                            onChange={handleChange}>
                                            <option selected>Select Payment Per</option>
                                            <option value={"Day"}>Days</option>
                                            <option value={"Week"}>Week</option>
                                            <option value={"Month"}>Month</option>
                                            <option value={"Year"}>Year</option>
                                        </select>
                                        {errors.payment_per && (
                                            <div className="text-danger mt-1">{errors.payment_per}</div>
                                        )}
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="fase_achievement_income" className="form-label">
                                            Fast Achievement Bonous Income Amount <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="fase_achievement_income"
                                            className="form-control"
                                            placeholder="Enter Fast Achievement Bonous Income Amount"
                                            value={formData?.fase_achievement_income}
                                            onChange={handleChange}
                                        />
                                        {errors.fase_achievement_income && (
                                            <div className="text-danger mt-1">{errors.fase_achievement_income}</div>
                                        )}
                                    </div>

                                    {/* <div className="col-lg-6 mb-4">
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
                                    </div> */}

                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="no_of_days" className="form-label">
                                            No Of Days <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="number"
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
                                        <label htmlFor="earn_up_to" className="form-label">
                                            Earn Upto <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="earn_up_to"
                                            className="form-control"
                                            placeholder="Enter  Earn Upto"
                                            value={formData?.earn_up_to}
                                            onChange={handleChange}
                                        />
                                        {errors.earn_up_to && (
                                            <div className="text-danger mt-1">{errors.earn_up_to}</div>
                                        )}
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="duration_type" className="form-label">
                                            Duration Per (Daily/Weekly/Monthly) <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <select className="form-select form-control" aria-label="Default select example" name="duration_type" value={formData?.duration_type}
                                            onChange={handleChange}>
                                            <option selected>Select Duration Per</option>
                                            <option value={"Days"}>Days</option>
                                            <option value={"Weeks"}>Week</option>
                                            <option value={"Months"}>Months</option>
                                            <option value={"Years"}>Years</option>
                                        </select>
                                        {errors.duration_type && (
                                            <div className="text-danger mt-1">{errors.duration_type}</div>
                                        )}
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="direct_referal_member" className="form-label">
                                            Minimum Direct/Referral Members Required <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="direct_referal_member"
                                            className="form-control"
                                            placeholder="Enter Minimum Direct/Referral Members Required"
                                            value={formData?.direct_referal_member}
                                            onChange={handleChange}
                                        />
                                        {errors.direct_referal_member && (
                                            <div className="text-danger mt-1">{errors.direct_referal_member}</div>
                                        )}
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="no_of_match" className="form-label">
                                            Bot Matching Required <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="no_of_match"
                                            className="form-control"
                                            placeholder="Enter Bot Matching Required"
                                            value={formData?.no_of_match}
                                            onChange={handleChange}
                                        />
                                        {errors.no_of_match && (
                                            <div className="text-danger mt-1">{errors.no_of_match}</div>
                                        )}
                                    </div>


                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="duration" className="form-label">
                                            Targeted Duration Required (In Days) <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="duration"
                                            className="form-control"
                                            placeholder="Enter Duration in Days"
                                            value={formData?.duration}
                                            onChange={handleChange}
                                        />
                                        {errors.duration && (
                                            <div className="text-danger mt-1">{errors.duration}</div>
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

export default AddAchievement