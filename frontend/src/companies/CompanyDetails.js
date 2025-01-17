import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

import JoblyApi from "../api.js";
import JobCardList from "../jobs/JobCardList";
import LoadingSpinner from "../general/LoadingSpinner";
function CompanyDetails() {
    const { handle } = useParams();
    const [companyDetails, setCompanyDetails] = useState(null);

    
    useEffect(() => {
        async function getCompany() {
            setCompanyDetails(await JoblyApi.getCompany(handle));
        }
        getCompany();
    }, [handle]);

    if (!companyDetails) {
        return <LoadingSpinner />;
    }

    return (
        <div className="CompanyDetails">
            <h4>{companyDetails.name}</h4>
            <p>{companyDetails.description}</p>
            <JobCardList jobs={companyDetails.jobs} />
        </div>
    )
}

export default CompanyDetails;
