import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import ProposalRow from "../ProposalRow";
import { getTalks } from "../../api/httpApi";

import "./ProposalList.css";

const ProposalList = () => {
    useEffect(() => {
const data = 
    }, [])
   
    return (
        <ul data-testid="proposal-list" className="ProposalList">
            {[].map((proposal) => (
                <li
                    key={proposal.id}
                    className="ProposalList__item"
                >
                    <Link
                        key={proposal.id}
                        className="ProposalList__item__link"
                        to={`/proposals`}
                    >
                        <ProposalRow
                            proposal={proposal}
                            onStatusUpdate={() => { }}
                        />
                    </Link>
                </li>
            ))}
        </ul>
    )
};

export default ProposalList;
