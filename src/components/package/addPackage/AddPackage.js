import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import { getAllCurrencyList, getPackageById, postPackage, updatePackage } from '../../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import Loadar from '../../../common/loader/Loader';
import { useParams } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";

function AddPackage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Package",
        title_2: 'Add Package',
        path_2: ``
    };
    const [load, setLoad] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        MatchBonus: "",
        ReferIncome: "",
        levelincome: "",
        isActive: "",
    });
    const [allCurrenncyD, setAllCurrencyD] = useState();

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
            errors.name = "Package Name is required.";
        }
        if (!formData.MatchBonus) {
            errors.MatchBonus = "Package Name is required.";
        }
        if (!formData.ReferIncome) {
            errors.ReferIncome = "Refferal Income is required.";
        }
        if (!formData.levelincome) {
            errors.levelincome = "Level Income is required.";
        }
        // if (!formData.TaxPrice) {
        //     errors.TaxPrice = "Tax Price is required.";
        // }
        // if (!formData.BasePrice) {
        //     errors.BasePrice = "Base Price is required.";
        // }
        // if (!formData.TotalPrice) {
        //     errors.TotalPrice = "Total Price is required.";
        // }
        if (!formData.isActive) {
            errors.isActive = "IsActive is required.";
        }
        // if (!formData.Currency_id) {
        //     errors.Currency_id = "Currency id is required.";
        // }

        return errors;
    };

    const [rows, setRows] = useState([
        { BasePrice: "", TaxPrice: "", TotalPrice: "", Currency_id: "" },
    ]);
    const handleAddRow = () => {
        setRows([...rows, { BasePrice: "", TaxPrice: "", TotalPrice: "", Currency_id: "" }]);
    };
    const handleRemoveRow = (index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };
    const handleRowsChange = (index, field, value) => {
        const updatedRows = rows.map((row, i) =>
            i === index ? { ...row, [field]: value } : row
        );
        setRows(updatedRows);
    };

    const getAllCurrency = async () => {
        try {
            const res = await getAllCurrencyList();
            setAllCurrencyD(res?.data)
            console.log('allCurrency--', res?.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        getAllCurrency()
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
            const res = await getPackageById(id);
            setFormData(res?.data);
            setRows(res?.data?.prices);
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
        const payload = { ...formData, prices: rows }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setLoad(true)
            if (params?.id) {
                const updatePayload = { id: params?.id, data: payload }
                try {
                    const res = await updatePackage(updatePayload);
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
                    const res = await postPackage(payload);
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
                                <h4 className="heading mb-0 p-2">{params?.id ? "Update" : "Add"} Package</h4>
                            </div>
                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                <div className="row mt-2">
                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="name" className="form-label">
                                            Package Name <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Enter Package Name"
                                            value={formData?.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && (
                                            <div className="text-danger mt-1">{errors.name}</div>
                                        )}
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="MatchBonus" className="form-label">
                                            Matching Bonus <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="MatchBonus"
                                            className="form-control"
                                            placeholder="Enter Matching Bonus"
                                            value={formData?.MatchBonus}
                                            onChange={handleChange}
                                        />
                                        {errors.MatchBonus && (
                                            <div className="text-danger mt-1">{errors.MatchBonus}</div>
                                        )}
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="ReferIncome" className="form-label">
                                            Referral Income <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="ReferIncome"
                                            className="form-control"
                                            placeholder="Enter Referral Income"
                                            value={formData?.ReferIncome}
                                            onChange={handleChange}
                                        />
                                        {errors.ReferIncome && (
                                            <div className="text-danger mt-1">{errors.ReferIncome}</div>
                                        )}
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="levelincome" className="form-label">
                                            Level Income <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="levelincome"
                                            className="form-control"
                                            placeholder="Enter Level Income"
                                            value={formData?.levelincome}
                                            onChange={handleChange}
                                        />
                                        {errors.levelincome && (
                                            <div className="text-danger mt-1">{errors.levelincome}</div>
                                        )}
                                    </div>

                                    <div className='col-lg-12'>
                                        <button type='button' onClick={handleAddRow} className='btn btn-success float-end me-0'>Add Row</button>
                                    </div>


                                    {rows.map((row, index) => (
                                        <div className="row align-items-center" key={index}>
                                            <div className="col-lg-3 mb-4">
                                                <label htmlFor={`BasePrice-${index}`} className="form-label">
                                                    Base Price
                                                </label>
                                                <input
                                                    type="number"
                                                    name={`BasePrice-${index}`}
                                                    className="form-control"
                                                    placeholder="Enter Base Price"
                                                    value={row.BasePrice}
                                                    onChange={(e) => handleRowsChange(index, "BasePrice", e.target.value)}
                                                />
                                                {errors.BasePrice && (
                                                    <div className="text-danger mt-1">{errors.BasePrice}</div>
                                                )}
                                            </div>

                                            <div className="col-lg-3 mb-4">
                                                <label htmlFor={`TaxPrice-${index}`} className="form-label">
                                                    Tax Price
                                                </label>
                                                <input
                                                    type="number"
                                                    name={`TaxPrice-${index}`}
                                                    className="form-control"
                                                    placeholder="Enter Tax Price"
                                                    value={row.TaxPrice}
                                                    onChange={(e) => handleRowsChange(index, "TaxPrice", e.target.value)}
                                                />
                                                {errors.TaxPrice && (
                                                    <div className="text-danger mt-1">{errors.TaxPrice}</div>
                                                )}
                                            </div>

                                            <div className="col-lg-3 mb-4">
                                                <label htmlFor={`TotalPrice-${index}`} className="form-label">
                                                    Total Price
                                                </label>
                                                <input
                                                    type="number"
                                                    name={`TotalPrice-${index}`}
                                                    className="form-control"
                                                    placeholder="Enter Total Price"
                                                    value={row.TotalPrice}
                                                    onChange={(e) => handleRowsChange(index, "TotalPrice", e.target.value)}
                                                />
                                                {errors.TotalPrice && (
                                                    <div className="text-danger mt-1">{errors.TotalPrice}</div>
                                                )}
                                            </div>

                                            <div className="col-lg-2 mb-4">
                                                <label htmlFor={`Currency_id-${index}`} className="form-label">
                                                    Currency
                                                </label>
                                                <select
                                                    className="form-select form-control"
                                                    name={`Currency_id-${index}`}
                                                    value={row.Currency_id}
                                                    onChange={(e) => handleRowsChange(index, "Currency_id", e.target.value)}
                                                >
                                                    <option value="">Select Currency</option>
                                                    <option value={"USD"}>USD</option>
                                                    <option value={"INR"}>INR</option>
                                                    {/* {allCurrenncyD && allCurrenncyD?.map((item, i) => {
                                                        return <option key={i} value={item?._id}>{item?.name}</option>
                                                    })} */}
                                                </select>
                                                {errors.Currency_id && (
                                                    <div className="text-danger mt-1">{errors.Currency_id}</div>
                                                )}
                                            </div>

                                            <div className="col-lg-1 mt-2">
                                                {rows.length > 1 && (
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        onClick={() => handleRemoveRow(index)}
                                                    >
                                                        <MdDeleteForever />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}













                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="isActive" className="form-label">
                                            IsActive <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <select className="form-select form-control" aria-label="Default select example" name="isActive" value={formData?.isActive}
                                            onChange={handleChange}>
                                            <option selected>Select IsActive</option>
                                            <option value={"True"}>True</option>
                                            <option value={"False"}>False</option>
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

export default AddPackage