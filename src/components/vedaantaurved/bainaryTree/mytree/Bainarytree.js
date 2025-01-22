import React from "react";
import Tree from "./Tree";
import "./Tree.css"
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";

export default function AiTree() {
    const breadCrumbsTitle = {
        id: "2323",
        title_1: "Geneology View"
    }
    return (
        <div className="m-4">
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header">
                        <input className="form-control" type="search" placeholder="Search Here" /></div>
                    <div className="card-body p-1">
                        <Tree />
                    </div>
                </div>
            </div>
        </div>
    )
}