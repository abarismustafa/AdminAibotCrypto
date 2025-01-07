import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomInputField from "../../../../common/CustomInputField";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { getAccTaxMasterById, postAccTaxMaster, updateAccTaxMasterById } from "../../../../api/login/Login";
import { toast, ToastContainer } from "react-toastify";

function PlansAdd() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Create Forex Plan",
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
                                    {params?.id ? "UPDATE" : "ADD"} Create Forex Plan
                                </h4>
                            </div>
                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <CustomInputField
                                            type="text"
                                            value={formValues.name}
                                            hasError={!!formErrors.name}
                                            onChange={handleChange}
                                            errorMsg={formErrors.name}
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <CustomInputField
                                            type="text"
                                            value={formValues.title}
                                            hasError={!!formErrors.title}
                                            onChange={handleChange}
                                            errorMsg={formErrors.title}
                                            id="title"
                                            name="title"
                                            placeholder="Title"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <CustomInputField
                                            type="text"
                                            value={formValues.description}
                                            hasError={!!formErrors.description}
                                            onChange={handleChange}
                                            errorMsg={formErrors.description}
                                            id="description"
                                            name="description"
                                            placeholder="Description"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <CustomInputField
                                            type="text"
                                            value={formValues.wallet_type}
                                            hasError={!!formErrors.wallet_type}
                                            onChange={handleChange}
                                            errorMsg={formErrors.wallet_type}
                                            id="wallet_type"
                                            name="wallet_type"
                                            placeholder="Wallet Type"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <CustomInputField
                                            type="text"
                                            value={formValues.currency}
                                            hasError={!!formErrors.currency}
                                            onChange={handleChange}
                                            errorMsg={formErrors.currency}
                                            id="currency"
                                            name="currency"
                                            placeholder="Currency"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <CustomInputField
                                            type="text"
                                            value={formValues.minimum_profit}
                                            hasError={!!formErrors.minimum_profit}
                                            onChange={handleChange}
                                            errorMsg={formErrors.minimum_profit}
                                            id="minimum_profit"
                                            name="minimum_profit"
                                            placeholder="Minimum Profit"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <CustomInputField
                                            type="text"
                                            value={formValues.maximum_profit}
                                            hasError={!!formErrors.maximum_profit}
                                            onChange={handleChange}
                                            errorMsg={formErrors.maximum_profit}
                                            id="maximum_profit"
                                            name="maximum_profit"
                                            placeholder="Maximum Profit"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <CustomInputField
                                            type="text"
                                            value={formValues.min_amount}
                                            hasError={!!formErrors.min_amount}
                                            onChange={handleChange}
                                            errorMsg={formErrors.min_amount}
                                            id="min_amount"
                                            name="min_amount"
                                            placeholder="Minimum Amount"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <CustomInputField
                                            type="text"
                                            value={formValues.max_amount}
                                            hasError={!!formErrors.max_amount}
                                            onChange={handleChange}
                                            errorMsg={formErrors.max_amount}
                                            id="max_amount"
                                            name="max_amount"
                                            placeholder="Maximum Amount"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <CustomInputField
                                            type="text"
                                            value={formValues.invested}
                                            hasError={!!formErrors.invested}
                                            onChange={handleChange}
                                            errorMsg={formErrors.invested}
                                            id="invested"
                                            name="invested"
                                            placeholder="Invested"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <CustomInputField
                                            type="text"
                                            value={formValues.profit_percentage}
                                            hasError={!!formErrors.profit_percentage}
                                            onChange={handleChange}
                                            errorMsg={formErrors.profit_percentage}
                                            id="profit_percentage"
                                            name="profit_percentage"
                                            placeholder="Profit Percentage"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <CustomInputField
                                            type="text"
                                            value={formValues.default_profit}
                                            hasError={!!formErrors.default_profit}
                                            onChange={handleChange}
                                            errorMsg={formErrors.default_profit}
                                            id="default_profit"
                                            name="default_profit"
                                            placeholder="Default Profit"
                                        />
                                    </div>
                                   
                                    {/* Select Fields */}
                                    <div className="col-xl-4 mb-3">
                                        <select
                                            className="form-control"
                                            value={formValues.wallet_type}
                                            onChange={handleChange}
                                            name="wallet_type"
                                        >
                                            <option value="">Select Wallet Type</option>
                                            <option value="Crypto">Crypto</option>
                                            <option value="Fiat">Fiat</option>
                                        </select>
                                        {formErrors.wallet_type && (
                                            <small className="text-danger">{formErrors.wallet_type}</small>
                                        )}
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <select
                                            className="form-control"
                                            value={formValues.currency}
                                            onChange={handleChange}
                                            name="currency"
                                        >
                                            <option value="">Select Currency</option>
                                            <option value="USD">USD</option>
                                            <option value="EUR">EUR</option>
                                            <option value="BTC">BTC</option>
                                        </select>
                                        {formErrors.currency && (
                                            <small className="text-danger">{formErrors.currency}</small>
                                        )}
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <select
                                            className="form-control"
                                            value={formValues.default_result}
                                            onChange={handleChange}
                                            name="default_result"
                                        >
                                            <option value="">Select Default Result</option>
                                            <option value="Win">Win</option>
                                            <option value="Lose">Lose</option>
                                        </select>
                                        {formErrors.default_result && (
                                            <small className="text-danger">{formErrors.default_result}</small>
                                        )}
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <select
                                            className="form-control"
                                            value={formValues.trending}
                                            onChange={handleChange}
                                            name="trending"
                                        >
                                            <option value="">Select Trending</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                        {formErrors.trending && (
                                            <small className="text-danger">{formErrors.trending}</small>
                                        )}
                                    </div>

                                    {/* Submit Button */}
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

export default PlansAdd;
