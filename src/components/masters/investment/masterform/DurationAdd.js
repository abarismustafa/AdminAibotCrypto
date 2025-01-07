import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomInputField from "../../../../common/CustomInputField";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { getAccTaxMasterById, postAccTaxMaster, updateAccTaxMasterById } from "../../../../api/login/Login";
import { toast, ToastContainer } from "react-toastify";

function DurationAdd() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Create Forex Duration",
    };

    const [formValues, setFormValues] = useState({
        name: "",
        title: "",
        description: "",
        wallet_type: "",
        currency: "",
        minimum_profit: "",
        maximum_profit: "",
        min_amount: "",
        max_amount: "",
        invested: "",
        profit_percentage: "",
        default_profit: "",
        default_result: "",
        trending: "",
        status: "",
    });

    const [formErrors, setFormErrors] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    const validate = () => {
        const errors = {};
        if (!formValues.name) errors.name = "Name is required";
        if (!formValues.title) errors.title = "Title is required";
        if (!formValues.wallet_type) errors.wallet_type = "Wallet Type is required";
        if (!formValues.currency) errors.currency = "Currency is required";
        if (!formValues.status) errors.status = "Status is required";
        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                if (!params?.id) {
                    const res = await postAccTaxMaster(formValues);
                    if (res?.statusCode === "200") {
                        toastSuccessMessage("Added successfully");
                        setTimeout(() => navigate(`/Forex-Master`), 2000);
                    }
                    resetForm();
                } else {
                    const res = await updateAccTaxMasterById(params.id, formValues);
                    if (res?.statusCode === "200") {
                        toastSuccessMessage("Updated successfully");
                        resetForm();
                        setTimeout(() => navigate(`/Forex-Master`), 2000);
                    }
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
    };

    const resetForm = () => {
        setFormValues({
            name: "",
            title: "",
            description: "",
            wallet_type: "",
            currency: "",
            minimum_profit: "",
            maximum_profit: "",
            min_amount: "",
            max_amount: "",
            invested: "",
            profit_percentage: "",
            default_profit: "",
            default_result: "",
            trending: "",
            status: "",
        });
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (params?.id) {
                    const response = await getAccTaxMasterById(params.id);
                    setFormValues(response?.data || {});
                } else {
                    resetForm();
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [params?.id]);

    return (
        <>
            <ToastContainer />
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">
                                    {params?.id ? "UPDATE" : "ADD"} Create Forex Duration
                                </h4>
                            </div>
                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <CustomInputField
                                            type="text"
                                            value={formValues.duration}
                                            hasError={!!formErrors.duration}
                                            onChange={handleChange}
                                            errorMsg={formErrors.duration}
                                            id="duration"
                                            name="duration"
                                            placeholder="Duration"
                                        />
                                    </div>
                                   
                                   
                                   
                                    {/* Select Fields */}
                                    <div className="col-xl-4 mb-3">
                                        <select
                                            className="form-control"
                                            value={formValues.timeframe}
                                            onChange={handleChange}
                                            name="timeframe"
                                        >
                                            <option value="">Select Timeframe</option>
                                            <option value="HOUR">Hour</option>
                                            <option value="DAY">Day</option>
                                            <option value="WEEK">Week</option>
                                        </select>
                                        {formErrors.wallet_type && (
                                            <small className="text-danger">{formErrors.wallet_type}</small>
                                        )}
                                    </div>

                                    <div className="col-xl-2 mb-3">
                                        <button className="btn btn-primary me-1" type="submit">
                                            {params?.id ? "Update" : "Add"}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DurationAdd;
