import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CustomInputField from '../../../../../common/CustomInputField';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import {  getTaskRelatedToById, postTaskRelatedTo, updateTaskRelatedToById } from '../../../../../api/login/Login';
import { toast , ToastContainer } from 'react-toastify';

function RelatedAdd() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Related To",
    }
    const [initialValues, setInitialValues] = useState({
        name: "",
        slug: "",
        isActive: null,
    });
    const params = useParams();
    const navigate = useNavigate()
    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Related To Name Is Required";
        }
        if (!values.isActive) {
            errors.isActive = "Related To  Is Required";
        }
        return errors;
    };
    const blankBtn = () => {
        setInitialValues({
            name: "",
            slug: "",
            isActive: null,
        });
    }
    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    const res = await postTaskRelatedTo(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage(" Related To Successfully");
                        setTimeout(() => {
                            navigate(`/related_master`)
                        }, 2000);
                    }
                    blankBtn()
                    // getFloorMasters(page)
                } catch (error) {
                    alert(error.message)
                }

            } else {
                try {
                    const res = await updateTaskRelatedToById(params.id, values);

                    if (res?.statusCode == "200") {
                        toastSuccessMessage("Related To Successfully");
                        blankBtn()
                        setTimeout(() => {
                            navigate(`/related_master`)
                        }, 2000);
                    }

                    if (res?.statusCode == "403") {
                        toastSuccessMessage("Related To Successfully");
                        blankBtn()
                    }
                    // getFloorMasters(page)

                } catch (error) {
                    alert(`Error`, error)
                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };
    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };


    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getTaskRelatedToById(params.id);
                    const currencyData = response;
                    setInitialValues(currencyData?.data);

                } else {
                    setInitialValues({
                        name: "",
                        slug: "",
                        isActive: null,
                    });
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);
    return (
        <>
        <ToastContainer/>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"}
                                    &nbsp;
                                    Related To
                                </h4>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validate={validate}
                                onSubmit={submitForm}
                                enableReinitialize
                            >
                                {(formik) => {
                                    const {
                                        values,
                                        handleChange,
                                        handleSubmit,
                                        errors,
                                        touched,
                                        handleBlur,
                                        isValid,
                                        dirty,
                                    } = formik;
                                    return (
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.name}
                                                        hasError={errors.name && touched.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Related To"
                                                    />
                                                </div>
                                                {/* <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.slug}
                                                        hasError={errors.slug && touched.slug}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.slug}
                                                        autoFocus={true}
                                                        id="slug"
                                                        name="slug"
                                                        placeholder="Lead Sub Status Slug"
                                                    />
                                                </div> */}
                                                <div className="col-xl-4 mb-3">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={handleChange}
                                                        value={values?.isActive}
                                                        name="isActive"
                                                    >
                                                        <option value="" disabled>
                                                            Select  Status
                                                        </option>
                                                        <option value={true}>Active</option>
                                                        <option value={false}>Inactive</option>
                                                    </select>
                                                    {errors.isActive && touched.isActive && (
                                                        <div className="error">{errors.isActive}</div>
                                                    )}
                                                </div>

                                                <div className="col-xl-2 mb-3">
                                                    {/* <Link to='/floor-master' type='submit' className="btn btn-danger light ms-1">Cancel</Link> */}
                                                    {/* <Button className="btn btn-danger light ms-1" onClick={() => cancelBtn()}>Cancel</Button> */}
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        // disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    );
                                }}
                            </Formik>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RelatedAdd
