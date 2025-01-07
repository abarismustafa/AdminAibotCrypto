import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomInputField from '../../../../common/CustomInputField';
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';
import { getAccTaxMasterById, postAccTaxMaster, updateAccTaxMasterById } from '../../../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';

function ForexAdd() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Create Forex Account",
    };

    const [formValues, setFormValues] = useState({
        user: "",
        account_id: "",
        password: "",
        broker: "",
        mt_version: "",
        account_type: "",
        balance: "",
        leverage: "",
        status: "",
    });

    const [formErrors, setFormErrors] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    const validate = () => {
        const errors = {};
        if (!formValues.user) errors.user = "User is required";
        if (!formValues.account_id) errors.account_id = "Account ID is required";
        if (!formValues.password) errors.password = "Password is required";
        if (!formValues.broker) errors.broker = "Broker is required";
        if (!formValues.mt_version) errors.mt_version = "MT Version is required";
        if (!formValues.account_type) errors.account_type = "Account Type is required";
        if (!formValues.balance) {
            errors.balance = "Balance is required";
        } else if (isNaN(formValues.balance)) {
            errors.balance = "Balance must be a number";
        }
        if (!formValues.leverage) errors.leverage = "Leverage is required";
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
            user: "",
            account_id: "",
            password: "",
            broker: "",
            mt_version: "",
            account_type: "",
            balance: "",
            leverage: "",
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
                                    {params?.id ? "UPDATE" : "ADD"} Forex Account
                                </h4>
                            </div>
                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <CustomInputField
                                            type="text"
                                            value={formValues.user}
                                            hasError={!!formErrors.user}
                                            onChange={handleChange}
                                            errorMsg={formErrors.user}
                                            id="user"
                                            name="user"
                                            placeholder="USER"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <CustomInputField
                                            type="text"
                                            value={formValues.account_id}
                                            hasError={!!formErrors.account_id}
                                            onChange={handleChange}
                                            errorMsg={formErrors.account_id}
                                            id="account_id"
                                            name="account_id"
                                            placeholder="ACCOUNT ID"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <CustomInputField
                                            type="password"
                                            value={formValues.password}
                                            hasError={!!formErrors.password}
                                            onChange={handleChange}
                                            errorMsg={formErrors.password}
                                            id="password"
                                            name="password"
                                            placeholder="PASSWORD"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <CustomInputField
                                            type="text"
                                            value={formValues.broker}
                                            hasError={!!formErrors.broker}
                                            onChange={handleChange}
                                            errorMsg={formErrors.broker}
                                            id="broker"
                                            name="broker"
                                            placeholder="BROKER"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <select
                                            className="form-control"
                                            value={formValues.mt_version}
                                            onChange={handleChange}
                                            name="mt_version"
                                        >
                                            <option value="">Select MT Version</option>
                                            <option value="MT4">MT4</option>
                                            <option value="MT5">MT5</option>
                                        </select>
                                        {formErrors.mt_version && (
                                            <small className="text-danger">{formErrors.mt_version}</small>
                                        )}
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <select
                                            className="form-control"
                                            value={formValues.account_type}
                                            onChange={handleChange}
                                            name="account_type"
                                        >
                                            <option value="">Select Account Type</option>
                                            <option value="Demo">Demo</option>
                                            <option value="Live">Live</option>
                                        </select>
                                        {formErrors.account_type && (
                                            <small className="text-danger">{formErrors.account_type}</small>
                                        )}
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <CustomInputField
                                            type="text"
                                            value={formValues.balance}
                                            hasError={!!formErrors.balance}
                                            onChange={handleChange}
                                            errorMsg={formErrors.balance}
                                            id="balance"
                                            name="balance"
                                            placeholder="BALANCE"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <CustomInputField
                                            type="text"
                                            value={formValues.leverage}
                                            hasError={!!formErrors.leverage}
                                            onChange={handleChange}
                                            errorMsg={formErrors.leverage}
                                            id="leverage"
                                            name="leverage"
                                            placeholder="LEVERAGE"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <select
                                            className="form-control"
                                            value={formValues.status}
                                            onChange={handleChange}
                                            name="status"
                                        >
                                            <option value="">Select Status</option>
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </select>
                                        {formErrors.status && (
                                            <small className="text-danger">{formErrors.status}</small>
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

export default ForexAdd