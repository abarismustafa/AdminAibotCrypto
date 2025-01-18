import { message, Pagination, Popconfirm } from "antd"
import { Link } from "react-router-dom"
import { GoPlus } from "react-icons/go";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import LevelFilter from "./LevelFilter";
import Loadar from "../../../common/loader/Loader";
import { deleteLevel, getLevelData } from "../../../api/login/Login";
import { useEffect, useState } from "react";

function ListLevel() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "All Levels",
        title_2: 'List All Levels',
        path_2: ``
    };

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState()

    const getListData = async (page) => {
        setLoading(true)
        try {
            const res = await getLevelData(page, count)
            setTotalCount(res?.totalCount);
            console.log("ListDataLR----", res?.data)
            setData(res?.data)
            setPage(page)
        } catch (error) {

        }
        setLoading(false)
    }
    const onChangeVal = (e) => {
        getListData(e - 1)

    };
    const deleteBlockAdd = async (id) => {
        setLoading(true)
        try {
            await deleteLevel(id)
            let backList = totalCount % 11 === 0 ? page - 1 : page
            getListData(backList)
        } catch (error) {
        }
        setLoading(false)
    }
    const confirm = (id) => {
        console.log(id);
        deleteBlockAdd(id)
        message.success('Delete Successfully!');

    };
    const cancel = (e) => {
        message.error('Cancelled Successfully!');
    };
    useEffect(() => {
        getListData(page)
    }, []);

    return (
        <>
            {loading && <Loadar />}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <LevelFilter />
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">All Levels List</h4>
                                        <Link
                                            to={"/level/create"}
                                            style={{ textTransform: 'uppercase' }}
                                            className="btn btn-primary btn-sm bg-primary"
                                            role="button"
                                        >
                                            <GoPlus className="me-1" style={{ marginBottom: '2px' }} />
                                            create New Level
                                        </Link>
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
                                                    <th style={{ width: '150px', textAlign: 'center' }}>Level</th>
                                                    <th style={{ width: '150px', textAlign: 'center' }}>Reward</th>
                                                    <th style={{ width: '150px', textAlign: 'center' }}>Package</th>
                                                    <th style={{ width: '150px', textAlign: 'center' }}>No Of Match</th>
                                                    <th style={{ width: '150px', textAlign: 'center' }}>Income Type</th>
                                                    <th style={{ width: '150px' }}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data && data?.map((item, i) => {
                                                    return <tr role="row" key={item?._id}>
                                                        <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.Level}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.Reward}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.plan_id}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.No_of_match}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.isActive == true ? 'Active' : 'InActive'}</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <Link to={`/level/edit/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                    <i className="fa fa-pencil" />
                                                                </Link>
                                                                <Popconfirm
                                                                    title="Delete Amendments Type!"
                                                                    description="Are you sure to delete?"
                                                                    onConfirm={() => confirm(item?._id)}
                                                                    onCancel={cancel}
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
                                                })}
                                            </tbody>
                                        </table>
                                        <div className="dataTables_info" role="status" aria-live="polite">
                                            Total 0 entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers">
                                            <Pagination
                                                defaultCurrent={1}
                                                onChange={onChangeVal}
                                                total={totalCount}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ListLevel