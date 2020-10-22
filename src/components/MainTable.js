import React from 'react'
import { AllTable } from './Table/AllTable'
import { CompletedTable } from './Table/CompletedTable'
import { PendingTable } from './Table/PendingTable'

export const MainTable = () => {
    return (
        <div>
            <nav>
                <div className="nav nav-tabs mt-4" id="nav-tab" role="tablist">
                    <a
                        className="nav-link active"
                        id="nav-all-tab"
                        data-toggle="tab"
                        href="#nav-all"
                        role="tab"
                        aria-controls="nav-all"
                        aria-selected="true"
                    >
                        All
                     </a>
                    <a
                        className="nav-link"
                        id="nav-pending-tab"
                        data-toggle="tab"
                        href="#nav-pending"
                        role="tab"
                        aria-controls="nav-pending"
                        aria-selected="false"
                    >
                        Pending
                     </a>
                    <a
                        className="nav-link"
                        id="nav-completed-tab"
                        data-toggle="tab"
                        href="#nav-completed"
                        role="tab"
                        aria-controls="nav-completed"
                        aria-selected="false"
                    >
                        Completed
                    </a>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="nav-all"
                    role="tabpanel"
                    aria-labelledby="nav-all-tab"
                >
                    <AllTable />
                 </div>
                <div
                    className="tab-pane fade"
                    id="nav-pending"
                    role="tabpanel"
                    aria-labelledby="nav-pending-tab"
                >
                    <PendingTable />
                 </div>
                <div
                    className="tab-pane fade"
                    id="nav-completed"
                    role="tabpanel"
                    aria-labelledby="nav-completed-tab"
                >
                    <CompletedTable />
              </div>
            </div>
        </div>

    )
}
