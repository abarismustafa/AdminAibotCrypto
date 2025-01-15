import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import Membertab from '../Membertab';
import WebsiteTab from '../WebsiteTab';
import AccountTab from '../AccountTab';
import StoreTab from '../StoreTab';
import ExtensionTab from '../ExtensionTab';

function GeneralSettingComp() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "General Settings",
        title_2: 'General Settings',
        path_2: ``
    };

    return (

        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />

            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">

                            <div className="row mt-2 d-flex align-items-start p-2">

                                <div className='col-lg-4 pt-0 p-2'>

                                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{ boxShadow: '0 0 2px gray', padding: '15px 30px', borderRadius: '5px' }}>

                                        <button style={{ textAlign: 'left', fontSize: '16px' }} className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Members</button>

                                        <button style={{ textAlign: 'left', fontSize: '16px' }} className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Website</button>


                                        <button style={{ textAlign: 'left', fontSize: '16px' }} className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Account</button>

                                        <button style={{ textAlign: 'left', fontSize: '16px' }} className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Store</button>

                                        <button style={{ textAlign: 'left', fontSize: '16px' }} className="nav-link" id="v-pills-extension-tab" data-bs-toggle="pill" data-bs-target="#v-pills-extension" type="button" role="tab" aria-controls="v-pills-extension" aria-selected="false">Extension</button>
                                    </div>

                                    <div className='me-3 mt-4' style={{ boxShadow: '0 0 2px gray', padding: '15px 30px', borderRadius: '5px' }}>
                                        <h5 className='mb-5'>AiBot</h5>

                                        <div>
                                            <img style={{ width: '290px', height: '100px' }} src='https://backoffice.adamclick.com/api/cloudinary/image-1736408377534.png' />
                                        </div>
                                    </div>


                                </div>

                                <div className='col-lg-8'>
                                    <div className="tab-content" id="v-pills-tabContent">
                                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex={0}>
                                            <Membertab />
                                        </div>

                                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex={0}>
                                            <WebsiteTab />
                                        </div>

                                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex={0}>
                                            <AccountTab />
                                        </div>

                                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex={0}>
                                            <StoreTab />
                                        </div>


                                        <div className="tab-pane fade" id="v-pills-extension" role="tabpanel" aria-labelledby="v-pills-extension-tab" tabIndex={0}>
                                            <ExtensionTab />
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

export default GeneralSettingComp