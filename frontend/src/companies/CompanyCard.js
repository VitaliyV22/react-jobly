import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

function CompanyCard({ name, description, logoUrl, handle }) {
    return (
        <Link className="CompanyCard" to={`/companies/${handle}`}>
            <div className="CompanyCard-body">
                <h5 className="CompanyCard-title">
                    {name}
                    {logoUrl && <img src={logoUrl}
                                    alt={name} />}
                </h5>
                <p><small>{description}</small></p>
            </div>
        </Link>   
    )
}

export default CompanyCard;