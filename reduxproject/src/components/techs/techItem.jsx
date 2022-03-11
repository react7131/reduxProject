import React from "react";
import { connect } from "react-redux";
import { techDelete } from "../../actions/techAction";

const TechItem = ( {tech, techDelete} ) => {

    const onDelete = (id) => {
        techDelete(id)
    }
    return (
        <li className="collection-item">
           {tech.firstname} {tech.lastname}
           <a href="#!" className="secondary-content" onClick={() => onDelete(tech.id)}>
                <i className="material-icons grey-text">delete</i>
            </a>
        </li>
    )
}

export default connect(null, {techDelete}) (TechItem);