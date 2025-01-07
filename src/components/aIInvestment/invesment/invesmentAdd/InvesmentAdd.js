

import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';
import '../invesmentAdd/invesment.css'
const InvesmentAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Invesments",
        title_2: 'Invesments Analytics',
        path_2: ``
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">AI Investments Analytics</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card-set">
                                            <h5><span className="status-icon active">◉</span> Active Investments</h5>
                                            <p className="mb-0">Value</p>
                                            <p>This Month</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-set">
                                            <h5><span className="status-icon completed">✓</span> Completed Investments</h5>
                                            <p className="mb-0">Value</p>
                                            <p>This Month</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-set">
                                            <h5><span className="status-icon cancelled">■</span> Cancelled Investments</h5>
                                            <p className="mb-0">Value</p>
                                            <p>This Month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card-set">
                                            <h5><span className="status-icon rejected">✕</span> Rejected Investments</h5>
                                            <p className="mb-0">Value</p>
                                            <p>This Month</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-set">
                                            <h5><span className="status-icon win">✓</span> Win Investments</h5>
                                            <p className="mb-0">Value</p>
                                            <p>This Month</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-set">
                                            <h5><span className="status-icon loss">✕</span> Loss Investments</h5>
                                            <p className="mb-0">Value</p>
                                            <p>This Month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card-set">
                                            <h5><span className="status-icon draw">○</span> Draw Investments</h5>
                                            <p className="mb-0">Value</p>
                                            <p>This Month</p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default InvesmentAdd