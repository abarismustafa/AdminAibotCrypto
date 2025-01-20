import { Pagination, Popconfirm } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function MasterList({ data, totalCount, page, count, onChangeVal, confirm, cancel }) {
    return (
        <>
            <div>

                <div className="row m-2">
                    <div className="col-xl-12">

                        <div className="card">
                            <form className='row m-2'>
                                <div className="col-3">
                                    <label className="col-sm-2 col-form-label">From</label>
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="col-3">
                                    <label className="col-sm-2 col-form-label">To</label>
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="col-3" style={{display: "flex", alignItems: "end"}}>
                                    <button type="button" className="btn btn-primary btn-sm">Search</button>
                                </div>
                            </form>
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Requested Epin List</h4>
                                        <div>
                                            {/* <Link className="btn btn-primary btn-sm" to="/add-ext/forex/plan" role="button" aria-controls="offcanvasExample">+ Add New</Link> */}
                                            {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role="row">

                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    S.No
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Dist ID
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    User Name
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Name
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    City
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Request Code
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Price
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    JO Code
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    No of E Pin
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Request Date
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Pay Mode
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Ref No
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Bank  Name
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data?.map((item, i) => {
                                                return <tr role="row" className="odd">
                                                    <td style={{ display: 'flex', justifyContent: 'center' }}>
                                                        {(i + 1) + (page * count)}
                                                    </td>

                                                    <td style={{ textAlign: "center" }}>
                                                        {item?.level}
                                                    </td>
                                                    <td style={{ textAlign: "center" }}>
                                                        {item?.commition}
                                                    </td>
                                                    <td style={{ textAlign: "center" }}>
                                                        {item?.totalteam}
                                                    </td>
                                                    <td style={{ textAlign: "center" }}>
                                                        {item?.totalincome}
                                                    </td>

                                                </tr>
                                            })}

                                        </tbody>
                                    </table>
                                        < div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Total {totalCount} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                            <Pagination
                                                // showSizeChanger
                                                // onShowSizeChange={''}

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
                </div >
            </div>
            <ToastContainer className="text-center" />
        </>
    )
}

export default MasterList
