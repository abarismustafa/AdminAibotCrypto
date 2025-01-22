import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import { clodinaryImage, getAllPackageList, getLifeRewardById, postLifeReward, updateLifeReward } from '../../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import Loadar from '../../../common/loader/Loader';
import { useParams } from 'react-router-dom';
import { Alert, Spinner } from "antd";

function AddLifeReward() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Life Reward",
        title_2: 'Add Life Reward',
        path_2: ``
    };

    // const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || null);
    const [profileImgDim, setProfileImgDim] = useState(false);
    const [fileError, setFileError] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        reward: "",
        no_of_match: "",
        giftName: "",
        imgs: [],
        plan_id: "",
        thmb_img: "",
        isActive: "",
    });
    const [load, setLoad] = useState(false);
    const [allPackageD, setAllPackageD] = useState();
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
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const fileData = files.map((file) => {
            return URL.createObjectURL(file);
        });

        setFormData({
            ...formData,
            imgs: fileData,
        });
        setErrors({
            ...errors,
        });
    };


    const handleSingleImageUpload = async (e) => {
        const file = e.target.files[0];
        const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/bmp", "image/svg+xml", "image/x-icon"];

        if (file && allowedTypes.includes(file.type)) {
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = async () => {
                try {
                    const formDataimg = new FormData();
                    formDataimg.append("image", file);
                    const res = await clodinaryImage(formDataimg);
                    if (res?.data?.statusCode === "200") {
                        const imageUrl = res.data.data.url;
                        setFormData({ ...formData, thmb_img: imageUrl })
                        // setProfileImage(imageUrl);
                        // localStorage.setItem("profileImage", imageUrl);
                        // setProfileImgDim(false);
                        toast.success("Image updated successfully.", { position: "top-center" });
                    } else {
                        // setProfileImgDim(true);
                        toast.error("Failed to update image.", { position: "top-center" });
                    }
                } catch (error) {
                    console.error("Failed to upload image", error);
                    toast.error(`Failed to upload image: ${error.message}`, { position: "top-center" });
                }
            };
        } else {
            setFileError("Invalid file type. Allowed file types are: jpg, jpeg, bmp, gif, png, svg, and ico");
            // setProfileImage(null);
        }
    };
    const handleMultipleImageUpload = async (e) => {
        const files = Array.from(e.target.files); // Convert FileList to an array
        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/gif",
            "image/bmp",
            "image/svg+xml",
            "image/x-icon"
        ];
        const urls = [];
        const errors = [];

        if (files.length === 0) {
            setFileError("Please select at least one file.");
            return;
        }

        // Validate all files
        for (const file of files) {
            if (!allowedTypes.includes(file.type)) {
                errors.push(`${file.name} is an invalid file type.`);
            }
        }

        if (errors.length > 0) {
            setFileError(errors.join(" "));
            return;
        }

        try {
            // Upload files one by one
            for (const file of files) {
                const formData = new FormData();
                formData.append("image", file);

                const res = await clodinaryImage(formData); // API call to upload
                if (res?.data?.data?.url) {
                    urls.push(res?.data?.data?.url); // Collect the uploaded file URL
                    setFormData({ ...formData, imgs: urls })
                } else {
                    errors.push(`${file.name} failed to upload.`);
                }
            }

            // Handle any upload errors
            if (errors.length > 0) {
                toast.error(errors.join(" "), { position: "top-center" });
            }

            // If there are successful uploads, send the URLs to your API

        } catch (error) {
            console.error("Error during file upload", error);
            toast.error(`Error: ${error.message}`, { position: "top-center" });
        }
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
        if (!formData.giftName) {
            errors.giftName = "Gift Name is required.";
        }
        if (!formData.plan_id) {
            errors.plan_id = "Package Id is required.";
        }
        if (!formData.isActive) {
            errors.isActive = "IsActive is required.";
        }

        return errors;
    };
    const params = useParams();
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
            const res = await getLifeRewardById(id);
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
        // const payload = { ...formData, thmb_img: profileImage };
        const payload = { ...formData };
        console.log("Payload----", formData)
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setLoad(true)
            if (params?.id) {
                const updatePayload = { id: params?.id, data: payload }
                try {
                    const res = await updateLifeReward(updatePayload);
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
                    const res = await postLifeReward(payload);
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
                                <h4 className="heading mb-0 p-2">{params?.id ? "Update" : "Add"} Life Reward</h4>
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
                                        <label htmlFor="giftName" className="form-label">
                                            Gift Name <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="giftName"
                                            className="form-control"
                                            placeholder="Enter Gift Name"
                                            value={formData?.giftName}
                                            onChange={handleChange}
                                        />
                                        {errors.giftName && (
                                            <div className="text-danger mt-1">{errors.giftName}</div>
                                        )}
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="giftName" className="form-label">
                                            Images
                                        </label>
                                        <input
                                            type="file"
                                            name="imgs"
                                            className="form-control"
                                            multiple // Allows multiple file selection
                                            onChange={handleMultipleImageUpload}
                                        />
                                    </div>
                                    {/* <div className='col-lg-6 mb-4'>
                                        <div className="image-preview">
                                            {formData.imgs.map((img, index) => (
                                                <img key={index} src={img} alt={`Preview ${index}`} style={{ width: '100px', height: '100px', margin: '0 10px' }} />
                                            ))}
                                        </div>
                                    </div> */}
                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="giftName" className="form-label">
                                            Thumbnail Image
                                        </label>
                                        <input
                                            type="file"
                                            name="thmb_img"
                                            className="form-control"
                                            // value={formData?.thmb_img}
                                            onChange={handleSingleImageUpload}
                                        />
                                    </div>
                                    {/* {profileImgDim && (
                                        <Alert
                                            message="Image resolution is too high (400x400px max)."
                                            type="warning"
                                            showIcon
                                            closable
                                        />
                                    )} */}

                                    <div className="col-lg-6 mb-4">
                                        <label htmlFor="plan_id" className="form-label">
                                            Package <span style={{ color: 'red' }}>*</span>
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

export default AddLifeReward