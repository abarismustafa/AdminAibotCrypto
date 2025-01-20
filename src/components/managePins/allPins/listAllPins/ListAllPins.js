import { Pagination, Popconfirm } from "antd"
import { Link } from "react-router-dom"
import { GoPlus } from "react-icons/go";
import AllPinsFilter from "./AllPinsFilter";
import { TbTransfer } from "react-icons/tb";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import './ListPin.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ListAllPinsComp() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "All Pins",
        title_2: 'List All Pins',
        path_2: ``
    };
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [formData, setFormData] = useState({
        pin: "",
        package_name: "",
        amount: "",
        status: "",
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
        if (!formData.pin) {
            errors.pin = "Pin is required.";
        }
        if (!formData.package_name) {
            errors.package_name = "Package Name is required.";
        }
        if (!formData.amount) {
            errors.amount = "Commission Amt is required.";
        } else if (formData.amount <= 0) {
            errors.amount = "Amount must be greater than zero.";
        }
        if (!formData.status) {
            errors.status = "Status is required.";
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Form Submitted Successfully:", formData);
            // Add your submission logic here
        }
    };

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AllPinsFilter />
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">All Pins List</h4>
                                        <div>
                                            <button
                                                onClick={handleShow}
                                                style={{ textTransform: 'uppercase' }}
                                                className="btn btn-primary btn-sm bg-primary"
                                                role="button"
                                                type="button"
                                            >
                                                <TbTransfer className="me-1" style={{ marginBottom: '2px' }} />
                                                Transfer Pin
                                            </button>
                                            <Link
                                                to={"/all-pins/create"}
                                                style={{ textTransform: 'uppercase' }}
                                                className="btn btn-primary btn-sm bg-primary me-0"
                                                role="button"
                                            >
                                                <GoPlus className="me-1" style={{ marginBottom: '2px' }} />
                                                create New Pin
                                            </Link>
                                        </div>
                                    </div>
                                    <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <div className="dt-buttons">
                                            <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="banner-tblwrapper" type="button">
                                                <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                            </button>
                                        </div>
                                        <table id="banner-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="banner-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '50px', textAlign: 'center' }}>#</th>
                                                    <th style={{ width: '150px', textAlign: 'center' }}>User/Admin</th>
                                                    <th style={{ width: '150px', textAlign: 'center' }}>Amount</th>
                                                    <th style={{ width: '150px', textAlign: 'center' }}>Package</th>
                                                    <th style={{ width: '150px', textAlign: 'center' }}>Pin</th>
                                                    <th style={{ width: '150px', textAlign: 'center' }}>Status</th>
                                                    <th style={{ width: '150px', textAlign: 'center' }}>Creations Date</th>
                                                    <th style={{ width: '150px' }}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr role="row">
                                                    <td valign="top" className="dataTables_empty">1</td>
                                                    <td valign="top" className="dataTables_empty" >
                                                        Created via joeudoh
                                                        <div>
                                                            <Link style={{ display: 'block', fontSize: '12px', fontWeight: '800' }} to={"#"}>@joeudoh</Link>
                                                        </div>
                                                    </td>
                                                    <td valign="top" className="dataTables_empty" >100</td>
                                                    <td valign="top" className="dataTables_empty" >Abc</td>
                                                    <td valign="top" className="dataTables_empty" >
                                                        <span class="pin">95810271-21727466-38618206-23270574</span>
                                                    </td>
                                                    <td valign="top" className="dataTables_empty" >
                                                        <span style={{ padding: '3px 12px', border: '1px solid red', color: 'red', borderRadius: '15px' }}>Unused</span>
                                                    </td>
                                                    <td valign="top" className="dataTables_empty" >
                                                        2025-01-15 04:06 PM<br />
                                                        13 hours ago
                                                    </td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                <i className="fa fa-pencil" />
                                                            </Link>
                                                            <Popconfirm
                                                                title="Delete Amendments Type!"
                                                                description="Are you sure to delete?"
                                                                // onConfirm={() => confirm(item?._id)}
                                                                // onCancel={cancel}
                                                                okText="Yes"
                                                                cancelText="No"
                                                            >
                                                                <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                                    <i className="fa fa-trash" />
                                                                </Link>
                                                            </Popconfirm>
                                                        </div>
                                                    </td>
                                                </tr>


                                            </tbody>
                                        </table>
                                        <div className="dataTables_info" role="status" aria-live="polite">
                                            Total 0 entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers">
                                            <Pagination
                                            // defaultCurrent={1}
                                            // onChange={onChangeVal}
                                            // total={totalCount}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Transfer Pin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="tbl-captionn" onSubmit={handleSubmit}>
                        <div className="row mt-2">
                            <div className="col-lg-12 mb-4">
                                <label htmlFor="pin" className="form-label">
                                    Pin <span style={{ color: 'red' }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="pin"
                                    className="form-control"
                                    placeholder="Enter Pin"
                                    value={formData?.pin}
                                    onChange={handleChange}
                                />
                                {errors.pin && (
                                    <div className="text-danger mt-1">{errors.pin}</div>
                                )}
                            </div>
                            <div className="col-lg-12 mb-4">
                                <label htmlFor="package_name" className="form-label">
                                    Package Name <span style={{ color: 'red' }}>*</span>
                                </label>
                                <select className="form-select form-control" aria-label="Default select example" name="package_name" value={formData?.package_name}
                                    onChange={handleChange}>
                                    <option selected>Select Package Name</option>
                                    <option value={"Percent"}>Abc</option>
                                    <option value={"Flat"}>Def</option>
                                </select>
                                {errors.package_name && (
                                    <div className="text-danger mt-1">{errors.package_name}</div>
                                )}
                            </div>
                            <div className="col-lg-12 mb-4">
                                <label htmlFor="amount" className="form-label">
                                    Amount <span style={{ color: 'red' }}>*</span>
                                </label>
                                <input
                                    type="number"
                                    name="amount"
                                    className="form-control"
                                    placeholder="Enter amount"
                                    value={formData?.amount}
                                    onChange={handleChange}
                                />
                                {errors.amount && (
                                    <div className="text-danger mt-1">{errors.amount}</div>
                                )}
                            </div>

                            <div className="col-lg-12 mb-4">
                                <label htmlFor="status" className="form-label">
                                    Status <span style={{ color: 'red' }}>*</span>
                                </label>
                                <select className="form-select form-control" aria-label="Default select example" name="status" value={formData?.status}
                                    onChange={handleChange}>
                                    <option selected>Select Status</option>
                                    <option value={"Percent"}>Used</option>
                                    <option value={"Flat"}>Unused</option>
                                </select>
                                {errors.status && (
                                    <div className="text-danger mt-1">{errors.status}</div>
                                )}
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Transfer
                    </Button>
                    {/* <Button variant="primary" type="submit">
                        Transfer
                    </Button> */}
                </Modal.Footer>
            </Modal>

        </>

    )
}

export default ListAllPinsComp