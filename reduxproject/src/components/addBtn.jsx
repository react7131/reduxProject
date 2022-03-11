import React from "react";

const AddBtn = () => {
    return (
        <div className="fixed-action-btn">
            <a className="btn-floating btn-large teal lighten-2 modal-trigger" href="#addLogModal">
                <i className="large material-icons">add</i>
            </a>
            <ul>
                <li><a className="btn-floating red modal-trigger" href="#addTechModal"><i className="material-icons">person_add</i></a></li>
                <li><a className="btn-floating blue darken-1 modal-trigger" href="#techsModal"><i className="material-icons">people</i></a></li>
            </ul>
        </div>
    )
}

export default AddBtn;