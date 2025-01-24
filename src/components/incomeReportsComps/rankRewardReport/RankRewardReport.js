import { message, Pagination, Popconfirm } from "antd"
import { Link } from "react-router-dom"
import { GoPlus } from "react-icons/go";
import { useEffect, useState } from "react";
import Loadar from "../../../common/loader/Loader";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import FilterrankRewardReport from "./FilterrankRewardReport";

function RankRewardReport() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Rank & Reward Income Report",
        title_2: 'Rank & Reward Income Report',
        path_2: ``
    };

    const [loading, setLoading] = useState(false);
    // const [data, setData] = useState()
    // const [count, setCount] = useState(10)
    // const [page, setPage] = useState(0)
    // const [totalCount, setTotalCount] = useState()

    // const getListData = async (page) => {
    //     setLoading(true)
    //     try {
    //         const res = await getFundTransferReportData(page, count)
    //         setTotalCount(res?.totalCount);
    //         console.log("FundTransferReportD----", res?.data)
    //         setData(res?.data)
    //         setPage(page)
    //     } catch (error) {

    //     }
    //     setLoading(false)
    // }
    // const onChangeVal = (e) => {
    //     getListData(e - 1)

    // };
    // useEffect(() => {
    //     getListData(page)
    // }, []);

    // const getFIlteredData = async (data) => {
    //     setLoading(true);
    //     const filterPayloadD = { data, page, count }
    //     try {
    //         const res = await getFilteredFundTransferReportData(filterPayloadD)
    //         setTotalCount(res?.totalCount);
    //         setData(res?.data)
    //         setPage(page)
    //     } catch (error) {

    //     }
    //     setLoading(false)
    // }



    return (
        <>
            {loading && <Loadar />}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            {/* <FilterFundTransferReport getFIlteredData={getFIlteredData} /> */}
            <FilterrankRewardReport />
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Rank & Reward Income Report List</h4>
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
                                                    <th style={{ width: '50px', textAlign: 'center' }}>S.No.</th>
                                                    <th style={{ width: '150px', textAlign: 'center' }}>Reward Level</th>
                                                    <th style={{ width: '150px', textAlign: 'center' }}>Amount</th>
                                                    <th style={{ width: '150px', textAlign: 'center' }}>Gift</th>
                                                    <th style={{ width: '150px', textAlign: 'center' }}>Left PV</th>
                                                    <th style={{ width: '150px', textAlign: 'center' }}>Right PV</th>
                                                    <th style={{ width: '150px', textAlign: 'center' }}>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* {data && data?.map((item, i) => {
                                                    return <tr role="row" key={item?._id}>
                                                        <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.amount}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.createdAt}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.trans_type}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.from?.refer_id}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.from?.name}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.to?.refer_id}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.to?.name}</td>
                                                    </tr>
                                                })} */}
                                            </tbody>
                                        </table>
                                        <div className="dataTables_info" role="status" aria-live="polite">
                                            {/* Total {totalCount} entries */}
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
        </>

    )
}

export default RankRewardReport